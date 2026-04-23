---
title: "Skills vs. Connectors vs. Plugins — How You Shape Claude"
description: "A plain-language reference for the three ways you customize Claude and how they fit together."
module: 5
section: "teach"
tier: "free"
readTime: "11 min read"
updated: "2026-04-17"
---

# Skills vs. Connectors vs. Plugins — How You Shape Claude

*A plain-language reference for the three ways you customize Claude, and how they fit together.*

**Working draft — April 17, 2026**

---

## Why This Asset Exists

Out of the box, Claude is a generalist. Powerful, but unopinionated. It doesn't know your team's conventions, it doesn't have access to your tools, and it doesn't know how *you* work.

There are exactly three levers for changing that. Skills teach Claude how to do things. Connectors give Claude access to your tools. Plugins bundle the two together. Most learners hear these words thrown around and quietly conclude they mean the same thing. They don't — and confusing them is the single biggest reason customizations don't stick.

This asset is the map. Three levers. Three jobs. One decision rule at the end.

---

## The One-Sentence Version

**A skill is an instruction manual. A connector is a tool. A plugin is both together.**

If you remember nothing else, remember that. Everything below is texture on those three sentences.

---

## Skills — The Instruction Manual

**What it is.** A set of instructions, usually written in a markdown file called `SKILL.md`, that tells Claude *how* to do something. The standard operating procedure. The workflow. The who, what, where, when, and why of a specific task.

**What it's for.** Teaching Claude the way *you* (or your team, or your company) want something done. The way you format reports. The way you review contracts. The way you triage your inbox. The rules of the road for a specific kind of work.

**What's inside a skill.** Plain English instructions. A skill is not code — it's a written guide. "When the user asks you to draft a follow-up email, do these four things in this order, check for these three things before sending, and use this tone." It's a recipe, not a program.

**Where it lives.** A markdown file, installed to your Claude account or bundled inside a plugin. Once it's installed, Claude knows to pull it out whenever the matching task comes up.

**Who writes them.** You can write your own. Claude can help you write them. Anthropic publishes some. Teams and companies build internal libraries. Skills are the most personal of the three levers — they're where your way of working gets encoded.

**The mental model.** A skill is *a how-to guide Claude reads before doing the task.* Think of it as the tab in the employee handbook that covers "how we do this here."

**Examples.**
- A "board deck" skill that tells Claude the structure, tone, and slide conventions your leadership prefers.
- A "bug triage" skill that walks Claude through your team's process for labeling, prioritizing, and assigning incoming issues.
- A "morning digest" skill that specifies exactly what goes in your daily summary email and in what order.

**Reach for a skill when.** You keep asking Claude to do the same kind of task and you keep having to re-explain how you want it done. That's the signal — write it down once, as a skill, and stop re-explaining.

---

## Connectors — The Tools

**What it is.** A bridge from Claude to one of your other apps. Gmail. Google Calendar. Drive. Notion. Slack. Your company's internal systems. A connector gives Claude *access* to a service you already use.

**The technical name.** A connector is the user-facing term for what developers call an *MCP server* — a small program that exposes another tool's capabilities in a way Claude can use. You don't need to know MCP to use connectors, the same way you don't need to know HTTP to use a browser. But if you ever hear someone say "MCP," they're talking about the plumbing under connectors.

**What it's for.** Two things, both of them powerful.

1. **Acting inside another app.** Send an email. Create a calendar event. Update a Notion page. Post to Slack. Things Claude can *do* in your tools on your behalf.
2. **Pulling context out of another app.** Read your inbox. Look up your schedule. Pull a document from Drive. Things that become *input* for whatever Claude is working on.

**What's inside a connector.** Code — not written by you. A connector is a piece of software someone built (Anthropic, the app's vendor, a third party, or you yourself) that knows how to talk to a specific service. You install it and grant it permissions; from then on, Claude can use it.

**Where it lives.** Installed to your Claude account, not to a single folder or project. Once you add the Gmail connector, it's available in Chat, Cowork, and Code — anywhere Claude runs on your account.

**Who writes them.** Anthropic ships official connectors for major services. App vendors publish their own. Third parties build connectors for niche tools. Developers can build their own (MCP servers) for internal systems or custom integrations.

**The mental model.** A connector is *a key to a door Claude didn't have before.* Before the key, Claude can't see inside that room. After the key, Claude can walk in and use what's there.

**Examples.**
- Gmail connector → Claude can read your inbox and send mail on your behalf.
- Google Calendar connector → Claude can check your schedule and create events.
- Notion connector → Claude can read, search, and update your workspace.
- A custom connector → Claude can query your company's internal knowledge base.

**Reach for a connector when.** Claude needs information it can't possibly know on its own (what's in your inbox right now), or needs to act on a system it otherwise can't reach (actually send the email, not just draft it).

---

## Plugins — The Full Stack

**What it is.** A pre-built bundle that combines skills *and* connectors together into a single, install-once package. The instruction manual plus the tools, shipped as one thing.

**What it's for.** Packaging up a complete capability. Instead of the user installing a connector separately, installing a skill separately, and figuring out how the two fit together, a plugin hands them the whole stack in one click.

**What's inside a plugin.** Any combination of:
- One or more skills (instruction manuals for specific tasks).
- One or more connectors (tools the skills use).
- Any configuration or setup the bundle needs to work end-to-end.

**Where it lives.** Installed to your Claude account, like a connector. Once installed, every skill and connector inside becomes available everywhere Claude runs.

**Who writes them.** Same set of actors as connectors — Anthropic, app vendors, third parties, and your own team if you have engineering support. Plugins are how capabilities get *distributed*; it's the shape something takes when it's ready to be shared.

**The mental model.** A plugin is *a pre-assembled toolkit.* Open the box, everything you need is already inside and already talking to itself. You don't have to wire anything up.

**Examples.**
- An "email assistant" plugin → bundles the Gmail connector with a "draft professional email" skill and an "inbox triage" skill.
- A "sales ops" plugin → bundles a Salesforce connector with skills for account research, call prep, and follow-up drafting.
- A "research" plugin → bundles a web browsing connector, a Drive connector, and skills for summarization, citation, and outline building.

**Reach for a plugin when.** You want a capability without assembling it yourself. If someone has already packaged "email assistant" or "research helper" into a plugin, installing that plugin is usually easier than installing the connector, writing the skill, and wiring them up by hand.

---

## Side-by-Side

| | **Skill** | **Connector** | **Plugin** |
|---|---|---|---|
| **What it is** | Instruction manual | Tool / bridge to another app | A bundle of skills and connectors |
| **What it gives Claude** | Know-how | Access | Both |
| **Written in** | Plain English (markdown) | Code (someone else writes this) | A combination — plus a manifest |
| **Personal or shared** | Often personal / team-specific | Usually shared (one per service) | Shareable package |
| **Installed to** | Your Claude account | Your Claude account | Your Claude account |
| **Available in** | Chat, Cowork, Code | Chat, Cowork, Code | Chat, Cowork, Code |
| **Technical name** | — | MCP server | — |
| **Analogy** | The employee handbook entry | The key to the room | The pre-assembled toolkit |

---

## The Decision Rule

Ask yourself one question: **what's missing when Claude tries to do this task?**

- **Claude can reach the tools but keeps doing the task the wrong way.** → You're missing a **skill.** Write down how you want it done.
- **Claude knows how to do the task but can't reach the system that holds the information or does the work.** → You're missing a **connector.** Install the bridge to that tool.
- **Both.** → Look for a **plugin** that packages the two together. If none exists, install the connector and write the skill yourself.

If the answer is "I don't know what's missing," start by asking Claude to try the task and watch where it gets stuck. The failure mode tells you which lever to pull.

---

## How the Three Fit Together

The three levers aren't competitors. They stack.

**Skills are the prompt layer.** The foundation of any skill is the instructions you give Claude — the same muscle you build in Chat, just written down and reused every time.

**Connectors are the reach layer.** They extend Claude out into the tools you already use. A connector without a skill is a general-purpose capability; a connector *with* a skill becomes a specific workflow.

**Plugins are the distribution layer.** They're the shape a capability takes when it's ready to share. The best plugins combine a thoughtfully written skill with the connectors it depends on, so the user doesn't have to assemble it.

A common path: *write a skill for your own workflow → install connectors as Claude needs to reach tools → bundle the two as a plugin when it's stable enough to share with your team.*

---

## Common Confusions

**"Isn't a connector just a skill that's been coded up?"** No. A skill is *written guidance* — words Claude reads. A connector is *software* — a working program that knows how to talk to another service. You can't write a skill that, by itself, connects to Gmail; you need the Gmail connector (the software) for that. What a skill *can* do is tell Claude how to use the Gmail connector once it's installed.

**"Do I need a skill for every connector?"** No. Connectors work fine on their own for general use — installing the Gmail connector means Claude can read your email and send messages when you ask. You only need a *skill* on top when you want Claude to follow a specific procedure every time it touches that tool. If your workflow for sending emails is "just draft a reasonable reply," no skill needed. If it's "always check the last three messages in the thread, match the sender's tone, keep it under four sentences, and never send before I approve," that's a skill.

**"Is a plugin just a shortcut, then?"** Partly — it's a shortcut for installing. But a good plugin is also a *design*. The author of the plugin decided *which* skills belong with *which* connectors, how they interact, and what the out-of-the-box behavior should be. A plugin is more like a curated album than a playlist.

**"Can a skill tell Claude to use a specific connector?"** Yes — and this is one of the most powerful patterns. A skill can say "when this task comes up, use the Gmail connector to pull the latest thread, then summarize it in this format." The skill provides the procedure; the connector provides the reach. Together, they're workflow automation.

**"I heard someone say MCP — is that the same as a connector?"** MCP is the protocol — the shared language that lets Claude talk to outside tools. A connector is the practical thing you install that uses the protocol. Unless you're writing one yourself, "connector" is the only word you need.

**"Can I build my own skills and connectors?"** Yes. Skills you can write today — they're just markdown files with instructions. Connectors require code; if you have engineering support (or a tool like Claude Code), you can build MCP servers for your internal systems. Most users start by writing skills, install connectors others have built, and only build their own connectors when they have a specific internal system to plug in.

---

## Landmark Language

A few phrases worth committing to memory. Use these when teaching or explaining.

- A skill is *know-how*.
- A connector is *access*.
- A plugin is *both*.
- A skill is *the employee handbook entry*.
- A connector is *the key to a door Claude didn't have before*.
- A plugin is *the pre-assembled toolkit*.
- Skills are *written*. Connectors are *installed*. Plugins are *bundled*.
- An MCP server is *the technical name for a connector* — if you didn't need to know, you don't.

These phrases travel well. Say them enough and learners start using them on their own — which is the real test of a good mental model.
