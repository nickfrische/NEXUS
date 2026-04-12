# Contributing to Granola MCP Server

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Build: `npm run build`
4. Test: Configure with an MCP client (Claude Desktop, Goose, etc.)

## Code Structure

- `src/server.ts` - Main server and tool definitions
- `src/tokenManager.ts` - OAuth token handling
- `src/apiClient.ts` - Granola API interactions
- `src/prosemirrorConverter.ts` - Content format conversion
- `src/types.ts` - TypeScript interfaces

## Adding New Features

### Adding a New MCP Tool

1. Open `src/server.ts`
2. Add your tool using the pattern:

```typescript
server.addTool({
  name: 'your_tool_name',
  description: 'Clear description of what it does',
  parameters: z.object({
    param1: z.string().describe('Parameter description'),
    param2: z.number().optional().describe('Optional param')
  }),
  execute: async ({ param1, param2 }) => {
    await ensureDataLoaded();  // Load cached data if needed
    
    // Your implementation
    
    return 'String result for the AI';  // Must return string
  }
});
```

3. Build and test: `npm run dev`

### Adding New API Endpoints

1. Add types to `src/types.ts`
2. Add the method to `src/apiClient.ts`
3. Follow existing patterns for error handling

## Testing

Currently manual testing with MCP clients. Ensure:
- Token refresh works correctly
- All tools return valid string responses
- Error cases are handled gracefully

## Pull Request Guidelines

1. Run `npm run typecheck` before submitting
2. Test with actual Granola account
3. Update AGENTS.md if adding new tools/features
4. Keep backwards compatibility with existing tool signatures

## Security Notes

- Never commit tokens or credentials
- Be careful with tokenManager.ts changes (refresh rotation is critical)
- API keys and tokens should only be in ~/.granola-mcp/

