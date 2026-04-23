# Camp Claude — Curriculum Outline

*A ground-up learning series for non-technical users who want to work with Claude as a real coworker, not just a chatbot.*

**Working draft — April 10, 2026**

---

## Why This Curriculum Exists

Most agent training starts too late. It assumes the learner already knows what an LLM is, what a chatbot is, how agents differ from chatbots, why there's more than one AI product on the market, and which surface they should be using. For technical users those assumptions are fine. For everyone else, those missing prerequisites are where most of the confusion and drop-off lives.

Camp Claude starts at the ground floor and walks the learner all the way to workflow automation, with each module resting on the one before it. The goal isn't to make learners into engineers. It's to make them competent, confident collaborators with a powerful agent.

## Curriculum Architecture

The series is organized into four phases. Each phase has a clear purpose and a clear graduation moment.

**Phase 1 — Orientation.** What this all is and why it matters. Modules 0–3.
**Phase 2 — Chat Fluency.** Becoming a confident, capable Chat user. Modules 4–7.
**Phase 3 — Execution.** Moving from conversation to real work on real files. Modules 8–10.
**Phase 4 — Automation & Beyond.** Making Claude run on its own. Modules 11–12.

---

## Phase 1 — Orientation

The marketing layer of the curriculum. This is where the learner decides whether any of this is worth their time.

### Module 0 — What Is This Thing?

**Purpose:** Give the learner a working mental model of what an LLM and a chatbot actually are, in plain language, before anything else is taught.

**Learning objectives.** The learner can explain in their own words what an LLM is. They understand how talking to Claude is different from searching Google. They know that Claude generates responses rather than looking them up.

**Key concepts.** What a large language model is (a prediction engine trained on text). What a chatbot is (a conversational interface on top of a model). Why these feel different from search. The idea that Claude is reasoning over context, not retrieving facts from a database.

**Exercise.** Ask the learner to ask Claude the same question three different ways and notice how the answers shift. The point isn't accuracy — it's internalizing that Claude is *responding* to them, not looking something up.

**Graduation moment.** The learner can answer "what is this thing?" without using the word "Google."

---

### Module 1 — What Is an Agent, and Why Does It Matter?

**Purpose:** Draw the line between a chatbot (which answers) and an agent (which acts).

**Learning objectives.** The learner can explain what makes something "agentic." They understand the shift from "tool I query" to "coworker I delegate to." They have a rough sense of what an agent can do that a plain chatbot cannot.

**Key concepts.** Agents take actions. Agents use tools. Agents can be given goals instead of step-by-step instructions. Why this matters for real work. The emotional shift from "using software" to "delegating to something."

**Exercise.** Show two side-by-side examples: a chatbot answering "what's on my calendar tomorrow?" with a guess, versus an agent actually checking a connected calendar and responding with the real answer. The lightbulb moment is when the learner sees the agent *do* something in the world.

**Graduation moment.** The learner can articulate, in their own words, why an agent is different from a chatbot and why they'd want one.

---

### Module 2 — The AI Landscape

**Purpose:** Give the learner a map of the territory so they understand there are choices and why they'd pick Claude.

**Learning objectives.** The learner knows the major AI assistants on the market (Claude, ChatGPT, Gemini, Copilot, Perplexity) and has a basic sense of how they differ in posture and strengths. They understand that "AI" isn't one product.

**Key concepts.** Different assistants have different personalities, strengths, and design philosophies. Why someone might choose Claude specifically — tone, nuance, long-form reasoning, strong collaboration model, transparent sandboxing. The idea that picking an assistant is a little like picking a coworker — fit matters.

**Exercise.** Quick tour of 2–3 assistants side by side with the same prompt. Not a benchmark — a *feel* comparison.

**Graduation moment.** The learner can say, in plain language, why they're choosing Claude for this training.

---

### Module 3 — Ways to Access Claude

**Purpose:** Show the learner the surfaces Claude comes in and help them pick the right one.

**Learning objectives.** The learner knows about web (claude.ai), mobile, and desktop app. They understand the API exists but isn't for them yet. They know which surface unlocks which capabilities, and specifically that *the desktop app is the doorway to Cowork and workflow automation*.

**Key concepts.** Web is portable and convenient. Mobile is for conversations on the go. Desktop is where Cowork lives and where real work on real files happens. Each surface has tradeoffs. The learner's choice of surface determines what they can do.

**Exercise.** Install the desktop app, log in, and tour the three main entry points (Chat, Cowork, and a hint of Code for later). Confirm the learner can get back into each on their own.

**Graduation moment.** The learner has the desktop app installed and can open it without help.

---

## Phase 2 — Chat Fluency

The foundational layer. Most learners will spend the majority of their time here, even after graduating to later phases.

### Module 4 — How to Actually Talk to Claude

**Purpose:** Build the muscle of having useful conversations with an agent.

**Learning objectives.** The learner can phrase requests clearly, give context when needed, iterate on responses, and course-correct when Claude is wrong. They've practiced recognizing when a first response is off and how to push back constructively.

**Key concepts.** Context is everything. Specificity helps. Iteration is normal and expected — a first response is a draft, not an answer. Claude is not always right, and calling it out is part of the process. The conversational rhythm of working with an agent.

**Exercise.** Pick a real task the learner has been putting off (drafting an email, summarizing a document, thinking through a decision) and work through it in Chat. The goal is to practice iteration, not finish the task perfectly.

**Graduation moment.** The learner has had at least one conversation where they pushed back on Claude and got a better answer.

---

### Module 5 — Projects in Chat

**Purpose:** Teach the learner to organize their work in Chat so context doesn't get lost.

**Learning objectives.** The learner knows what a Chat Project is, can create one, and understands why scoping context to a goal helps both them and Claude. They've been warned that Chat Projects and Cowork projects are different things, so the two concepts don't collide later.

**Key concepts.** A Project is a container for context, files, and instructions tied to a specific goal. Multiple Projects for multiple goals. Pinned files and custom instructions. Why a Project is more than "a folder of chats."

**Exercise.** Create a Project for something real — a trip, a work initiative, a hobby — and have a few conversations inside it. Watch how Claude picks up the context.

**Graduation moment.** The learner has a live Project they're actually using, not a throwaway demo.

---

### Module 6 — Connectors

**Purpose:** Introduce the idea of connecting Claude to the learner's own tools.

**Learning objectives.** The learner can explain what a connector is (a permission-gated bridge to a service), install one, and understand what Claude can and can't do with it. They've added at least one real connector to their account.

**Key concepts.** Connectors expand Claude's reach. Permissions and scopes matter. Connectors are global across Claude, not project-specific. Examples — Gmail, Google Calendar, Drive, Notion. The feeling of Claude "seeing" your actual inbox or calendar for the first time.

**Exercise.** Install a Gmail or Calendar connector. Ask Claude something only that connector can answer ("what meetings do I have tomorrow?"). Feel the shift from "Claude guesses" to "Claude knows."

**Graduation moment.** The learner has at least one connector installed and has used it successfully in conversation.

---

### Module 7 — Skills and Customization

**Purpose:** Show the learner that Claude is shapeable — not a fixed product.

**Learning objectives.** The learner knows what a skill is, how skills differ from connectors (knowledge vs. access), and how to install one. They understand that Claude can be customized to how they work, not the other way around.

**Key concepts.** Skills are instructions and best practices bundled for specific tasks. Connectors give access; skills give know-how. Together they transform the default Claude into "your" Claude. A preview of plugins as bundles of both.

**Exercise.** Install one skill relevant to the learner's work (e.g., a document skill, a data skill, a writing skill) and use it on a real task. Notice the difference in output quality.

**Graduation moment.** The learner has customized Claude in at least one way that's meaningful to them.

---

## Phase 3 — Execution

The phase change. Everything up to now was conversation. This is where the learner starts letting Claude touch real files on their real computer.

### Module 8 — Graduating to Cowork

**Purpose:** Handle the emotional and conceptual transition from Chat (safe conversation) to Cowork (real work on real files).

**Learning objectives.** The learner understands what Cowork is, why it exists, and when to reach for it instead of Chat. They've opened Cowork for the first time and understand it's the same Claude with a different purpose — execution.

**Key concepts.** Chat is for thinking. Cowork is for doing. The desktop app is where Cowork lives. The mental shift from "talking to Claude" to "working alongside Claude at your desk." Why this transition matters and what changes.

**Exercise.** Open Cowork. Notice the interface differences from Chat. Don't hand Claude a folder yet — just explore the environment so it feels familiar.

**Graduation moment.** The learner has opened Cowork, understands what it's for, and is emotionally ready to give Claude access to their files.

---

### Module 9 — The Workspace and the Sandbox

**Purpose:** Teach the learner how file access works in Cowork, using landmark language instead of path language. **This is where the current training notes pick up.**

**Learning objectives.** The learner can explain, in their own words, what Claude can and can't see when they hand Claude a folder. They know the one-sentence rule. They understand the Smallest Useful Scope principle. They've run the 90-second teaching exercise and seen the sandbox boundary for themselves.

**Key concepts.** The box metaphor. The one-sentence rule: *Claude can see and touch everything inside the folder you hand it, including folders inside it, but nothing outside of it.* Vertical access, not horizontal. Smallest Useful Scope. Landmark language over path language.

**Exercise.** The 90-second teaching exercise. Create a "Claude Test" folder on the desktop, put a few files in it, open Cowork on that folder, and watch Claude see what's inside — and fail to see what's outside. Direct observation, not explanation.

**Graduation moment.** The learner can set scope confidently and verify what Claude can see.

---

### Module 10 — Supervision and the Competency Ladder

**Purpose:** Teach the supervision skills that make delegation safe.

**Learning objectives.** The learner can inspect what Claude did, review outputs before accepting them, and course-correct when something goes wrong. They understand the three-level competency ladder and know where they are on it.

**Key concepts.** Trust the Boundary → Read the Work → Delegate With Checkpoints. The difference between read-only tasks and write tasks. The habit of previewing before accepting. The habit of reviewing the action log after completion. The intent + location + permission prompt pattern.

**Exercise.** Give Claude a real multi-file task in a sandbox folder. Review what it did. Accept or reject. Iterate. Repeat until the learner feels confident they can catch mistakes before they ship.

**Graduation moment.** The learner has successfully caught and corrected at least one mistake in Claude's work.

---

## Phase 4 — Automation & Beyond

The payoff phase. This is where workflow automation finally lands for the learner.

### Module 11 — Workflow Automation

**Purpose:** Show the learner how to make Claude run on its own, on a schedule, across the tools they've connected.

**Learning objectives.** The learner can set up a scheduled task that runs automatically. They understand how to chain a connector, a folder, and an instruction into a real recurring automation. They have at least one live automation running in their own account.

**Key concepts.** Scheduled tasks. Running on a cadence (daily, weekly, on demand). Combining Chat context, connectors, and Cowork folders. The shift from "Claude does this when I ask" to "Claude does this without me asking." The moment automation becomes real.

**Exercise.** Build one real automation the learner would actually use. Morning inbox triage, a weekly report, a daily journal entry generator — something they'll come back to. Watch it run once. Confirm the output.

**Graduation moment.** The learner has a live, running automation they rely on. This is the payoff moment of the entire curriculum.

---

### Module 12 (Optional) — Code

**Purpose:** For the small subset of learners who want to go deeper into software building.

**Learning objectives.** The learner understands what the Code environment is for, when to reach for it, and what prerequisites they'd need to use it well.

**Key concepts.** Code is the developer environment. Git, terminals, file trees, and real software projects live here. It's the same Claude with the seatbelts off. Most learners never need it, and that's fine — but knowing it exists matters.

**Exercise.** Optional. A brief guided tour of Code for curious learners.

**Graduation moment.** The learner knows whether they want to go further into Code, and is set up to do so if yes.

---

## Design Principles Across the Whole Curriculum

A few principles that should show up in every module, not just some of them.

**Landmark language over path language.** Every instruction, exercise, and example uses the words the learner already owns — folders, files, projects, places — not developer abstractions like paths, directories, or mount points.

**Observation over explanation.** Where possible, let the learner *see* the concept work instead of just hearing it described. The 90-second sandbox exercise is the template: show, don't tell.

**Preview the payoff early.** Every phase should include a reminder of where this is heading, so learners don't quit before they reach the workflow automation payoff. The promise is "by the end, Claude will do things for you without you asking." Keep that promise visible.

**Build collaboration competency before environment competency.** Teach the working relationship first. File-system literacy is a late-stage concept, not a prerequisite.

**Smallest Useful Scope applies to training too.** Don't front-load concepts the learner doesn't need yet. Each module should introduce only what's required to graduate to the next one.

---

## Suggested Delivery Formats

The curriculum is format-agnostic, but a few shapes work well:

A **self-paced workbook** that learners move through on their own, with real exercises tied to their real work. Good for independent learners and for distributing broadly.

A **cohort-based camp** (the "Camp Claude" framing) with live sessions, group exercises, and a shared project where the cohort builds the same automation together. Good for accountability and peer learning.

A **facilitator guide** for trainers running this inside a company or team. Good for rolling out agent adoption at scale.

A **short video series** mapped to the modules, used as a primer before hands-on exercises. Good for reducing the cold-start problem.

The curriculum should probably ship in more than one of these shapes — because different learners have different preferences, and reaching everyone means meeting them where they already learn.

---

## Open Questions — Working Answers

A few things still to work out. These are working answers, not final ones, but they're enough to move forward.

**How long should each module take?** The original estimates (20–45 minutes for Phase 1, 45–90 minutes for Phases 2 and 3, 60–120 minutes for Phase 4) are directionally right but probably optimistic for the audience this is designed for. Non-technical learners hitting Module 9 (the sandbox boundary) for the first time will often need more than 90 minutes, because the "aha" moment depends on them actually creating folders, fumbling a bit, and internalizing what they saw. Phase 3 should widen to 60–120 minutes, and Phase 4's first automation can easily eat an afternoon on the first pass. Better still, the curriculum should not publish time estimates at all — it should publish *checkpoints* ("you're done with this module when you can…"). Self-paced learners feel bad when they miss a stated time, and that shame is exactly what causes drop-off in this audience.

**Is Module 0 (the LLM ground floor) necessary?** Keep it, but make it skippable rather than short. Compressing it to a 5-minute preamble loses the learners who most need it — the ones who don't yet know they don't know. The better pattern is a 2-minute self-assessment at the top of the curriculum ("can you explain in your own words what an LLM is?") that routes confident learners straight to Module 1 and everyone else into the full Module 0. That respects both audiences without cutting the floor out from under beginners.

**Should connectors and skills be one module or two?** Two, but tightly paired. The conceptual distinction (access vs. know-how) is exactly the thing that gets muddled when they're taught together, and muddling it early makes plugins confusing later. Keep them as Modules 6 and 7, and add a short joint "these two work together" coda at the end of Module 7 that previews plugins. The cost of two modules is small; the cost of a learner who never quite understands why their "Gmail skill" isn't a thing is large.

**How much of Module 12 (Code) should be included?** Make it a signpost, not a module. A single page that says "here's what Code is, here's who it's for, here's where to go if that's you" is more honest than a half-taught tour, and it prevents the curriculum from feeling like it ends on an anticlimax for the 95% of learners who'll never open Code. Module 11 is the real finale — let it be the finale. Code moves to an appendix labeled "Where to go next."

**What's the assessment model?** The graduation moments already written into each module *are* the assessment model — they're behavioral checkpoints ("the learner has had at least one conversation where they pushed back on Claude"). Lean into that. For cohort delivery, turn each graduation moment into a share-out ("show the group your live automation"); for self-paced, turn them into a self-reported checklist with a single capstone demonstration at the end of Module 11. Avoid quizzes — they'd contradict the "observation over explanation" principle set for the rest of the curriculum. Completion-based assessment would undersell the curriculum; exam-style assessment would scare people off. Behavioral checkpoints split the difference and stay honest to the goal of producing confident collaborators.

**How does a learner pick a delivery format?** (New question.) The curriculum lists four delivery shapes — workbook, cohort camp, facilitator guide, video series — but doesn't help a prospective learner decide which one is right for them. That's the first real decision a learner has to make, and the curriculum currently leaves them on their own for it. Before shipping, add a short "which format is right for you?" decision aid at the top of the curriculum: something like "learning solo on your own schedule → workbook; want accountability and peers → cohort camp; rolling this out to a team → facilitator guide; need a primer before hands-on → video series." It's a small addition that prevents the first moment of friction.

None of these block the outline above, but the answers should be baked in before the curriculum goes into production.
