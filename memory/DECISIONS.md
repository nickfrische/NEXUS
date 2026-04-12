# DECISIONS.md — Decision Log
*Major strategic decisions and operating rule changes. Chronological.*

---

## 2026-04-12 — Migration from OpenClaw to NEXUS Claude Code

**Decision:** Retire the OpenClaw 5-bot Discord swarm on DigitalOcean VPS (159.89.185.68) and rebuild NEXUS natively in Claude Code.

**Rationale:**
- No VPS dependency, no systemd daemon, no SSH maintenance
- Subagents run natively in Claude Code — cleaner than separate Discord bot tokens
- Repo is the state machine — everything git-tracked, recoverable, diffable
- MCP replaces gog CLI for Google Workspace
- Session start picks up exactly where last session ended

**What carried over:**
- All 89 contact dossiers from workspace-intel/contacts/
- QUILL voice calibration (VOICE.md rules + gold standard emails)
- BPN context and portfolio (BPN-CONTEXT.md)
- Agent identities and philosophies (SOUL.md / IDENTITY.md per agent)
- Active opportunity list
- Key relationship flags (Will Crooks = not BD, etc.)

---

## 2026-03-05 — QUILL Voice Gold Standard

**Decision:** Preserve Nick's sentence structure. Fix hard violations only (em dashes, banned words). Do not rewrite.

**Source:** Nick submitted his actual email to Atlas Ventures as the target voice. "Hey Austin and Sterling, Thanks for your time, excited to reconnect next week..."

---

## 2026-03-04 — Subagent Failure Recovery Protocol

**Decision:** NEXUS is responsible for execution, not just dispatch. If a subagent fails, assess why and re-spawn with a fix. Three-strike rule before marking blocked. Never fail silently.

---

## 2026-03-03 — AI Team Product Pricing (Jarred Porter validation)

**Decision:** AI team product priced at ~$3K upfront + $1-2K/month retainer.

**Source:** Jarred Porter (Tuscan Agency) validated this model. "Proof is in the pudding" — clients feel value, then keep paying.

---

## 2026-03-03 — Tasks.md Active/Archive Split

**Decision:** Two files. TASKS.md stays under ~200 lines (active only). Completed tasks move to TASKS-ARCHIVE.md same day. Never merge back.

---

## 2026-03-02 — BrotherLink Is the Primary Strategic Bet

**Decision:** BrotherLink is BPN's PRIMARY software vertical and long-term scale play. Tracking/logistics is current revenue but BrotherLink is where BPN is building toward.

**Timeline:** August 2026 — BrotherLink billing at least one chapter before Nick moves houses. IU FIJI is first customer. Close them, build case study, scale nationally.

---

## 2026-03-02 — INTAP Grant Correction

**Decision:** Stop describing INTAP as "manufacturing pipeline." INTAP was an Indiana state grant where businesses applied for up to $15K in custom software and chose their own vendor. BPN had 16 clients use BPN as their vendor through this program. State-backed validation of BPN's work.

---

## 2026-03-02 — Post-Meeting Protocol

**Decision:** After every meeting debrief Nick drops, NEXUS must always do two things immediately: (1) route to SENTINEL to structure notes + update dossier, (2) dispatch QUILL to draft post-meeting follow-up email. No exceptions. No waiting to be asked.

---

## 2026-03-02 — Gmail Draft Rule

**Decision:** Every QUILL email draft must be saved to Gmail drafts automatically. Never just post to channel. Never ask if Nick wants it saved — just do it every time. Use HTML body with signature.

---

## 2026-03-02 — Task Capture Rule

**Decision:** Any time Nick says "remind me to X," "don't forget X," or drops a task in conversation, NEXUS adds it to the Master Task Sheet immediately. Nothing tracked only in conversation.

**Sheet:** https://docs.google.com/spreadsheets/d/1HKDPjvVVgSUKXRBzwI0EnFGA5Jp52xx25DYVzGVRp30/edit
