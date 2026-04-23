---
title: "Chat vs. Cowork vs. Code — Which Claude Should You Use?"
description: "A plain-language reference for the three Claude surfaces and when to reach for each."
module: 2
section: "teach"
tier: "free"
readTime: "9 min read"
updated: "2026-04-17"
---

# Chat vs. Cowork vs. Code — Which Claude Should You Use?

*A plain-language reference for the three surfaces Claude comes in, and when to reach for each.*

**Working draft — April 17, 2026**

---

## Why This Asset Exists

Most learners meet Claude in one place — usually Chat — and never realize there are two other doorways that do very different work. The result is that they either underuse Claude (trying to force Chat to do execution work it wasn't built for) or they overshoot (opening Code when Cowork was what they actually needed).

This asset is the map. Three surfaces. Three jobs. One decision rule at the end.

---

## The One-Sentence Version

**Chat is a chatbot. Cowork is a task executor. Code is an agentic workstation.**

If you remember nothing else, remember that. Everything below is texture on those three sentences.

---

## Claude Chat — The Chatbot

**What it is.** The conversational Claude. The one you reach on the web, on mobile, or in the desktop app's Chat tab. The one most people have already used.

**What it's for.** Thinking. Drafting. Summarizing. Researching. Answering questions. Anything you'd ask a smart coworker in a hallway conversation — where the output is *words*, not *changes to your files*.

**Where it lives.** Everywhere. claude.ai in a browser, Claude on your phone, Claude in the desktop app. Chat is the only surface that's genuinely portable — you can start a conversation on your laptop, continue it on your phone in a taxi, and pick it back up at your desk.

**What it connects to.** The internet, your connectors (Gmail, Calendar, Drive, Notion, and so on), and any Projects you've set up. It does *not* touch files on your computer.

**Who it's for.** Everyone. This is the ground floor. Every Claude user spends most of their time here, even after they graduate to Cowork or Code.

**The mental model.** Chat is *Claude on the internet*. You talk, Claude talks back. Your Projects live here as context containers. You can copy things out of Chat and bring them into Cowork or Code when you're ready to act on them.

**Reach for it when.** You want to think out loud. Draft something. Research. Plan. Have a conversation. Work on the go. Keep a Project organized. Do anything where the answer is text you'll read or use.

---

## Claude Cowork — The Sandboxed Task Executor

**What it is.** The second doorway, found inside the Claude desktop app. Cowork takes a single folder on your computer and lets Claude work inside it — reading, writing, and changing the files you've given it access to.

**What it's for.** Real work on real files, with real guardrails. The place where Claude stops *talking* about your work and starts *doing* your work — on a specific, bounded project.

**Where it lives.** The desktop app only. Cowork does not exist on mobile or on the web.

**What it can see.** Whatever folder you hand it, plus every folder inside that folder. Nothing outside. This is the sandbox.

**What it cannot do.** Wander. Cowork is *vertical access, not horizontal.* Claude can go deeper into the folder you gave it, but it cannot step sideways into a different folder on your computer. If you open Cowork on your "Marketing Campaign" folder, Claude cannot see your "Finances" folder, your desktop, your downloads, or anything else.

**What it connects to.** Your connectors and any skills or plugins you've installed globally to Claude. But only *inside that one folder*. If you want Claude to use a skill or a connector in Cowork, the skill or connector has to already be set up on your account — because Cowork can't reach outside the sandbox to install things.

**Who it's for.** Non-technical users who want to get real work done without worrying about breaking something somewhere else. Cowork is *governed* — it's Claude with guardrails. That's the point.

**The mental model.** Cowork is *Claude at a desk, working on one project at a time.* The folder you hand it is the desk. Claude can use any tool it brought with it (skills, connectors, plugins), but it can only work on what's on the desk. You close the folder, the desk goes away.

**Reach for it when.** You have a real folder of real files — a report in progress, a marketing campaign, a research project, a set of documents to process — and you want Claude to actually work on them, not just talk about them. You want the safety of the sandbox. You don't want to think about the terminal.

---

## Claude Code — The Agentic Workstation

**What it is.** The full agentic environment. A command-line-first Claude that can control your terminal, move between folders, run programs, install software, and operate across your whole system.

**What it's for.** Software engineering and power-user workflows. Building, debugging, refactoring, automating across repositories, managing infrastructure — anything where the job requires Claude to reach across your machine, not just into a single folder.

**Where it lives.** In your terminal. It's a CLI tool, not a graphical app. You open a terminal, you run it, it runs.

**What it can see.** Whatever you point it at. Code is *horizontal and vertical.* It can move between folders, read and write across your file system, talk to the network, install packages, and run commands. The sandbox is gone.

**What it connects to.** Everything Cowork connects to, plus the full power of your terminal. MCP servers, shell commands, git, package managers, deploy tools — anything you could do by hand, Code can do.

**Who it's for.** Developers, engineers, technical users, and anyone who's graduated past the sandbox and wants the seatbelts off. If you know what `cd` does and you've opened a terminal on purpose, Code is probably for you.

**The mental model.** Code is *Claude with the keys to the whole workshop.* No single-folder boundary. No governed guardrails. Full agentic suite — which is powerful, and which also means you're responsible for what it touches.

**Reach for it when.** You're building software. You need to work across multiple folders or repositories. You want Claude to run commands, not just edit files. You've hit the limits of Cowork's sandbox and you know that's what you've hit.

---

## Side-by-Side

| | **Chat** | **Cowork** | **Code** |
|---|---|---|---|
| **What it is** | Chatbot | Sandboxed task executor | Full agentic workstation |
| **Where it runs** | Web, mobile, desktop | Desktop app only | Terminal only |
| **Output** | Words | Changes to files in one folder | Changes across your whole system |
| **Access pattern** | No files | Vertical only (one folder + sub-folders) | Horizontal + vertical (anywhere) |
| **Guardrails** | N/A — it doesn't touch your files | Yes — sandboxed to one folder | No — full system access |
| **Connectors** | Yes | Yes (must be set up in advance) | Yes, plus full terminal |
| **Skills / plugins** | Yes | Yes (must be set up in advance) | Yes, plus anything installable |
| **Who it's for** | Everyone | Non-technical users doing real work | Developers and power users |
| **Risk profile** | Very low | Low — bounded by sandbox | High — full access, full responsibility |

---

## The Decision Rule

Ask yourself one question: **what do I want Claude to produce?**

- **Words?** → Chat.
- **Changes to files in a specific project folder?** → Cowork.
- **Changes across my system, command execution, or software I'm building?** → Code.

If the answer is "I'm not sure," start in Chat. You can always bring the output into Cowork or Code later.

---

## How the Three Fit Together

The three surfaces aren't competitors. They're a pipeline.

**Chat is where thinking happens.** You draft the plan, work out the approach, organize the context into a Project.

**Cowork is where bounded execution happens.** You take what you worked out in Chat, hand Claude a folder, and let it do the work — with the safety of the sandbox.

**Code is where unbounded execution happens.** For the subset of users whose work crosses folder boundaries, touches the terminal, or involves building software. Most learners never need this, and that's fine.

A common path: *think in Chat → act in Cowork → graduate to Code if the work demands it.*

---

## Common Confusions

**"Is Cowork just Code with training wheels?"** Kind of — and that's a feature, not a limitation. Cowork is Code with the sandbox turned on. If you're a non-technical user, the sandbox is what makes Claude safe to trust. If you're a developer, the sandbox is what slows you down, and Code is where you'll live.

**"If I'm skilled at Code, do I still need Cowork?"** Probably not. Code can do everything Cowork can do, plus more. Cowork is the non-technical doorway into real execution; once you're past that doorway, Code is the general-purpose tool. Many developers open Cowork only to help non-technical teammates or to get a bounded-scope feel on a new project.

**"Can I use Chat on my phone and then pick it up in Cowork later?"** Yes — and this is one of the most useful patterns. Think on your phone in Chat, organize into a Project, open the matching folder in Cowork on your desktop, and let Claude run the play. Chat and Cowork share your account, your connectors, and your skills.

**"Why can't I install a skill from inside Cowork?"** Because skills are account-level, not folder-level. Cowork is sandboxed — it can *use* any skill you've already installed, but it can't reach outside the sandbox to install a new one. Set up your skills and connectors in Chat first; they'll be available everywhere.

**"Is Chat the only surface that connects to the internet?"** All three surfaces can reach the internet if given the right tools. The difference is posture. Chat is internet-first (it's where you research, look things up, browse with Claude). Cowork and Code are execution-first — the internet is a tool they *can* use, not the main event.

---

## Landmark Language

A few phrases worth committing to memory. Use these when teaching or explaining.

- Chat is *Claude on the internet*.
- Cowork is *Claude at a desk, working on one project at a time*.
- Code is *Claude with the keys to the whole workshop*.
- Cowork is *vertical, not horizontal*.
- Code is *horizontal and vertical*.
- The sandbox in Cowork is *the folder you hand it, and everything inside*.
- Skills and connectors are *account-level, not folder-level*.

These phrases travel well. Say them enough and learners start using them on their own — which is the real test of a good mental model.
