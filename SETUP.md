# NEXUS Setup Guide
*Run these steps once to activate the full system.*

---

## Step 1 — Environment Variables

```bash
cp .env.example .env
```

Then fill in `.env` with your API keys. See comments in the file for where to get each one.

**Required to start:**
- `GOOGLE_OAUTH_CREDENTIALS_PATH` — path to your Google OAuth JSON file (see Step 2)
- `NOTION_TOKEN` — from https://www.notion.so/profile/integrations
- `GITHUB_TOKEN` — from https://github.com/settings/tokens (repo scope)

**Required for SCOUT/INTEL research:**
- `FIRECRAWL_API_KEY` — https://firecrawl.dev/app/api-keys ($16/mo)
- `APIFY_TOKEN` — https://console.apify.com → Settings → Integrations
- `SYNCGTM_API_KEY` — https://app.syncgtm.com/signup → Workspace Settings

---

## Step 2 — Google OAuth Setup (Gmail + Calendar)

NEXUS uses Gmail (read-only inbox) and Google Calendar for meeting intelligence.

```bash
# 1. Go to https://console.cloud.google.com/
#    Create project → Enable Gmail API + Google Calendar API
#    Create OAuth 2.0 credentials → Desktop App → Download JSON

# 2. Save the downloaded file as:
mv ~/Downloads/client_secret_*.json ~/.config/gcp-oauth.keys.json

# 3. Authenticate Gmail MCP:
npx @gongrzhe/server-gmail-autoauth-mcp auth
```

Set `GOOGLE_OAUTH_CREDENTIALS_PATH=/Users/[you]/.config/gcp-oauth.keys.json` in your `.env`.

---

## Step 3 — Notion Integration

1. Go to https://www.notion.so/profile/integrations
2. Create a new integration → give it a name ("NEXUS")
3. Copy the Internal Integration Secret (starts with `ntn_`)
4. Add to `.env` as `NOTION_TOKEN`
5. In Notion, open each page/database NEXUS should access → Share → invite your integration

---

## Step 4 — Granola MCP (Meeting Transcripts)

The Granola MCP is pre-built in `vendor/granola-mcp/`. It reads from the local Granola app.

**Requires:** Granola app installed and running on this Mac.
- Download: https://granola.ai
- Once Granola is installed and you've had some meetings, the MCP can access transcripts automatically from `~/Library/Application Support/Granola/`

No additional setup needed — the server is already built at `vendor/granola-mcp/dist/server.js`.

If you need to rebuild it:
```bash
cd vendor/granola-mcp && npm install && npm run build
```

---

## Step 5 — Verify MCP Connections

Once `.env` is filled in, start Claude Code and check that MCPs load:

```bash
claude
```

On startup, Claude Code will try to connect to all MCP servers in `.mcp.json`. If any fail, they'll show as errors — check that the relevant API key is set in `.env`.

---

## Step 6 — First Session

```bash
# From this repo directory:
claude

# NEXUS loads automatically and runs /morning-brief
# You'll see: today's meetings, pending approvals, pipeline state
```

Open `tasks/TASKS.md` in VS Code alongside your terminal to see the live dashboard.

---

## Skills Installed

19 skills pre-installed in `.claude/skills/`. They auto-trigger when NEXUS recognizes a matching task:

| Skill | Source | What it does |
|-------|--------|--------------|
| `cold-email` | coreyhaines31/marketingskills | Write B2B cold outreach that gets replies |
| `email-sequence` | coreyhaines31/marketingskills | Multi-touch follow-up cadences |
| `copywriting` | coreyhaines31/marketingskills | Short-form copy, CTAs, headlines |
| `customer-research` | coreyhaines31/marketingskills | ICP research, buyer insights |
| `content-strategy` | coreyhaines31/marketingskills | Content planning and positioning |
| `sales-enablement` | coreyhaines31/marketingskills | Sales collateral, objection handling |
| `competitor-alternatives` | coreyhaines31/marketingskills | Competitive positioning |
| `pricing-strategy` | coreyhaines31/marketingskills | Pricing frameworks and packaging |
| `deep-research` | daymade/claude-code-skills | Evidence-tracked research reports with citations |
| `meeting-minutes-taker` | daymade/claude-code-skills | Transcript analysis: action items, decisions |
| `fact-checker` | daymade/claude-code-skills | Source verification and claim checking |
| `lead-research-assistant` | ComposioHQ/awesome-claude-skills | ICP matching, lead qualification, contact strategies |
| `meeting-insights-analyzer` | ComposioHQ/awesome-claude-skills | Communication pattern analysis from transcripts |
| `content-research-writer` | ComposioHQ/awesome-claude-skills | Research + write long-form content |
| `chief-of-staff` | alirezarezvani/claude-skills | C-suite orchestration layer |
| `cro-advisor` | alirezarezvani/claude-skills | Revenue strategy, pricing, sales model |
| `competitive-intel` | alirezarezvani/claude-skills | Competitive landscape analysis |
| `contract-and-proposal-writer` | alirezarezvani/claude-skills | Proposals and contract drafting |
| `revenue-operations` | alirezarezvani/claude-skills | Pipeline, GTM, revenue ops |

---

## MCP Server Reference

| Server | Package | Purpose |
|--------|---------|---------|
| Granola | `vendor/granola-mcp` (local) | Meeting transcripts (SENTINEL) |
| Google Calendar | `@cocal/google-calendar-mcp` | Upcoming meetings (SENTINEL) |
| Gmail | `@gongrzhe/server-gmail-autoauth-mcp` | Inbox read-only (QUILL) |
| Notion | `@notionhq/notion-mcp-server` | Notes/databases (NEXUS) |
| GitHub | `@modelcontextprotocol/server-github` | Repo management (NEXUS) |
| Firecrawl | `firecrawl-mcp` | URL scraping (INTEL/SCOUT) |
| Apify | `@apify/actors-mcp-server` | LinkedIn/news/search scrapers (INTEL/SCOUT) |
| SyncGTM | Remote HTTP | Waterfall email enrichment (SCOUT) |
