# /draft-outreach

Usage: `/draft-outreach [contact name]`

Draft outreach or follow-up communication for a named contact.

## Steps

1. **Load dossier** from `intel/dossiers/[name].md`. If no dossier exists, spawn INTEL for a Quick Scan first.

2. **Check Gmail MCP** for any existing email threads with this contact.

3. **Determine message type:**
   - No prior contact → cold/warm outreach email
   - Prior contact, no recent touch → warming/follow-up email
   - Active thread with no reply → follow-up nudge
   - Post-meeting → follow-up (use SENTINEL post-meeting format)
   - LinkedIn → DM sequence based on connection status

4. **Spawn QUILL** with:
   - The dossier
   - The email thread context (if any)
   - The message type
   - Instruction to apply all VOICE.md rules

5. **QUILL saves draft** to `drafts/emails/[lastname]-[type]-[YYYY-MM-DD].md`

6. **Surface to Nick:**
```
# Draft Ready: [Name] — [Type]

**To:** [email]
**Subject:** [subject]

[first 2 lines of draft...]

Full draft: drafts/emails/[filename]

Approve to send, or give feedback.
```

Nick approves or gives feedback. QUILL revises if needed. Nick sends manually.
