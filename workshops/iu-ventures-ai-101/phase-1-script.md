# Phase 1 Speaker Script
## Slide-by-Slide -- Nick Frische
### IU Ventures AI Workshop | April 16, 2026

---

> **How to use this:** Each section maps to one slide. The text is close to what you want to say -- not word for word, but close enough that you can glance down and stay on track. Speak to the people, not the screen.

---

## SLIDE 1 -- Title

*(Let the slide sit for a moment before you speak. Make eye contact.)*

Before we get into anything, I want to say -- thank you for spending the day with us. We have been looking forward to this one. We did a lot of prep specifically for this room, and I think by the end of today you will see why.

Let's get into it.

---

## SLIDE 2 -- Team

My name is Nick. Phil is sitting right here. We are the co-founders of BPN Solutions -- we are based in Bloomington, same as you, and we build custom software and AI systems for operators.

I am going to take you through Phase 1 -- the foundation, the concepts, the mental model. Phil takes over after that and you actually build the thing. Everything I cover in the next hour will make what Phil builds with you land a lot harder. They work together.

---

## SLIDE 3 -- Agenda

Here is how the day runs.

We are in Phase 1 right now -- that is me, concepts, no hands-on, just building the mental model. After the break, Phil walks you through getting your environment set up. That is Phase 2 -- VS Code, Claude Code, logged in and ready to go.

Lunch is 90 minutes. Come back loose.

Phase 3 is the big one -- building your context bank. That is the system that makes everything else work. Each of you builds one specific to your role.

Phase 4 is where we get into automations. We work until it is done. No hard stop on that one -- we go until we are satisfied with what you have built.

---

## SLIDE 4 -- Outcomes

Before we get into anything else, I want to be clear about what you are actually walking out with today. This is not a demo. This is not a workshop where you leave with a notebook full of ideas and no working system.

By end of day: Claude Code is running on your machine. You have a context bank built for your specific role -- your standards, your voice, your files. You have at least one automation live. And your tools are connected.

And the last one matters most -- the system grows. Every session you run adds context. You do not have to maintain it. It learns as you work.

That is what today is. Let's build it.

---

## SLIDE 5 -- We did the homework

Before you came today, we asked each of you to fill out some pre-work. I want to start by reading back what you told us -- because I think it will reframe the next six hours.

All three of you named email as your biggest time sink. Two of you named scheduling.

Olivia -- you told us you spend 15 to 20 hours a week on diligence. And your exact words were on reports: "could include more depth if I had the time."

Tony -- deal analysis. LP updates. The things that need your eye but eat your hours.

Jon -- you are writing alumni intro emails manually. One at a time. And the newsletter keeps getting pushed because it is one of those things in your workflow that is easily pushed off.

Here is the thing. These are not three separate problems. They are the same problem. Good work getting slowed down by the volume of routine work around it.

Understanding how to use these tools opens the door to getting those hours back. The goal of this session is that we are teaching you how to fish -- and catching a couple today.

---

## SLIDE 6 -- What AI Actually Is

So let's start with what AI actually is -- and I want to be plain about this because there is a lot of noise around it.

It is not magic. It is not a search engine. It is not a robot that thinks like a human.

Here is the honest description: AI was trained on an enormous amount of human-generated text. Books, research, articles, conversations, code, documentation. That training gave it the ability to recognize patterns and generate responses that are relevant to whatever you give it in the moment.

When you type something into Claude -- it is not looking up an answer. It is generating one. Shaped by everything it learned during training, plus the context you give it right now.

That last part is everything. Context. Because here is what that means practically: Claude does not know who you are. It does not know what you do. It does not know what you care about -- unless you tell it.

And the goal of what we are building today is a system where it already knows all of that before you type a single word.

---

## SLIDE 7 -- The New Hire Analogy

Here is the analogy that actually fits.

Think about the most capable person you have ever hired or worked with. Brilliant. Fast. No ego, no bad habits. Available at any hour.

But on day one -- they know nothing. They do not know your organization. They do not know your standards. They do not know your relationships or your history. The quality of their work in week one depends almost entirely on how well you brief them.

That is Claude.

And here is what separates the people getting extraordinary results from the people getting mediocre ones: it is not that they figured out better ways to ask questions. It is that they built better systems for briefing Claude -- once -- so they never have to brief it again.

The people who are winning with AI right now are not the most technical. They are the ones who spent time building the briefing layer, and then stopped thinking about it.

---

## SLIDE 8 -- How People Are Actually Learning This

Now -- the old model of learning a tool was: take a course, read the manual, then use it. That does not work for AI. Not because it is too complicated, but because AI is too specific to you.

A course on prompting will not teach you how to make Claude useful for evaluating a seed-stage founder at IU Angel Network. A manual will not teach you how to draft alumni introductions that sound like Jon Barada.

The only way to learn what AI can do for your specific work is to work with it on your specific work.

So here is the shift that matters most -- and I want you to actually hold onto this one:

Before you start any significant task, ask Claude how to approach it. Not "do this for me." Ask: "Here is what I am trying to do and here is what I have. What is the best way in? What do people usually miss?"

This single behavior separates the people who get mediocre results from people who get results that make their colleagues wonder how they did it so fast.

---

## SLIDE 9 -- What this looks like for each of you (Tony + Jon)

Let me make this concrete for your actual jobs.

**Tony** -- you have a dozen emails that need real responses every day. Four-plus calls. Deal analyses. LP updates. The question is not whether AI can write those emails. The question is whether it can read the incoming ones, identify the 20 percent that actually need your judgment, and draft a first pass on the rest -- in a voice that sounds like IU Ventures.

For that to work, Claude needs to understand who you are before it touches a message. It needs to know the difference between an LP relationship and a first-time founder cold pitch. That context is what we are building today.

**Jon** -- you are writing alumni intro emails one at a time. You have 800,000 IU alumni, 2,500 identified founders and funders, and you are doing it manually. What changes when the system is built: you type one line. Claude reads both alumni files, finds the specific connection angle between these two people, and writes the intro in your voice. 15 minutes becomes 90 seconds. Every time.

---

## SLIDE 10 -- Olivia: the diligence example

Olivia, I want to walk through your example specifically because it is the clearest illustration of the shift I am describing.

You spend 15 to 20 hours a week on diligence. Here is what happens when you change the first thing you do before you start a report.

Instead of opening a blank document and starting to write -- you open Claude and you ask this:

*"I need to produce a 10-12 page diligence report on an early-stage college athletics software startup. I have their pitch deck, their website, and some press coverage. Before I start -- what is the best approach to structuring this? What sections should I cover? What are the most common gaps analysts miss in this kind of company at this stage? And what external research should I prioritize first?"*

Claude comes back with a structured approach. A suggested order of operations. The questions most investors get wrong at this stage. Specific things to look for in the materials you have.

You have not produced a single sentence of the report yet.

But you now have a better framework than the one you started with -- in under a minute. And here is the thing you said in your pre-work: "I could include more depth if I had the time." This is how you get the time.

---

## SLIDE 11 -- Humble Curiosity + Two Strategies

The posture behind all of this has a name: humble curiosity.

Not "tell me the answer." Not "do this for me." The framing is: "Here is what I know. Here is what I have. What am I missing? What is the best way in?"

The people getting the most out of AI in 2026 are not the most technically sophisticated. They are the most willing to ask before they assume.

Two specific strategies worth keeping with you after today:

**Plan before you act.** Start by asking: "Walk me through the full approach and the potential issues -- then wait for my input before you start." Claude surfaces things you had not thought of. You decide whether to proceed before any work is done.

**Ask for options.** Instead of asking for a result, ask: "Give me three ways I could approach this and the tradeoffs of each. I will pick one." Thirty seconds of options usually produces a better outcome than the first path you would have taken.

Both of these keep you as the decision-maker. Claude is the thinking partner. That framing matters.

---

## SLIDE 12 -- How Context Works (intro)

Now I want to go a level deeper. This is the most important concept in Phase 1 -- how context actually works.

When most people first use AI, they figure out quickly that Claude does not remember them between sessions. Every conversation starts from zero. So they write a long setup prompt at the beginning of every session.

Every single time. That is the starting point. It works. But it is not where you end up.

There are three stages to how people work with AI. Most people stay at Stage 1 forever -- not because Stage 2 and 3 are complicated, but because nobody showed them the path. Today you are building Stage 2. Stage 3 is where you are headed.

---

## SLIDE 13 -- Stage 1

Stage 1 is: you explain yourself every time.

You write structured prompts. You set the context manually at the start of every conversation. This works. Stage 1 done well produces genuinely good output. If you walk out of today and all you do is write better prompts, you will be better off.

But it is slower than it needs to be. Every session, you are starting from scratch. If you forget something important in your setup, the output suffers.

Training wheels. A real phase. Not the destination.

---

## SLIDE 14 -- Stage 2

Stage 2 is where everything changes.

A master briefing file lives in your workspace and loads automatically every time you open Claude. Before you type anything, Claude has already read it. It already knows who you are, what you do, the standards you hold your work to, the formats you prefer, and the things you want to avoid.

Your files live next to Claude in the same workspace. When Olivia is working on diligence, Claude has access to her template, her criteria, her past reports -- automatically. When Jon is drafting alumni communications, Claude has access to his voice document and his alumni database.

You do not paste these things in every time. They are already there.

This is what Phil is building with you today.

---

## SLIDE 15 -- Jon's workspace

Let me show you what Stage 2 looks like for Jon.

What is in the system: a master briefing file, a voice document with examples of his best alumni intros, and an alumni database -- one file per person -- with their background, their IU connection, their last touchpoint, and every meeting note.

What becomes possible: Jon types "Draft an intro between Sarah Chen and Mark Fuller." Claude reads Sarah's file. Reads Mark's file. Finds the specific reason these two people should connect. Writes a personalized introduction in Jon's voice.

Jon makes one small edit and sends it.

15 minutes of memory retrieval and manual typing. 90 seconds.

---

## SLIDE 16 -- Olivia's workspace

Same idea for Olivia.

What is in the system: her diligence template with section order and sourcing standards, her investment criteria, and examples of her best past reports.

She types "Run first-pass diligence on Motion Sports. Materials attached."

Claude already knows the format, the standards, the evaluation criteria -- because it read everything at session start. It was not told any of this in the prompt. It already knew.

Output: a structured first draft, sourced, with flags where information is missing. Four hours becomes a first draft she is reviewing and refining -- in minutes.

---

## SLIDE 17 -- Stage 3: The system runs itself

Stage 3 is the part most people do not see coming.

In Stage 3, you are not the one adding context anymore. The system is.

Every meeting Jon has with an alumnus -- the notes go into that person's file automatically. The next time he drafts an intro, Claude already knows what happened at the last meeting, what was promised, what the relationship looks like now. Jon did not update anything. The system captured it.

Every diligence report Olivia runs makes the next one better. The gaps she flagged, the sections she rewrote -- those become part of the template. The system learns from the work itself.

You stop managing the context. The system manages it for you.

And this is where skills come in. One command triggers an entire sequence. Jon types one line and gets a personalized alumni intro in his voice, ready to send. Olivia types one line and gets a structured first-pass diligence draft. Phil will build your first skills with you this afternoon.

---

## SLIDE 18 -- Connectors

One more layer: connectors.

A connector is a secure link between Claude and a tool you already use. Once connected, Claude reads that tool directly. No copying. No pasting.

For Jon: when Microsoft 365 is connected, Claude reads his actual inbox before drafting a response. It reads the full thread, understands the relationship history, and drafts within the context of the real conversation.

For Olivia: when Airtable is connected, Claude queries her live investment pipeline. She asks "what companies are currently in active diligence?" and gets a real answer from the live database.

The Microsoft 365 connector covers Outlook, Teams, SharePoint, and OneDrive -- all in one. Phil will walk you through connecting the ones that apply to your work.

---

## SLIDE 19 -- One thing to name directly

I want to name one thing directly -- and it matters specifically for this room.

Claude will invent numbers if you let it. That is a real limitation.

For a team that presents diligence analysis to LPs and evaluates founders for investment, fabricated figures are not acceptable. That is why every context file we build today includes explicit instructions: cite sources, flag uncertainty, never fabricate figures. That instruction is always there. You do not have to remember it.

And on confidentiality -- the context layer lives in your workspace, on your machine. Portfolio data, LP relationships, founder materials -- none of that goes to a public model. Files stay local. You control what Claude has access to.

---

## SLIDE 20 -- What you're building today

So here is exactly what you are building with Phil.

Your workspace. Your context layer. Your connectors. Your first skills.

By the end of today, Claude will know you well enough that you sit down tomorrow, open your workspace, and work -- without explaining yourself. The system will already know.

---

## SLIDE 21 -- The arc

Last thing on where this goes.

Today -- you do the work, AI assists.

As the context matures -- AI drafts, you review and approve.

Eventually -- AI identifies what needs attention, prepares the work, and waits for approval before anything goes out.

The approval layer is not optional. It is the design. Nothing leaves until a human reviews it. The human is no longer doing the 80 percent that surrounds the decision. They are doing the decision.

And the system grows from the work itself. You do not have to maintain it. You just have to use it.

---

## SLIDE 22 -- Questions + Close

Before I hand it to Phil -- anything you are skeptical of?

If there is a place where what I described does not match how your work actually runs, I want to hear it now. Not after we have spent an afternoon building something.

*(Pause. Take questions. Address them directly.)*

One thing to carry into everything Phil does with you today:

Ask Claude how to approach it before you start. Whatever task you are staring at -- before you try to solve it, ask how to approach it first. Get comfortable with that posture.

It will pay off every single time.

Phil, over to you.

---

*End of Phase 1 -- estimated runtime: 45 minutes with questions*
