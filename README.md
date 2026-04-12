# NEXUS Growth Engine — BPN Solutions

Autonomous AI-powered business development system, built natively on Claude Code.

**How to start:** `claude` in this directory. NEXUS loads and runs `/morning-brief` automatically.

---

## Architecture

One Claude Code session. One orchestrator (NEXUS). Four specialized subagents.

| Agent | Mission | Output |
|-------|---------|--------|
| SCOUT | Lead discovery & ICP qualification | `pipeline/leads/` |
| INTEL | Research & dossier building | `intel/dossiers/` |
| QUILL | Ghostwriting: emails, LinkedIn, proposals | `drafts/` |
| SENTINEL | Meeting intelligence: briefs & post-meeting processing | Session surface |

## Repo Structure

```
CLAUDE.md                  # NEXUS identity, BPN context, ICP, session rules — ALWAYS loaded
.mcp.json                  # MCP server connections (keys in .env)
.env.example               # Template — copy to .env and fill in keys

.claude/agents/            # Subagent definitions
  scout.md
  intel.md
  quill.md
  sentinel.md
.claude/commands/          # Slash commands
  /morning-brief
  /prospect
  /draft-outreach
  /meeting-prep
  /pipeline-review
.claude/skills/            # Reusable skill files (add marketplace skills here)

memory/                    # Persistent BPN context
  BPN.md                   # Company facts, portfolio, ICP, strategic direction
  CONTACTS.md              # Network index
  DECISIONS.md             # Decision log
  BPN-PORTFOLIO.md         # Full project portfolio details
  signature.html           # Nick's email signature HTML

tasks/
  TASKS.md                 # Live dashboard — open this in VS Code
  TASKS-ARCHIVE.md         # Completed tasks

pipeline/leads/            # SCOUT drops qualified lead cards here
intel/dossiers/            # 89 contact dossiers (migrated from OpenClaw)
drafts/emails/             # QUILL stages email drafts for approval
drafts/proposals/          # QUILL stages proposals for approval
logs/                      # Session logs by date
```

## Slash Commands

- `/morning-brief` — Daily startup. Meetings, approvals, follow-ups, pipeline health.
- `/prospect [name or company]` — SCOUT → INTEL pipeline on a new target.
- `/draft-outreach [contact]` — Pull dossier, draft outreach in Nick's voice.
- `/meeting-prep [contact]` — SENTINEL pre-meeting brief.
- `/pipeline-review` — Full pipeline health, stale contacts, recommended actions.

## Setup Checklist

- [ ] Copy `.env.example` → `.env` and fill in API keys
- [ ] Authenticate Google Workspace: `npm install -g @googleworkspace/cli && gws auth`
- [ ] Install marketplace skill bundles in `.claude/skills/`
- [ ] Define/confirm BPN ICP in `CLAUDE.md`

## Human-in-the-loop

NEXUS never sends an email, LinkedIn message, or proposal without Nick's explicit approval. All outbound is staged in `drafts/` first. NEXUS reads, researches, drafts. Nick approves. Nick sends.

---

*BPN Solutions — Internal Use Only — April 2026*
*Replaces OpenClaw 5-bot Discord swarm (VPS 159.89.185.68)*
