# TASKS.md — Active Ledger
*Migrated from OpenClaw 2026-04-12. Active tasks only.*
*Update after every action. Open this in VS Code to see full system state.*
*Last updated: 2026-04-12*

---

## SYSTEM SETUP — ACTIVATE NEXUS

- [ ] [waiting-nick] Add API keys to `.env`: Firecrawl, Apify, SyncGTM, GitHub token
  tags: #setup #urgent
  agent: NEXUS
  notes: Without these, SCOUT and INTEL cannot run research. See .env.example for format.

- [ ] [waiting-nick] Authenticate Google Workspace (Gmail + Calendar + Drive)
  tags: #setup #urgent
  agent: NEXUS
  notes: Install `npm install -g @googleworkspace/cli` and run `gws auth`. Required for morning brief, pre-meeting crons, and QUILL drafts.

- [ ] [waiting-nick] Provide 2-3 writing samples for QUILL voice calibration
  tags: #setup #quill
  agent: QUILL
  notes: Outreach emails that converted are best. Drop them in conversation and I'll update quill.md.

- [ ] [waiting-nick] Define BPN ICP specifics in CLAUDE.md
  tags: #setup
  agent: NEXUS
  notes: Current ICP is seeded from BPN-CONTEXT.md. Confirm or update: company size, revenue range, pain signals, budget tier.

- [ ] [waiting-nick] Install marketplace skill bundles (optional)
  tags: #setup #skills
  agent: NEXUS
  notes: coreyhaines31/marketingskills (25 skills), daymade-skills (research/meeting), alirezarezvani/claude-skills (232+ skills), ComposioHQ/awesome-claude-skills (Pipedrive)

---

## BROTHERLINK SPRINT (from March 2026 — confirm current status)

- [ ] [todo] Confirm status of IU FIJI pitch with Jack Anderson
  tags: #brotherlink #urgent
  agent: NEXUS
  dossier: jack-anderson
  notes: Last known: proposal submitted, Jack Anderson (joa@iu.edu) is eval committee lead. Need to know: has anyone followed up since March?

- [ ] [todo] QUILL draft email to Jack Anderson — offer to present BrotherLink to committee
  tags: #brotherlink #quill
  agent: QUILL
  dossier: jack-anderson
  notes: Depends on above. If no recent follow-up, this is overdue.

- [ ] [todo] Follow up with David Keene (Sig Ep president)
  tags: #brotherlink
  agent: QUILL
  dossier: david-keene
  notes: Nick met him 2026-03-05. He was going to reach out to his house leadership. Check if he did.

- [ ] [todo] Follow up with Luke Spencer (Lambda Chi president)
  tags: #brotherlink
  agent: QUILL
  dossier: luke-spencer
  notes: Nick met him 2026-03-05. Check status.

- [ ] [todo] INTEL: research Brett Merritt (brett.merritt@cummins.com)
  tags: #brotherlink #intel
  agent: INTEL
  notes: BrotherLink grad committee. Ronak recommended building a dossier on him.

---

## BD PIPELINE (from March 2026 — confirm current status)

- [ ] [todo] Atlas Ventures follow-up — Sterling + Austin Weatherford
  tags: #pipeline #tracking #urgent
  agent: QUILL
  dossier: sterling-austin-atlas
  notes: Last known: active opportunity. $1B Nestle factory build, $1M materials lost, tracking solution. Philip Hess also on this. Confirm if meeting happened and where things stand.

- [ ] [todo] Check status: Joey DeHeer medical dashboard
  tags: #pipeline #active-project
  dossier: joey-deheer
  notes: Active project as of March. Confirm current status.

- [ ] [todo] Sean Kirby — accounting firm CRM follow-up
  tags: #pipeline
  dossier: sean-kirby
  notes: Via Hunter Beal.

- [ ] [todo] Chad Peterman — onboarding platform follow-up
  tags: #pipeline
  dossier: chad-peterman

- [ ] [todo] Julie Petipool — real estate project follow-up
  tags: #pipeline
  dossier: julie-petipool

- [ ] [todo] Ken Crossman — automation tool follow-up
  tags: #pipeline #warm
  dossier: ken-crossman
  notes: ken.crossman@icloud.com. Check if this progressed since the March 5 meeting.

---

## QUEUE

- [ ] [todo] Migrate BPN Portfolio doc to memory
  tags: #system
  agent: INTEL
  notes: BPN-portfolio.docx is in the tar.gz. Extract and add key project details to memory/BPN.md.

- [ ] [todo] Review BROTHERLINK-OUTREACH-TRACKER for stale outreach
  tags: #brotherlink
  agent: NEXUS
  notes: Lambda Chi Alpha reached out 2026-03-03. Sig Ep, Beta, SAE, Sigma Nu were TODO. 6 weeks have passed — check status and decide whether to follow up or restart.

---
*Completed tasks: see tasks/TASKS-ARCHIVE.md*
