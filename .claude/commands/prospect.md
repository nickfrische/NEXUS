# /prospect

Usage: `/prospect [name or company]`

Run the full SCOUT → INTEL pipeline on a named person or company.

## Steps

1. **SCOUT:** Search for the person/company. Find: LinkedIn profile, company website, role, company size, Indiana/BPN connection angles. Score against BPN ICP (0-10).

2. **Qualify:**
   - Score 8+: Hot — proceed immediately to INTEL deep dive
   - Score 6-7: Warm — proceed to INTEL quick scan
   - Score 4-5: Watchlist — create a minimal lead card, no dossier yet
   - Score 0-3: Document and stop. Surface to Nick with the score and reason.

3. **INTEL:** Build dossier at the appropriate depth. Save to `intel/dossiers/[name].md`.

4. **NEXUS:** If score 6+, create lead card in `pipeline/leads/[company].md` and surface to Nick with:
   - ICP score + breakdown
   - Key facts from dossier
   - Recommended outreach angle
   - Suggested first message type (cold email, LinkedIn DM, warm intro request)

## Output

Surface to Nick:
```
# Prospect: [Name] — [Company]
ICP Score: [X]/10

**Why they fit:** [2 sentences]
**Best angle:** [1 sentence]
**Recommended next step:** [action]

Dossier: intel/dossiers/[name].md
Lead card: pipeline/leads/[company].md
```

Ask Nick: "Want QUILL to draft an outreach message?"
