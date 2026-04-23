---
title: "Claude Models, Tokens, and Usage — How to Pick and Preserve"
description: "A practical guide to Haiku, Sonnet, Opus, tokens, context windows, and preserving weekly usage."
module: 4
section: "teach"
tier: "free"
readTime: "10 min read"
updated: "2026-04-18"
---

# Claude Models, Tokens, and Usage — How to Pick and Preserve

*A practical reference for understanding Haiku, Sonnet, and Opus — when to use each, how tokens and context work, and why your usage sometimes disappears faster than expected.*

**Working draft — April 18, 2026**

---

## Why This Asset Exists

Most ChatGPT migrants have never chosen a model in their life — ChatGPT picks one for them. Claude hands that choice back to the user. Three options live behind every conversation: **Haiku**, **Sonnet**, **Opus**. They're not just different sizes. They have different costs, different speeds, and different strengths. Pick the wrong one and you'll either waste usage or wait too long or hit weekly limits for no good reason.

This asset names the three models, explains the token and context plumbing underneath, and gives learners the decision rule for picking the right engine for the task.

---

## The One-Sentence Version

**Haiku is fast and cheap. Sonnet is balanced. Opus is for the hard stuff. Every message costs tokens, long conversations cost more every turn, and the weekly limit is a real ceiling — match the model to the task and you'll rarely hit it.**

---

## The Three Models

Claude's lineup follows the same pattern as a car company — economy, standard, performance. Same brand, different engines for different jobs.

### Haiku — The Fast, Cheap One

**What it is.** Claude's lightest, fastest, cheapest model. Built for speed and volume.

**Best for.**
- Simple tasks — quick summaries, short rewrites, answering a one-line question
- High-volume automation — scheduled tasks that run every morning
- Classification and sorting — "is this email urgent?"
- Anything where you want speed over depth

**Not for.**
- Hard reasoning or ambiguous problems
- Long nuanced writing
- Multi-step agentic work with edge cases

**Rule of thumb.** If you'd ask an intern to do it in under 5 minutes, use Haiku.

### Sonnet — The Balanced Default

**What it is.** Claude's middle tier. Capable enough for most work, fast enough to not feel slow, reasonably priced.

**Best for.**
- Most daily work — drafting emails, writing docs, iterating on ideas
- Moderate reasoning — comparing options, debugging small problems
- Coding tasks that aren't architectural
- The conversations you'd have with a smart colleague

**Not for.**
- Genuinely hard problems that need extra horsepower
- Routine bulk tasks where you're wasting the engine (use Haiku)

**Rule of thumb.** When in doubt, use Sonnet. It's the right answer ~80% of the time.

### Opus — The Heavyweight

**What it is.** Claude's most capable model. Most expensive per token. Often a little slower. Strong at nuance, ambiguity, architecture.

**Best for.**
- Hard reasoning — strategic thinking, complex planning
- Ambiguous problems where judgment matters
- Architectural or design decisions
- Long-form creative writing with real nuance
- Code that spans multiple files and needs real thought

**Not for.**
- Simple tasks (you're burning usage for nothing)
- Routine drafts (Sonnet is fine)
- High-volume automation (Haiku or Sonnet)

**Rule of thumb.** Opus is a big-engine car. You don't drive it to the corner store.

---

## What a Token Actually Is

A **token** is a small unit of text — roughly 4 characters, or about 3/4 of a word in English.

Some references:

| Content | Approximate tokens |
|---|---|
| "Hello world" | 2 |
| A typical sentence | 15–30 |
| A short email (paragraph) | 100–300 |
| A full page of text | 500–750 |
| A long document (10 pages) | 5,000–7,500 |
| A book chapter | 20,000–50,000 |

Every message you send to Claude **costs tokens**. Every message Claude sends back **also costs tokens**. Both count toward your weekly limit.

---

## What Context Actually Is

The **context window** is how much text Claude can see *at once* during a single conversation.

It includes:
- Every message you've sent in the current chat
- Every message Claude has sent back
- Any files you've attached
- Any Project-level instructions or pinned files
- Any active connectors' relevant data
- The current `CLAUDE.md` skill if you're in Cowork

Claude's models today hold massive context windows (200,000 tokens and up — roughly 150,000 words, the length of a short novel). That sounds unlimited. It's not.

**The key insight:** every turn of a conversation sends the *entire context back* to Claude, so it can "remember" what was said. That means a 20-turn conversation sends the whole history 20 times. Token cost compounds.

---

## How Usage Actually Works

Your Claude plan gives you a **weekly token budget**. Every message uses some of it. Three factors determine how fast you burn through:

1. **Which model you picked** — Opus costs roughly 10–20× more per token than Haiku.
2. **How much context is loaded** — long conversations, many attached files, many active connectors all grow the context.
3. **How long Claude's response is** — a short reply uses fewer output tokens than a 5-page essay.

On top of the weekly budget, there's a **rolling session limit** — a short-window cap (a few hours) that prevents you from burning through your whole weekly allowance in one sitting.

### The compound cost of long conversations

This is the most counterintuitive part. Say you have a 30-turn chat with Opus:

- Turn 1: sends 100 tokens, costs a little
- Turn 15: sends ~1,500 tokens of history, costs more
- Turn 30: sends ~3,000+ tokens of history, costs a lot

The conversation gets *exponentially* more expensive as it grows. A 30-turn Opus chat can easily cost 50–100× what a new short Opus chat costs.

**Rule of thumb.** When a conversation starts to feel slow or heavy, that's your signal to start a new chat or switch models.

---

## The Decision Rule — Which Model to Use

Ask yourself two questions:

**1. How hard is this task?**
- Easy, obvious, one-step → **Haiku**
- Moderate, needs some judgment → **Sonnet**
- Ambiguous, hard reasoning, real nuance → **Opus**

**2. How often will I run it?**
- One-time or rare → pick based on hardness
- High-volume / scheduled / automated → **drop one tier** (Sonnet → Haiku, Opus → Sonnet)

Two worked examples:

**"Summarize this email in one sentence."** → Easy + one-time → **Haiku**.

**"Every weekday at 7am, triage my inbox, summarize, and draft replies."** → Moderate + high-volume → **Sonnet** (dropped one tier because it runs daily).

**"Help me think through whether to rebuild our onboarding flow or patch it."** → Hard + one-time → **Opus**.

---

## How to Preserve Tokens

Seven practical habits that stretch your weekly limit:

### 1. Match the model to the task.
Default to Sonnet. Drop to Haiku for obvious stuff. Reach for Opus only when you actually need it.

### 2. Start fresh chats for new topics.
Don't let one thread balloon to 50 turns covering three unrelated things. Open a new chat. Claude has no memory cost for chats you haven't started.

### 3. Use Projects to scope context.
A Chat Project with pinned files only loads those files when you reference them. That's cheaper than attaching the same files to every conversation.

### 4. In Cowork, keep Project folders lean.
Every file in the folder counts toward context. If the Project has 50 files but a task only needs 3, move the others to a sub-folder or a different Project.

### 5. Set Tool Access Mode to "Load tools when needed."
Under Settings → Capabilities → Tool Access. The other option, "Tools already loaded," pre-loads every active connector into every chat — expensive for no reason if you only use a few.

### 6. Pick the right model for scheduled tasks.
Scheduled tasks run on their own — they don't need Opus unless the task genuinely requires it. Haiku or Sonnet on a daily schedule saves enormous usage over a week.

### 7. Don't attach what you don't need.
Every file uploaded into a chat becomes part of context for the rest of the conversation. Upload only what Claude actually needs to see.

---

## Understanding the Usage Tab

From the Settings Tour asset — the Usage tab shows three things:

- **Current session** — rolling short-window limit (resets every few hours). Tells you how much you've used *right now*.
- **Weekly limits** — total cap for the week. Separate counters for "All models" and "Sonnet only" depending on your plan.
- **Daily included routine runs** — how many scheduled tasks you've run today out of your daily allowance (e.g., 0 / 15).

If you're hitting session limits often, either the model is too big or the conversations are too long. If you're hitting weekly limits, your overall usage pattern needs tuning — usually via the habits above.

---

## The Mental Model — Three Engines, One Garage

Think of Haiku, Sonnet, and Opus as three vehicles in your garage:

- **Haiku** = the bike. Fast in traffic, zero fuel, wrong for road trips.
- **Sonnet** = the sedan. Reliable, comfortable, handles 90% of what life throws at you.
- **Opus** = the moving truck. Overkill for a grocery run, indispensable when you're moving a house.

You don't always need the moving truck. Most of the time the sedan is right. Some of the time the bike is right. The skill is knowing which key to grab.

---

## Common Confusions

**"Why did my chat get slower after 20 turns?"** Long conversations re-send the whole history every turn. More tokens going in = more time to process. Start a fresh chat for a new topic.

**"I'm hitting weekly limits and I barely use Claude — what's going on?"** Usually one of three things: (1) running Opus on everything (expensive), (2) long conversations that balloon over time, (3) too many active connectors inflating context. Check the Usage tab and audit your habits.

**"Is using connectors free?"** No. Connectors add their data to context every turn they're active on a task. Keeping 10 connectors active in every chat costs more than enabling just the two you need.

**"If I switch models mid-conversation, what happens?"** The chat history stays with you, but the new model handles the continuation. Useful trick: start with Opus for the thinking, switch to Sonnet for the drafting.

**"Why does Cowork feel heavier than Chat?"** Cowork Projects bundle skills, connectors, and Project files — all of which count as context for every task. That's by design (it's why Cowork is useful), but it also means Cowork tasks cost more per run than a lightweight Chat question.

**"Do artifacts cost tokens?"** Yes. An Artifact is text Claude generated — it counts as output tokens. Long Artifacts cost more than short Artifacts.

**"What about 'Load tools when needed' vs 'Tools already loaded'?"** The first loads connectors only when a task needs them — saves tokens. The second pre-loads every connector into every chat — faster access, much heavier on usage. Keep the first setting unless you have a specific reason.

---

## Teaching Implications

This asset slots into multiple places in the curriculum:

- **Foundations Session 1** — preview briefly when showing the Settings tour ("Claude has three models; we'll talk about them in Session 2").
- **Foundations Session 2** — deep dive here, when learners start actually using Chat heavily. Teach the decision rule and the preservation habits.
- **Full cohort Session 5** — revisit when learners set up their first scheduled task. Picking the model for an automation is a real decision, and Haiku or Sonnet is almost always right.
- **Community pin.** This is the asset people come back to when they hit a weekly limit and don't know why.

---

## Landmark Language

- **Haiku is fast and cheap.** **Sonnet is balanced.** **Opus is for the hard stuff.**
- A *token* is roughly 3/4 of a word.
- *Context* is everything Claude can see at once — your messages + attachments + instructions + history.
- Every turn re-sends the whole conversation. *Long chats get exponentially expensive.*
- Match the model to the task. *Opus is a moving truck — don't drive it to the corner store.*
- If a chat feels slow, *start a new one*.
- Scheduled tasks should almost always run on *Haiku or Sonnet*, not Opus.
- *Tokens are finite*. Your weekly limit is real — respect it and it rarely bites.

Say these often. The goal is for learners to make model choices without thinking about them — the same way experienced drivers pick the right vehicle for the trip.
