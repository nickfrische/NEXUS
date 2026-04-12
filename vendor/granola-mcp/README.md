# Granola MCP Server

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A Model Context Protocol (MCP) server for integrating [Granola.ai](https://granola.ai) meeting intelligence with Claude Desktop and other MCP clients. Access your meetings, notes, and transcripts directly from AI assistants.

## ⚠️ Disclaimer

This is an **unofficial**, community-built tool. It is not affiliated with, endorsed by, or supported by Granola, Inc.

This server uses undocumented APIs discovered through network inspection. Use of this tool may violate Granola's Terms of Service. **Use at your own risk.**

If you are from Granola and would like this repository removed or would like to discuss official API access, please open an issue.

## Features

- 🔍 **Meeting Search** - Search meetings by title, content, and participants
- 📝 **Full Content Access** - Retrieve complete meeting notes in Markdown format
- 🏢 **Workspace Management** - List and filter by workspaces (organizations)
- 📁 **Folder Organization** - List and filter by document folders
- 🔄 **Real-time API Access** - Direct access to Granola's API
- 🔐 **Secure Authentication** - Uses your existing Granola credentials
- ⚡ **Smart Caching** - 5-minute cache for optimal performance

## Prerequisites

- **Node.js 18+**
- **Granola.ai** installed and logged in on macOS
- **Claude Desktop** (or another MCP client)

## Installation

```bash
git clone https://github.com/EoinFalconer/granola-mcp-server.git
cd granola-mcp-server
npm install
npm run build
```

## Configuration

### Claude Desktop

Add to your `claude_desktop_config.json`:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "granola": {
      "command": "node",
      "args": ["/path/to/granola-mcp-server/index.js"]
    }
  }
}
```

Then restart Claude Desktop.

## Available Tools

| Tool | Description | Parameters |
|------|-------------|------------|
| `search_meetings` | Search meetings by title/content | `query`, `limit?` |
| `get_meeting_details` | Get meeting metadata | `meeting_id` |
| `get_meeting_content` | Get full notes as Markdown | `meeting_id` |
| `list_workspaces` | List all workspaces | - |
| `list_folders` | List document folders | `workspace_id?` |
| `filter_by_workspace` | Filter meetings by workspace | `workspace_id` |
| `filter_by_folder` | Filter meetings by folder | `folder_id` |

## Usage Examples

Once configured, use natural language in Claude:

- *"Search for meetings about quarterly planning"*
- *"Get the content from yesterday's standup"*
- *"List all my workspaces"*
- *"Show me meetings in the Sales folder"*

## How It Works

### Authentication

The server reads your existing Granola credentials from:
```
~/Library/Application Support/Granola/supabase.json
```

No additional login required - it uses your existing Granola session.

### API Integration

- Direct REST API calls to Granola's backend
- ProseMirror content converted to readable Markdown
- In-memory caching with 5-minute TTL

## Troubleshooting

### "Failed to get access token"

Ensure Granola is installed and you're logged in. The server needs:
```
~/Library/Application Support/Granola/supabase.json
```

### Server not appearing in Claude

1. Verify the config path is correct
2. Run `npm run build`
3. Restart Claude Desktop completely

## Development

```bash
npm run build      # Compile TypeScript
npm run watch      # Watch mode
npm run dev        # Build and run
```

## Credits & Acknowledgments

This project was inspired by and built upon the reverse-engineering work of:

- **[Joseph Thacker](https://josephthacker.com/hacking/2025/05/08/reverse-engineering-granola-notes.html)** - Detailed blog post on reverse-engineering Granola's API
- **[getprobo/reverse-engineering-granola-api](https://github.com/getprobo/reverse-engineering-granola-api)** - API documentation and research

Thank you for sharing your findings with the community! 🙏

## Related Projects

- [cobblehillmachine/granola-claude-mcp](https://github.com/cobblehillmachine/granola-claude-mcp) - Python-based, cache file approach
- [btn0s/granola-mcp](https://github.com/btn0s/granola-mcp) - TypeScript, similar API approach

## Contributing

Contributions welcome! Please feel free to submit issues and pull requests.

## License

MIT © [Eoin Falconer](https://github.com/EoinFalconer)
