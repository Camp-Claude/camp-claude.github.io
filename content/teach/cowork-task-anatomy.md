---
title: "The Anatomy of a Cowork Task — Progress, Project, Context"
description: "A walkthrough of the three panels that appear when Claude is actually doing work in Cowork."
module: 6
section: "teach"
tier: "free"
readTime: "8 min read"
updated: "2026-04-17"
---

# The Anatomy of a Cowork Task — Progress, Project, Context

*A walkthrough of the three panels that appear when Claude is actually doing work.*

**Working draft — April 17, 2026**

---

## Why This Asset Exists

When a learner opens a Cowork task for the first time, they see three panels stacked on the right side of the screen. It looks busy. Without a mental model, it feels like a cockpit they shouldn't touch.

With the right framing, those three panels become the clearest supervision tool in the whole product. Each one answers one question. Together, they're how you catch mistakes before they ship.

This asset exists so learners walk in already knowing what they're looking at.

---

## The One-Sentence Version

**Progress tells you what Claude *will do*. Project tells you what Claude *can see*. Context tells you what Claude *can reach*.**

If you remember nothing else, remember that. Three panels, three questions, one task.

---

## Panel 1 — Progress

**What it shows.** A numbered list of the steps Claude plans to take, with checkmarks on the ones it's finished, a highlight on the one it's working on, and plain numbering on the ones still ahead.

**Example from a real task:**

> 1. *Identifying newsletter threads and extracting unsubscribe URLs* ← current
> 2. Open Chrome and confirm a working tab
> 3. Visit each unsubscribe link and complete the flow
> 4. Report results (successes, failures, skipped)

**How to read it.**
- Struck-through steps with checkmarks are *done*.
- The highlighted step is *in progress*.
- The plain numbered steps are *the plan, not yet done*.

**What it teaches.** Supervision. This panel is the reason delegation to Claude feels safe. You can see the plan *before* Claude executes it, and you can see the history *after*. No surprises.

**When to trust. When to override.**
- **Trust** when the plan looks right — let it run.
- **Override** if any step looks wrong, ambiguous, or dangerous. Stop Claude before that step runs and course-correct.
- **Review** after — check that what Claude did matches what the plan said.

**Teaching note.** This panel is the single most important thing to show before a learner hands Claude a real folder. Non-technical learners are often terrified of "letting AI loose." Seeing a numbered plan with checkmarks defuses that fear instantly.

---

## Panel 2 — Project (the Folder and its Contents)

**What it shows.** The files Claude has access to for this task. The panel is named after the Cowork Project (e.g., *business*, *CO-LLAB*) and contains:

- **Instructions · CLAUDE.md** — the skill file for this project, labeled "Instructions" in the UI. This is the standing SOP Claude follows for work in this folder.
- **Project files** — every document, spreadsheet, and note in the folder. These are the files Claude can read and potentially write to.
- **Scratchpad** — an audit trail of what Claude touched during the current task, with notations like *wrote to*, *viewed*, or *created*.

**Example from a real task:**

> **business**
> - Instructions · CLAUDE.md
> - learnrudi-retainer-revshare-cop...
> - retainer-model.md
> - revenue-split-examples.md
>
> **Scratchpad**
> - learnrudi-retainer-re... *wrote to*
> - retainer-model.md *wrote to*
> - revenue-split-exampl... *viewed*

**How to read it.**
- The top section is *the sandbox* — everything Claude can see. Nothing outside this folder is visible.
- The `CLAUDE.md` file labeled "Instructions" is *the skill* — the procedure Claude follows for work here.
- The Scratchpad is *the audit trail* — exactly which files got changed vs. just looked at during this task.

**What it teaches.** Three things at once:
1. **The sandbox boundary** (Module 9). Claude sees what's in the folder and nothing else.
2. **Skills as instructions** (Module 6). The skill file is right there, named "Instructions" — the UI proves what a skill is.
3. **Supervision through the audit trail** (Module 10). "Wrote to" vs "viewed" tells you exactly what changed.

**Teaching note.** The `CLAUDE.md`-labeled-as-"Instructions" detail is the single clearest visual for teaching what a skill is. Point at it on the screen. Say *"that file is a skill."* The curriculum's abstract language (*"skills are instructions for Claude"*) becomes concrete the moment learners see it.

---

## Panel 3 — Context

**What it shows.** The external context Claude has pulled in for this specific task — things that live outside the folder but are available for *this* run. Two sub-sections:

- **Uploads** — files the user attached to the task directly (not part of the folder).
- **Connectors** — which installed connectors are active for this task (Gmail, Web search, Claude in Chrome, etc.).

**Example from a real task:**

> **Uploads**
> - retainer-model.md
> - revenue-split-examples.md
>
> **Connectors**
> - Web search

Or from a different task:

> **Connectors**
> - Gmail
> - Claude in Chrome

**How to read it.**
- **Uploads** are one-time additions — files for this task only.
- **Connectors** are account-level — they're installed once, but each task reveals *which ones are currently active* for that task.

**What it teaches.** Connectors are not magical background reach. They're specific, visible, per-task. Learners can see *exactly* which tools Claude is using. If Gmail isn't showing up in this panel, Claude isn't reading your mail — even if the connector is installed.

**Teaching note.** This panel answers the common confusion: "is Claude using my Gmail right now or not?" The answer is *look at the Context panel*. If it's listed, yes. If it's not, no. The UI is literal.

---

## The Three Questions, Three Panels

A compressed version learners can actually remember:

| Question | Panel |
|---|---|
| What *will* Claude do? | **Progress** |
| What *can* Claude see? | **Project** |
| What *can* Claude reach? | **Context** |

This is the whole model in three lines. Print it on a card. Pin it to the community. Reference it every time a learner is confused about a Cowork task.

---

## Worked Example — Newsletter Unsubscribe Task

Walking through a real Cowork task using the three panels:

**The job.** Clean out the newsletters cluttering the inbox — find unsubscribe links, click through them, report results.

**Progress panel** shows the four-step plan: identify newsletters → open Chrome → visit each link → report results. The user sees the plan before Claude acts. If they don't want Claude visiting random URLs, they can stop it at step 2.

**Project panel** shows the CO-LLAB folder with its `CLAUDE.md` Instructions file — the skill that defines how to handle newsletters (which senders count as promotional, what to preserve vs unsubscribe from, tone for confirmations).

**Context panel** shows two active connectors — Gmail (to find the newsletters) and Claude in Chrome (to actually click through the unsubscribe links). Without these connectors, this task would be impossible. Seeing them listed explains *how* Claude can do this.

Three panels, one task, full visibility. That's the Cowork supervision model made concrete.

---

## Common Confusions

**"The Project panel and the Context panel both show files — what's the difference?"** The Project panel shows *files inside the sandbox folder* — things Claude can always see when working in this Project. The Context panel's Uploads section shows *files attached to this specific task* — one-time additions that aren't part of the folder.

**"Why does the Scratchpad matter if I can already see the files in the Project panel?"** Because the Scratchpad tells you *what Claude actually touched during this task* — wrote to, created, or just viewed. The Project panel lists every file that exists; the Scratchpad lists every file Claude interacted with. That's the audit trail.

**"Can I edit the Progress panel to change Claude's plan?"** You can steer the plan with instructions, but you don't hand-edit it. If the plan is wrong, stop the task, update your instructions (or the skill), and re-run. The Progress panel is a *view*, not a form.

**"What if the Context panel shows no connectors?"** Then Claude is working with only the files in the Project folder and any Uploads. No external reach. That's perfectly fine for self-contained tasks — editing a document, summarizing files, reorganizing notes.

---

## Teaching Implications

The three panels should show up in multiple sessions:

- **Session 1** (Foundations) — introduce as a preview. "Here's what a task looks like when it's running. Three panels, three questions."
- **Session 4** (Foundations) — live walkthrough during the Taste of Cowork exercise.
- **Full cohort Session 3** (Graduating to Cowork) — learners open their own task and match the panels to the three questions.
- **Full cohort Session 4** (Supervision) — deep dive on Progress + Scratchpad. This is where the supervision habit gets built.

---

## Landmark Language

- *Progress, Project, Context* — three panels, three questions.
- *What will Claude do? What can Claude see? What can Claude reach?*
- The `CLAUDE.md` file labeled "Instructions" is *a skill*.
- The Scratchpad is *the audit trail*.
- Connectors listed in Context are *active for this task*. Connectors not listed are *installed but dormant*.
- The Progress panel is *a view, not a form*. You steer by updating instructions, not by editing the plan.
- If a learner is confused, *point at the three panels and ask which question they're trying to answer*.

Say these enough and learners start using them on their own. That's when you know the mental model has stuck.
