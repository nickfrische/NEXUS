# Phase 3: Building Your Context Bank

This is the foundation of everything else we do today. It is a little tedious at first -- but once it is built, everything runs off of it. Take your time here and do it right.

---

## Step 1 -- Let Claude research you

Open a new Claude conversation. Paste your name and your LinkedIn URL and tell Claude:

> "Do deep research on me and tell me what you find."

Read what it comes back with. Correct anything wrong. Add anything it missed.

---

## Step 2 -- Let Claude interview you

Before you ask Claude to build anything, let it get to know you. Tell Claude:

> "Interview me about how I actually work. Ask me about my day-to-day functions, the tasks I do most often, the tools I use, and the people I communicate with regularly. Ask me one question at a time. Keep going until you feel like you have a complete picture."

Answer in as much detail as you can. Once Claude feels like it has enough, tell it:

> "Now use everything you just learned to help me create a context bank and a folder structure built around how I actually work. This is the foundation for all the systems I build to make myself more efficient. Build it in a way that keeps growing and adding context as we go."

---

## Step 3 -- Dump in your context

You may need to feed Claude more than just your answers. Think about what you have that gives it real context on how you work:

- Your pre-work sheet from today -- paste it in
- Emails that represent how you communicate
- A database, spreadsheet, or list you work from regularly
- Examples of documents you have produced that you are proud of
- Any templates or formats you already use

The more real material you give it, the more specific and useful the system will be.

---

## Step 4 -- Tell Claude to plan it out before building

Once Claude has enough context, tell it:

> "Plan out the full context bank for me -- every file, what goes in it, and how it is structured. Do not build anything yet. Show me the plan and wait for my approval."

Read through the plan carefully. Push back on anything that does not fit how you actually work. Add what is missing. Get the architecture right before anything is built.

---

## Step 5 -- Iterate on the plan

This is worth spending time on. Ask yourself:

- Does the structure match how I actually think about my work?
- Are the right files here for what I do every day?
- Is anything missing?

Some things that may be specific to you:

**Jon** -- you will want a brand voice document and an alumni database structure. Feed Claude examples of your best intro emails and your newsletter writing so it can capture your actual voice.

**Olivia** -- you will want a diligence template with your specific section order and sourcing standards, and an instructions file that tells Claude never to fabricate figures. Feed it an existing report you are happy with.

**Tony** -- you will want an email triage framework and a deal brief structure. Feed it examples of how you communicate with LPs versus founders.

---

## Step 6 -- Build the system

When the plan looks right, tell Claude:

> "Build this system now. Do not cut corners. Make sure every file is complete and architected to grow the way we discussed. Do it well."

Review each file as it is created. If something sounds generic or off, push Claude to make it more specific to you.

---

## Step 7 -- Connect Claude to your tools

Once your context bank is built, the next step is connecting Claude to the tools you already live in. These connections are called **MCP connectors** -- they are what let Claude read live data from your actual tools instead of copies you paste in. There are currently 278 verified connectors in Anthropic's directory.

Before you go to Settings, ask Claude which connectors make sense for you:

> "Based on everything you now know about my role and how I work, which connectors should I set up and in what order? Tell me what each one will actually do for my specific workflow."

Claude will give you a personalized priority list based on the interview. Then go to **Claude Settings > Connectors** and set up the ones it recommends.

**One important setup note:** The Microsoft 365 connector requires a one-time setup by your Microsoft Entra ID Global Administrator. That means someone in IU IT needs to approve and enable it for your accounts before you can use it. Plan for that conversation.

---

**The connectors that matter most for your work:**

| Connector | What it does | Best for |
|-----------|-------------|----------|
| **Microsoft 365** | Claude reads Outlook, Teams, SharePoint, and OneDrive -- all in one connector | Everyone -- this is the big one for your team |
| **Airtable** | Claude queries your live databases and pipelines | Olivia -- investment tracking |
| **Notion** | Claude reads and writes to your Notion workspace | Jon -- relationship notes and content |
| **Zoom** | Claude processes meeting transcripts automatically | Everyone |
| **Brave Search** | Claude pulls live web research mid-conversation | Olivia -- diligence research |
| **Salesforce** | Claude queries your CRM live | Coming soon via Slack-Salesforce partnership |

**What the Microsoft 365 connector actually gives you:**

- **Outlook** -- Claude searches your email threads, finds conversations by sender, date, or topic, and drafts replies within real thread context
- **Teams** -- Claude searches channel discussions, chat history, and meeting summaries to surface decisions and track what was discussed
- **SharePoint and OneDrive** -- Claude searches documents across every site and library you have access to
- Read-only access -- Claude can view and analyze but cannot edit or delete anything
- Your existing SharePoint permissions apply -- Claude only sees what you can see

**How to connect them:**

Go to Claude settings, select Connectors, and follow the setup steps. Phil will walk you through this. The Microsoft 365 connector requires your IT admin to enable it first -- flag that now so it is not a blocker.

**Recommendations by person:**

**Jon** -- Microsoft 365 first. Outlook email drafting and Teams meeting summaries are your fastest wins. Add Notion once your alumni database is structured.

**Olivia** -- Microsoft 365 plus Airtable and Brave Search. Airtable gives Claude live pipeline data. Brave Search lets Claude pull current market and competitive information during diligence without switching tabs.

**Tony** -- Microsoft 365 covers most of what you need. Outlook triage, Teams history, and SharePoint document access in one connection.

---

## Step 8 -- What comes next

Once your context bank is in place and your connectors are live, the automations we talked about this morning become real.

- **Diligence automation** -- one command runs the full research sequence and produces a structured first draft to your template and standards
- **Alumni intro workflow** -- one command reads both contact files, finds the connection angle, and drafts the intro in your voice
- **Email triage** -- Claude reads your inbox, flags what needs you, and drafts responses on the rest
- **Meeting summaries** -- Zoom transcripts automatically processed and filed to the right contact record

The context bank is what makes all of these work. The connectors are what make them run on live data. The automations are only as good as the foundation underneath them.

---

*Build the foundation right and everything else builds fast.*
