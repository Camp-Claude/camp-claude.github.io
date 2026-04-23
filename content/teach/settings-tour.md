---
title: "The Claude Settings Tour — What to Configure and What to Skip"
description: "A practical walkthrough of the Claude settings that matter for normal learners, especially Keep computer awake."
module: 3
section: "teach"
tier: "free"
readTime: "12 min read"
updated: "2026-04-17"
---

# The Claude Settings Tour — What to Configure and What to Skip

*A practical walkthrough of the Settings panel, with one hidden gotcha that every learner needs to know before they build their first automation.*

**Working draft — April 17, 2026**

---

## Why This Asset Exists

Most learners never open Settings. They use the defaults, the defaults mostly work, and they move on. But a handful of settings shape what Claude can actually *do* — and one of them is the silent reason most first automations fail.

This asset exists so learners leave Settings with three things: the five toggles that matter, the one gotcha that will bite them, and permission to skip the rest.

---

## The One-Sentence Version

**Most of the Settings panel is for developers or power users. Five settings matter for normal learners — and one of them, *Keep computer awake*, determines whether your scheduled tasks actually run when you're not at your desk.**

If you remember nothing else, remember that. The rest is texture.

---

## The Settings Map

The left nav is split in two. **Account-level settings** (top) apply to your whole Claude account, everywhere you use it. **Desktop app settings** (bottom) apply only to the desktop app.

| Section | What lives here | Worth visiting? |
|---|---|---|
| **General** | Profile and account-wide preferences | Once |
| **Account** | Subscription and workspace info | Only when changing |
| **Privacy** | Data controls | Skim once |
| **Billing** | Payment | Only when changing |
| **Usage** | Plan limits, weekly usage, extra usage spending | **Yes — see below** |
| **Capabilities** | Memory, tool access, artifacts, code execution | **Yes — see below** |
| **Connectors** | Legacy connectors page — now managed via Customize | Skip (see below) |
| **Claude Code** | CLI-specific settings | Skip unless you use Code |
| **Cowork** | Cowork-specific settings | Once |
| **Claude in Chrome** *(Beta)* | Chrome extension settings | Only if you use it |
| **Desktop app → General** | Shortcuts, startup, menu bar, computer use | **Yes — most important** |
| **Desktop app → Extensions** | Desktop-level extensions | Skip |
| **Desktop app → Developer** | Debug tools | Skip |

Three of these sections are worth a real look. The rest can stay on defaults.

---

## Desktop App → General (The Most Important Section)

This is the section that most changes what Claude can do on your computer.

| Setting | What it does | Recommendation |
|---|---|---|
| **Run on startup** | Claude launches when you log in. | ON if you use Claude daily. |
| **Quick access shortcut** (default: *Tap Option twice*) | Talk to Claude from anywhere on your desktop. | ON — this is a real productivity multiplier. |
| **Voice shortcut** (default: *Control+Space*) | Speak to Claude from anywhere. | ON if you think out loud. |
| **Menu bar** | Claude icon in the menu bar. | ON — keeps Claude one click away. |
| **Keep computer awake** | Prevents your computer from idle-sleeping while Claude is open, so scheduled tasks can run. | **CRITICAL — ON. See below.** |

### The Hidden Gotcha — Keep Computer Awake

This is the single most important setting for any learner who builds a scheduled task.

If your computer falls asleep, your scheduled tasks do not run. Your 7am morning triage quietly doesn't happen. You don't get a notification. You don't get an error. Nothing lands in your inbox, and you assume the automation broke.

It didn't break. Your computer just went to sleep.

**The rule:** the day you set up your first scheduled task, turn this on. It should be part of the Session 4 checklist in Foundations, and Session 5 in the full cohort.

(Note: your *display* can still turn off, and closing the laptop lid will still put it to sleep. Keep the laptop open and plugged in on nights when scheduled tasks need to run.)

### Browser Use

| Setting | Recommendation |
|---|---|
| **Allow all browser actions** | **OFF for non-technical learners.** This lets Claude interact with any website in Chrome without asking. Convenient for power users, risky default for everyone else. |

### Computer Use (Beta)

| Setting | What it does | Recommendation |
|---|---|---|
| **Computer use** | Let Claude take screenshots and control your keyboard and mouse. | ON for curious learners — this is how Claude runs tasks in apps like Chrome, Excel, etc. |
| **Unhide apps when Claude finishes** | Apps Claude hid during a task reappear when it stops. | ON — unless you like hunting for missing windows. |
| **Denied apps** | Hard no-list — Claude is blocked from these apps. | Add anything sensitive (banking apps, password managers). |
| **Accessibility** | macOS permission Claude needs to control your system. | Granted (system-level, not toggled here). |
| **Screen recording** | macOS permission for screenshots. | Grant when prompted. |

---

## Connectors (Read the Banner)

When you open the Connectors page, the first thing you see is a banner:

> *"Connectors have moved to Customize. Head to the new Customize page to manage your skills and connectors."*

This is your cue. The old Settings → Connectors page still lists your connectors and still works, but the new home is the **Customize** button inside Chat, Cowork, or Code. Teach learners to use Customize. The Settings → Connectors page is legacy.

### What you'll see on the Connectors page

Each connector shows one of three states:

- **Connected** — installed, authorized, and active (e.g., *GitHub Integration — Connected*).
- **Configure** — installed but needs setup or permissions (e.g., *Gmail — Configure*).
- **Connect** — available in the catalog but not yet added (e.g., *Stripe — Connect*).

Some connectors are tagged:
- **INCLUDED** — ships with Claude (e.g., *Claude in Chrome*).
- **CUSTOM** — you built it yourself or your team did. The URL below the name is the MCP server endpoint.
- **Interactive** — this connector supports two-way interaction, not just reading.

### Teaching moment

A learner's first look at this page makes the Skills vs Connectors asset concrete. *"Those are all connectors. Every one is a bridge to another app. You install them once, here or in Customize, and they become available in Chat, Cowork, and Code."*

---

## Capabilities (The Power Toggles)

The Capabilities page controls what Claude *can* do in your account. Most learners should leave this on defaults, but three sections deserve a walkthrough.

### Memory

New in 2025–26. Claude can remember things across chats and Projects.

| Setting | What it does | Recommendation |
|---|---|---|
| **Search and reference chats** | Claude can search past conversations for relevant context. | ON for learners who want continuity. |
| **Generate memory from chat history** | Claude builds its own memory of you and your preferences over time. | ON — but know it's on. |
| **Import memory from other AI providers** | Bring your ChatGPT (or other) history into Claude. | One-time import — useful for migrants. |

**Teaching moment for ChatGPT migrants:** this page is where you bring over your history. Foundations Session 1 can end with "here's how to import what you've built in ChatGPT."

### Tool Access

| Setting | What it does | Recommendation |
|---|---|---|
| **Load tools when needed** (default) | Connectors load per-task, so chats compact less often. | Leave on unless you know why to switch. |
| **Tools already loaded** | All connectors always available, chats compact more often. | Only switch if you rely on fast access to many tools. |

### Visuals

| Setting | What it does | Recommendation |
|---|---|---|
| **Artifacts** | Claude creates docs, code, website designs in a dedicated panel. | ON — this is a Claude differentiator. |
| **AI-powered artifacts** | Artifacts can run Claude *inside* themselves — apps, prototypes, interactive docs. | ON — where Claude starts to look like a builder. |
| **Inline visualizations** | Charts and diagrams appear in the conversation. | ON. |

### Code Execution and File Creation

| Setting | What it does | Recommendation |
|---|---|---|
| **Cloud code execution and file creation** | Lets Claude run code on a server to build spreadsheets, PDFs, slides, and reports. Required for skills. | **ON — don't turn off.** Skills rely on this. |
| **Allow network egress** | Claude can install packages to do advanced work. | ON. Monitor tasks — this gives Claude real reach. |
| **Domain allowlist** | Which domains Claude's sandbox can access. Default: *Package managers only*. | Default is fine. Add specific domains only if you know why. |

---

## Usage (Don't Hit the Wall Unexpectedly)

The Usage tab is where you see what plan you're on and how much of it you've used. Three things to watch:

### Plan Usage Limits

- **Current session** — a rolling short-window limit, resets every few hours.
- **Weekly limits** — separate caps for "All models" and "Sonnet only." Resets on a scheduled day.
- **Daily included routine runs** — how many scheduled/routine runs are included per day (e.g., 0 / 15).

**Teaching moment for ChatGPT migrants:** Claude uses *rate limits*, not unlimited usage. Even on the Max plan, there's a cap. Usage resets weekly, and heavy days can push you past session limits.

### Extra Usage

| Setting | What it does | Recommendation |
|---|---|---|
| **Turn on extra usage** | If you hit a plan limit, Claude falls back to metered API billing. | ON for power users; OFF if you want a hard stop. |
| **Monthly spend limit** | Maximum you'll spend on extra usage per month. | Set this low ($20–50) while you learn what eats tokens. |
| **Current balance** | Prepaid credit for extra usage. | Top up if you're running big scheduled tasks. |
| **Auto-reload** | Automatically buy more credit when you run out. | OFF until you know your usage pattern. |

**Teaching rule of thumb:** set a monthly spend limit that's lower than you'd regret paying, and raise it when you want to. A $20 ceiling costs you almost nothing and prevents runaway surprise bills from a misconfigured automation.

---

## What to Skip

Permission to ignore these — they don't matter for the Camp Claude audience.

- **Developer** — debug tools for SDK/API users. If you're not writing code, skip.
- **Extensions** — advanced desktop extension management. Not relevant for normal use.
- **Claude Code (the settings page)** — only matters if you're using the CLI.
- **Privacy** — defaults are fine; skim once if curious.
- **Billing** — only visit to change payment methods.

If a learner asks about one of these, the honest answer is *"skip it unless you have a specific reason."*

---

## The Five Settings That Actually Matter

TL;DR version. Print this, pin it, put it on the Session 1 handout.

| # | Setting | Where | Why |
|---|---|---|---|
| **1** | **Keep computer awake** | Desktop app → General | Scheduled tasks silently fail without it |
| **2** | **Quick access shortcut** | Desktop app → General | Talk to Claude from anywhere |
| **3** | **Memory** (both toggles) | Capabilities → Memory | Claude remembers you across chats |
| **4** | **Artifacts** + **Cloud code execution** | Capabilities | The Claude differentiator + skills require it |
| **5** | **Monthly spend limit** | Usage → Extra usage | Safety rail against runaway automations |

If every learner leaves Foundations Session 1 with these five correctly set, they've done 90% of the setup work that matters.

---

## Common Confusions

**"Why are there Connectors in Settings AND in Customize?"** The Connectors page in Settings is the original, older home. Customize is the newer, unified home for skills and connectors. They list the same connectors. The banner on the Settings page says it explicitly: *"Connectors have moved to Customize."* Use Customize going forward.

**"My scheduled task didn't run last night."** Nine times out of ten: **Keep computer awake** is off. Open Desktop app → General, turn it on, try again tonight with your laptop plugged in and lid open.

**"I'm a ChatGPT user — can I bring my history over?"** Yes. Capabilities → Memory → *Import memory from other AI providers*. Follow the prompt to export from ChatGPT and paste the result.

**"I don't see the Scheduled button in Cowork."** Not a Settings problem — but make sure you're on the Cowork tab, not Chat. Scheduled only exists in Cowork and Code.

**"What's the difference between Artifacts and AI-powered Artifacts?"** Artifacts render documents, code, and images in their own panel. AI-powered Artifacts go further — they can *run* Claude inside themselves, letting you build interactive apps and prototypes. Keep both on.

**"I'm worried about giving Claude control of my keyboard and mouse."** That's Computer use, under Desktop app → General. It's opt-in and off by default for most learners. Turn it on only when a task requires it, and use *Denied apps* to block anything sensitive.

---

## Teaching Implications

This asset slots into the curriculum at multiple points:

- **Foundations Session 1 — closing 10 minutes.** Walk through the Five Settings That Actually Matter. Every learner leaves with them configured.
- **Foundations Session 4 — opening 5 minutes.** Before the Cowork exercise, verify *Keep computer awake* is on. This is the hidden setting that will bite them in Session 5 of the full cohort when they build their first scheduled task.
- **Full cohort Session 5.** The same verification. If a learner's first scheduled task fails, this is always the first place to look.
- **Between-session asset.** This doc itself becomes the community-posted reference — "if you're not sure what a setting does, check the Settings Tour."

---

## Landmark Language

- Settings is *where you configure Claude's power* — but most of it can stay on defaults.
- The *Five Settings That Actually Matter* cover 90% of what a normal learner needs.
- **Keep computer awake** is *the one hidden gotcha* — the reason your first scheduled task quietly doesn't run.
- Connectors *have moved to Customize*. The old Settings page is legacy.
- Claude uses *rate limits*, not unlimited usage. The Usage tab shows your runway.
- Artifacts are *the rendered panel*. AI-powered Artifacts are *the rendered panel with Claude running inside it*.
- *Denied apps* is your *hard no-list* — add anything sensitive.

Say these enough and learners develop a mental map of the settings panel that matches how it actually works, instead of being intimidated by it.
