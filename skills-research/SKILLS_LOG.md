# NEXUS Skills Research Log
*Updated every Sunday. 10 new BD-focused skill recommendations per week.*
*Researched by NEXUS — verified against installed skills before recommending.*

---

## How to Install Any Skill Listed Here

```bash
# From a repo already cloned in /tmp:
cp -r /tmp/[repo]/skills/[skill-name] .claude/skills/

# Or clone fresh:
git clone --depth 1 https://github.com/[user]/[repo].git /tmp/[repo]
cp -r /tmp/[repo]/skills/[skill-name] .claude/skills/

# Then commit:
git add .claude/skills/[skill-name] && git commit -m "Add [skill-name] skill"
```

---

## Currently Installed Skills (as of 2026-04-12)

- cold-email, email-sequence, copywriting, customer-research, content-strategy
- sales-enablement, competitor-alternatives, pricing-strategy
- deep-research, meeting-minutes-taker, fact-checker
- lead-research-assistant, meeting-insights-analyzer, content-research-writer
- chief-of-staff, cro-advisor, competitive-intel, contract-and-proposal-writer, revenue-operations

---

## Week of 2026-04-13 — Top 10 Recommendations

*Researched from: louisblythe/Sales-Skills, gtmagents/gtm-agents, alirezarezvani/claude-skills, coreyhaines31/marketingskills*

### 1. `product-marketing-context` ⭐ Install First
**Repo:** `coreyhaines31/marketingskills`
**Path:** `skills/product-marketing-context`
**What it does:** Creates `.agents/product-marketing-context.md` — a BPN context file that every other marketing skill reads automatically before running. One setup makes cold-email, copywriting, social-content, and all QUILL output BPN-aware without repeating yourself.
**BD impact:** Makes all installed skills smarter immediately. Install this before anything else.
**Install:** `cp -r /tmp/marketingskills/skills/product-marketing-context .claude/skills/`

---

### 2. `ghost-recovery-sequences` ⭐ High Priority
**Repo:** `louisblythe/Sales-Skills`
**Path:** `skills/ghost-recovery-sequences`
**What it does:** Structured re-engagement sequences for prospects who went silent mid-conversation. Distinguishes recoverable ghosts (got busy, timing shifted) from dead leads (explicit no). 10-20% revival rate with the right sequence.
**BD impact:** Indiana BD is relationship-based — prospects don't say no, they go quiet. This is the systematic answer to that.
**Install:** `cp -r /tmp/Sales-Skills/skills/ghost-recovery-sequences .claude/skills/`

---

### 3. `trigger-event-detection` ⭐ High Priority
**Repo:** `louisblythe/Sales-Skills`
**Path:** `skills/trigger-event-detection`
**What it does:** Detects buying signals — funding rounds, hiring surges, leadership changes, tech stack switches, company expansions — and frames outreach around them. Transforms response rates from 1-3% (cold) to 10-25% (triggered).
**BD impact:** SCOUT uses this to know WHEN to reach out, not just WHO to reach out to. Timing is everything.
**Install:** `cp -r /tmp/Sales-Skills/skills/trigger-event-detection .claude/skills/`

---

### 4. `social-selling`
**Repo:** `louisblythe/Sales-Skills`
**Path:** `skills/social-selling`
**What it does:** Full LinkedIn strategy — profile optimization for buyers (not recruiters), targeted connection sequencing, engagement-first approach before any ask, building personal brand as a founder.
**BD impact:** Your IU/FIJI/Indiana network is your biggest BD asset. This activates it digitally. Warm LinkedIn presence means your outreach emails aren't cold.
**Install:** `cp -r /tmp/Sales-Skills/skills/social-selling .claude/skills/`

---

### 5. `objection-handling`
**Repo:** `louisblythe/Sales-Skills`
**Path:** `skills/objection-handling`
**What it does:** Framework-driven responses to live objections — "too expensive," "happy with current vendor," "not the right time," "need to loop in IT." Applies the Listen → Acknowledge → Clarify → Respond model. Not defensive, not pushy.
**BD impact:** SENTINEL can pull the top 3 likely objections for each prospect into the pre-meeting brief. QUILL can prep responses.
**Install:** `cp -r /tmp/Sales-Skills/skills/objection-handling .claude/skills/`

---

### 6. `decision-maker-identification`
**Repo:** `louisblythe/Sales-Skills`
**Path:** `skills/decision-maker-identification`
**What it does:** Classifies whether a contact is the economic buyer vs. gatekeeper. Adjusts strategy accordingly — extract info from gatekeepers, get introductions to DMs, avoid pitching your full solution to someone who can't say yes.
**BD impact:** INTEL uses this when building dossiers to flag "this person can buy" vs. "this person will forward your email." Prevents the "sounds great, I'll pass it along" dead end.
**Install:** `cp -r /tmp/Sales-Skills/skills/decision-maker-identification .claude/skills/`

---

### 7. `win-loss-reason-extraction`
**Repo:** `louisblythe/Sales-Skills`
**Path:** `skills/win-loss-reason-extraction`
**What it does:** Extracts and categorizes why deals close or die from post-meeting notes — product fit, pricing, timing, competitor, champion left, etc. Builds a structured learning log over time.
**BD impact:** After a few months, NEXUS can tell you: "You lose 60% on price in manufacturing. You win 80% when the intro is through Ron Remak's network." Turns experience into repeatable strategy.
**Install:** `cp -r /tmp/Sales-Skills/skills/win-loss-reason-extraction .claude/skills/`

---

### 8. `saas-metrics-coach`
**Repo:** `alirezarezvani/claude-skills` (finance/)
**Path:** `finance/saas-metrics-coach`
**What it does:** Acts as a senior SaaS CFO advisor. Calculates ARR, MRR growth, CAC, LTV, LTV:CAC, CAC payback period, NRR. Benchmarks against industry standards. Explains in plain English. Includes Python scripts for scenario modeling.
**BD impact:** When prospects ask "what's the ROI?" you're prepared. Walk in knowing the financial language of their stage. Also helps price BPN's AI team product and recurring retainers correctly.
**Install:** `cp -r /tmp/claude-skills/finance/saas-metrics-coach .claude/skills/`

---

### 9. `social-content`
**Repo:** `coreyhaines31/marketingskills`
**Path:** `skills/social-content`
**What it does:** LinkedIn and social media content creation — posts, carousels, threads, content calendar, repurposing existing material. Reads product-marketing-context automatically for brand voice consistency.
**BD impact:** LinkedIn content warms your network before outreach. Your Run the Ball story, NEXUS story, and BPN case studies are content gold sitting unused. When your name is already in someone's feed, your outreach email isn't cold.
**Install:** `cp -r /tmp/marketingskills/skills/social-content .claude/skills/`

---

### 10. `signal-intel`
**Repo:** `gtmagents/gtm-agents`
**Path:** `plugins/abm-orchestration/skills/signal-intel`
**What it does:** Account prioritization layer that combines intent signals, funding data, hiring activity, and engagement patterns into a scoring system. Ranks which accounts to pursue this week vs. next quarter. Includes scoring worksheets and alert matrices.
**BD impact:** Works alongside trigger-event-detection. One detects signals, this one scores and prioritizes them so SCOUT knows where to focus energy.
**Install:** `cp -r /tmp/gtm-agents/plugins/abm-orchestration/skills/signal-intel .claude/skills/`

---

## Research Archive

| Date | Skills Researched | Repos Checked | Installed |
|------|------------------|---------------|-----------|
| 2026-04-13 | 10 | louisblythe/Sales-Skills, gtmagents/gtm-agents, alirezarezvani/claude-skills, coreyhaines31/marketingskills | Pending |

---
*Next research run: Sunday 2026-04-19*
*Auto-researched by NEXUS cron. To add manually: update this file and commit.*
