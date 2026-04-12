// src/types.ts

/**
 * Granola API types and interfaces
 */

export interface WorkOSTokens {
  access_token: string;
  refresh_token: string;
  expires_in?: number;
  token_type?: string;
}

export interface SupabaseCredentials {
  workos_tokens: string; // JSON string containing WorkOSTokens
}

export interface TokenConfig {
  refresh_token: string;
  access_token?: string;
  expires_at?: string;
}

export interface Workspace {
  id: string;
  name: string;
  created_at: string;
  owner_id?: string;
}

export interface DocumentList {
  id: string;
  title?: string;
  name?: string;
  created_at: string;
  workspace_id?: string;
  owner_id?: string;
  document_ids?: string[];
  documents?: GranolaDocument[];
  is_favourite?: boolean;
}

export interface FolderInfo {
  id: string;
  name: string;
}

export interface ProseMirrorNode {
  type: string;
  text?: string;
  content?: ProseMirrorNode[];
  attrs?: Record<string, any>;
  marks?: Array<{
    type: string;
    attrs?: Record<string, any>;
  }>;
}

export interface ProseMirrorContent {
  type: 'doc';
  content: ProseMirrorNode[];
}

export interface DocumentPanel {
  content?: ProseMirrorContent;
  [key: string]: any;
}

export interface GranolaDocument {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
  workspace_id?: string;
  workspace_name?: string;
  folders?: FolderInfo[];
  last_viewed_panel?: DocumentPanel;
  people?: Array<{ name: string }>;
  [key: string]: any;
}

export interface GetDocumentsRequest {
  limit: number;
  offset: number;
  include_last_viewed_panel: boolean;
}

export interface GetDocumentsResponse {
  docs?: GranolaDocument[];
  documents?: GranolaDocument[];
  [key: string]: any;
}

export interface GetDocumentsBatchRequest {
  document_ids: string[];
  include_last_viewed_panel: boolean;
}

export interface GetDocumentsBatchResponse {
  documents?: GranolaDocument[];
  docs?: GranolaDocument[];
  [key: string]: any;
}

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
