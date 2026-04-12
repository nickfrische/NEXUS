// src/tokenManager.ts

import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import type { WorkOSTokens, SupabaseCredentials, TokenConfig } from './types.js';

/**
 * Manages OAuth tokens with refresh token rotation for Granola API
 */
export class TokenManager {
  // The correct auth endpoint for Granola's WorkOS integration
  private static readonly WORKOS_AUTH_URL = 'https://auth.granola.ai/user_management/authenticate';
  
  private configPath: string;
  private credentialsPath: string;
  private accessToken?: string;
  private refreshToken?: string;
  private expiresAt?: Date;

  constructor(
    configPath?: string,
    credentialsPath?: string
  ) {
    this.configPath = configPath || path.join(os.homedir(), '.granola-mcp', 'tokens.json');
    this.credentialsPath = credentialsPath || path.join(
      os.homedir(),
      'Library/Application Support/Granola/supabase.json'
    );
  }

  /**
   * Load refresh token from Granola's supabase.json file
   */
  async loadFromGranola(): Promise<boolean> {
    try {
      const credentialsExist = await fs.access(this.credentialsPath)
        .then(() => true)
        .catch(() => false);

      if (!credentialsExist) {
        console.error(`Granola credentials not found at: ${this.credentialsPath}`);
        return false;
      }

      const data = await fs.readFile(this.credentialsPath, 'utf-8');
      const credentials: SupabaseCredentials = JSON.parse(data);

      if (!credentials.workos_tokens) {
        console.error('No workos_tokens found in credentials file');
        return false;
      }

      const workosTokens: WorkOSTokens = JSON.parse(credentials.workos_tokens);
      this.refreshToken = workosTokens.refresh_token;
      this.accessToken = workosTokens.access_token;

      if (!this.refreshToken) {
        console.error('No refresh token found in credentials file');
        return false;
      }

      // Check if the access token is still valid by decoding the JWT
      if (this.accessToken) {
        try {
          const parts = this.accessToken.split('.');
          if (parts.length === 3) {
            const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString());
            if (payload.exp) {
              this.expiresAt = new Date(payload.exp * 1000);
              console.error(`Access token expires at: ${this.expiresAt.toISOString()}`);
            }
          }
        } catch (e) {
          console.error('Could not decode JWT expiry, assuming 1 hour');
          this.expiresAt = new Date(Date.now() + 3600 * 1000);
        }
      }

      console.error('Successfully loaded tokens from Granola');
      return true;
    } catch (error) {
      console.error(`Error loading tokens from Granola: ${error}`);
      return false;
    }
  }

  /**
   * Load token config from saved file
   */
  async loadConfig(): Promise<boolean> {
    try {
      const configExists = await fs.access(this.configPath)
        .then(() => true)
        .catch(() => false);

      if (!configExists) {
        return false;
      }

      const data = await fs.readFile(this.configPath, 'utf-8');
      const config: TokenConfig = JSON.parse(data);

      this.refreshToken = config.refresh_token;
      this.accessToken = config.access_token;

      if (config.expires_at) {
        this.expiresAt = new Date(config.expires_at);
      }

      return !!this.refreshToken;
    } catch (error) {
      console.error(`Error loading token config: ${error}`);
      return false;
    }
  }

  /**
   * Save token config to file
   */
  private async saveConfig(): Promise<void> {
    try {
      // Ensure directory exists
      const configDir = path.dirname(this.configPath);
      await fs.mkdir(configDir, { recursive: true });

      const config: TokenConfig = {
        refresh_token: this.refreshToken!,
        access_token: this.accessToken,
        expires_at: this.expiresAt?.toISOString()
      };

      await fs.writeFile(this.configPath, JSON.stringify(config, null, 2));
    } catch (error) {
      console.error(`Error saving token config: ${error}`);
    }
  }

  /**
   * Check if the access token is expired or will expire soon
   */
  private isTokenExpired(): boolean {
    if (!this.expiresAt) {
      return true;
    }

    // Add 5 minute buffer to refresh before actual expiry
    const bufferMs = 5 * 60 * 1000;
    return Date.now() >= (this.expiresAt.getTime() - bufferMs);
  }

  /**
   * Get a valid access token
   * 
   * This method will:
   * 1. Try to load from our saved config
   * 2. If not found, load fresh from Granola's credentials
   * 3. Return the access token if still valid
   * 
   * Note: We don't implement token refresh because Granola's tokens
   * are refreshed by the Granola app itself. If expired, we reload
   * from the Granola credentials file which should have fresh tokens.
   */
  async getAccessToken(): Promise<string | null> {
    // Try to load from Granola's file (always get fresh tokens)
    const fromGranola = await this.loadFromGranola();
    if (!fromGranola) {
      console.error('Failed to load tokens from Granola');
      return null;
    }

    // Check if token is expired
    if (this.isTokenExpired()) {
      console.error('Access token is expired. Please ensure Granola app is running and logged in.');
      // Try reloading from Granola in case the app has refreshed the token
      const reloaded = await this.loadFromGranola();
      if (!reloaded || this.isTokenExpired()) {
        console.error('Token still expired after reload. Granola app may need to refresh.');
        return null;
      }
    }

    return this.accessToken || null;
  }

  /**
   * Manually set the refresh token
   */
  async setRefreshToken(refreshToken: string): Promise<void> {
    this.refreshToken = refreshToken;
    await this.saveConfig();
    console.error('Refresh token saved');
  }
}

