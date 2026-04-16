# AI Workshop: Phase 1
## The Foundation

---

A few things stood out from your pre work.

All three of you named email as your biggest time sink. Two of you named scheduling. Olivia -- 15 to 20 hours a week on diligence, and you said you would add more depth if you had the time. Tony, deal analysis. Jon, alumni intros you are manually typing out.

These are not separate problems. They are the same problem -- good work is getting slowed down by the volume of routine work around it. Every hour we reclaim on the routine side is an hour you get back for the part of the job only you can do.

That is what we are building today. This first section is the knowledge layer -- how AI actually works and how the people getting the most out of it are actually using it. Phil takes you through the hands-on build after this. Everything he shows you will make more sense because of what we cover here.

---

## 1. What AI Actually Is

AI is not magic. It is not a search engine. It is not a robot that thinks like a human.

The simplest honest description: AI is trained on an enormous amount of human-generated text -- books, research, articles, conversations, code, documentation. That training gives it the ability to recognize patterns and generate responses that are relevant to whatever you give it in the moment.

When you type something into Claude, it is not looking up an answer. It is generating one, shaped by everything it has learned plus the context you provide right now.

**What that means practically:**

It does not know who you are, what you do, or what you care about unless you tell it. But here is the important part: you do not have to tell it every single time. The goal of what we are building today is a system where Claude already knows the context before you type a single word.

More on that in a moment.

**The analogy that actually fits:**

Think about the most capable person you have ever hired or worked with. Brilliant. Fast. No bad habits. Available at any hour. But on day one, they know nothing about your organization, your standards, your relationships, or your history. The quality of their work in week one depends almost entirely on how well you brief them.

That is Claude. And the people getting extraordinary results from it are not the ones who figured out better ways to ask questions. They are the ones who built better systems for briefing it -- once -- so they never have to brief it again.

**Quick show of hands:** How many of you have already used Claude or ChatGPT at least once for work? Good. What we are doing today is taking whatever stage you are at and building something that makes it dramatically more useful -- specific to your actual job, not a generic demo.

---

## 2. How People Are Actually Learning This

The old model of learning a new tool was: take a course, read the manual, then use it. That model does not work for AI. Not because it is too complicated, but because AI is too specific to you.

A course on prompting will not teach you how to make Claude useful for evaluating a seed-stage founder at IU Angel Network. A manual will not teach you how to draft alumni introductions that sound like Jon Barada. The only way to learn what AI can do for your specific work is to work with it on your specific work.

**The shift that matters most:**

Before you start any significant task, ask Claude how to approach it.

Not "do this for me." Ask: "Here is what I am trying to do and here is what I have. What is the best way to approach this? What should I be thinking about? What do people usually miss?"

This single behavior separates people who get mediocre results from AI from people who get results that make their colleagues wonder how they did it so fast.

Here is why it works: Claude has processed more case studies, frameworks, best practices, and domain knowledge than any analyst you could hire. When you ask it how to approach something before you start, you are tapping into that before you commit to a method. It will often show you a better path than the one you were going to take -- and it will do it in 30 seconds.

**Examples from this room:**

Tony, think about your average week. A dozen emails that need real responses. Four-plus calls. Deal analyses to review. LP updates to send. The question for you is not whether AI can write those emails -- it is whether it can read the incoming ones, identify the 20 percent that actually need your judgment, and draft a first pass on the rest that sounds like IU Ventures. For that to work, Claude needs to understand who you are. It needs to know the difference between an LP relationship and a first-time founder cold pitch before it touches a single message. That is the context layer we are building today.

Olivia, you spend 15-20 hours per week producing diligence reports. Here is what that prompt looks like before you start:

> "I need to produce a 10-12 page diligence report on an early-stage college athletics software startup. I have their pitch deck, their website, and some press coverage. Before I start, what is the best approach to structuring this? What sections should I cover? What are the most common gaps analysts miss in this kind of company at this stage? And what external research should I prioritize first?"

Claude comes back with a structured approach, a suggested order of operations, the questions most investors get wrong at this stage, and specific things to look for in the materials. You have not produced a single sentence of the report yet. But you now have a better framework than the one you started with -- in under a minute.

This is just-in-time learning. You are not learning AI in the abstract. You are learning exactly what you need, applied to exactly what you are working on, right now.

**The posture:**

Humble curiosity. That is the phrase. Not "tell me the answer." Not "do this for me." It is: "Here is what I am trying to do. Here is what I know. What am I missing? What is the best way in?"

The people getting the most out of AI in 2026 are not the ones who are most technically sophisticated. They are the ones who are most willing to ask before they assume.

**Two more strategies worth keeping:**

Ask Claude to plan before it acts. Not just "how do I approach this" but: "Walk me through the full approach and tell me what the potential issues are. Then wait for my input before you start." This keeps you in control of the direction. Claude will surface things you had not thought of. You decide whether to proceed or adjust before any work is done.

Ask for options before committing. Instead of asking for a result, ask: "Give me three ways I could approach this and the tradeoffs of each. I will pick one." This prevents anchoring on the first thing Claude suggests. When you are not sure which direction is right, seeing the options takes 30 seconds and usually produces a better outcome than the first path you would have taken.

Both of these keep you as the decision-maker and Claude as the thinking partner. The best way to use AI is not to hand it a task and wait. It is to think alongside it before committing to a path.

---

## 3. How Context Works (and Why It Changes Everything)

This is the most important concept in Phase 1.

When most people first use AI, they write long, detailed prompts. "I am the Executive Director of a university angel investment network. I evaluate seed-stage companies for potential investment. I produce 10-12 page diligence reports. I need you to..." Every single time. Because Claude does not remember the last conversation. Every session starts from zero.

That is the starting point. It is not where you end up.

**The three stages of working with AI:**

**Stage 1: You explain yourself every time.**

You write structured prompts. You set the context manually at the start of every conversation. This is where everyone begins. It works. The outputs are genuinely good -- a Stage 1 prompt done well beats no AI by a significant margin. But it is slower than it needs to be, and it is easy to forget something important each time you start fresh.

This is the training wheels phase. It is a real phase. It is just not the destination.

**Stage 2: The system already knows who you are.**

This is what Phil is building with you today.

Instead of re-explaining your role, your organization, your standards, and your preferences at the start of every conversation, that context lives in a master briefing file that loads automatically every time you open Claude in your workspace.

Claude reads it before you type anything. It already knows:

- Who you are and what you do
- The standards you hold your work to
- The formats you prefer
- The things you want to avoid
- The documents and references that matter to your work

Your files live next to Claude in the same workspace. When you are working on a diligence report, Claude has access to your diligence template, your past reports, your investment criteria. When you are drafting alumni communications, it has access to your voice, your relationship notes, your history.

You do not paste these things in every time. They are already there.

**Stage 3: The system runs itself.**

This is the part most people do not see coming.

In Stage 1, you add context manually. In Stage 2, you build a context layer once and it loads automatically. In Stage 3, you are not the one adding context anymore. The system is.

Every meeting Jon has with an alumnus, the notes go into that person's file automatically. The next time he asks Claude to draft an introduction involving that person, Claude already knows what happened at the last meeting, what was promised, what the relationship looks like now. Jon did not update anything. The system captured it.

Every diligence report Olivia runs makes the next one better. The gaps she flagged, the questions she added, the sections she rewrote -- those become part of the template. The system learns from the work, not from Olivia sitting down to update a document.

You stop managing the context. The system manages it for you.

And this is where skills come in. A skill is a pre-built workflow -- one command that triggers an entire sequence. Jon types one line and Claude reads the relevant alumni files, identifies the connection angle, drafts the introduction in his voice, and formats it ready to send. Olivia types one line and Claude runs the full research sequence, structures it to her template, flags what is missing, and hands her a first draft. The skill knows what to do because the context layer already built it.

We will go deep on skills in the next section. But the concept to hold right now: Stage 3 is not about shorter prompts. It is about a system that already knows what to do, already has what it needs, and is already getting smarter -- without you having to maintain it.

That is where you are going. 

**What the context layer actually looks like:**

The foundation is a master briefing file that lives in your workspace and gets read by Claude automatically before every session. It tells Claude who you are, how you work, what standards to hold, and which other files to check before doing anything. You never type this. It is already there every time you open Claude.

But the context layer is more than one file. It is an entire workspace of information Claude can read. Here is what that looks like for people in this room.

**Jon's workspace:**

The master briefing file tells Claude: "Before you write anything, read the voice document. Before you reference any relationship, check the alumni files. Never write in a corporate tone. Every introduction must name the specific reason these two people should connect."

A voice document captures exactly how Jon writes -- examples of his best alumni introductions, his newsletter tone, the phrases he uses and the ones he avoids. Every time Claude drafts something for Jon, it reads this first.

An alumni database. Not a spreadsheet Jon has to maintain manually. A collection of files -- one per person in his network -- with their background, how they are connected to IU Ventures, the last time they spoke, and notes from every meeting.

When Jon types "draft an intro between Sarah Chen and Mark Fuller," Claude reads Sarah's file and Mark's file, finds the specific reason these two should connect, and writes a personalized introduction that references both of their histories. Jon makes one small edit and sends it. What used to take 15 minutes of memory retrieval and manual typing takes 90 seconds.

**Olivia's workspace:**

The master briefing file tells Claude: "Before any diligence work, read the evaluation template. Always cite sources. Never invent figures. Always flag what is missing. Structure every report in this order: company, market, competition, team, traction, risks, open questions."

Her diligence template, investment criteria, and examples of her best past reports are all available for Claude to reference automatically. The result: "Run first-pass diligence on Motion Sports. Materials attached." Claude already knows her format, her standards, and her evaluation criteria. The output is a structured first draft that would have taken four hours to produce manually.

---

**Connectors: when Claude reaches into your existing tools**

Everything above involves Claude reading files you bring into the workspace. Connectors take it one level further.

A connector is a secure link between Claude and a tool you already use. Once connected, Claude can read that tool directly -- without you copying or pasting anything.

For Jon: when Outlook is connected, Claude reads his actual inbox before drafting a response. It reads the thread, understands the history, and drafts within the context of the real conversation. No copying. No pasting.

For Olivia: when Airtable is connected, Claude queries her live investment pipeline. She asks "what companies are currently in active diligence?" and Claude reads the live database -- not a version she had to copy somewhere.

Connectors available today include Gmail, Google Drive, Notion, Airtable, Slack, and Zoom transcripts. Outlook and Salesforce are rolling out now. These are not future capabilities.

The most important thing to understand: connectors do not add new tools. They let Claude read inside the tools you already own. Claude inherits your existing permissions -- if you cannot access a file in Outlook, Claude cannot access it either. Nothing leaves your existing security model.

This is the difference between an AI you bring data to and an AI that comes to where your data already lives.

**One thing to name directly:**

Claude will invent numbers if you let it. That is a real limitation and it matters for this room specifically. That is why every context file we build today includes explicit instructions: cite sources, flag uncertainty, never fabricate figures. This is the discipline side of the tool, not the magic side. The outputs are only as trustworthy as the instructions you give it.

On confidentiality: the context layer we are building today lives in your workspace, on your machine. We are not uploading portfolio data or LP relationships to a public model. The files stay local. You control what Claude has access to.

**The key insight:**

Context is not something you repeat every time. It is something you build once and let the system carry. The more complete the context layer, the less you have to say -- and the better the output gets.

---

## 4. What You Are Building Today

Phil is going to walk you through four things:

**Your workspace.** A folder structure for your work that Claude can navigate. Organized in a way that matches how you actually think about your work.

**Your context layer.** The master briefing file and supporting documents that tell Claude who you are, what you do, and how you want things done. You will build this by talking to Claude about your work -- it will ask you questions and help you figure out what belongs in there.

**Your connectors.** The links between Claude and the tools you already use -- Airtable, Notion, Gmail, Outlook. Once connected, Claude reads your live data instead of copies you paste in.

**Your first skills.** Automations that run a full workflow with a single command. Jon's alumni introduction skill. Olivia's first-pass diligence skill. Tony's deal brief skill. Built once, used every time.

By the end of today, Claude will know you well enough that you can sit down tomorrow, open your workspace, and work -- without explaining yourself. The system will already know.

**Where this goes from here:**

The system you are building today is not static. It learns as you use it. Every meeting note you add to Jon's alumni database makes the next introduction better. Every diligence report Olivia runs makes her template sharper. Every context file Tony builds makes the next deal brief more accurate.

This is the arc the best operators are on right now:

Today: you do the work, AI assists.

As the context matures: AI drafts, you review and approve.

Eventually: AI identifies what needs attention, surfaces recommendations, prepares the work, and waits for approval before anything goes out.

The approval layer is not optional -- it is the design. AI gets right up to the line. Jon's introduction is drafted, formatted, and ready. Olivia's first-pass diligence is structured and sourced. Tony's deal brief is pulled and prioritized. Nothing leaves until a human reviews it. But the human is no longer doing the 80 percent that surrounds the decision. They are doing the decision.

That is the system we are working toward. Today is the foundation.

---

### Questions

Before Phil takes over -- anything here you are skeptical of? If there is a place where what I described does not match how your work actually runs, I want to hear it now, not after we have built something.

---

### The one thing to carry forward:

Ask Claude how to approach it before you start. Whatever Phil puts in front of you, whatever task you are staring at -- before you try to solve it, ask Claude how to approach it. Get comfortable with that posture. It will pay off every single time.

Phil, over to you.
