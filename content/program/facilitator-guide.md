# Camp Claude — Facilitator Guide

*The canonical playbook for running Camp Claude as a cohort-based program.*

**Working draft — April 15, 2026**

---

## About This Guide

This is the atom of Camp Claude. Every other teaching artifact — the session decks, the workbook, the exercise handouts, the graduation checklists — derives from what's in this document. If something is unclear here, it will be unclear everywhere downstream. Fix it here first.

The guide is written for a stranger. That is, for someone who completed Camp Claude themselves, internalized the curriculum, and now wants to run it for their own cohort. The original author is assumed to be absent. The consequence is that the guide over-provisions context in places where a familiar facilitator would already know what to do. Keep the over-provision. It is the only way this guide also becomes the foundation for the workbook, the company-cohort customization kit, and the eventual facilitator training program.

If you are the original author running the first cohort yourself, you will find parts of the guide telling you things you already know. That is the point. Skim past them. They are there for the next facilitator.

---

## Who This Guide Is For

You are a facilitator running a five-session cohort-based program for eight to twelve adult learners who are competent professionals in their own field but have never had a working relationship with an AI agent. Your learners are curious, slightly uncertain, and in most cases have enough prior exposure to Claude-as-chatbot to ask it a question and get an answer. What they do not have is a working model of what Claude is, how to direct it, how to keep it scoped, and how to catch its mistakes.

Your job across five sessions is to take them from that starting line to a place where each of them has a live automation running in their own account and the confidence to build a second one on their own.

You are not teaching software engineering. You are teaching supervision. Read the [agent-training-notes.md](agent-training-notes.md) file alongside this guide if you have not already. That file is the pedagogical spine of the program. This guide is the schedule.

---

## Program Shape at a Glance

**Pre-Camp (async).** Four short videos (5–8 minutes each) and a welcome packet. Covers Modules 0–3 from the syllabus — what an LLM is, chatbot vs. agent, the AI landscape, ways to access Claude. Learners complete this before Session 1. You are not teaching any of this material in a live session. If a learner shows up having skipped the videos, they are under-prepared and the cohort is slowed. The pre-work is not optional.

**Live Cohort (five sessions, ninety minutes each, online).** Session 1 covers Chat fluency and Projects (Modules 4–5). Session 2 covers Connectors and Skills (Modules 6–7). Session 3 covers Cowork and the sandbox boundary (Modules 8–9). Session 4 covers supervision (Module 10). Session 5 is the payoff — workflow automation (Module 11).

**Community (ongoing).** The cohort has a dedicated space inside your community platform (Circle or Skool). Pre-work videos, session recordings, and every asset below live here. Learners post between sessions. Alumni from previous cohorts drop in. You monitor and respond.

The cohort runs for five weeks — one session per week — unless the cohort specifically requests a compressed or extended pace and you agree.

---

## The Five Pedagogical Principles

These show up in every session. If you violate one of them, course-correct in the moment.

**Landmark language over path language.** A folder is a folder. A file is a file. Things are on your desktop or in a project. Never say directory, path, parent, child, descendant, or root. When you slip, catch yourself out loud. "Directory — I mean folder. Same thing, different word. Folder is the word." This models the correction for the cohort.

**Observation over explanation.** Wherever possible, let learners see a concept work rather than hear you describe it. The 90-second sandbox exercise is the template. If you find yourself giving a five-minute lecture on how something works, stop, and design an exercise instead.

**Preview the payoff early.** Every session mentions where this is heading. "Two weeks from now, the automation you build is going to run without you asking." "What we're doing today is the last stepping stone before Claude starts working for you directly." Drop-off happens when learners lose faith that the destination is worth the journey. Keep the destination visible.

**Build collaboration competency before environment competency.** You are teaching the working relationship. File systems come up only when necessary and always through landmark language. If a learner asks about paths or directories specifically, answer briefly, redirect to the landmark framing, and move on.

**Smallest Useful Scope applies to training too.** Do not front-load concepts a learner doesn't need yet. If Module 6 doesn't need Module 8 to be understood, don't preview Module 8 during Module 6. Stay tight.

---

## How to Use This Guide

Each session has six parts.

**At a glance** is the one-paragraph summary you read on the morning of the session to refresh yourself.

**Pre-session prep** is what you do in the forty-eight hours before. It's a checklist, not a suggestion.

**Materials** is what you need in the room — deck, shared folder, connector access, anything else.

**Minute-by-minute plan** is the ninety-minute spine, broken into timed blocks. You are not obligated to hit every minute exactly; you are obligated to land the graduation moment. If a block runs long, compress a later block, not the graduation moment.

**Stuck points and rescues** is the list of things that will go wrong in this specific session, and what to do about them.

**Post-session debrief** is the five-question form you fill out within twenty-four hours of running the session. This is how the curriculum improves.

Read the whole guide before you run a cohort for the first time. Do not read one session at a time assuming you'll learn the next one next week. The sessions are designed to build on each other, and some of the prep in Session 5 has to start in Session 1.

---

## Before the First Cohort (Prep Checklist)

Complete this list before learners arrive. Some of it is one-time setup; some repeats every cohort.

**One-time setup.**

- Community space exists (Circle or Skool) with channel structure in place.
- Landing page is live. Enrollment form routes into your enrollment tracker.
- Payment flow works end to end, including the company-invoice path.
- Pre-work videos are hosted in the community and linked in the welcome email.
- Welcome packet, tech setup guide, and starting-line self-assessment are finalized and posted.
- Calendar invites are templated with Zoom or Google Meet links.
- You have run every exercise in this guide yourself, in real Claude, end to end. This is non-negotiable. You cannot teach an exercise you haven't done.

**Per-cohort setup.**

- Enrollment closes at least seven days before Session 1. This gives learners time to complete pre-work.
- Welcome email goes out at enrollment with a link to the welcome packet, pre-work videos, and tech setup guide.
- Seven days before Session 1: pre-work reminder email with the self-assessment link.
- Three days before Session 1: final prep email — "here's what to bring, here's the link, here's what to expect."
- Day of Session 1: test the Zoom link. Test screen share. Test your mic. Have a sandbox desktop folder ready for live demos.
- After each session: upload recording to the community, post session notes and exercise handouts, send the recap email.

**Per-session setup** is covered in each session's prep section below.

---

## Supplies and Tooling

You need the following throughout the program.

A stable video-conferencing tool with screen share, breakout rooms, and recording. Zoom or Google Meet. Learners should not need to install anything unfamiliar.

A community platform (Circle or Skool) with the channel structure described in the asset library. One channel per cohort. Pinned resources at the top.

A Claude account on the same plan your learners are on, with Cowork access. Do not teach Cowork from an account that has features your learners don't have — they will notice and trust will erode.

A prepared demo folder on your desktop named "Camp Claude Demo" or similar. Populate it before every session with the files relevant to that session's exercises. Do not improvise demo content live.

A prepared enrollment tracker (Google Sheet or Airtable). Column per learner: name, email, role, company, pre-work completion, session 1 attendance, session 2, session 3, session 4, session 5, graduation automation built, testimonial collected.

A printed or easily visible copy of the one-sentence rule, which you will refer to in Sessions 3, 4, and 5: *When you give Claude a folder, Claude can see and touch everything inside that folder — including folders inside it — but nothing outside of it.*

---

# Session 1 — Chat Fluency

## At a Glance

Ninety minutes. Learners arrive having watched the four pre-work videos. They know, in rough terms, what an LLM is, what an agent is, and why they chose Claude. What they lack is fluency — the muscle of having a useful conversation with Claude on a task they actually care about. Today you build that muscle and introduce Projects as the container for scoped, ongoing work.

**They leave with:** a live Chat Project tied to a real goal in their life, and at least one conversation where they pushed back on Claude and got a better answer.

**Graduation moment:** each learner names, out loud, the Project they created and the real-world goal it's attached to.

## Pre-Session Prep

Confirm all enrolled learners completed the pre-work. The community platform should show video views; the self-assessment should have been submitted. Anyone who didn't complete pre-work gets a direct message: "You can still attend, but you will be behind. Here are the four videos. Twenty-five minutes total." Do not bar them. Do name it.

Pull the enrollment answers from the intake form. Every learner answered the question, *"what's one task you want Claude to take off your plate?"* Those answers are your raw material for Session 1. Read all of them before the session. You will reference them live.

Prepare a demo task for your live conversation with Claude. It should be tasky, not academic. "Draft me a reply to this vendor email" or "summarize this three-page memo and tell me what I'm missing." Have the email or memo ready in a text file or pasteable form.

Test your Claude account. Confirm claude.ai loads. Confirm you can create a new Project. Confirm you can pin a file. Confirm your last Project from the last cohort (if any) is not still open in a shared-screen tab.

## Materials

- Session 1 deck (fifteen slides, roughly).
- A demo task in a format you can paste into Claude live.
- Intake answers printed or open in a side tab.
- The cohort roster.
- A timer visible to you (a phone timer or the built-in Zoom timer).

## Minute-by-Minute Plan

**0:00–0:05 — Open.** Welcome the cohort. Ninety seconds of framing: "Camp Claude is five sessions. By the end, each of you will have an automation running in your account that saves you time. Today is the first stepping stone. Today is about building the muscle of having useful conversations with Claude — because the whole rest of the program depends on you being able to do that with confidence."

Do not go longer than five minutes on framing. The cohort has been waiting a week to start, and they want to start.

**0:05–0:15 — Intros.** Go around the cohort. Thirty seconds per person. Name, role, and the task they said they wanted Claude to take off their plate. Read their intake answer back to them if they seem stuck: "Sarah, you said — weekly status reports. Is that still the task?" This primes the room and tells every learner that their task matters.

If the cohort is ten people and intros run to sixteen minutes, that's fine. Cut five minutes from the exercise block, not the intros. Connection is the foundation for everything else.

**0:15–0:20 — Pre-work pulse.** Ask directly: "Raise a hand if you watched all four videos. Raise a hand if you installed the desktop app." If hands don't go up, note it and move on — do not teach pre-work content live. Point under-prepared learners to the community channel where the videos live and tell them to catch up before Session 2.

**0:20–0:35 — Module 4 live demo.** Share your screen. Open claude.ai. Show the cohort the interface with a brief tour — "this is the conversation window, this is where your past chats live, this is the Projects menu."

Then run your prepared demo task. Narrate your thinking: "I'm going to ask Claude to draft me a reply to this vendor email. I'm going to give it context — what the email is, what my relationship with this vendor is, what I actually want to say. Then I'll look at the first draft." Paste the task. Wait for the response.

When the response comes, read it on screen. Evaluate out loud. "This is close but too formal — I'm not going to send it like this." Push back. "Make it sound less stiff. I want to sound like a human who has a relationship with this person, not a lawyer."

Let Claude respond again. Evaluate again. "Better. I'd still shorten the middle paragraph." Push back one more time. Accept the third draft.

Name what just happened. "In ninety seconds, I had three drafts. The first one wasn't what I wanted, so I said so. That's how this works. You iterate."

**0:35–0:55 — Exercise.** Tell the cohort: "Now you. For the next twenty minutes, open claude.ai, pick the task from your intake answer, and work on it with Claude. I'll be here. If you get stuck, unmute or drop a message in chat."

Put the cohort into the main room, not breakouts. You want to be able to hear when someone laughs, sighs, or says something out loud — those are the moments you intervene.

Circulate. Monitor the chat. If five minutes in nobody has said anything, check in by name: "Sarah, how's it going?" Pull people out of silence. If a learner says "this is useless," ask them to share their screen and look at the conversation together — usually the issue is a vague first prompt.

**0:55–1:10 — Share-outs.** Stop the exercise. Ask four or five learners to share one of: something useful Claude produced, something useless, or something they pushed back on. Do not grade. Do not say "great prompt." Say things like "interesting — you asked it differently the second time and the answer shifted. Did you notice that?"

Pull out patterns. "Three of you just described a moment where the first response was okay, the second was better, and the third was what you actually wanted. That's the rhythm. That's what fluency looks like."

**1:10–1:25 — Projects.** Switch back to your screen. Open the Projects menu. Create a new Project live. Name it something real (not "Demo Project"). Paste in a custom instruction. Pin a file if you have one.

Explain what just happened: "A Project is a container. Everything I do in this Project knows the context. I don't have to re-explain it every time. If I have a weekly report I'm writing, I put the template and last month's report in the Project once, and then every conversation inside the Project starts from that baseline."

Then: "Now you. Create a Project for the task you just worked on. Name it. Pin a file or paste in a custom instruction. Ten minutes."

**1:25–1:30 — Graduation and close.** Go around. Each learner names their Project out loud in one sentence. "My Project is called Quarterly Reports and it's where I'll work on my Q1 status report this week." You mark each learner as graduated in your tracker. Close with the assignment: "Between now and Session 2, use your Project at least three times. Any real task. We'll talk about what you learned next week."

Remind them Session 2 is Connectors and Skills. "Next week Claude gets access to your inbox and your calendar. Bring questions."

End on time. Do not run over on Session 1. You set the precedent for the whole cohort here.

## Stuck Points and Rescues

**"I don't know what task to bring."** The intake form asked them already. Read their answer back. If they've drawn a blank anyway, suggest three archetypes: (a) an email you've been putting off, (b) a document you need to summarize and act on, (c) a decision you've been mulling that you want a thinking partner for. Any of the three works.

**"Claude gave me a terrible answer."** Good. That's the exercise working. Do not rescue the answer. Rescue the rhythm: "Tell Claude what's wrong with it. Not diplomatically — clearly. 'This is too formal.' 'You missed the part where I said I'm declining the meeting.' Push back." Then watch them push back and see the second answer.

**"I can't find Projects."** Some learners are in the wrong surface — the mobile app doesn't have Projects; an older plan might not either. Get them onto claude.ai in a browser. If their plan doesn't include Projects, offer to help them upgrade after the session; for today, they can still do the exercise in a regular conversation.

**"Someone in the cohort is dominating share-outs."** Thank them for their share and say, "let's hear from someone who hasn't gone yet." Do this the first time it happens. Don't wait until it's a pattern.

**"Someone in the cohort is completely silent."** Five minutes into the exercise, if they haven't made a sound, call on them by name. "Marcus, how's it going?" Not accusatory — curious. Silent learners are often overwhelmed, not checked out. They need an invitation.

**"The whole cohort is stuck and nobody wants to share."** Start with your own screen. Pull up a real task from your own week and work it with Claude live. Narrate your own stuckness. Modeling beats prompting.

**"The cohort is five minutes behind because intros ran long."** Cut the share-out block to eight minutes instead of fifteen. Do not cut the graduation block. The graduation moment is how learners leave feeling the session landed.

## Post-Session Debrief

Fill this out within twenty-four hours.

1. Which learners graduated? (Named their Project out loud.)
2. Which learners did not graduate, and what was in their way?
3. Which stuck point came up that you didn't expect?
4. What did you cut for time, and did it matter?
5. What should Session 2 emphasize differently for this specific cohort?

Post your debrief to your own private notes, not the community channel. It is material for your own iteration.

---

# Session 2 — Connectors and Skills

## At a Glance

Ninety minutes. Learners arrive having used their Chat Project through the week. They have fluency in conversation and an emerging sense of what Claude does well. Today you extend Claude's reach — you connect it to real services (Gmail, Calendar, Drive) and install at least one skill. The emotional moment of this session is the first time Claude tells a learner something only their real calendar could know.

**They leave with:** at least one connector installed and tested, at least one skill installed and used, and a clear understanding of the access-versus-know-how distinction.

**Graduation moment:** each learner uses Claude with their own connector on a real question ("what meetings do I have tomorrow?") and verifies the answer out loud.

## Pre-Session Prep

Read the community channel for the week between Sessions 1 and 2. What did learners post? What got stuck? Who skipped the assignment? Bring two or three Session 1 stories into Session 2 — "Sarah mentioned she used her Project to draft a tricky email. Nice. Anyone else have a win from the week?"

Pick the connector you will demo. Default is Gmail or Google Calendar; both produce the "Claude sees my real world" moment cleanly. Have a sample question ready ("what meetings do I have tomorrow," "what's the most recent email from my boss about the Q2 plan," or similar).

Pick the skill you will demo. A good default is a writing or document skill the cohort can install without friction. Avoid skills that require additional permissions or paid tiers — you want a clean install path.

Test the install flow yourself that morning. Connectors and skills get updated; last cohort's install flow is not necessarily this cohort's. Know the click sequence cold.

Check your enrollment tracker. Which learners said in intake that they have corporate IT restrictions? Flag them mentally. Their connector install will likely fail. Have the fallback ready — personal account, or pivot to a skill-only exercise.

## Materials

- Session 2 deck.
- A test Gmail or Calendar account with a few known items (meetings tomorrow, a recent email you can cite).
- Your Claude account with no pre-installed connectors, so learners see the full install flow from scratch.
- The names of two or three skills you've personally tested.

## Minute-by-Minute Plan

**0:00–0:05 — Open.** "Welcome back. Today is the day Claude stops being confined to the conversation window and starts seeing your actual world. This is the week where the emotional shift happens. Pay attention to that shift — it's part of the learning."

**0:05–0:15 — Week recap.** Ask: "Who used their Project this week?" Hands go up. Ask two or three specific learners — ideally including one you know had a stuck point from the community channel — to share briefly. Not graded. Not polished. Just "what did you do, what did you notice?"

If someone says "I didn't use it" or "I forgot," say "that's fine — let's make this week's assignment the one that lands." Do not shame. Do note.

**0:15–0:30 — Connectors.** Share your screen. Explain what a connector is in one sentence: *a permission-gated bridge from Claude to one of your services.* Write that sentence on a slide and leave it visible.

Show the connectors menu. Walk through what's available. Note which connectors require personal accounts and which work with corporate accounts.

Install your demo connector live. Narrate the permission dialog — "Gmail is asking if I'll give Claude read access to my inbox. It's not asking for send access. Permissions matter. You can always revoke this later." Accept the permissions.

Ask your test question. "What meetings do I have tomorrow?" Let the response come back. Read it. Confirm it's correct. "That's my real calendar. Claude didn't guess. It looked."

**0:30–0:55 — Exercise.** "Now you. Install one connector of your choosing. Gmail, Calendar, Drive, Notion — any one. Ask Claude a question that only that connector can answer. Twenty minutes. I'll be in the room."

Circulate. This is where the most technical friction of the whole program happens. Be ready to diagnose permission dialogs, OAuth flows, and the occasional "my company blocks this" in real time.

When a learner successfully gets an answer from their real data, mark it as a graduation moment — they hit the visceral shift.

**0:55–1:15 — Skills.** Stop the connector exercise. Switch to skills. Explain the distinction in one sentence: *connectors give access; skills give know-how.* Write that sentence next to the connector sentence.

Install your demo skill live. Use it on a task. Show the before-and-after: "without the skill, Claude gives me this. With the skill, Claude gives me this — notice it's using the structure the skill knows."

Ask learners to install one skill of their choosing. "Ten minutes. Pick one relevant to your work."

**1:15–1:25 — The access-versus-know-how coda.** Pull the cohort back together. Review the two sentences you wrote — *connectors give access, skills give know-how.* Say out loud: "A Gmail skill is not a thing. You don't install a Gmail skill. You install the Gmail connector so Claude can see Gmail, and then you install, say, an email-writing skill so Claude knows how to write emails well. Two different layers. Access versus know-how."

Preview plugins briefly: "Later you'll see things called plugins, which are bundles of both — a connector and a skill packaged together. Don't worry about them today. Just hold on to the two-layer mental model."

**1:25–1:30 — Graduation and close.** Each learner says out loud: "I have [connector name] installed and [skill name] installed." You mark it in the tracker.

Assignment: "Use your connector and your skill together this week. One real task. Session 3 is a big one — it's the day we move from conversation to real work on real files. Install the desktop app if you haven't."

## Stuck Points and Rescues

**"My company IT blocks the connector."** Real and common. Rescue: can they complete the exercise with a personal Gmail account? If yes, pivot. If no, have them install two skills instead of one connector plus one skill. The cohort still graduates — the access-versus-know-how concept is the real graduation target, and skills alone demonstrate the know-how side.

**"The connector asked for permissions I don't want to grant."** Honor the hesitation. Say: "That's exactly the right instinct. You are in control of what Claude can see. You can skip this connector and try a different one." Note for the cohort: that hesitation is the permission gate doing its job. Name it as a good thing, not a problem.

**"I installed a skill but I don't see it doing anything."** Skills are invoked contextually. The task has to match what the skill is for. Have the learner ask a task that matches — if it's a writing skill, ask Claude to write something. Show them the skill being referenced in the response.

**"Connectors and skills are blurring together in my head."** Half the room will have this. Repeat the one-sentence distinction three times in the session. "Access versus know-how. Access versus know-how. Access versus know-how." Write it on a slide and refer back to it whenever confusion surfaces.

**"I don't know which skill to install."** Offer three defaults: a writing skill, a document-analysis skill, a data skill. Ask what kind of work the learner does most of. Match accordingly.

**"The OAuth flow threw an error."** Usually a browser issue or a timing issue. Have them try in a different browser, or log out and back into the service. If still broken after three minutes, pivot to skill-only for the day and debug after the session.

## Post-Session Debrief

1. How many learners got a connector fully installed and tested?
2. How many hit IT or permissions blocks, and what did you fall back to?
3. Did the access-versus-know-how distinction land for the cohort, or is there carryover confusion into Session 3?
4. Which learner is at risk of falling behind, and what specific outreach will you do between now and Session 3?
5. Did the room's energy lift when the first learner saw Claude pull real data? If not, why not?

---

# Session 3 — Graduating to Cowork

## At a Glance

Ninety minutes. This is the biggest phase change of the program. Everything up to now has been conversation. Today learners hand Claude a folder on their own computer and let it do things with real files. The session rises and falls on a single exercise — the 90-second sandbox demonstration — that turns the concept of file access from abstraction into direct observation.

**They leave with:** the box metaphor internalized, the one-sentence rule memorized, and firsthand experience of Claude seeing the files in a test folder and not seeing anything outside it.

**Graduation moment:** each learner runs the 90-second exercise themselves and can state the one-sentence rule from memory.

## Pre-Session Prep

Confirm every learner installed the desktop app. Session 3 cannot run without it. If anyone didn't install, the between-sessions message you send on day three after Session 2 should have caught this — verify once more before Session 3 starts.

Prepare your demo sandbox folder on your desktop. Name it "Camp Claude Demo." Put three files in it: a short text file, a simple spreadsheet, and a PDF. Content doesn't matter — the files are props. Make sure nothing sensitive is in or adjacent to this folder on your desktop. You will be sharing your screen with the whole cohort for ninety minutes.

Review the [agent-training-notes.md](agent-training-notes.md) file, specifically the sections on the box metaphor, the one-sentence rule, and the 90-second exercise. Session 3 is the session where that material goes live.

Have the one-sentence rule ready as a slide and as a spoken cue you can repeat five times during the session: *When you give Claude a folder, Claude can see and touch everything inside that folder — including folders inside it — but nothing outside of it.*

If you have a physical cardboard box you can hold up on camera, use it. The metaphor lands better with a prop.

## Materials

- Session 3 deck (with the one-sentence rule on a slide that stays visible).
- Your "Camp Claude Demo" folder, pre-populated with three files.
- A second folder elsewhere on your computer (in Documents or Downloads) that you will ask Claude to see, and Claude will correctly report it cannot.
- A physical box if you have one.
- Screen-sharing set up so the cohort can see your desktop folder and the Cowork interface side by side if possible.

## Minute-by-Minute Plan

**0:00–0:05 — Open.** "Welcome to Session 3. Today is the biggest change in the whole program. Everything we've done up to now is talking to Claude. Starting today, Claude does work — real work, on real files, on your real computer. Pay attention to how it feels when you hand Claude a folder for the first time. That feeling matters."

**0:05–0:15 — Recap the week.** Ask: "Who used their connector this week?" Quick round. Celebrate wins — a learner who finally got their inbox integrated, a learner who used a skill to draft something faster. Two minutes, not ten.

**0:15–0:25 — What is Cowork?** Share your screen. Open the desktop app. Do not open Cowork on a folder yet — just open the app so learners see the entry point.

Explain what Cowork is: "Chat was for thinking. Cowork is for doing. Same Claude underneath. Different purpose. When you open Cowork on a folder, you're saying — Claude, this is the workspace. Work here. Don't work anywhere else."

Do not explain the sandbox architecture yet. Let the exercise do it.

**0:25–0:35 — The box metaphor.** Hold up the physical box if you have one. If not, show a simple image on a slide.

"A folder is a box. Boxes can have boxes inside them. When you hand Claude a box, Claude can open it, look at everything inside, open any smaller boxes inside it, and look at those too. Claude cannot reach out of the box. Claude cannot walk over to a different box on the shelf. Claude only has what you handed it."

Write the one-sentence rule on the screen. Read it aloud. "Say it with me." Have the cohort repeat it. This is not silly — it's memorable.

**0:35–1:00 — The 90-second exercise, done as a group.** This is the core of the session. Walk every learner through every step. No breakouts. Everyone in the main room with screens shared when you ask.

Step one: "Create a folder on your desktop. Call it Claude Test. Pause when you have it." Wait for every hand or chat confirmation.

Step two: "Put two or three files in it. Any files. A photo, a text document, whatever. Pause when you have it." Wait again.

Step three: "Open Cowork. File menu, Open Folder. Select your Claude Test folder." Walk through this on your own screen for learners who need to see the click path.

Step four: "Ask Claude — 'what files can you see?' Type it, send it, watch the response." Wait. Learners will see Claude list their actual files by name. This is the first lightbulb.

Step five: "Ask Claude to create a new file in the folder called test.txt with one line of text." Wait. Learners will watch a new file appear in their folder in Finder. This is the second lightbulb.

Step six: "Now ask Claude — 'can you see my Downloads folder?' Or 'can you see my Documents folder?' Whatever other folder you have. Watch what Claude says." Wait. Claude will correctly report it cannot see that folder. This is the third lightbulb — the boundary is real.

Pull the cohort together. Ask: "What did Claude see? What didn't it see?" Let two or three learners describe what they just observed. Do not explain the mechanism. The observation is the teaching.

Refer back to the one-sentence rule. Read it again. "That's the whole model. Everything else we'll teach about Cowork rests on that sentence."

**1:00–1:15 — Smallest Useful Scope.** Pull up a slide that says *hand Claude the smallest folder that still contains everything the task needs.*

Ask the cohort: "Why would you never hand Claude your entire Documents folder?" Take a few answers. Guide the discussion toward — years of old files, stuff you forgot about, work you don't want in scope, not because Claude is dangerous but because scoping is how you stay in control.

Run a short thought exercise. "Sarah, you wanted Claude to help you with quarterly reports. What's the smallest folder you'd hand Claude for that task?" Not a Trick question — let her work it out. Probably something like "a folder called Quarterly Reports with this quarter's files." Good. That's Smallest Useful Scope.

Do the same with one more learner.

**1:15–1:25 — Landmark language drill.** Pair learners up briefly (breakout rooms of two, five minutes). "Write down how you'd tell Claude to work on your next real task using only landmark words — no paths, no directory names, no technical terms. Folder, file, desktop, project — those are the words."

Bring them back. Have two pairs share. Catch anyone who said "path" or "directory." Correct gently.

**1:25–1:30 — Graduation and close.** Graduation check: "Repeat the one-sentence rule from memory." Go around the cohort quickly. If a learner fumbles it, give them the prompt gently — "everything inside…" — and let them complete it.

Assignment: "Before Session 4, do the 90-second exercise again on a second folder. Something related to your real work. Not sensitive — something low stakes you'd be okay if Claude reorganized or edited. Session 4 is about supervision — learning what Claude did and catching its mistakes."

## Stuck Points and Rescues

**"Cowork can't see my folder."** Usually means they opened Cowork without handing it a folder, or they opened the wrong folder. File menu, Open Folder, select the right one. Walk through it on your screen if needed.

**"I can't find my Claude Test folder."** Landmark language — "it's on your desktop, right? Close Claude, open Finder, look at your desktop, is it there?" Do not teach paths. Do not say "where did you save it?" — say "on your desktop, or somewhere else?"

**"I'm nervous about giving Claude access to my files."** That nervousness is correct and healthy. Validate it. "The one-sentence rule is the reason you can be nervous and still proceed — Claude can only see what you hand it. In this exercise we're handing it a junk folder. If Claude does something weird, we delete the folder. No stakes. And the boundary actually holds — you just saw it."

**"What if Claude does something bad?"** Good question. Answer: "We'll cover supervision in detail next week. For today, the exercise is deliberately low stakes — a test folder with a few throwaway files. Let Claude try things. Watch what it does. That observation is the whole point."

**"I asked Claude to see my Downloads and it said yes."** It didn't — read the response with them carefully. Claude will say something like "I can't see outside this folder" or "I only have access to Claude Test." If the response is ambiguous, check what folder is actually open in Cowork — they may have opened Cowork on their entire user directory accidentally, which is a real problem to fix.

**"Claude created a file and I can't find it."** Have them open Finder and look in the test folder. The file is there. This is another observation moment — "see, it did what it said. The file is in the box."

**"Can I hand Claude my whole Documents folder to make this easier?"** No. That's exactly what Smallest Useful Scope is about. Have the learner pick a single project folder instead. If they push back, tell them — "you can hand Claude your whole Documents folder, technically. But the habit we're building is the opposite habit. The smallest folder that works."

**"The desktop app won't open Cowork."** Some installs fail on older operating systems. Have the learner restart the app. If still broken, put them in a pair with another learner for the exercise — they observe, partner operates. Debug after session.

## Post-Session Debrief

1. Did every learner complete the 90-second exercise? Who didn't, and why?
2. Was the one-sentence rule memorized by the end, or did it feel shaky for some?
3. Did anyone display visible anxiety about giving Claude file access? How did you handle it?
4. Did the box metaphor land? Evidence?
5. What about the sandbox concept still seems fragile for this cohort, and how do you address it in Session 4?

---

# Session 4 — Supervision

## At a Glance

Ninety minutes. The learners now know Claude can see the files they hand it. Today they learn to verify what Claude actually does with those files. This session is about trust calibration — not blind trust, not blanket distrust, but the habit of previewing, reviewing, and catching mistakes. The emotional tone is different from previous sessions: you are teaching learners to slow down on write tasks, which feels counter to the productivity promise of the program. Acknowledge that tension openly.

**They leave with:** the competency ladder (Trust the Boundary → Read the Work → Delegate With Checkpoints) understood and placed on themselves, the intent-plus-location-plus-permission prompt pattern in use, and the habit of previewing before accepting.

**Graduation moment:** each learner catches and corrects at least one mistake in Claude's work during the session.

## Pre-Session Prep

Read the community channel for the week between Sessions 3 and 4. Did anyone post about their second 90-second exercise? Were there any surprises, stuck points, or small wins you can reference?

Prepare your sandbox folder for this session's exercises. It needs to contain enough files that Claude can do something substantive but not so much that review gets tedious. A good shape: five to eight files of mixed types (text documents, spreadsheets, PDFs), all related to a pretend project. "Q1 Marketing Files" or "Summer Trip Planning" are good archetypes. Content is fake but plausible.

Decide which write task you'll have learners do. Default: "reorganize the files in this folder into subfolders by topic." That's a meaty enough task to produce a few debatable choices — which file belongs in which subfolder, what to do with ambiguous ones — without being so complex that review takes forty minutes.

Re-read the agent-training-notes section on the Competency Ladder. You'll teach it this session.

## Materials

- Session 4 deck.
- Your sandbox folder, prepared with five to eight files relevant to a pretend project.
- The Competency Ladder as a slide (Level 1 / Level 2 / Level 3 with one-line descriptions).
- The intent-plus-location-plus-permission prompt pattern as a slide.

## Minute-by-Minute Plan

**0:00–0:05 — Open.** "Welcome to Session 4. Last week we handed Claude a folder. This week we learn to supervise what Claude does with it. That word — supervise — is the most important word in the whole program. Today is about building the habits that let you delegate real work and still trust what comes back."

**0:05–0:15 — Check-in on the week.** "Who did the 90-second exercise again on a second folder? What did you notice?" Two or three learners share. Watch for learners who report being more comfortable with the sandbox concept — good. Also watch for learners who admit they haven't let Claude touch anything real yet — that's the group Session 4 serves most directly.

**0:15–0:30 — The Competency Ladder.** Show the slide.

Level 1 — Trust the Boundary. The user sets scope, reads the agent's scope statement, and verifies it. Every task begins with "open the folder we're working in." Success: you confidently set scope and verify it.

Level 2 — Read the Work. The user inspects what the agent did before accepting it. Which files it touched, what it changed, what it created. Success: you catch a mistake before it ships.

Level 3 — Delegate With Checkpoints. The user hands off multi-step work with explicit checkpoints — "find the files, show me what you found, then I'll tell you what to do with them." Success: you can leave Claude running on longer tasks and trust the checkpoints.

Ask each learner to place themselves honestly. "Level 1 if you've set scope and verified it. Level 2 if you've caught at least one mistake. Level 3 if you've done multi-step delegated work already. Where are you right now?"

Most will be Level 1 or early Level 2. That's correct. The point of today is getting everyone comfortably into Level 2.

**0:30–0:50 — Exercise 1: Read-Only Task.** Share your screen. Open your prepared sandbox folder in Cowork. Give Claude a read-only task: "summarize each file in this folder in one sentence." Let Claude work. When the response comes back, read it with the cohort. Note what it got right, what it missed, what it misinterpreted.

Then have learners do the same on their own. They can use a folder they set up this week, or you can share a sample folder structure they can recreate quickly. Fifteen minutes. Circulate.

Pull the cohort back. Ask two or three learners: "What did Claude get right? What did it miss?" The point is not grading Claude — it's practicing the act of reviewing.

**0:50–1:15 — Exercise 2: Write Task with Preview.** This is the core of the session.

Share your screen. Give Claude a write task: "reorganize the files in this folder into subfolders by topic."

Before accepting: Claude will show a preview of its plan — it's going to create these subfolders, move these files into them. Read the plan out loud. "Claude wants to create a 'Design' subfolder and put these three files in it. Do I agree? Let me check. The third file is actually a budget spreadsheet — it doesn't belong in Design. I'm going to push back."

Push back live: "Move the budget spreadsheet into a Finance subfolder instead."

Let Claude update the plan. Review again. Accept.

After Claude completes the task: open Finder, show the cohort the result. "This is what it actually did. Let me compare it to what I expected." Walk through any remaining issues. If everything is clean, say so — "this one came out right. Sometimes they do."

Then: learners do the same with their own folder. "Give Claude a write task — reorganizing, renaming, creating — something that actually changes files. Preview before accepting. Review after completing. Your goal is to catch at least one thing and push back." Twenty minutes.

**1:15–1:25 — The prompt pattern.** Pull the cohort back. Show the intent-plus-location-plus-permission slide:

> *Find the latest quarterly report in the Finance folder, summarize it, and do not edit or move any files.*

"Intent: find and summarize. Location: the Finance folder. Permission: don't edit or move. Three parts, one sentence, covers the ground that matters. Use this pattern whenever you're handing Claude a task that could touch things."

Ask each learner to write one prompt in this pattern for a real task they have this week. Five minutes. Share one.

**1:25–1:30 — Graduation and close.** "Who caught at least one mistake in Claude's work today?" Count the hands. Mark the graduation in your tracker.

Assignment: "Before Session 5, give Claude one multi-file task in a real folder and catch at least one mistake. Preview before accepting. Review after completing. Post in the community if something interesting happens."

Preview Session 5: "Next week is the payoff week. You build an automation that runs without you asking. Start thinking about what you'd want Claude to do every morning before you start work."

## Stuck Points and Rescues

**"Claude did it perfectly — there's nothing to catch."** Sometimes true. Give them a harder task — "now ask Claude to rename the files according to a naming convention of your choosing." Harder tasks produce more debatable choices, which produces more to review.

**"I clicked accept before reviewing."** Everyone does this once. Say so — "that's normal, it takes practice to slow down." Next task, pause visibly before accepting. Cultivate the pause.

**"The action log is overwhelming."** Teach them to scan for write actions first. Reads are cheap; writes are where mistakes live. Look at file-creation and file-modification actions. Skip reads unless something seems off.

**"I'm scared to let Claude do write tasks on real files."** Healthy. Start smaller. Use a throwaway folder. Use reversible write tasks — create a file you can delete, rename something you can rename back. Don't start with "reorganize my whole Documents folder."

**"Claude asked for permission to do something and I panicked."** Good instinct. Read the permission request carefully. What is Claude asking? What's the scope? You can always say no. Saying no is not failure. It's Level 1 in action.

**"I rejected Claude's plan but now I don't know how to redirect."** Use the pattern — intent plus location plus permission. "Instead of that, I want you to do X, in this folder, and don't touch Y." Be specific about what changed.

**"Claude did something I didn't expect and I don't know if it's wrong or just different from what I'd do."** Fair — sometimes Claude's choices are valid but unfamiliar. Ask: "does this still accomplish the goal?" If yes, the difference is aesthetic, and you can accept or push back on taste grounds. If no, redirect.

## Post-Session Debrief

1. How many learners caught at least one mistake in the session?
2. Which learner is visibly stuck at Level 1 and needs outreach before Session 5?
3. Did Exercise 2 (write task with preview) produce enough review material? If not, what task will you use next cohort?
4. Did the intent-plus-location-plus-permission pattern stick, or do you need to reinforce in Session 5?
5. Is anyone emotionally uncomfortable letting Claude touch files, and what specific fear is driving it?

---

# Session 5 — Automation (The Payoff)

## At a Glance

Ninety minutes. This is the session the entire program has been building toward. Every learner leaves with a live, running automation in their own account. The session works or it doesn't based on whether that happens — everything up to now is context. Today is the payoff.

**They leave with:** a scheduled automation running in their own account, verified with a one-time manual run, tied to a task they actually care about.

**Graduation moment:** each learner says out loud, in one sentence, what their automation does and when it runs.

## Pre-Session Prep

Confirm every learner has scheduled-tasks access in their Claude account. If some don't, you need a fallback ready — either a prompt template they run manually each morning (acceptable substitute; not the full graduation moment) or a workaround using connectors plus a calendar reminder.

The default automation the whole cohort builds together is **morning inbox triage.** It's universal — everyone has email — and it produces visible value on day one. Prepare the full build sequence:

- A Gmail connector (already installed for most learners from Session 2).
- A Cowork folder or Chat Project with the automation's instructions.
- A scheduled task that runs the automation daily at a set time.
- A verification step — run it once manually and check the output.

Have the morning inbox triage prompt ready to share. A good baseline:

> *Every weekday morning at 7:00 AM, check my inbox for new emails received since 5:00 PM yesterday. Categorize them into: Urgent (needs reply today), Important (needs action this week), FYI (no action needed), and Promotions (no action needed). Give me a brief summary at the top with counts per category, then list the Urgent and Important emails with a one-line summary and the sender's name. Do not reply to anything. Do not mark anything as read.*

Test this prompt yourself before the session. Make sure your own automation runs cleanly.

Prepare branching alternatives for learners who want something other than inbox triage. Common branches:

- **Daily journal seed** — a prompt asking Claude to prepare a journaling template based on the learner's calendar for the day.
- **Weekly report builder** — a Friday-afternoon job that pulls the week's meetings and drafts a summary.
- **Meeting prep** — a job that runs thirty minutes before the learner's next meeting with background on the attendees and agenda.
- **Morning focus list** — a prompt that combines calendar and task context to suggest a three-item focus list.

You should be able to help a learner stand up any of these in twenty minutes.

## Materials

- Session 5 deck (with the morning inbox triage prompt on a slide).
- Your own automation, already built and tested, that you can demo live.
- The four branching alternatives documented as short prompt templates.
- Graduation tracker ready — this is the final graduation of the cohort.

## Minute-by-Minute Plan

**0:00–0:05 — Open.** "Welcome to Session 5. Today is the day Claude starts working for you without you asking. Today is the payoff. Everything we've done up to now — chat fluency, Projects, connectors, skills, Cowork, supervision — is the foundation. Today we build the thing that lives on top of it."

Frame the emotional stakes openly. "By the end of this session, each of you will have an automation running in your own account. We're going to do it together, as a cohort, starting with the same automation. Then anyone who wants to branch off into a different one can."

**0:05–0:15 — Week recap and quick wins.** "Who had a supervision moment this week worth sharing?" Take two or three stories. Celebrate specifics — "you caught Claude renaming a file wrong and pushed back — that's Level 2." Keep it to ten minutes; you need the rest of the session for the build.

**0:15–0:30 — Demo build.** Share your screen. Walk the cohort through your own morning inbox triage build, step by step, from scratch (even though yours is already running — demonstrate the full build so learners see each click).

Step one: open a Cowork folder or Chat Project dedicated to this automation. Step two: paste in the prompt. Step three: verify the Gmail connector is active. Step four: open the scheduled tasks interface. Step five: create a new scheduled task, point it at this prompt/context, set the schedule to 7:00 AM weekdays, save.

Run the task manually once to verify. Read the output with the cohort. "This is what I'll see in my inbox or wherever the output gets delivered every morning. That's the automation."

**0:30–1:10 — Build session.** "Now you. Build the same automation for yourself. Same prompt, adapted to your own schedule and your own preferences. Forty minutes."

If a learner wants to branch into one of the four alternatives, tell them now — "come into my breakout room and we'll do a shorter version of this together." Then put them in a breakout with you for five to seven minutes of 1:1 coaching while the rest of the cohort works on inbox triage.

Circulate through the main room. Help learners who get stuck at any of the five build steps. Common stuck points (see below) will come up in this block.

**1:10–1:20 — Verification.** Stop the build. "Everyone, run your automation once manually. Not on a schedule. Run it now. Look at the output."

Wait while learners run theirs. When a learner gets a good output, acknowledge it — "nice. That's your automation."

Ask two or three learners to share their output on screen. Quick — thirty seconds each. Not a critique session; a celebration.

**1:20–1:27 — Group share.** Go around the cohort. Each learner says, in one sentence: *"My automation is X, it runs at Y, and it will save me Z."*

You mark graduation in your tracker as each learner speaks.

**1:27–1:30 — Close.** Congratulate the cohort. Name what they did: "Five weeks ago, you couldn't have explained what an LLM was. Today you have an agent running on a schedule, doing work for you, in your real account. That's the whole arc."

Point them to the alumni lounge. "Your cohort stays together in the community. Alumni from past cohorts are in there too. Share what you build next. Help next cohort's learners when they get stuck. This doesn't end today — it changes shape."

Mention the testimonial request they'll receive in a week. Mention that if they want to go deeper, the Code appendix and any future advanced track will be in the community.

End on time. End on the graduation. Do not tack on announcements after the graduation moment — it dilutes the landing.

## Stuck Points and Rescues

**"Scheduled tasks aren't available in my account."** Check account tier and region. Fallback: a manual daily habit using a prompt template the learner runs each morning. Note this as a partial graduation — the automation concept has landed, even if the scheduling mechanism isn't available. Mark them in the tracker with a note to revisit when scheduling becomes available for them.

**"My automation produced garbage output."** Expected on the first run. The goal today is *running* the automation once, not perfecting it. Tell them: "Next week, refine it. The shape is right; the wording is tunable."

**"The connector I need isn't available to me."** Pivot to an automation that uses a connector they do have. If they have Calendar but not Gmail, the morning focus list works. If they have neither, the daily journal seed works from a prompt alone.

**"I want to build something way more ambitious."** Great — but not today. The rule is ship something simple first. Ambition goes in the alumni lounge. Build the ambitious version next week and post the result.

**"My prompt isn't producing what I want."** Use the rhythm from Session 1 — iterate. Run it, read the output, push back, iterate. Do this in the build block, not at the end.

**"The schedule didn't save."** Sometimes a UI glitch. Refresh, try again. If it fails twice, pivot to an on-demand prompt for today and debug the scheduling after the session.

**"I can't remember what the morning inbox triage prompt said."** On the slide. Refer them to the slide. Also pinned in the community channel.

**"I graduated — now what?"** This is the best problem of the day. Point them to the alumni lounge. Ask them to post a screenshot of their automation output this week. Tell them about the starter library (once built) or alumni calls (once scheduled). Keep them connected.

## Post-Session Debrief

1. How many learners graduated with a live automation running?
2. For anyone who didn't graduate, what specifically went wrong, and what's the plan to get them to graduation in week six?
3. Which branch automations (beyond inbox triage) came up, and do you need to document them more fully for next cohort?
4. Did the emotional arc land — did the payoff feel like a payoff?
5. What would you change about the pacing of the build block?

---

# Back Matter

## Stuck-Point Reference (Consolidated)

Organized by theme. Use this mid-session to diagnose what's happening, or before a session to anticipate what might.

### Permissions and Access

**Company IT blocks a connector.** Fallback to a personal account or a skill-only version of the exercise. Don't try to override the block; don't promise the learner it'll work "if they just ask their IT team." Work with what they have.

**Permission dialog scares the learner.** Validate the hesitation. Name the gate as a good thing. Offer to skip or try a different connector.

**OAuth flow errors.** Different browser, log out and back in, try again. If broken after three minutes, pivot and debug after session.

**Scheduled tasks unavailable.** Manual daily habit with a prompt template. Partial graduation. Revisit when feature becomes available.

### Technical Setup

**Desktop app won't install or open.** Older operating systems sometimes fail. Have the learner pair with someone during the exercise (observe, don't operate). Debug after session. Do not derail the cohort.

**Claude account tier doesn't include a feature.** Offer upgrade help after the session. For today, work with what they have and find a path to partial graduation.

**Browser or network issues.** Standard troubleshooting — different browser, restart, check connection. If still broken, pair with another learner.

### Confidence and Anxiety

**Visible fear of giving Claude file access.** Validate. Refer to the one-sentence rule. Use a low-stakes test folder. Let observation do the work.

**Fear of Claude making destructive mistakes.** Teach supervision explicitly. Preview before accepting. Reversible write tasks first. The one-sentence rule keeps things bounded.

**Imposter feelings — "I don't belong here."** Common in non-technical learners. Counter with — "the learners in the cohort who struggle most with this material often end up the most confident users once it clicks. You're exactly who this is for." Do not argue them out of the feeling. Just keep them in the room.

**Perfectionism on first prompts.** Teach iteration as the rhythm. First draft is a draft. Push back is the skill. Perfection is not the goal.

### Prompt Phrasing

**Vague first prompts.** Most common cause of "Claude is useless" moments. Rescue by having the learner share their screen; work with them on adding context and specificity. Not a lecture — a live pair-edit.

**Over-specified first prompts.** Less common but real. Some learners write a 400-word prompt for a simple task. Rescue: "Try a shorter version. See what Claude does. Then add context if needed."

**Confused about when to push back.** Teach the rhythm — read the response, evaluate honestly, push back when something's off, accept when it's right. Not every response needs push-back; first responses often don't match your actual goal.

**Path language slips in.** Catch gently, redirect to landmark language. Model the correction: "directory — I mean folder. Folder is the word."

### Cohort Dynamics

**A learner dominates share-outs.** Thank them. Call on someone else by name.

**A learner is silent.** Check in by name five minutes into the exercise. Silent is often overwhelmed, not disengaged.

**The whole cohort is quiet.** Start with your own screen. Model stuckness out loud. Silence usually breaks when one person hears someone else struggle with something real.

**Side conversations between two learners.** Rare in remote cohorts. When it happens, redirect to the group channel — "great exchange you two, can you share that with the rest of us?"

**The cohort is behind schedule.** Cut share-outs, not graduation. Cut exercise time, not the observation block that follows. Never cut the graduation moment.

### Output Quality

**Claude returns something wrong or misleading.** That's the exercise, especially in Sessions 1 and 4. Don't rescue the answer. Teach push-back.

**Claude refuses to do something reasonable.** Sometimes a scope issue (Claude thinks the task is outside the folder) or a policy moment. If scope, clarify the folder. If policy, accept the refusal and pivot.

**Claude's output is technically right but stylistically wrong.** Teach taste as a pushback axis. "This is correct but too formal — rewrite more casually."

**Claude's output is vague.** Push back with specificity. "Don't summarize generally; tell me specifically what this email is asking me to do."

---

## Common Facilitator Failure Modes

The things you, the facilitator, will do wrong. Catch yourself.

**Teaching paths accidentally.** You'll slip. Say "directory" or "path" and then correct yourself out loud. The correction models the rule for the cohort.

**Moving too fast through Session 3.** The sandbox exercise needs time to land. Do not compress it for time. Cut earlier blocks instead.

**Solving learner problems instead of letting them struggle.** Productive struggle is the teaching. If you jump in and fix a learner's prompt, they don't learn push-back. Slow yourself down.

**Filling silence.** Let Claude take ten seconds. Let a learner think for fifteen. Silence is processing time. Narrating over it robs the cohort.

**Grading learners instead of tracking behavioral checkpoints.** "Great prompt!" is grading. "Interesting — you phrased it differently the second time and the answer shifted, did you notice?" is observation. Use observation language.

**Running over time.** You set the precedent in Session 1. If you run long on Session 1, the whole cohort thinks sessions always run long. End on time, every time.

**Making the session about you.** Your demos are a means, not an end. The graduation moment is the cohort graduating, not you performing. Talk less than you think you should.

**Adding material not in the plan.** You will want to teach learners things you've learned from your own work. Resist. If it's not in the session plan, save it for the community channel or a future session. Scope discipline is a gift to your future self.

**Ignoring the community between sessions.** The cohort expects you there. Read posts. Respond briefly. You don't have to solve every problem — but you have to be present.

**Skipping the debrief.** The debrief is how the curriculum improves. No debrief, no iteration. Fill it out within twenty-four hours of every session.

---

## Landmark Language Translation Table

Whenever you catch yourself about to say the left column, say the right column instead.

| Don't say | Say |
|---|---|
| directory | folder |
| subdirectory | folder inside a folder, or a subfolder if necessary |
| path | where the folder is, or what folder it's in |
| parent directory | the folder above this one, or outside this folder |
| child / descendant | inside the folder, or inside a folder inside |
| absolute path / relative path | on your desktop, in your Documents, etc. |
| root | the top folder, or your computer's main folder (rarely needed at all) |
| CWD / working directory | the folder you're working in, or the folder Claude is working in |
| filesystem | your computer's folders and files |
| hierarchical | folders inside folders |
| traverse | move through, or look through |
| set the working directory | open a folder, or hand Claude a folder |
| change directory | move to a different folder |
| mount point | rarely needed; if used, *a location where an external drive or folder shows up on your computer* |
| permissions (in the file-system sense) | what Claude can see or touch |
| read-only / write | looking at versus changing |
| sandbox (internal) | the box, the folder Claude is working in |

The principle underneath the table: if a word belongs only to the programming world, translate it. If a word belongs both to the programming world and the everyday world, use the everyday meaning first and introduce the programming meaning only when necessary.

---

## Running a Private Company Cohort

The same curriculum, with a different shape.

**What's different.** Private company cohorts are paid by a company, not an individual. They usually run with 6–15 learners from the same organization. Learners often arrive with shared context — same tools, same internal language, sometimes the same open projects. That shared context is an advantage you lean into.

**Before the engagement.** Learn the company's stack. What email, calendar, document, and project tools do they use? What are their policies on connectors and external AI tools? What work do they most want Claude to take off people's plates? The sales conversation should surface this; if it didn't, ask the sponsor explicitly before Session 1.

**Customization points.** The default automation in Session 5 — morning inbox triage — may not be the right one for this company. If the company's primary pain point is weekly status reporting, make the cohort's shared automation a weekly report builder. If it's meeting prep, use the meeting prep automation. The shared project is customizable; the pedagogy is not.

Landmark language stays the same regardless of company. Do not adapt the pedagogy to "the company's way of talking" — the company's way of talking is often path language, and the whole point is to teach landmark language.

**What to keep.** The five sessions. The graduation moments. The one-sentence rule. The Competency Ladder. The 90-second exercise. The behavioral assessment model. Do not let a company demand quizzes, test scores, or other assessment formats that contradict the curriculum.

**What to adapt.** The demo content (use their own archetypes — their inbox, their files, their kind of work). The default automation (match their pain point). The session timing (some companies want 60-minute sessions over 8 weeks instead of 90 minutes over 5; this is negotiable but try to preserve the total contact hours).

**Sponsor management.** Every private cohort has a sponsor — the manager or exec who bought it. Keep them informed with a short email after each session. Sponsor expectations are often different from learner expectations; manage both.

**Graduation artifacts.** Companies often want a completion report. Provide one — list of learners, sessions attended, graduation moments achieved, automations built. Do not provide grades or rankings. This is not what the curriculum measures.

---

## Post-Cohort Debrief Template

Fill this out within a week of Session 5 ending. Use it for every cohort. The collected debriefs become the material for curriculum iteration and for training future facilitators.

**Cohort.** Name, dates, number of learners enrolled, number who completed, number who graduated with a live automation.

**What worked.** Three specific things from this cohort that went better than expected. Be concrete — not "the vibe was good" but "Session 3 landed unusually well because three learners happened to run the sandbox exercise on a shared project they had ongoing, which created vivid before-and-after moments."

**What didn't.** Three specific things that didn't work. Again, concrete. "The morning inbox triage default didn't match this cohort because four of them use Outlook, which doesn't have a stable connector — we pivoted to calendar-based automations and it worked, but it slowed the session by fifteen minutes."

**Curriculum changes to consider.** Any syllabus, asset, or session-plan changes you'd make based on what happened. Flag whether the change is this-cohort-specific or general.

**Learner-specific notes.** Names of learners who struggled, what they struggled with, what outreach you'll do in the alumni lounge to keep them engaged. Names of learners who may be testimonial candidates.

**Facilitator self-assessment.** Three things you did well. Three things to work on next cohort. One piece of explicit feedback you'd give yourself.

Archive the debrief in your facilitator folder. Re-read the last three before running a new cohort.

---

## Appendix A — If the First Cohort Is You Teaching Yourself

This section is for the case where the original author is running the first cohort of Camp Claude without anyone else to rehearse with. Most of the guide above assumes a trained facilitator; this appendix assumes a bootstrapping one.

**Rehearse each session with Claude before you run it.** Literally — open Claude, paste in the session plan, and have Claude play the cohort. Ask Claude to raise the objections a learner would raise. Practice your responses. You are not looking for Claude to be a perfect simulation; you are looking for your own voice to warm up on the material.

**Record every session.** Watch your recording back within forty-eight hours. Note three things: where you moved too fast, where you filled silence instead of letting it work, and where you slipped into path language. Every facilitator does all three, and the recording is the only way to see your own patterns.

**Debrief honestly with yourself.** The post-session debrief template above is designed for a facilitator who isn't the author. You, the author, need a harder version — what did you miss that only the author of the curriculum would have noticed? What concepts landed differently in practice than you expected when writing?

**Iterate the curriculum between sessions, not after the cohort.** If Session 2 revealed that the access-versus-know-how distinction isn't landing, fix the Session 2 materials *before* the next cohort, not after you've watched it confuse five more cohorts. Your own first cohort is a live edit pass on the curriculum.

**Resist the urge to over-teach.** You, the author, know more than the session allows time for. Every cohort you run, you will want to add a "just one more thing" moment. Don't. Scope discipline is the gift of the curriculum structure — trust it.

**Collect direct quotes from learners.** The testimonial request goes out a week after Session 5, but you also need in-the-moment quotes — things learners say during sessions that capture the learning landing. Write them down. They become the marketing language for future cohorts and the raw material for case studies.

**Teach it more than once before handing it off.** The first cohort reveals what works in your hands. The second reveals what's curriculum versus what's you. Don't let anyone else facilitate Camp Claude until you've run it at least twice.

---

## Appendix B — The Curriculum's Non-Negotiables

A short list of things that, if changed, mean you are no longer teaching Camp Claude. Hold these.

**Landmark language over path language.** Always.

**Behavioral graduation moments, not quizzes.** Always.

**The one-sentence rule.** Word for word. Do not paraphrase it for "brevity" — the specific wording is the teaching.

**Chat before Cowork before Code.** The order is the curriculum. Do not rearrange.

**The 90-second sandbox exercise.** Done as a group, in Session 3, with every learner doing it in real time. Not a video. Not a demo-only moment. Every learner, live, every cohort.

**The five principles.** Landmark language over path language, observation over explanation, preview the payoff early, build collaboration competency before environment competency, Smallest Useful Scope.

**The cohort builds a real automation together in Session 5.** Not a simulated one. Not an optional one. Not a stretch goal if time permits. Every learner, live automation, every cohort.

Everything else is adjustable. These are not.

---

*End of Facilitator Guide.*

*Version history: Working draft — April 15, 2026. Derived from syllabus.md, asset-library.md, and agent-training-notes.md.*
