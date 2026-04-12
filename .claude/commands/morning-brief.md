# /morning-brief

Run the daily startup brief. This fires automatically on every session start, or can be called manually.

## Steps

1. Pull today's calendar via Google Calendar MCP
2. For every meeting today: note the contact, confirm a pre-meeting brief is ready or queue SENTINEL to build one
3. Check `drafts/emails/` and `drafts/proposals/` for any unapproved drafts older than 24 hours
4. Scan `tasks/TASKS.md` for:
   - `in-progress` tasks that need attention
   - `waiting-nick` items
   - `blocked` items
5. Check `intel/dossiers/` for any contacts where `last touched` > 21 days and status is Superstar
6. Check for contacts where `last touched` > 30 days and status is Warm Network

## Output Format

Post this to the session:

```
# Morning Brief — [Date]

## Today's Meetings
[For each meeting: time | contact name | one-line context | brief status: ready/building]

## Pending Approvals
[For each draft: who it's for | type | age | one-line summary]

## Waiting on Nick
[Items in tasks/TASKS.md with status: waiting-nick]

## Overdue Follow-ups
[Contacts with open threads and no touch in 7+ days]

## Network Health Flags
[Superstars > 21 days cold | Warm Network > 30 days cold]

## Blocked Tasks
[Any blocked items with context on what's needed to unblock]
```

Skip any section that has nothing to report. Keep it tight enough to read in 90 seconds.
