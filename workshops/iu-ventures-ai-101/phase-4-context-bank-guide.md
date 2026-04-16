# Phase 4: Setting Up Your Context Bank
## Facilitator Guide -- Phil Hess

---

## What a context bank is

A context bank is the collection of files that tells Claude who you are before you type a single word. It loads automatically every session. It is not a prompt you write -- it is a system you build once and then maintain as you work.

For most people it includes:
- A **master briefing file** -- your role, your organization, your standards, what Claude should always do and never do
- **Supporting files** -- voice document, relationship database, templates, criteria, reference materials
- **Live connections** -- links to the tools you already use (Airtable, Notion, Outlook) so Claude reads real data

The goal: Claude knows enough about your work that your prompts can be short and your outputs are immediately useful.

---

## The three phases of setup

### Phase 1 -- Discovery (Claude asks you questions)

Before Claude builds anything, it needs to understand your work. The first thing you do is tell Claude to interview you.

**The framework prompt** *(adapt this to your own words -- do not copy it verbatim)*:

> Tell Claude: you want to set up a context bank for your role. Before building anything, ask me questions to understand how I work -- my role, my recurring tasks, the people I communicate with, the standards I hold my work to, my preferred tone and formats, and what I want Claude to always do or never do. Once you feel like you have a complete picture, pause and present it back to me before doing anything else.

**What Claude should ask you about:**
- Your role and the organization you work for
- The 3-5 tasks you do every week, every month
- Who you communicate with and what those relationships look like
- What good work looks like for you -- quality standards, tone, format preferences
- What you want Claude to always do (cite sources, ask before acting, match a certain voice)
- What you want Claude to never do (invent numbers, use corporate language, skip flagging uncertainty)
- What tools and files you use daily that should be connected or included

**Key instruction to include:** Tell Claude to ask all its questions first, then present its understanding back to you before building anything. If Claude starts building immediately, stop it and ask it to complete the discovery phase first.

---

### Phase 2 -- Design (Claude proposes the system, you approve)

After the interview, Claude should present the full architecture of your context bank in writing before creating a single file. This is the most important step.

**What to ask for:**

> "Based on everything I told you, describe the context bank you would build for me. List every file, what goes in each one, and why. Do not create anything yet -- I want to review the design first."

**What a good design looks like:**

Claude should return something like:

- *Master briefing file* -- your role, organization, core mandate, standards, what to always and never do
- *Voice document* -- your communication style, examples, phrases to use and avoid *(if your work involves drafting communications)*
- *[Name] database* -- one file per contact or company, with background, relationship notes, last touchpoint *(if you manage relationships or a pipeline)*
- *[Work type] template* -- structure, section order, sourcing rules for your recurring documents *(if you produce reports, briefs, or analysis)*
- *Reference file* -- your most-used criteria, frameworks, or standards in one place

**Your job in Phase 2:** Read the design and push back on anything that does not match how you actually work. Add things Claude missed. Remove things that do not apply. Get the architecture right before anything is built. This conversation is the most valuable part of the whole process.

---

### Phase 3 -- Build (one file at a time, you review each one)

Once you have approved the design, tell Claude to build one file at a time -- starting with the master briefing file.

**The instruction:**

> "Build the master briefing file first. Once I review it and we refine it, move to the next file."

**For each file:**
1. Claude drafts it based on everything you told it in Phase 1
2. You read it carefully -- does it sound right? Does it capture your actual standards?
3. You edit or ask Claude to revise specific sections
4. You approve it and move to the next file

**Do not rush this.** A context bank built in 20 minutes with no review will not be useful. The value is in the refinement. When something does not sound right, that is the signal -- push on it, fix it, and the file becomes useful.

---

## Person-specific notes

### Jon
Jon's context bank will be heavier on the **relationship side**. Key files to build:
- Master briefing file with his network mandate and engagement standards
- Voice document built from examples of his best alumni intros and newsletter writing
- Alumni database structure -- one file per key contact -- to be populated over time

The voice document is his highest-leverage file. Spend extra time getting it right. Have him pull 2-3 real emails he has sent that he is proud of and feed them to Claude as examples.

### Olivia
Olivia's context bank will be heavier on the **document and criteria side**. Key files to build:
- Master briefing file with her evaluation standards and what Claude should always flag
- Diligence template -- section order, sourcing rules, how to handle missing information
- Investment criteria -- stage, check size, IU affiliation, sector focus
- The "never fabricate" instruction must be in the master briefing file explicitly

Have her pull an existing diligence report she is happy with. Claude will use it to extract her format and standards rather than guessing.

### Tony
Tony's context bank is broader and more **strategic**. Key files:
- Master briefing file with fund context, portfolio overview, and communication standards
- Email triage criteria -- what warrants his direct response vs. what can be drafted
- Deal brief template -- what he needs in front of him before a founder call

Tony left his pre-work mostly blank. Let the discovery questions surface what he actually wants -- do not assume.

---

## The most common mistakes

**Starting before the design is approved.** Claude will want to build immediately. Do not let it. The design conversation is where you catch things that do not fit before they are encoded into files you will have to undo.

**Generic outputs.** If the master briefing file sounds like it could apply to any VC -- stop. Push Claude to be more specific. "What does that mean for my specific role? What would a standard I actually hold look like?" Keep pushing until the language is yours.

**Building it all in one session and never touching it again.** A context bank is not a one-time project. It gets better as you use it. Every time Claude produces something that does not sound right, that is a signal to update a file. Build the habit of refining as you go.

---

## After today

The context bank you build this afternoon is a version one. The files are a starting point. What makes it valuable over time is that every piece of good work you produce -- every diligence report, every alumni intro, every deal brief -- is an opportunity to make the system a little better.

That is the system. Use it, refine it, and it gets smarter without you having to maintain it separately.

---

*Phase 4 facilitator guide -- BPN Solutions internal use*
