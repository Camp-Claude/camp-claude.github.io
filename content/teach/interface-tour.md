---
title: "The Claude Interface Tour — Three Doors, Three Dashboards"
description: "A visual walkthrough of what learners actually see when they open Claude across Chat, Cowork, and Code."
module: 1
section: "teach"
tier: "free"
readTime: "6 min read"
updated: "2026-04-17"
---

# The Claude Interface Tour — Three Doors, Three Dashboards

*A visual walkthrough of what learners actually see when they open Claude.*

**Working draft — April 17, 2026**

---

## Why This Asset Exists

Most learners can't build a mental model of Claude without seeing the interface. Words like "Cowork" and "Code" mean nothing until you've looked at the sidebar and watched your brain sort the buttons. This asset is pure orientation — the three doors, side by side, with every button named and placed.

Use it as the first slide of Session 1. Use it again any time a learner says "wait, which one of these does that?"

---

## The Three Doors, Side by Side

At the top of the Claude desktop app, three tabs sit next to each other:

**Chat** (speech bubble icon) — the chatbot. Conversations, thinking, research.
**Cowork** (split-squares icon) — the sandboxed task executor. Real work on real files.
**Code** (`</>`  icon) — the full agentic workstation. Terminal, multi-project, power user.

Clicking each tab changes the sidebar below. Same app, same account, three different workspaces.

---

## Chat — The Chat Sidebar

When you click the **Chat** tab, the sidebar shows four items:

| Primitive | What it is |
|---|---|
| **+ New chat** | Starts a new conversation. Ephemeral by default — lives in your history but doesn't have a dedicated home. |
| **Projects** | Context containers. Each Project has its own pinned files, custom instructions, and conversation history scoped to one goal. |
| **Customize** | Where you manage skills, connectors, and personal settings. Same button appears in Cowork and Code — changes here apply everywhere. |
| **Artifacts** | A gallery of generated documents, code, tables, and images from across your chats. Claude's output lives here as real artifacts you can keep iterating on. |

**Teaching note.** Chat has no automation primitive, no Scheduled, no Dispatch. Chat is for *thinking*, not *running*. That absence is meaningful — don't try to explain it away.

---

## Cowork — The Cowork Sidebar

When you click the **Cowork** tab, the sidebar shows five items:

| Primitive | What it is |
|---|---|
| **+ New task** | Starts a new Cowork task. Every Cowork interaction is a task — scoped, bounded, finishable. |
| **Projects** | Scoped workspaces. Each Project bundles a folder + the skills and connectors it uses. *These are different from Chat Projects* — name the distinction out loud every time. |
| **Scheduled** | The automation primitive. Tasks that run on a cadence — daily, weekly, on demand. This is Module 11's graduation button. |
| **Customize** | Same as in Chat — shared account-level settings. |
| **Dispatch** *(New)* | Parallel and queued work. Power-user feature; skip in Foundations. |

Below those, Cowork shows **Pinned** and **Recents** — your frequently-used Projects and recent task history.

**Teaching note.** The unit of work here is called a **task**, not a chat. That vocabulary change tells the learner what this surface is for — something gets *done*, and then it's over.

---

## Code — The Code Sidebar

When you click the **Code** tab, the sidebar looks different from the first two. It's organized by *workspace*, because developers juggle many projects at once.

| Primitive | What it is |
|---|---|
| **+ New session** | Starts a new Code session. The unit of work is a session — stateful, long-running, resumable. You come back to where you left off. |
| **Routines** | The Code equivalent of Cowork's Scheduled — automations for developer workflows. More flexible, less constrained to one folder. |
| **Customize** | Same shared settings button. |
| **More** | Reveals **Dispatch** (parallel tasks) and **Customize sidebar** (organize your own workspace). |
| **Pinned** | Session shortcuts you've pinned for quick access. |
| **Workspaces** (e.g., *RUDI*, *Personal*) | Top-level organization by initiative. One developer might have workspaces for work, side projects, and personal tasks, each with their own session history. |

**Teaching note.** The Code sidebar looks different because the *user* is different. Developers manage many projects in parallel. Most Camp Claude learners don't, and that's fine — this view is diagnostic of who Code is for.

---

## The Master Comparison

All three sidebars, one table:

| Primitive | Chat | Cowork | Code |
|---|---|---|---|
| **Unit of work** | New chat | New task | New session |
| **Organization** | Projects | Projects + Pinned | Workspaces + Pinned |
| **Customization** | Customize | Customize | Customize |
| **Automation** | — | Scheduled | Routines |
| **Output gallery** | Artifacts | — | — |
| **Parallel work** | — | Dispatch *(New)* | Dispatch *(New)* |

---

## Four Patterns Worth Naming

**1. The unit of work tells the story.**
- *Chat* → conversation (ephemeral, iterative, thinking)
- *Task* → scoped work (bounded, finishable, delegated)
- *Session* → stateful work (long-running, resumable, developer-shaped)

The vocabulary alone teaches what each surface is *for*. Read it to learners out loud on Session 1 and the three doors stop feeling interchangeable.

**2. Automation scales with surface power.**
- Chat has none.
- Cowork has Scheduled — simple cadence, bounded to one project.
- Code has Routines — flexible, cross-project.

More powerful surface, more automation exposed. Not a coincidence — a design philosophy.

**3. Customize is shared.**
The same Customize button lives in all three surfaces. Skills, connectors, and plugins are *account-level* — install them once, they're available everywhere. Say this explicitly so learners don't try to set up Gmail three separate times.

**4. Dispatch is cross-surface (and new).**
It shows up in both Cowork and Code, marked "New." This means Dispatch is a *parallel-work* feature, not a Cowork-only one. Mention it once, don't teach it, move on.

---

## Teaching Implications

This asset is the single slide that orients the entire curriculum. A few placement notes:

- **Session 1 opener** — show all three sidebars side by side. Let learners pick out their own observations before you label them.
- **Session 2** — zoom in on the Chat sidebar. Walk through New chat, Projects, Customize, Artifacts.
- **Session 3** — zoom in on Customize (works from any surface). This is where skills and connectors get installed.
- **Session 4** — zoom in on the Cowork sidebar. New task, Projects, preview Scheduled.
- **Across all sessions** — come back to the master comparison table at the end of each session. It's the compass.

---

## Landmark Language

A few phrases worth committing to memory. These travel across the whole curriculum.

- The three doors are *Chat, Cowork, and Code*.
- Chat has *Artifacts*. Cowork has *Scheduled*. Code has *Routines*. The absence of each tells you what the surface is *for*.
- A *chat* is ephemeral. A *task* is scoped. A *session* is stateful.
- Customize is *the same button in all three* — skills and connectors are *account-level*.
- Pinned means *"you'll come back to this."*
- Dispatch is *cross-surface* — it's in both Cowork and Code because it's about *parallel work*, not about the surface.
- Code's sidebar is *diagnostic* — if you look at it and it feels right, you're probably ready for Code. If it feels like too much, Cowork is the right door.

Say these enough and learners start using them on their own. That's the real test.
