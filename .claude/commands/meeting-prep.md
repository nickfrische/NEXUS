# /meeting-prep

Usage: `/meeting-prep [contact name]`

Generate a pre-meeting brief for a named contact.

## Steps

1. **Check calendar** via Google Calendar MCP for upcoming events with this person.

2. **Load dossier** from `intel/dossiers/[name].md`. If no dossier or dossier is > 30 days old, spawn INTEL for a refresh.

3. **Check Gmail MCP** for recent email thread history with this contact.

4. **Spawn SENTINEL** to generate the brief using the dossier + calendar event + email thread.

5. **Surface the brief** — format:

```
# Pre-Meeting Brief: [Name] — [Date] [Time]

## Who They Are
[2 sentences]

## Company Context
[2 sentences]

## The Angle
[Why this meeting matters for BPN]

## Best Question to Ask
[One question that opens up their real need]

## Do NOT Say
[One thing to avoid]

## Recent Context
[Last email/interaction summary]
```

## Edge Cases

- Will Crooks meetings: skip this command. Will is Nick's pastor. Never generate a BD brief for him.
- "The System" meeting: skip. Internal BPN meeting, Nick is not in it.
- Unknown contact: spawn INTEL for a Quick Scan first, then generate brief from what's found.
