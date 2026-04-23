---
title: "The Automation Equation — How Claude Goes From Helper to Worker"
description: "The single formula behind every real automation Camp Claude teaches."
module: 7
section: "teach"
tier: "free"
readTime: "7 min read"
updated: "2026-04-17"
---

# The Automation Equation — How Claude Goes From Helper to Worker

*The single formula behind every real automation Camp Claude teaches.*

**Working draft — April 17, 2026**

---

## Why This Asset Exists

Everything in Camp Claude builds toward one moment — when a learner's Claude does something *without them being there*. That moment is where "using AI" stops and "delegating to AI" starts.

The moment looks like magic. It isn't. It's a three-ingredient recipe, and every learner can cook it once they know the equation.

This asset is the capstone handout. It names the formula so automation stops feeling like a mystery and starts feeling like a pattern.

---

## The Equation

**Skill × Connector × Scheduled task = Automation**

Or in plain English:

**Instructions × Access × Cadence = Work that runs without you.**

Three ingredients. All three required. Take any one away and you don't have an automation — you have something else:

- Connector + Scheduled (no Skill) → Claude improvises every run. Results drift.
- Skill + Connector (no Scheduled) → A task you still have to remember to run. Not automation.
- Skill + Scheduled (no Connector) → Claude can't see the thing it's supposed to act on.

All three, every time. That's the rule.

---

## Ingredient 1 — The Skill (the *how*)

The **Skill** is the written procedure. The standard operating procedure. The "do it this way every time" instructions Claude follows whenever this task runs.

A skill is a markdown file — usually named `CLAUDE.md` and labeled "Instructions" in the UI. It lives inside the Cowork Project folder. Every time a scheduled task fires, Claude reads the skill and follows it.

**Examples of what goes in a skill:**
- The order of steps
- The format of the output
- Which things to ignore
- Which things to flag
- The tone to use
- Rules for edge cases ("if you find no new emails, don't send a blank digest")

**Rule of thumb.** If you'd have to re-explain it to a new assistant every Monday morning, it belongs in the skill.

---

## Ingredient 2 — The Connector (the *access*)

The **Connector** is the bridge to the tool Claude needs to reach. Gmail. Calendar. Drive. Notion. Slack. A custom internal system.

Connectors are account-level — installed once in Customize, available to every task that asks for them. But a connector only *activates* inside a task if the task needs it (you can see which ones are live in the Context panel — see the Cowork Task Anatomy asset).

**Rule of thumb.** Every automation reaches *outside itself* to do work. The connector is what makes that reach possible.

---

## Ingredient 3 — The Scheduled Task (the *cadence*)

The **Scheduled task** is what turns a one-off task into an automation. It lives under the Scheduled button in the Cowork sidebar. You set the cadence — daily, weekly, weekdays, on demand — and the task runs itself.

**Cadence options:**
- **Daily** — every day at a set time
- **Weekdays only** — Monday through Friday
- **Weekly** — one day a week at a set time
- **On demand** — fires when you click or when another trigger calls it

**Rule of thumb.** If you're running the same task by hand more than three times, move it to Scheduled. That's the threshold.

---

## Three Worked Examples

Each example shows the full equation — skill, connector, scheduled task, and what lands in your inbox.

### Example 1 — Morning Inbox Triage (the canonical Camp Claude automation)

- **Skill** — `morning-triage.md` — 5-bullet summary of unread emails, flag anything from VIPs, draft replies in your tone, put it all in one email to yourself
- **Connector** — Gmail (read inbox, access sent folder to match tone)
- **Scheduled task** — Every weekday at 7:00 AM
- **Output** — One email in your inbox at 7:05 AM with the whole day pre-processed

Result: You wake up to a pre-sorted inbox with drafts waiting. You spend 15 minutes approving or editing, instead of 90 minutes sorting from scratch.

### Example 2 — Weekly Report Digest

- **Skill** — `weekly-digest.md` — pull last week's calendar events, summarize meetings, list completed vs. scheduled tasks, format as a short status report
- **Connectors** — Google Calendar (meetings), Notion (task statuses), Drive (docs updated)
- **Scheduled task** — Every Sunday at 6:00 PM
- **Output** — A "week in review" document ready for Monday morning planning

Result: Your week is already summarized before Monday starts. No more staring at a blank page trying to remember what you did.

### Example 3 — Content Draft Generator

- **Skill** — `weekly-post.md` — read the notes folder, pick out the most interesting idea, draft three LinkedIn post variations in your voice
- **Connector** — none external; the Project folder holds the notes
- **Scheduled task** — Every Thursday at 4:00 PM
- **Output** — Three drafted posts saved to the folder, ready for you to pick one and publish Friday

Result: You never face a blank page. Drafts are waiting when you sit down to post.

*(Note: this example uses only the files in the folder, so no external connector is needed. The "access" part of the equation is satisfied by the folder itself, which is technically still access — just local access rather than a connector.)*

---

## Blank Template — Your First Automation

Use this template to design your first automation before you build it. Fill in each ingredient.

```
## Automation Name
[Short, descriptive — e.g., "Morning Brief" or "Weekly Recap"]

## Ingredient 1 — Skill
Filename: _______________.md
What Claude should do, step by step:
1.
2.
3.
Output format:

Edge cases (what to do if there's nothing to process, what to skip, etc.):


## Ingredient 2 — Connectors
Which external tools does this need to reach?
-
-
(Or: "None — works entirely inside the folder")

## Ingredient 3 — Scheduled Task
Cadence: ☐ Daily ☐ Weekdays ☐ Weekly (specify day) ☐ On demand
Time of day:
Project folder this lives in:

## What lands in my inbox / folder when it runs
[Describe the output — an email, a file saved to the folder, a Slack message, etc.]

## Signal that it's working
[How will you know this is valuable? What would make you kill it?]
```

That last line — *what would make you kill it* — matters. Most first automations get abandoned. The ones that stick are the ones where the learner knows what success looks like and can tell when it stops being true.

---

## Common Failures (What Breaks the Equation)

**"It ran, but the output was garbage."** Missing or weak skill. The schedule fired and the connector worked, but Claude had no instructions on *how* to do the task. Go to the `CLAUDE.md` file and write the SOP.

**"It ran, but it couldn't find the emails."** Missing connector. The Gmail connector isn't installed on your account, or it's installed but wasn't added to this task's context. Check the Context panel.

**"I built it, but I keep forgetting to run it."** Missing Scheduled. You have a task, not an automation. Add a cadence under Scheduled.

**"It ran on a day there was nothing to do, and I got a blank email."** Skill needs an edge case. Add a rule: *"if there's nothing to report, send nothing."*

**"It ran at the wrong time."** Check the cadence and time zone. Scheduled tasks use your account's time zone, not the folder's or the connector's.

---

## Teaching Implications

The equation should show up across the curriculum, not just at the end:

- **Session 1 (Foundations)** — name the equation once, as a preview. *"By the end, you'll build one of these. It's three ingredients — we'll learn each one and put them together at the end."*
- **Session 3 (Foundations / full cohort)** — you have two of the three (skill, connector). Point at the equation and say *"one more ingredient."*
- **Full cohort Session 5** — the assembly moment. The whole cohort builds the same automation together. Morning Inbox Triage is the default — everyone has email.
- **Capstone share-out** — every learner presents their own automation, framed in the equation. "My skill is X, my connector is Y, my cadence is Z, and here's what lands in my inbox."

---

## Landmark Language

- The automation equation is *Skill × Connector × Scheduled task*.
- Or: *instructions × access × cadence = work that runs without you*.
- A skill is *how*. A connector is *access*. A scheduled task is *when*.
- Every automation reaches *outside itself* to do its work. That's the connector.
- If you're doing a task by hand more than three times, *it's time to schedule it*.
- The three-ingredient rule means *take one away and it stops being automation*.

Say these often. The goal is for learners to diagnose their own automations — "this one's weak on the skill" or "I'm missing the connector" — without having to be told. That's fluency.
