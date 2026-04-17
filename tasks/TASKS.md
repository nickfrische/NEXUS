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

## IU VENTURES AI WORKSHOP — POST-SESSION FOLLOW-UPS (Apr 16)

- [ ] [urgent] QUILL: Draft post-workshop follow-up to Jon Barada (jon) — due TONIGHT
  tags: #iuventures #jon-barada #urgent #quill
  agent: QUILL
  dossier: jon-barada
  notes: Reference the contact dashboard moment specifically — "you said this was the solution you've been talking about for years." Warm but brief. Mention second session. Ask about Venture Summit May 21-22 and whether there's any role for BPN. This is the highest-value follow-up from today.

- [ ] [urgent] QUILL: Draft post-workshop follow-up to Tony Armstrong — due tomorrow Apr 17
  tags: #iuventures #tony-armstrong #urgent #quill
  agent: QUILL
  dossier: tony-armstrong
  notes: Reference the PE firm angle — he mentioned they just started a new engagement. Mirror that energy. Brief and forward-looking. Ask about IU Ventures Fellows Program as a future touchpoint.

- [ ] [urgent] QUILL: Draft post-workshop follow-up to Olivia Schmitt-Metz — due tomorrow Apr 17
  tags: #iuventures #olivia-schmitt-metz #urgent #quill
  agent: QUILL
  dossier: olivia-schmitt-metz
  notes: Reference the live dashboard build — she was most impacted by this. Ask if she wants help connecting Airtable to her Claude workspace so she can query angel network data. This is the natural next step for her.

- [ ] [urgent] Send invoice to Mike at IU Ventures
  tags: #iuventures #payment #urgent
  agent: NEXUS
  notes: Tony explicitly said "send us an invoice, I'll send Mike in like a country" (garbled but clear intent). Mike handles finance/W2/check info. Nick needs to get BPN's payment info to Mike and send invoice. Do NOT let this slip.

- [ ] [todo] Schedule second AI Workshop session with IU Ventures team
  tags: #iuventures #secondsession
  agent: NEXUS
  notes: All three (Jon, Tony, Olivia) explicitly said they want a second session. Jon said "biannually or annually" to stay up to date. Second session should be more hands-on, less setup, more building — now that foundation is laid. Jon wants to build out the Granola → contact context pipeline. Olivia wants to upload her 2,100-person angel network spreadsheet. IU IT constraints need to be resolved before next session.

- [ ] [todo] Resolve IU IT compliance path for Claude Code
  tags: #iuventures #technical
  agent: NEXUS (Blake)
  notes: IU blocked admin downloads — couldn't install Node.js with standard user. May have enterprise Microsoft agreement (Tony's "Coke vs Pepsi" analogy). Options: (1) IU IT grants admin for specific tools, (2) BPN uses Claude Desktop only (no Claude Code), (3) IU has a co-pilot deal that replicates some of what Claude Code does. Blake should check if Claude Desktop + local file system is sufficient for the use cases they need. This blocks full capability for second session.

- [ ] [todo] STRATEGIC: Develop IU Angel Network AI Tool concept
  tags: #iuventures #strategic #product
  dossier: jon-barada
  notes: Jon described a vision unprompted: when Olivia sends due diligence to angel network members, they each get an AI-powered tool to chat with the DD report, understand cap tables, check size, industry trends, ask follow-up questions. Jon also wants a searchable contact database for all 2,500+ network members. This is a real BPN product opportunity. Evaluate scope and whether to propose it as a project.

---

## ELECT EXPRESS — JASON (PROPOSAL REQUESTED — Apr 14)

- [ ] [urgent] Get Jason's email address — can't send proposal without it
  tags: #elect-express #jason #urgent
  agent: NEXUS
  dossier: jason-elect-express
  notes: Jason asked Nick to email the proposal but didn't give his email. Either text/call through Ned's intro or ask Ned to facilitate. Do this before anything else.

- [ ] [todo] QUILL: Draft $6,000 fixed bid proposal for Jason — Elect Express
  tags: #elect-express #jason #quill #proposal
  agent: QUILL
  dossier: jason-elect-express
  notes: Scope = (1) Website revamp — modern design, online booking (estimate + troubleshoot), connected to HouseCall Pro. (2) Beside Me AI phone agent → HouseCall Pro integration via Zapier. Booking flows directly into HouseCall. Emergency/live person → call forward to Jason's cell. Fallback = text booking link. (3) Prompt optimization for Beside Me — natural conversation flow, no repetition, live agent escalation. Fixed bid $6K. Keep language simple — Jason is not technical, he wants outcomes. Use contract-and-proposal-writer skill.

- [ ] [todo] Verify Beside Me → HouseCall Pro integration path before sending proposal
  tags: #elect-express #technical
  agent: NEXUS (Blake/Phil)
  dossier: jason-elect-express
  notes: Jason said the integration broke when he reinstalled the app. It used to work. Check if Beside Me (formerly M1) has a native HouseCall Pro integration or if Zapier is the bridge. Need to confirm this is buildable before committing to it in the proposal.

- [ ] [done] Ned = Edward "Ned" Morrison — one of Nick's best friends, Andy Morrison's brother. Dossier created: ned-morrison.md

---

## HAGEMAN GROUP — ALEX DICKE (HOT INBOUND — Apr 13)

- [ ] [waiting-nick] APPROVE + SEND: reply to EJ intro email, set up discovery call with Alex
  tags: #hageman #inbound #urgent #quill
  agent: QUILL
  dossier: alex-dicke-hageman-group
  notes: EJ Williams intro'd Alex Dicke (Director, Hageman Group) to Nick. They need a platform to auto-ingest monthly Excel files, clean/unify the data, and display it interactively with AI Insights. Perfect BPN fit (DLSI + EPIC BI combo). Draft is below — reply-all to EJ's email thread.

- [ ] [todo] INTEL: Research Hageman Group before discovery call
  tags: #hageman #intel
  agent: INTEL
  dossier: alex-dicke-hageman-group
  notes: LinkedIn: linkedin.com/company/hagemangroup/ — find: what industry, size, location, what kind of data they work with, Alex Dicke's background. Understanding their data = better discovery call.

---

## RYAN KITCHELL FOLLOW-UPS — Apr 13 Call

- [ ] [todo] SCOUT: Research ISMA (Indiana State Medical Association) — who runs it, how to approach
  tags: #healthcare #isma #scout #distribution
  agent: SCOUT
  dossier: ryan-kitchell
  notes: Ryan Kitchell's top recommendation for reaching private practice docs in Indiana. ISMA lobbies for private practice doctors at the statehouse, collects dues, and actively looks for value to bring back to members. They maintain a full list of Indiana private practice doctors. Find: who leads ISMA, their contact info, whether they have a tech/innovation program, and whether other healthcare AI companies have already approached them. This could be BPN's distribution channel into the whole Indiana private practice market.

- [ ] [todo] Nick reaches out to Jake Rester — FIJI alum, doctor, healthcare connections
  tags: #healthcare #jake-rester #brotherlink
  agent: NEXUS
  dossier: ryan-kitchell
  notes: Ryan Kitchell's recommendation. Jake is a FIJI alum, becoming a doctor, has "a networking bone in his body" unlike most docs. Ryan has talked to him about FIJI stuff. Jake may have built a list of FIJI doctors or know connections in the private practice world. Double purpose: BPN healthcare intro + BrotherLink doctor alumni database. Nick should reach out casually through FIJI network angle.

- [ ] [waiting-nick] Text Charlie Lake (rush chair) — rush quality conversation per Ryan's request
  tags: #fiji #rush #urgent
  agent: NEXUS
  notes: Charlie Lake's number: 424-316-7105. He's one of the three FIJI rush chairs (Luke A., Charlie Lake, Vince Darman). Current pledge class is reportedly weak (no IM teams, poor grades, partying/drugs). Ryan asked Nick to impart wisdom. URGENT — next rush weekend is this weekend (April 18-ish). Ryan is hosting summer rush himself. "You can weather one bad class. Two in a row and we start packing bags."

---

## PHI PSI — AARON (APR 9 CALL)

- [ ] [waiting-nick] Did Aaron text you the Phi Psi president's number? If yes → reach out to president re: BrotherLink
  tags: #brotherlink #phi-psi #urgent
  agent: NEXUS
  dossier: aaron-phi-psi
  notes: Aaron committed to (1) passing BrotherLink info to the president and (2) texting Nick the president's number. Nick should have received it by now. If yes, reach out to president — warm angle is Aaron's referral. If no, Nick may need to ping Aaron.

---

## BROTHERLINK CHAPTER OUTREACH — APRIL 7 MEETINGS

- [ ] [urgent] TEXT Gavin Hume (IFC President) — warm intro via Ryan Pechous
  tags: #brotherlink #gavin-hume #urgent #ifc
  agent: NEXUS
  dossier: gavin-hume-ifc-president
  notes: Ryan Pechous texted Nick his number on the April 7 call. Ryan said he'd give Gavin a heads up. Gavin independently had a similar idea about pan-IFC alumni connectivity. He's the most connected person on IU campus. TEXT HIM FIRST. Suggested opener in his dossier. This is potentially an IFC-wide distribution play.

- [ ] [todo] Follow up with Ryan Pechous (Phi Delt) — ask how his CAB call went April 7
  tags: #brotherlink #ryan-pechous #phi-delt
  agent: NEXUS
  dossier: ryan-pechous-phi-delt
  notes: Ryan showed BrotherLink to his Chapter Advisory Board at 3:30-4pm on April 7. They've been begging for alumni connectivity for years. Follow up by April 10-11 — ask what they said, whether they want to meet.

- [ ] [todo] Follow up with Luke (Beta) — check if he talked to exec + alumni chairs
  tags: #brotherlink #luke-beta #beta-theta-pi
  agent: NEXUS
  dossier: luke-wall-beta
  notes: Luke committed to talking to exec team, alumni chairs, and chapter advisor. Nick asked to be in a group chat with the alumni chairs. Follow up April 14-17. Use Dusty May reconnect story as the proof point if needed.

- [ ] [todo] Text Nick Hesch (Sigma Nu) — check in, did alumni chair react to the app?
  tags: #brotherlink #nick-hesch #sigma-nu
  agent: NEXUS
  dossier: nick-hesch-sigma-nu
  notes: Nick Hesch planned to show the alumni chair the app immediately after the April 7 call. He wants to move fast before semester ends. Reconnect mid-week (April 13-14). Ask what the alumni chair said. Next step: schedule a demo visit to the house before end of semester.

---

## JEFF POWERS — ACACIA / BROTHERLINK (ACTIVE)

- [ ] [waiting-nick] TEXT Jeff Powers — check in, ask if he reviewed the two-pager + demo video
  tags: #brotherlink #jeff-powers #urgent
  agent: NEXUS
  dossier: jeff-acacia
  notes: Jeff said text is the only way. Check in early-mid week. Ask what he thought of the two-pager and video Nick sent him April 9. Keep it short and warm. Deadline: April 15–16.

- [ ] [todo] QUILL: draft stakeholder one-pager "Why BrotherLink vs Slack/LinkedIn/Facebook"
  tags: #brotherlink #jeff-powers #quill
  agent: QUILL
  dossier: jeff-acacia
  notes: Jeff asked for this explicitly. Needs to explain: why NOW, what's broken with existing platforms (ghost towns), benefits per stakeholder group (undergrads: jobs/connections; grads: nostalgia + talent pipeline; chapter: donations + visibility). This becomes Nick's universal leave-behind for all fraternity conversations.

- [ ] [todo] Follow up with Jeff after April 17 Acacia event — ask how it went, re-raise BrotherLink for August
  tags: #brotherlink #jeff-powers
  agent: NEXUS
  dossier: jeff-acacia
  notes: Jeff's big event = April 17 (Dinner with Men of Acacia + LPBI Workshop, 14 alumni). Nick has IU Innovates pitch that day — cannot attend. Text Jeff April 18–20. Ask how it went. Soft reopen on August BrotherLink launch for Acacia.

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

## IU INNOVATES PITCH COMPETITION — FINALS (URGENT)

- [ ] [waiting-nick] CONFIRM YOUR SPOT — message Parker Busick on Slack by WEDNESDAY 4/15 5PM
  tags: #iuinnovates #urgent #deadline
  agent: NEXUS
  notes: Less than 50% of applicants made finals. Must confirm or spot given away. Parker Busick on IU Slack.

- [ ] [waiting-nick] Decide which product to pitch (BrotherLink? AI team? BPN?)
  tags: #iuinnovates #urgent
  agent: NEXUS
  notes: Need to know before NEXUS can help build the deck. Also need to know which stage you're in (Explore/Build/Test/Customer) — determines prize pool and framing.

- [ ] [todo] Build 5-minute pitch deck
  tags: #iuinnovates #deck
  agent: NEXUS
  notes: Strict 5-min cutoff. Recommended structure: Hook → Problem → Validation → Solution → Traction/Action → Market (optional) → Team (optional) → Next Steps (optional). Friday 4/17 12:30-4:30pm.

- [ ] [waiting-nick] Attend Thursday feedback session (optional but high value)
  tags: #iuinnovates
  notes: Thursday 4/16 12:30-2pm at Von Lee — live feedback on pitch. Recommend going.

---

## DR. NICK WILSON — RESTRUCTURED CHIROPRACTIC (ACTIVE — PROPOSAL DUE)

- [ ] [waiting-nick] Did you send the scope/proposal to Dr. Nick? Committed to Friday April 11.
  tags: #wilson #urgent
  agent: NEXUS
  dossier: nick-wilson
  notes: Nick verbally committed to sending scope + pricing by Friday April 11. Confirm if sent. If not, draft immediately — scope is Phase 1: social media content system + SEO/blogs + newsletter automation.

- [ ] [todo] QUILL: Draft Phase 1 scope + pricing proposal for Dr. Nick Wilson
  tags: #wilson #quill #proposal
  agent: QUILL
  dossier: nick-wilson
  notes: Scope = (1) Replace PBL scripts/captions with AI system — trend research, brand-voice scripts, shot lists, posting automation. (2) SEO/blog automation. (3) Newsletter/email on consistent cadence (Functional Friday idea). Pricing per AI team product model: ~$3K upfront + $1-2K/month retainer. Use contract-and-proposal-writer skill. Reference: PBL's scripts/captions doc Dr. Nick sent to Nick's email during the April 7 call.

- [ ] [waiting-nick] Has Dr. Nick's videographer gotten back with edit pricing?
  tags: #wilson
  agent: NEXUS
  dossier: nick-wilson
  notes: Dr. Nick said his videographer would quote him for back-end video edits. This affects Phase 1 scope (whether BPN handles edits or videographer does). Follow up if no word by April 14.

- [ ] [todo] STRATEGIC FLAG: If Phase 1 delivers, Dr. Nick wants to partner to sell to 400+ chiro network
  tags: #wilson #strategic
  agent: NEXUS
  dossier: nick-wilson
  notes: Dr. Nick is a thought leader/influencer in chiropractic space. Explicitly proposed a venture/channel relationship. Keep this in mind — Phase 1 is an audition for a major distribution play.

---

## HIGH ALPHA — MIKE FITZGERALD (IN CONVERSATION)

- [ ] [waiting-nick] What happened on the Apr 8 call with Mike? Surface outcome so NEXUS can queue next steps.
  tags: #high-alpha #mike-fitzgerald #urgent
  agent: NEXUS
  dossier: mike-fitzgerald-high-alpha
  notes: 30-min call happened Apr 8 at 2:30pm. Nick prepped with Claude beforehand. Need to know: did it go well? What did Mike say? Is there a next step or follow-up needed?

- [ ] [todo] Follow up with Mike Fitzgerald if no response or next step has been set
  tags: #high-alpha #mike-fitzgerald #quill
  agent: QUILL
  dossier: mike-fitzgerald-high-alpha
  notes: Depends on call outcome above. If Mike expressed interest, draft a follow-up that proposes a specific next engagement (paid diligence on one portfolio company). Frame BPN as the AI technical layer — not business strategy.

---

## CUSHMAN & WAKEFIELD CRM — MICHAEL MADDEN (ACTIVE PROJECT)

- [ ] [urgent] CHASE $7,500 PAYMENT — contract says due April 9
  tags: #cw #madden #payment #urgent
  agent: NEXUS
  dossier: michael-madden-cushman-wakefield
  notes: Nick flagged after the April 9 call: "The contract says they owe us 7.5 grand today." Confirm if payment received. If not, Nick needs to follow up with Michael directly.

- [ ] [todo] QUILL: Send Michael birthday message (birthday weekend April 12–13)
  tags: #cw #madden #quill #relationship
  agent: QUILL
  dossier: michael-madden-cushman-wakefield
  notes: Keep it short and warm. Not a sales touch — a genuine one. Send April 12.

- [ ] [todo] Blake: Import leases Excel file Michael re-sent on April 9 call
  tags: #cw #build
  agent: NEXUS (Blake)
  dossier: michael-madden-cushman-wakefield
  notes: Blake missed this file in the original import. Michael resent it on the call. This is the file with SF, term length, lease specifics — missing from the building database import.

- [ ] [todo] Blake: Feature upgrades before April 15/16 meeting
  tags: #cw #build
  agent: NEXUS (Blake)
  dossier: michael-madden-cushman-wakefield
  notes: (1) Team toggle dashboards: Michael / Tate / Jonathan / Team views — tag by team member column. (2) Inline editing: double-click field to edit via dropdown. (3) Sticky horizontal scroll bar at bottom. (4) History/audit trail: auto-log (who changed what + when) + manual notes field. Company level aggregates all contact + lease history.

- [ ] [todo] Blake: Send Michael video tutorial on ZoomInfo admin portal — request API key
  tags: #cw #zoominfo #build
  agent: NEXUS (Blake)
  dossier: michael-madden-cushman-wakefield
  notes: Michael has highest ZoomInfo subscription. May have admin access. Blake to send tutorial on how to pull API key from admin portal. Once received, Blake connects ZoomInfo to the platform.

- [ ] [todo] Blake: Research C&W domain DNS workaround for mass email send from cushwake.com
  tags: #cw #build
  agent: NEXUS (Blake)
  dossier: michael-madden-cushman-wakefield
  notes: Mass email send from C&W email domain requires C&W IT to add DNS authorization records. Blake flagged this on the call as something to research. Sending from a different email is not ideal for Michael/Tate.

- [ ] [waiting-nick] C&W Wednesday meeting — April 15/16 at 10-11am
  tags: #cw #meeting
  agent: NEXUS
  dossier: michael-madden-cushman-wakefield
  notes: Both sides completing work before this call. Blake: leases import + feature upgrades. Michael/Tate: data cleanup. Goal: go page-by-page and nail down individual features.

---

## KISSEL CAPITAL — LUKE PHENICIE (ACTIVE — VERBAL CLOSE)

- [ ] [waiting-nick] APPROVE + SEND: follow-up email to Luke Phenicie
  tags: #kissel #urgent #quill
  agent: QUILL
  dossier: luke-phenicie-kissel-capital
  notes: Draft at drafts/emails/luke-phenicie-post-meeting-followup.md. Send TODAY before he sends his scope info. Short and warm, confirms $3K thesis automation, no attachment needed.

- [ ] [waiting-nick] Receive scope info from Luke (EOD 2026-04-13 or 2026-04-14)
  tags: #kissel #urgent
  agent: NEXUS
  dossier: luke-phenicie-kissel-capital
  notes: Luke said he'd send over whatever BPN needs to kick off the contract. He's at quarterly EOS meeting 2026-04-14. Watch for his email.

- [ ] [todo] Draft contract/SOW for Kissel thesis automation
  tags: #kissel #contract
  agent: QUILL
  dossier: luke-phenicie-kissel-capital
  notes: Scope = investment thesis automation. $3,000 fixed + small monthly retainer. Scope boundaries: thesis auto-fill to 70-80%, NOT financial modeling, NOT copy-paste from model outputs (that's manual). Use contract-and-proposal-writer skill.

- [ ] [todo] INTEL: research Kissel Capital portfolio companies
  tags: #kissel #intel
  agent: INTEL
  dossier: luke-phenicie-kissel-capital
  notes: Identify current portfolio companies. Flag the Texas company and Canada (Edmonton) company mentioned on call. These are next automation targets after thesis.

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
