# Michael Madden — Contact Dossier

## Status
**Active — Proposal Stage** *(upgraded Apr 1, 2026 — meeting went exceptionally well; follow-up locked for **Apr 9** — virtual zoom-in confirmed; Nick and Blake may attend in person if timing works)*

## The Basics
- **Name:** Michael Madden
- **Company:** Cushman & Wakefield, Chicago
- **Title:** Senior Broker / Partner (10+ year CRE veteran)
- **Email:** michael.madden@cushwake.com *(confirmed via sent mail thread, Apr 1)*
- **Location:** Chicago, Illinois
- **Connection:** Introduced by Tate Surtani via discovery call March 25, 2026
- **Birthday:** Weekend of April 12–13, 2026 *(week after the Apr 9 follow-up — flag for QUILL)*
- **Tax status:** 1099 independent contractor (~40–45% to taxes)

## The Opportunity
**Custom CRE CRM / Broker Intelligence Platform** — BPN to build a fully custom system that replaces Michael and Tate's fragmented stack and becomes THEIR property (not C&W's). The system manages their full book of business: buildings, tenants, leases, contacts, comps, and outreach.

**This is not an off-the-shelf CRM.** The pitch is ownership + intelligence. They are independent brokers, so their data must belong to *them*, not to Cushman & Wakefield.

**SaaS opportunity flagged:** Michael floated during the meeting — *"Could this become a product for all CRE brokers? Every team is frustrated with the same thing."* Tate added: *"I've been thinking about this for 6 years."* This is a real productization path beyond the BPN custom build.

## The Decision Maker
- **Michael Madden IS the buyer.** Holds the BD expense account. Budget is not a concern (prior: "a thousand or whatever on top is nothing").
- **Tate Surtani** is the champion/connector — NOT the buyer.
- **Filip** (last name unknown — first name confirmed as "Filip" with one L) — C&W broker who joined near end of Apr 1 meeting. W2/salary, not 1099. Uses ACT database with exportable data. Should be included in the build conversation.

## Critical Business Context
- Michael and Tate are **INDEPENDENT BROKERS** — not C&W employees. They bring half their commission to C&W; C&W provides desk, computer, and minimal benefits.
- **THE KEY INSIGHT:** They are wary of putting their data into C&W-owned systems because data legally becomes company IP. BPN's system must be *their* system — this is the core differentiator over CoStar, C&W's internal tools, or any enterprise CRM.
- They **hate CoStar** — data is inaccurate. They trust their own gathered data far more.
- They **trade lease comp data with other brokers** (CBR, other firms) to build their database — relationship-based data sourcing, not API-based.
- **Commission structure:** New lease = $1.50/SF × lease term (years). Renewal = $1.25/SF × lease term.
- **Biggest time sink:** Research interleaved with outreach = 4–5 hours per 20-company call list. Goal: collapse to 45 minutes.

## Full Data Model (mapped April 1)

### 5 Macro Objects
1. **Contacts** — Individual people (tenants, brokers, decision-makers)
2. **Companies** — Tenant/prospect organizations
3. **Buildings** — Physical properties in their portfolio
4. **Leases (Activities)** — Lease records tied to Companies + Buildings
5. **Comps** — Closed deal records with SF, rate, term, escalations

### Relationships
- Companies → have Contacts
- Companies → have Leases in Buildings
- Buildings → have multiple tenant Leases
- Leases → have expiration dates, SF, rent info
- Comps → recorded when deals close

### Key UX Rule
Every object has a **List View** and a **Detail View**. Detail view branches to all related objects. Example: Building detail → shows tenant companies → their leases → their contacts → back to buildings.

### The Circular Data Model
`Building → Companies in it → their Contacts → their Leases → back to Building`

## Pipeline / Kanban Status Stages (Deal Board)

The deal pipeline uses this exact flow:

```
Uncategorized → Monitor Long Term → Near Term → Strategy → Meeting Scheduled → Touring → Negotiating → Lease Review → Closed Won / Dead / Lost
```

### Lease Trigger Logic
| Lease Status | Action |
|---|---|
| 24+ months to expiration | **Monitor Long Term** — periodic touches, market updates |
| Under 24 months | **Near Term** — ramp up outreach |
| Active pursuit | **Strategy** — near-daily broker attention |
| Deal closes | **Auto-trigger:** competitor research on similar companies in same building |

## Comps Tracking — Detailed Fields

When a deal closes, record the following:

| Field | Details |
|---|---|
| Tenant name | — |
| Building address/name | — |
| City, County | — |
| Type | New Lease / Renewal / Restructure / Sublease |
| Footprint | Expand / Downsize / In Place |
| Execution month | — |
| Lease commencement date | — |
| Lease expiration date | — |
| Term (months) | — |
| Free rent (months) | — |
| Gross term | — |
| TI (tenant improvement allowance) per SF | — |
| Asking rent | — |
| Effective rent | — |
| Pro rata: TI per year of term | — |
| Pro rata: Free rent per year of term | — |
| Total concession package | — |

> **AI angle:** Train a model on their own comps dataset → huge competitive intelligence tool. Michael's team becomes the most data-rich independent broker operation in Chicago.

## Personal Deals Ledger (Michael's Private Tab — NOT for team view)

Track Michael's personal deal economics separately:

- Execution date
- Commission due date
- Payment received date
- Company, address, suite, SF
- Monthly commission / gross commission
- **Goal thermometer** — YTD earnings vs. annual goal
- **Tax savings tracker** — Michael is 1099, pays ~40–45% to taxes; system helps estimate and track set-asides
- Average SF per deal
- Weighted commission rate

## Dashboard

| Widget | Details |
|---|---|
| Today's Top 10 | Star-tagged items per user — each broker sees their own starred priorities |
| Team / Personal toggle | Switch between team-wide view and personal view |
| Pipeline count | Total companies, active prospects, deals in pipeline |
| Goal thermometer | Quarterly targets: X leads → X proposals → X closes |
| Commission tracking | By quarter and by year |

## Data Import Strategy

| Source | Method | Notes |
|---|---|---|
| **Airtable** | CSV export confirmed (Grid view → Export CSV) | ~1,200 contacts currently in Airtable — start here |
| **ACT (Michael)** | Excel export | Notes cannot be exported from ACT — data only |
| **ACT (Filip)** | Excel export | Filip also has ACT data to import eventually |

**Import strategy:** Import all data with redundancies first → then build an easy cleansing tool inside the platform (don't try to clean before import).

## ZoomInfo Integration

- **Michael's plan:** ZoomInfo AI Copilot
- **Goal:** Search contact name in platform → ZoomInfo auto-populates name, email, phone, title
- **Michael's preference:** Manual contact selection only — 3–5 contacts per company max. He wants to stay selective, NOT bulk-import everything.
- **Dev action needed:** Confirm whether ZoomInfo AI Copilot plan includes developer API access. May require a plan upgrade.
- **Caveat:** ZoomInfo is finicky about data extraction — expect friction.

## Engage Integration

- **What it is:** C&W's internal system tracking which broker is pursuing which company
- **How it works:** Before reaching out to any company, system auto-checks Engage — if another C&W broker has an active pursuit, the company is flagged off-limits
- **Critical concern:** Michael and Tate do **NOT** want other C&W teams to see their data — **data ownership is non-negotiable**. The Engage check is one-directional: they see conflicts, but their data is not exposed to others.

## A/B Testing (Email Outreach)

- Test email variations across different contact groups
- Track open rates and conversion rates
- System learns what's working and surfaces winning templates automatically

## Full Feature List (extracted from April 1 meeting)

1. **One-click email blast** — from building page, select tenants, email all or selected contacts instantly
2. **ZoomInfo integration** — auto-populate contact info into the system (dedup logic needed)
3. **Engage integration** — check if another C&W broker is already working a company before outreach
4. **Outreach brief generation** — before calling a company, system auto-generates a research brief
5. **Voice memo → auto-notes** — after calls, voice memo converts to structured notes
6. **Pro rata share calculation** — Tenant SF / Building SF × Annual Rent = cash flow gap if tenant vacates
7. **Lease expiration alerts/triggers** — ping broker when leases approach expiration; automated prospecting trigger
8. **Market data triggers** — external news auto-blasts to relevant building contacts before competitors see it
9. **Stale deal/task aging** — flag tasks sitting untouched for 30+ days
10. **Team visibility layer** — see what colleagues are working on to avoid deal conflicts
11. **Comp tracking** — record comp data when deals close
12. **Rent roll view** — per building: tenants, % occupancy, lease expiration dates
13. **Pipeline/Kanban board** — deal stages per above; auto-trigger logic on lease expiration and deal close
14. **Personal deals ledger** — Michael's private tab for commission tracking and tax savings
15. **Dashboard** — Top 10, goal thermometer, pipeline count, commission by quarter/year
16. **A/B email testing** — variation testing, open rate tracking, winning template surfacing

## Build Constraints
- **DO NOT** build on CoStar API — they don't trust CoStar data and don't want it
- **Data ownership:** System must be theirs, not C&W's — no white-labeling under C&W branding
- **ACT database import:** Michael has his ACT database exported as Excel — plan for clean import at build kickoff
- **Filip's data import:** Filip also has Excel-exported data from his ACT database — include in import scope

## Pain Points (original + updated)
- Fragmented stack: ACT + Airtable (1,200 contacts locked) + ZoomInfo + Excel + email — all separate
- Research interleaved with outreach destroys daily efficiency
- Nothing on the market is built for independent CRE brokers who own their own data
- Prior developer (friend-of-a-friend, 1 month) went nowhere — BPN has credibility advantage

## Referral Potential — MAJOR
- If BPN delivers, the entire C&W Chicago office is a referral engine
- Michael's SaaS question ("could this be a product for all CRE brokers?") signals he sees broader market fit
- This could open the door to the full Cushman & Wakefield broker network nationally

## Interaction History
- **Mar 25, 2026** — First contact. Discovery call with Tate Surtani, Lily Somers, Nick, and Blake. Immediately clicked. In-person scoping day locked in for April 1.
- **Apr 1, 2026 (Session 1)** — In-person discovery day, Chicago. Full data model mapped. All core features captured. Filip (another broker) joined late. Email confirmed. Meeting went exceptionally well.
- **Apr 1, 2026 (Session 2)** — Deep dive on pipeline stages, comps tracking, personal deals ledger, dashboard, data import strategy, ZoomInfo/Engage integrations, A/B testing. Follow-up corrected to **April 9** (not April 8).
- **Apr 9, 2026** — Virtual build review. Platform demoed live. Platform is live with 1,200 leases loaded. Data issues resolved. New feature requests captured. Strategic vision discussed. See meeting log below.

---

## MEETING LOG — April 9, 2026

**Format:** Virtual (Zoom). Attendees: Nick, Blake, Philip, Michael, Tate.

### Platform Status at This Meeting
- Leases, contacts, companies, comps, opportunities (Kanban) all live in the platform
- Blake had missed the leases Excel file Michael sent — only pulled from the Airtable building database. Michael resent it on the call. Blake confirmed he'll import.
- ~30 opportunities need to be manually re-classified in the Kanban (not much — Michael/Tate to drag and drop)
- Comps page: complete and imported with filter system
- Data cleanup tool ("data Tinder"): built and shown — swipe to keep/archive/delete contacts with missing info. Michael loved it. Optional enhancement: auto-keep if all fields filled.

### New Feature Requests (April 9)

| Feature | Priority | Notes |
|---|---|---|
| Team toggle dashboards | High | 4 views: Michael / Tate / Jonathan / Team. Tag data per team member. "Team" column already exists in export data. |
| Inline editing | High | Double-click a field to edit via dropdown, without opening full edit modal |
| Sticky horizontal scroll bar | High | Bottom nav so users can scroll right without using trackpad |
| History / Audit trail | High | Two-part: (1) Auto-log: who changed what, when, what it changed from. (2) Manual notes field per company/contact/lease. Company level aggregates all contact + lease history. |
| Populating agent | High | Takes emails, call transcripts, lease abstractions → parses and auto-populates CRM fields. UX: "suggest adding this contact/lease — approve or deny." Granola transcript integration is the primary use case. |
| Prospecting agent | High | On company classification change (→ client) or manual trigger: research similar companies. Deliver as morning email digest OR on-demand in-platform. Once ZoomInfo connected: auto-pull contact emails from similar companies. |
| To-do list agent | Medium | Once activity list is starred/pinned, agent works through it |
| Call scoring agent | Medium | Granola transcripts → custom criteria → 1-5 score. BPN already uses this internally (Nick averages 3/5, Phil also using). Offer to build custom criteria for Michael/Tate. |
| Building nugget + email generation | Medium | Click "generate email" from a building page → personalized outreach draft. Mass send blocked by C&W IT domain restrictions (DNS authorization needed). Blake researching workaround. |
| Old comps auto-roll | Low | When lease expiration date passes, auto-move to "old comps" tab |
| Auto-keep in data cleanup | Low | If all fields are filled on a contact, auto-keep without manual confirmation |

### ZoomInfo API
- Looked into it live on call. Requires admin portal login for API key.
- Michael has the highest ZoomInfo subscription on the team — may have admin access.
- Blake to send Michael a video tutorial on how to pull the API key from the admin portal. Michael sends key → Blake connects.

### Team Member Confirmed: Jonathan
- Jonathan (last name referenced as "Metzel" in passing): BPN-built app was shown to him; he's in San Francisco currently. Michael described him as a "mega beast." He will have his own toggle view in the dashboard.
- Full team: Michael / Tate / Jonathan / (potentially Filip)

### Payment Flag (Post-Call)
- Nick noted after the call: **"The contract says they owe us 7.5 grand today."** — $7,500 payment due April 9, 2026. Needs to be chased if not received.

### Strategic Vision Discussed
- Michael's goal: show this to other broker teams in the C&W Chicago office. Has 4 brokers he could show now. One specific unnamed person he wants to show once data is fully populated.
- Michael's framing: "If I put this in front of any office, they'd be like — this is light years more sophisticated and exciting than anything I've ever used."
- BPN's framing on the call: Validate with Michael's team → expand to other teams → potentially sell to all of Cushman & Wakefield as licensed/proprietary software. Michael endorsed the vision but wants conviction from using it first.
- Michael's approach: "Let me get the data populated. Once this looks like a real database, I want to jump in front of it." Patient but clearly excited.
- Tate also mentioned showing it to Charlie and Luke (other C&W team) for feedback.

### BrotherLink Mention (End of Call)
- Michael said unprompted: "That app you guys built was super cool. You guys should sell that to every chapter."
- Nick mentioned he talked to IFC president that day and they're getting all younger kids on at 6pm.
- Tate offered to tell brothers to message Nick — "best internship you could get."

### Next Meeting
- **Wednesday, April 15 or 16, 2026 — 10-11am**
- Goal: both sides complete their work beforehand. Blake: leases import + feature upgrades. Michael/Tate: data cleanup.

---

## Next Actions

| Action | Owner | Deadline | Status |
|---|---|---|---|
| Import leases Excel that Michael re-sent on April 9 | Blake | Before April 15 meeting | 🔴 Pending |
| Build feature upgrades: team toggles, inline editing, sticky scroll, history/audit trail | Blake | Before April 15 meeting | 🔴 Pending |
| Michael/Tate clean up contact data in the platform | Michael/Tate | Before April 15 meeting | ⏳ Their side |
| Send Michael video tutorial on ZoomInfo admin portal / API key | Blake | ASAP | 🔴 Pending |
| Chase $7,500 payment (contract due April 9) | Nick | April 10–11, 2026 | 🔴 URGENT |
| Research C&W domain DNS workaround for mass email send | Blake | Before April 15 meeting | 🔴 Pending |
| QUILL: Send Michael a warm birthday message (birthday weekend April 12–13) | Nick | April 12, 2026 | 🔴 Pending |
| Wednesday meeting April 15 or 16 at 10-11am | Nick + Blake | April 15/16, 2026 | 📅 Confirmed |

## Intel Notes
- **Last updated:** April 1, 2026 (Session 2 additions)
- **Email confirmed:** michael.madden@cushwake.com
- Independent broker data ownership insight is the strategic differentiator — lead with this in proposal
- Filip (C&W broker, W2) introduced at this meeting — see stub dossier: `filip-cw-chicago.md`

## Tags
- Custom CRM
- CRE vertical
- Broker intelligence platform
- Lease management
- Data ownership differentiator
- SaaS opportunity
- Chicago
- Cushman & Wakefield
- Independent broker
- Referral network: C&W Chicago office
- ZoomInfo integration
- Pipeline/Kanban
- Comps tracking
- A/B email testing
