// src/server.ts

import { FastMCP } from 'fastmcp';
import { z } from 'zod';
import { TokenManager } from './tokenManager.js';
import { GranolaAPIClient } from './apiClient.js';
import { convertProseMirrorToMarkdown, extractTextFromProseMirror } from './prosemirrorConverter.js';
import type { GranolaDocument, Workspace, DocumentList, ProseMirrorContent } from './types.js';

// Initialize FastMCP server
const server = new FastMCP({
  name: 'Granola MCP Server',
  version: '0.2.0'
});

// Initialize token manager and API client
const tokenManager = new TokenManager();
const apiClient = new GranolaAPIClient(tokenManager);

// Cache for documents, workspaces, and folders
let documentsCache: Map<string, GranolaDocument> = new Map();
let workspacesCache: Workspace[] = [];
let foldersCache: DocumentList[] = [];
let lastFetchTime: number = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

/**
 * Ensure data is loaded and fresh
 */
async function ensureDataLoaded() {
  const now = Date.now();
  if (documentsCache.size === 0 || (now - lastFetchTime) > CACHE_TTL) {
    await loadData();
  }
}

/**
 * Load data from Granola API
 */
async function loadData() {
  console.error('Fetching data from Granola API...');
  
  const data = await apiClient.getAllDocumentsWithMetadata();
  
  if (!data) {
    console.error('Failed to fetch data from API');
    return;
  }

  // Update caches
  documentsCache.clear();
  for (const doc of data.documents) {
    documentsCache.set(doc.id, doc);
  }
  workspacesCache = data.workspaces;
  foldersCache = data.documentLists;
  lastFetchTime = Date.now();

  console.error(`Loaded ${documentsCache.size} documents from API`);
}

/**
 * Format date in local timezone
 */
function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return 'Unknown date';
  try {
    const date = new Date(dateStr);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  } catch {
    return dateStr;
  }
}

/**
 * Safe string for searching (handles null/undefined)
 */
function safeString(str: string | null | undefined): string {
  return str || '';
}

/**
 * Get document title safely
 */
function getTitle(doc: GranolaDocument): string {
  return doc.title || 'Untitled Meeting';
}

/**
 * Extract content from document panel
 */
function extractContent(doc: GranolaDocument): string {
  if (!doc.last_viewed_panel?.content) {
    return '';
  }

  const content = doc.last_viewed_panel.content;
  if (content.type === 'doc') {
    return extractTextFromProseMirror(content);
  }

  return '';
}

/**
 * Extract and convert content to Markdown
 */
function extractAndConvertContent(doc: GranolaDocument): string {
  if (!doc.last_viewed_panel?.content) {
    return '';
  }

  const content = doc.last_viewed_panel.content;
  if (content.type === 'doc') {
    return convertProseMirrorToMarkdown(content);
  }

  return '';
}

// Tool: search_meetings
server.addTool({
  name: 'search_meetings',
  description: 'Search meetings by title, content, or participants',
  parameters: z.object({
    query: z.string().describe('Search query for meetings'),
    limit: z.number().optional().default(10).describe('Maximum number of results')
  }),
  execute: async ({ query, limit }) => {
    await ensureDataLoaded();

    if (documentsCache.size === 0) {
      return 'No meeting data available';
    }

    const queryLower = safeString(query).toLowerCase();
    const results: Array<{ score: number; doc: GranolaDocument }> = [];

    for (const doc of documentsCache.values()) {
      let score = 0;

      // Search in title (with null check)
      const title = safeString(doc.title).toLowerCase();
      if (title.includes(queryLower)) {
        score += 2;
      }

      // Search in content
      const content = safeString(extractContent(doc)).toLowerCase();
      if (content.includes(queryLower)) {
        score += 1;
      }

      if (score > 0) {
        results.push({ score, doc });
      }
    }

    results.sort((a, b) => b.score - a.score);
    const topResults = results.slice(0, limit);

    if (topResults.length === 0) {
      return `No meetings found matching '${query}'`;
    }

    const output: string[] = [`Found ${topResults.length} meeting(s) matching '${query}':\n`];

    for (const { doc } of topResults) {
      output.push(`• **${getTitle(doc)}** (${doc.id})`);
      output.push(`  Date: ${formatDate(doc.created_at)}`);

      if (doc.workspace_name) {
        output.push(`  Workspace: ${doc.workspace_name}`);
      }

      if (doc.folders && doc.folders.length > 0) {
        const folderNames = doc.folders.map(f => f.name).join(', ');
        output.push(`  Folders: ${folderNames}`);
      }

      output.push('');
    }

    return output.join('\n');
  }
});

// Tool: get_meeting_details
server.addTool({
  name: 'get_meeting_details',
  description: 'Get detailed information about a specific meeting',
  parameters: z.object({
    meeting_id: z.string().describe('Meeting ID to retrieve details for')
  }),
  execute: async ({ meeting_id }) => {
    await ensureDataLoaded();

    const doc = documentsCache.get(meeting_id);
    if (!doc) {
      return `Meeting '${meeting_id}' not found`;
    }

    const details: string[] = [
      `# Meeting Details: ${getTitle(doc)}\n`,
      `**ID:** ${doc.id}`,
      `**Date:** ${formatDate(doc.created_at)}`,
      `**Updated:** ${formatDate(doc.updated_at)}`
    ];

    if (doc.workspace_name) {
      details.push(`**Workspace:** ${doc.workspace_name}`);
    }

    if (doc.folders && doc.folders.length > 0) {
      const folderNames = doc.folders.map(f => f.name).join(', ');
      details.push(`**Folders:** ${folderNames}`);
    }

    if (doc.people && doc.people.length > 0) {
      const people = doc.people.map(p => p.name).join(', ');
      details.push(`**Participants:** ${people}`);
    }

    return details.join('\n');
  }
});

// Tool: get_meeting_content
server.addTool({
  name: 'get_meeting_content',
  description: 'Get the full notes/content for a meeting in Markdown format',
  parameters: z.object({
    meeting_id: z.string().describe('Meeting ID to retrieve content for')
  }),
  execute: async ({ meeting_id }) => {
    await ensureDataLoaded();

    const doc = documentsCache.get(meeting_id);
    if (!doc) {
      return `Meeting '${meeting_id}' not found`;
    }

    const content = extractAndConvertContent(doc);
    if (!content) {
      return `No content available for meeting '${getTitle(doc)}'`;
    }

    return `# ${getTitle(doc)}\n\n${content}`;
  }
});

// Tool: list_workspaces
server.addTool({
  name: 'list_workspaces',
  description: 'List all available workspaces',
  parameters: z.object({}),
  execute: async () => {
    await ensureDataLoaded();

    if (workspacesCache.length === 0) {
      return 'No workspaces found';
    }

    const output: string[] = ['# Workspaces\n'];

    for (const ws of workspacesCache) {
      output.push(`## ${ws.name || 'Unnamed Workspace'}`);
      output.push(`**ID:** ${ws.id}`);
      if (ws.created_at) {
        output.push(`**Created:** ${formatDate(ws.created_at)}`);
      }
      output.push('');
    }

    return output.join('\n');
  }
});

// Tool: list_folders
server.addTool({
  name: 'list_folders',
  description: 'List all document folders',
  parameters: z.object({
    workspace_id: z.string().optional().describe('Optional workspace ID to filter by')
  }),
  execute: async ({ workspace_id }) => {
    await ensureDataLoaded();

    let folders = foldersCache;
    if (workspace_id) {
      folders = folders.filter(f => f.workspace_id === workspace_id);
    }

    if (folders.length === 0) {
      return 'No folders found';
    }

    const output: string[] = ['# Folders\n'];

    for (const folder of folders) {
      const name = folder.title || folder.name || 'Untitled';
      const docIds = folder.document_ids || [];

      output.push(`## ${name}`);
      output.push(`**ID:** ${folder.id}`);
      output.push(`**Documents:** ${docIds.length}`);
      output.push('');
    }

    return output.join('\n');
  }
});

// Tool: filter_by_workspace
server.addTool({
  name: 'filter_by_workspace',
  description: 'Filter meetings by workspace',
  parameters: z.object({
    workspace_id: z.string().describe('Workspace ID to filter by')
  }),
  execute: async ({ workspace_id }) => {
    await ensureDataLoaded();

    const docs = Array.from(documentsCache.values())
      .filter(doc => doc.workspace_id === workspace_id);

    if (docs.length === 0) {
      return `No documents found in workspace '${workspace_id}'`;
    }

    // Find workspace name
    const workspace = workspacesCache.find(ws => ws.id === workspace_id);
    const workspaceName = workspace?.name || 'Unknown';

    const output: string[] = [
      `# Documents in Workspace: ${workspaceName}\n`,
      `Found ${docs.length} document(s)\n`
    ];

    for (const doc of docs) {
      output.push(`• **${getTitle(doc)}** (${doc.id})`);
      output.push(`  Date: ${formatDate(doc.created_at)}`);
      output.push('');
    }

    return output.join('\n');
  }
});

// Tool: filter_by_folder
server.addTool({
  name: 'filter_by_folder',
  description: 'Filter meetings by folder',
  parameters: z.object({
    folder_id: z.string().describe('Folder ID to filter by')
  }),
  execute: async ({ folder_id }) => {
    await ensureDataLoaded();

    // Find the folder
    const folder = foldersCache.find(f => f.id === folder_id);
    if (!folder) {
      return `Folder '${folder_id}' not found`;
    }

    const folderName = folder.title || folder.name || 'Untitled';
    const docIds = folder.document_ids || [];

    const docs = docIds
      .map(id => documentsCache.get(id))
      .filter((doc): doc is GranolaDocument => doc !== undefined);

    if (docs.length === 0) {
      return `No documents found in folder '${folderName}'`;
    }

    const output: string[] = [
      `# Documents in Folder: ${folderName}\n`,
      `Found ${docs.length} document(s)\n`
    ];

    for (const doc of docs) {
      output.push(`• **${getTitle(doc)}** (${doc.id})`);
      output.push(`  Date: ${formatDate(doc.created_at)}`);
      output.push('');
    }

    return output.join('\n');
  }
});

// Start the server
console.error('Starting Granola MCP Server...');
server.start({
  transportType: 'stdio'
}).catch((error) => {
  console.error(`Failed to start server: ${error}`);
  process.exit(1);
});

