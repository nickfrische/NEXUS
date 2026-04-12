// src/apiClient.ts

import type { 
  Workspace, 
  DocumentList, 
  GranolaDocument, 
  GetDocumentsResponse,
  GetDocumentsBatchResponse,
  FolderInfo
} from './types.js';
import { TokenManager } from './tokenManager.js';

/**
 * Client for interacting with Granola API
 */
export class GranolaAPIClient {
  private static readonly BASE_URL = 'https://api.granola.ai';
  private static readonly USER_AGENT = 'Granola/5.354.0';
  private static readonly CLIENT_VERSION = '5.354.0';

  constructor(private tokenManager: TokenManager) {}

  /**
   * Get standard headers for API requests
   */
  private getHeaders(accessToken: string): HeadersInit {
    return {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'User-Agent': GranolaAPIClient.USER_AGENT,
      'X-Client-Version': GranolaAPIClient.CLIENT_VERSION
    };
  }

  /**
   * Fetch documents from Granola API
   */
  async getDocuments(
    limit: number = 100, 
    offset: number = 0,
    includeLastViewedPanel: boolean = true
  ): Promise<GetDocumentsResponse | null> {
    const accessToken = await this.tokenManager.getAccessToken();
    if (!accessToken) {
      console.error('Failed to get access token');
      return null;
    }

    try {
      // Try v2 endpoint first
      let url = `${GranolaAPIClient.BASE_URL}/v2/get-documents`;
      let response = await fetch(url, {
        method: 'POST',
        headers: this.getHeaders(accessToken),
        body: JSON.stringify({
          limit,
          offset,
          include_last_viewed_panel: includeLastViewedPanel
        })
      });

      if (response.status === 404) {
        // Try v1 endpoint as fallback
        url = `${GranolaAPIClient.BASE_URL}/v1/get-documents`;
        response = await fetch(url, {
          method: 'POST',
          headers: this.getHeaders(accessToken),
          body: JSON.stringify({
            limit,
            offset,
            include_last_viewed_panel: includeLastViewedPanel
          })
        });
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Error fetching documents: ${error}`);
      return null;
    }
  }

  /**
   * Fetch all workspaces (organizations)
   * API returns: { workspaces: [{ workspace: { workspace_id, display_name, ... }, role, plan_type }] }
   */
  async getWorkspaces(): Promise<Workspace[]> {
    const accessToken = await this.tokenManager.getAccessToken();
    if (!accessToken) {
      console.error('Failed to get access token');
      return [];
    }

    try {
      const url = `${GranolaAPIClient.BASE_URL}/v1/get-workspaces`;
      const response = await fetch(url, {
        method: 'POST',
        headers: this.getHeaders(accessToken),
        body: JSON.stringify({})
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Handle the nested workspace structure
      // API returns: { workspaces: [{ workspace: {...}, role, plan_type }] }
      const rawWorkspaces = data.workspaces || data.data || data || [];
      
      if (!Array.isArray(rawWorkspaces)) {
        console.error('Unexpected workspace response format');
        return [];
      }
      
      return rawWorkspaces.map((item: any) => {
        // Handle nested { workspace: {...} } structure
        const ws = item.workspace || item;
        return {
          id: ws.workspace_id || ws.id || '',
          name: ws.display_name || ws.name || ws.slug || 'Unknown',
          created_at: ws.created_at || '',
          owner_id: ws.owner_id
        };
      });
    } catch (error) {
      console.error(`Error fetching workspaces: ${error}`);
      return [];
    }
  }

  /**
   * Fetch all document lists (folders)
   */
  async getDocumentLists(): Promise<DocumentList[]> {
    const accessToken = await this.tokenManager.getAccessToken();
    if (!accessToken) {
      console.error('Failed to get access token');
      return [];
    }

    try {
      // Try v2 endpoint first (preferred)
      let url = `${GranolaAPIClient.BASE_URL}/v2/get-document-lists`;
      let response = await fetch(url, {
        method: 'POST',
        headers: this.getHeaders(accessToken),
        body: JSON.stringify({})
      });

      if (response.status === 404) {
        // Try v1 endpoint as fallback
        url = `${GranolaAPIClient.BASE_URL}/v1/get-document-lists`;
        response = await fetch(url, {
          method: 'POST',
          headers: this.getHeaders(accessToken),
          body: JSON.stringify({})
        });
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Handle various response formats
      let rawLists = data;
      if (data.document_lists) rawLists = data.document_lists;
      else if (data.documentLists) rawLists = data.documentLists;
      else if (data.lists) rawLists = data.lists;
      else if (data.data) rawLists = data.data;
      
      if (!Array.isArray(rawLists)) {
        return [];
      }
      
      return rawLists;
    } catch (error) {
      console.error(`Error fetching document lists: ${error}`);
      return [];
    }
  }

  /**
   * Fetch multiple documents by their IDs
   */
  async getDocumentsBatch(
    documentIds: string[],
    includeLastViewedPanel: boolean = true
  ): Promise<GetDocumentsBatchResponse | null> {
    const accessToken = await this.tokenManager.getAccessToken();
    if (!accessToken) {
      console.error('Failed to get access token');
      return null;
    }

    try {
      const url = `${GranolaAPIClient.BASE_URL}/v1/get-documents-batch`;
      const response = await fetch(url, {
        method: 'POST',
        headers: this.getHeaders(accessToken),
        body: JSON.stringify({
          document_ids: documentIds,
          include_last_viewed_panel: includeLastViewedPanel
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Error fetching documents batch: ${error}`);
      return null;
    }
  }

  /**
   * Fetch all documents with workspace and folder metadata
   */
  async getAllDocumentsWithMetadata(): Promise<{
    documents: GranolaDocument[];
    workspaces: Workspace[];
    documentLists: DocumentList[];
  } | null> {
    // Fetch workspaces
    const workspaces = await this.getWorkspaces();

    // Fetch document lists (folders)
    const documentLists = await this.getDocumentLists();

    // Fetch documents
    const documentsResponse = await this.getDocuments(100, 0);
    if (documentsResponse === null) {
      console.error('Error: Failed to fetch documents');
      return null;
    }

    // Extract documents from response (key might be 'docs' or 'documents')
    const documents = documentsResponse.docs || documentsResponse.documents || [];

    // Create lookup maps
    const workspaceMap = new Map<string, Workspace>();
    for (const ws of workspaces) {
      workspaceMap.set(ws.id, ws);
    }

    // Enrich documents with workspace and folder information
    for (const doc of documents) {
      // Add workspace name
      const workspaceId = doc.workspace_id;
      if (workspaceId && workspaceMap.has(workspaceId)) {
        doc.workspace_name = workspaceMap.get(workspaceId)!.name;
      }

      // Add folder information
      doc.folders = [];
      for (const folder of documentLists) {
        const folderDocIds = folder.document_ids || [];
        if (folderDocIds.includes(doc.id)) {
          doc.folders.push({
            id: folder.id,
            name: folder.title || folder.name || 'Untitled Folder'
          });
        }
      }
    }

    return {
      documents,
      workspaces,
      documentLists
    };
  }
}

