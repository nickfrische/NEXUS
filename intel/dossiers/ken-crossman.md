# Ken Crossman — Contact Dossier

## Status
**Active Opportunity — SOW Pending**

## The Basics
- Company: Integrative Psychotherapy Associates (IPA)
- Title: Owner / Co-Founder (practices as therapist alongside wife)
- Email: ken.crossman@icloud.com
- Phone: Unknown
- Location: Unknown (Indiana assumed based on BPN geographic focus)
- LinkedIn: Unknown

## Connection
- How Nick knows them: Prior relationship — had introductory/exploratory meeting(s) before March 5. Follow-up call confirmed active project interest.
- Introduced by: Unknown
- Shared background (FIJI, IU, faith, Indy, etc.): Unknown

## About Ken + IPA
- **Business:** Integrative Psychotherapy Associates (IPA) — ~20 therapists, in business 15 years
- **Ownership:** Ken runs IPA with his wife; both are therapists themselves
- **Model:** Almost entirely in-person (~95%), ~5% virtual
- **Core goal:** Make IPA as self-running/automated as possible
- **Staffing challenge:** Hard to find quality support staff — Ken and his wife still handle most critical work
- **Unique pay model:** Therapist pay is tied to completion of admin work/notes — this automatically pulls admin burden off Ken without enforcement overhead

## Tech Stack
- **EHR:** TherapyNotes (has an API — key integration point)
- **Payroll:** Gusto
- **Accounting:** QuickBooks

## BPN Fit
- **Why relevant:** Owner of a growing multi-therapist practice actively seeking automation and operational intelligence tooling. High intent, clear pain points, real budget conversation initiated.
- **Project scope:** 4-phase automation and dashboard build (see phases below)
- **Phase 1 ballpark quoted:** $4,000–$5,000 (caveated, non-final — SOW gathering next)

## Pain Points & Opportunity Map

### Phase 1 — Payroll Automation (AGREED STARTING POINT)
- Currently runs payroll monthly; takes 4–6 hours each time
- Process: download spreadsheets from TherapyNotes + other systems → paste into Excel template → calculate pay → manually key results into Gusto
- **Goal:** Automate the full workflow UP TO clicking "run" in Gusto — Ken explicitly wants a final human review step before execution
- **Impact:** Would enable twice-monthly payroll at no extra effort/time
- **BPN quote:** $4,000–$5,000 (ballpark, non-final)

### Phase 2 — Therapist-Level Dashboards
- Per-therapist visibility: sessions, revenue, retention, referrals
- Web app that both individual therapists and Ken can log into

### Phase 3 — Practice-Level Reporting
- Aggregated KPIs, trends, and alerts ("canary in the coal mine" framing)
- Potentially mobile-friendly

### Phase 4 (Later) — Client-Facing IPA App
- Features: appointments, secure messaging, billing
- Must be HIPAA-compliant — Ken believes this is achievable with the right guidance
- Current EHR patient portal is clunky and unused by clients

## What Landed in Nick's Pitch
- Framed BPN as industry-agnostic: "We do this for a management consulting client — CEO KPI dashboards, AI voice agents, multi-entity breakdown"
- Proposed 3-phase sequence that Ken responded well to
- Emphasized: bugs/errors from the initial build are handled as part of delivery — not charged extra
- Positioned a monthly retainer (5–10 hrs/month) after the initial build for ongoing support

## Interaction History
- 2026-03-02 — Dossier built (prior meetings had occurred — this was a follow-up)
- 2026-03-05 — 1:1 call at 2:45 PM EST. Full meeting — pain points mapped, 4-phase roadmap discussed, Phase 1 ballpark quoted ($4–5K), follow-up meeting scheduled for March 12.
- 2026-03-12 — Follow-up scheduled: 1:45 PM EST (Nick) / 2:45 PM Ken's time. Purpose: screen share walkthrough of Ken's full payroll workflow + SOW gathering.

## Next Action
- **What:** Screen share meeting — Ken walks Nick through his payroll workflow end-to-end. Goal: gather enough detail to write Phase 1 SOW.
- **When:** Thursday, March 12, 2026 at 1:45 PM EST (Nick) / 2:45 PM Ken's time
- **Calendar:** Invite already sent to ken.crossman@icloud.com
- **Owner:** Nick

## Pre-Meeting Prep Reminders (for March 12)
- Ask: What exact data fields come out of TherapyNotes?
- Ask: What are the edge cases in the payroll calculation?
- Ask: How does he handle part-time vs full-time therapists differently?
- Ask: Are there exceptions or manual overrides baked into the Excel formulas?
- Reference: BPN has built CEO KPI dashboards and multi-entity reporting for management consulting client

## Intel Notes
- Last updated: 2026-03-05 (post-meeting debrief by SENTINEL)
- Previous intel on "OTA Management" (ZoomInfo artifact) is superseded — Ken's actual company is IPA (Integrative Psychotherapy Associates)

---
## Technical Spec — Phase 1 Payroll Automation (Added 2026-03-05)

### Data Sources
- **TherapyNotes (EHR):** NO API — requires Playwright web scraping
- **QuickBooks:** Has API — lower priority for Phase 1
- **Gusto:** CSV export only for Phase 1 — no API integration needed

### Scrapes Required Per Pay Run (4 from TherapyNotes):
1. Current month appointments
2. Current month missed appointment fees
3. Three-month appointments
4. Three-month missed appointment fees
+ Separate revenue report (current month only)

### Calculation Logic (12 steps):
1. Merge appointments + missed fees into one dataset
2. Filter out sessions under $90 (not counted)
3. Flag sessions $90-$139 as low-fee (counted, marked separately)
4. Sum 1-month sessions per therapist (PTO accrual + Gusto entry)
5. Sum 3-month sessions ÷ 12 = smoothed weekly average ("grace week" method)
6. Compare weekly avg against individual thresholds → green/yellow/red rate flag
7. Pull revenue per therapist from revenue report
8. Apply individual revenue % → gross wages (ranges: 40%-65%)
9. PTO: (monthly revenue ÷ monthly sessions) × PTO hours = PTO payout
10. Clinical supervision: same formula as PTO
11. Unallocated revenue + practice refunds → separate buckets
12. Final output: per-therapist wages ready for Gusto entry

### Per-Therapist Config (stored in DB):
- Name + ID
- Individual revenue % (40%-65%)
- Session threshold (maintain/increase/decrease rate)
- Whether they do clinical supervision
- Employment type (W2)

### Web App — 3 Screens:
1. **Run Payroll** — pick pay period, hit run, review table (sessions/revenue/rate flag/wages/PTO), manual override with note
2. **Therapist Config** — admin UI for Ken to manage records, rates, thresholds
3. **History** — every past pay run stored + viewable (seeds future KPI dashboard)

### Export:
- CSV formatted to match Ken's existing Gusto payroll form

### Infrastructure (BPN preference):
- Cloud: Google Drive
- Database: Supabase (Postgres)
- Secure login + 2FA
- Raw data snapshots stored each run for auditability
- (Notes originally said DigitalOcean/Postgres — Nick updated to Google Drive + Supabase)

### Estimate:
- **67-97 hours**
- **Fixed price: $10,000-$14,000**
- Structure: 50% upfront / 50% on delivery / 60-day bug warranty / monthly retainer pitch after

### ⚠️ CRITICAL FLAG:
Nick quoted Ken **$4-5K ballpark** on the March 5 call.
Actual scoped estimate is **$10,000-$14,000**.
Must reframe before SOW delivery — use Thursday March 12 workflow walkthrough to reset expectations naturally: "now that I've had a chance to map out the full scope..."
