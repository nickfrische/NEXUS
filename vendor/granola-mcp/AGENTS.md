# AGENTS.md - Granola MCP Server

## Project Overview

This is a **Model Context Protocol (MCP) server** that integrates Granola.ai meeting intelligence with AI assistants like Claude Desktop and Goose. It provides real-time API access to meetings, notes, and transcripts from Granola.

### Tech Stack
- **Language**: TypeScript
- **Runtime**: Node.js 18+
- **Build**: TypeScript Compiler (tsc)
- **MCP Framework**: FastMCP (^3.24.0)
- **Schema Validation**: Zod (^3.24.2)
- **Module System**: ESM (ES Modules)

## Project Structure

```
granola-mcp-server/
├── src/
│   ├── server.ts              # Main MCP server - defines all tools
│   ├── tokenManager.ts        # OAuth token management with refresh rotation
│   ├── apiClient.ts           # Granola API client for REST endpoints
│   ├── prosemirrorConverter.ts # Converts ProseMirror JSON to Markdown
│   └── types.ts               # TypeScript interfaces and types
├── dist/                      # Compiled JavaScript (generated)
├── index.js                   # Entry point - imports dist/server.js
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── README.md                  # User documentation
```

## Architecture

### Core Components

1. **server.ts** - Main MCP server using FastMCP
   - Initializes FastMCP server with tools
   - Manages document/workspace/folder caches (5-min TTL)
   - Defines 7 MCP tools for meeting operations
   - Uses stdio transport for MCP communication

2. **tokenManager.ts** - OAuth 2.0 Token Management
   - Loads tokens from Granola's `~/Library/Application Support/Granola/supabase.json`
   - Implements refresh token rotation (WorkOS OAuth)
   - Saves tokens to `~/.granola-mcp/tokens.json`
   - Auto-refreshes expired tokens with 5-min buffer

3. **apiClient.ts** - Granola REST API Client
   - Base URL: `https://api.granola.ai`
   - Endpoints: get-documents, get-workspaces, get-document-lists, get-documents-batch
   - Handles v1/v2 endpoint fallbacks
   - Enriches documents with workspace/folder metadata

4. **prosemirrorConverter.ts** - Content Conversion
   - Converts ProseMirror JSON to Markdown
   - Handles: headings, paragraphs, lists, code blocks, links, formatting marks
   - Also exports plain text extraction function

5. **types.ts** - TypeScript Interfaces
   - WorkOSTokens, TokenConfig, SupabaseCredentials
   - Workspace, DocumentList, GranolaDocument
   - ProseMirror types (ProseMirrorNode, ProseMirrorContent)
   - API request/response types

## Available MCP Tools

| Tool | Description | Parameters |
|------|-------------|------------|
| `search_meetings` | Search by title/content | `query` (string), `limit?` (number, default: 10) |
| `get_meeting_details` | Get meeting metadata | `meeting_id` (string) |
| `get_meeting_content` | Get full notes as Markdown | `meeting_id` (string) |
| `list_workspaces` | List all workspaces | None |
| `list_folders` | List document folders | `workspace_id?` (string) |
| `filter_by_workspace` | Filter meetings by workspace | `workspace_id` (string) |
| `filter_by_folder` | Filter meetings by folder | `folder_id` (string) |

## Development Commands

```bash
# Install dependencies
npm install

# Build TypeScript
npm run build

# Watch mode for development
npm run watch

# Run server directly (for testing)
node index.js
```

## Authentication Flow

1. Server looks for refresh token in `~/.granola-mcp/tokens.json`
2. If not found, extracts from Granola app's `supabase.json`
3. Uses WorkOS OAuth to get access tokens
4. Implements token rotation (refresh token changes on each refresh)
5. Auto-refreshes 5 minutes before expiry

## Key Files for Common Tasks

### Adding a New MCP Tool
- Edit: `src/server.ts`
- Pattern: `server.addTool({ name, description, parameters: z.object({...}), execute })`

### Adding API Endpoints
- Edit: `src/apiClient.ts`
- Use `this.tokenManager.getAccessToken()` for auth
- Follow existing pattern with try/catch and error logging

### Adding New Types
- Edit: `src/types.ts`
- Export interfaces for use across modules

### Modifying Token Handling
- Edit: `src/tokenManager.ts`
- Important: Maintain refresh token rotation logic

## API Details

### Granola API Base URL
`https://api.granola.ai`

### Required Headers
```typescript
{
  'Authorization': 'Bearer <access_token>',
  'Content-Type': 'application/json',
  'User-Agent': 'Granola/5.354.0',
  'X-Client-Version': '5.354.0'
}
```

### WorkOS Auth Endpoint
`https://api.workos.com/user_management/authenticate`

Client ID: `client_01JG3HBXEG0QA83Z7XRPGVPFMB`

## Caching Strategy

- **Cache TTL**: 5 minutes
- **Cached Data**: Documents, Workspaces, Folders
- **Cache Invalidation**: Time-based (`lastFetchTime` check)
- **Cache Storage**: In-memory Maps

## Error Handling

- All API errors logged to stderr via `console.error`
- Functions return `null` on failure, allowing graceful degradation
- MCP tools return user-friendly error messages

## Testing the Server

1. Build: `npm run build`
2. Run: `node index.js` (starts stdio server)
3. Or configure with Claude Desktop / Goose Desktop

## Configuration for Claude Desktop

Location: `~/Library/Application Support/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "granola": {
      "command": "node",
      "args": ["/path/to/granola-mcp-server/index.js"],
      "env": {}
    }
  }
}
```

## Common Issues

1. **"Failed to get access token"**: Granola app not logged in, or supabase.json missing
2. **Token refresh fails**: WorkOS tokens may be expired; re-login to Granola
3. **Empty results**: Check if meetings exist in Granola app
4. **Server not starting**: Ensure `npm run build` was run and `dist/` exists

