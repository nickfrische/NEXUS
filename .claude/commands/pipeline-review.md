# /pipeline-review

Review the full BD pipeline. Surface health, stale contacts, pending approvals, and recommended actions.

## Steps

1. **Read all lead cards** in `pipeline/leads/`
2. **Read all active dossiers** in `intel/dossiers/` where status is not Cold or Blocked
3. **Read `tasks/TASKS.md`** for all active and waiting items
4. **Check `drafts/`** for any unapproved drafts

## Output Format

```
# Pipeline Review — [Date]

## Pipeline Summary
| Stage | Count | Names |
|-------|-------|-------|
| New Leads | X | [names] |
| Outreach Sent | X | [names] |
| In Conversation | X | [names] |
| Meeting Scheduled | X | [names] |
| Active Client | X | [names] |

## BrotherLink Sprint
[Status of IU FIJI pitch + other chapters in outreach]

## Stale Contacts (need follow-up)
[Contacts with open status and no touch in 7+ days]

## Pending Approvals
[All drafts in drafts/ awaiting Nick]

## Hot Opportunities
[Contacts scored 8+ or with active meeting/proposal in play]

## Recommended Actions (Priority Order)
1. [Action] — [contact] — [reason]
2. [Action] — [contact] — [reason]
3. [Action] — [contact] — [reason]

## Network Health
- Superstars touched in last 21 days: [X/total]
- Warm Network touched in last 30 days: [X/total]
- Follow-ups overdue 48h+: [list]
```

Ask Nick: "Which of these do you want to tackle first?"
