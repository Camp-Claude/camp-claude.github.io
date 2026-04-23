# Training Non-Technical Users to Work With Agents

*Working notes — April 10, 2026*

How to train non-technical users to collaborate with AI agents like Claude, with a focus on file access, supervision, and the Chat / Cowork / Code framework.

## Why These Notes Exist

I started out teaching people the file system. Paths, folders, directories — I walked through it the way an engineer would. And people got confused. Not because they weren't smart, but because they don't orient themselves that way. They don't retrieve information by traversing a tree. They don't think in paths. They think in places, projects, and recent things.

That experience kept surfacing a pattern: most agent-based products for non-technical users are designed by engineers, which means they quietly assume the user will *operate like an engineer*. The people who adopt under that assumption are the technical-adjacent — the power users who already think in folders and hierarchies. Everyone else bounces.

If the goal is mass adoption, the foundation has to shift. You can't start training at "how do I give the agent the right path." You have to start much earlier — at "what is this chat thing, and how do I have a useful conversation with it?" The file system comes much later, if at all.

These notes are my working draft of that earlier, more foundational curriculum. The working title is **Camp Claude** — a ground-up way to teach people how to use one of the most powerful agents on the market without first turning them into engineers.

## The Core Problem

Developers understand file systems as a formal structure: parent directories, children, paths, trees. Non-technical users understand their file system as a *memory of places* — "the report is probably in Projects, then Q4."

Research backs this up. In one study, users retrieved 94% of their own files in about 15 seconds, but from shallow structures averaging 2.86 folders deep, and mostly by browsing rather than searching. One participant in a workplace study didn't know Windows Search existed.

That works for everyday file retrieval. It breaks down when an agent enters the picture, because the user is no longer just finding files — they're directing something that can read, create, and modify files on their behalf. The gap between how developers think about file systems and how everyone else thinks about them is a foundational adoption barrier.

## The Reframe

**Stop teaching the file system. Teach the working relationship.**

A non-technical user working with an agent is in roughly the position of a new manager who just hired an assistant with access to their desk, inbox, and filing cabinets. The manager doesn't need to memorize the filing system. They need to know how to give clear instructions, set boundaries, check work, and course-correct.

The foundational skill isn't file-system literacy. It's **supervision literacy**.

## Two Kinds of Competency

**Environment competency** is knowing your file system — where things live, how folders nest, how paths work. Developers have this in abundance.

**Collaboration competency** is knowing how to work *with* an agent — how to set scope, give instructions, review output, and intervene at the right moments. It's its own skill, and it's largely independent of environment competency.

A non-technical user with strong collaboration competency can outperform a developer who has environment competency but treats the agent like a dumb terminal. The skill that scales is the relationship, not the paths.

## Chat / Cowork / Code — The Competency Hierarchy

Three layers of the same Claude. Each is a step up in capability and a step up in what the user needs to understand. The right order for learning is bottom-up: Chat first, then Cowork, then Code.

**Chat is the foundation.** No file access. Pure conversation. Available on desktop, mobile, and browser. This is where users *learn how to talk to an agent at all* — how to ask, how to iterate, how to build context, how to course-correct. Chat is "Claude at a whiteboard with you."

Inside Chat, there are three things to master before moving on:

1. **Projects.** Chat Projects are the user's way of organizing ongoing work — keeping context, files, and instructions scoped to a specific goal. Chat Projects are *not* the same thing as Cowork's folder workspace, and that distinction matters. A Chat Project is a context container; a Cowork folder is a file-system container. Learning the difference is a big part of graduating from Chat to Cowork.

2. **Connectors.** Connecting Claude to Gmail, Google Calendar, Drive, Notion, and similar services is what turns Chat from a clever conversation into a capable assistant. Teaching users what a connector *is* — a permission-gated bridge to another service — is one of the earliest competency gates.

3. **Skills and customization.** Skills are the customization layer: the part of Chat where users start shaping Claude to their workflow rather than just using it out of the box. Together, connectors and skills are what transform a default chat experience into *the user's* chat experience.

Chat is the entry point. It's where you build the muscle of "having a useful conversation with an agent," and it's where users first encounter the idea that Claude can be customized and connected to their world.

**Cowork is the execution layer.** This is where Claude becomes a coworker at the desk next to you. You hand Claude a folder, and that folder is the workspace for the session. Claude can read what's in it, create new files, edit existing ones, and organize things. When the session ends, the work is on your computer, in the folder you chose. Cowork is "Claude sitting at a desk with a box of your stuff."

Cowork is where workflow automation actually happens. But it only makes sense *after* the user understands Chat — because Cowork assumes they can already have a useful conversation with an agent. You can't learn execution before you learn communication.

**Code is the building layer.** Developer environment. Assumes you understand file systems, git, terminals, and code structure. Same Claude underneath, but the seatbelts come off. Most non-technical users never need to touch Code, and that's fine.

The whole framing gives users *where to go for what kind of work* without making them learn three different tools. Chat to think and communicate. Cowork to execute. Code to build.

## Explaining File Access Without Path Language

Users need to understand what the agent can touch. The explanation should never involve the words *parent*, *child*, *descendant*, *path*, or *directory*.

**The box metaphor.** A folder is a box. Boxes can have boxes inside them. When you hand Claude a box, Claude can open it, look at everything in it, open any smaller boxes inside, and look at those too. Claude cannot reach out of the box. Claude cannot walk over to a different box on the shelf. Claude only has what you handed it.

**The one-sentence rule.** *When you give Claude a folder, Claude can see and touch everything inside that folder — including folders inside it — but nothing outside of it.*

That sentence uses only words a non-technical user already owns — folder, inside, outside, see, touch — and captures the access model accurately. If a user learns only that sentence, they're safe.

**Vertical, not horizontal.** Claude has downward access into whatever folder you hand it, but no sideways access to other folders on your computer. A useful mental image that doesn't require teaching the underlying structure.

## The Competency Ladder

A three-level progression for training and assessment.

**Level 1 — Trust the Boundary.** The user learns to choose the workspace before starting and to read the agent's scope statement. Every task begins with "open the folder we're working in." No multi-folder operations. Success: the user confidently sets scope and verifies it. This builds the habit of scope-first thinking.

**Level 2 — Read the Work.** The user learns to inspect what the agent did before accepting it — which files it touched, what it changed, what it created. They learn the difference between read-only tasks ("summarize this") and write tasks ("reorganize this"), and that write tasks deserve more attention. They use natural-language landmarks ("the Q4 folder," "yesterday's notes") and let the agent translate. Success: the user catches a mistake before it ships.

**Level 3 — Delegate With Checkpoints.** The user learns to hand off multi-step work with explicit checkpoints: "find the files, show me what you found, *then* I'll tell you what to do with them." They structure instructions as intent + location + permission. They know when to expand access and when to keep the sandbox tight. Success: the user can leave the agent running on longer tasks and trust the checkpoints.

## The Principle: Smallest Useful Scope

**Always hand Claude the smallest folder that still contains everything the task needs.**

Hand Claude the entire Documents folder, and Claude has access to years of forgotten stuff. Hand Claude a single project folder, and Claude only sees that project. This one habit prevents most "wait, Claude can see *what*?" moments — without requiring any understanding of how file systems work underneath.

## The 90-Second Teaching Exercise

Don't explain the sandbox. Let users *see* it.

Have the user create a folder on their desktop called "Claude Test," put two or three files in it, and open Cowork on that folder. Ask Claude to list what it sees. The user watches Claude name the exact files they just put there. Ask Claude to create a new file, and have the user open the folder in Finder to watch it appear. Finally, ask "can you see my Downloads folder?" — and Claude says no.

Ninety seconds, and the user has a visceral mental model of the sandbox, verified by direct observation. Trust gets built through observation, not instruction.

## The Prompt Pattern

Teach users to write requests as **intent + location + permission**:

> "Find the latest quarterly report in the Finance folder, summarize it, and do not edit or move any files."

Intent says what to do. Location says where to do it. Permission says what's off-limits. Three parts, one sentence, and it covers the ground that matters.

## Operational Habits to Teach

Instead of a file-system curriculum, teach a small set of habits:

- **Name the workspace before starting.** Users already navigate by project labels — reinforce the habit.
- **Preview before write actions.** Confirmation before critical changes is a core trust-building move.
- **Review the action log after completion.** Auditability builds calibrated trust.
- **Escalate access gradually.** Start read-only, expand as confidence grows.

## What to Leave Out

Paths. Parent/child terminology. Absolute vs. relative paths. Mount points. The technical details of how the sandbox works underneath. These are developer concepts that make non-technical users feel dumb and create the wrong mental model. When a concept has to be explained, translate it into landmark language first.

## The Product Principle Underneath

Every agent action a non-technical user takes should be describable in **landmark language**, not path language. "Work in my Q4 Reports folder" — not a file path. "The file you opened yesterday" — not a timestamp. "This project" — not a mount point.

If training has to teach path syntax just to operate the product, the product is leaking developer abstractions, and the fix is upstream of training.

## The Shift in Framing

In GUI-based agent products, the user isn't *"using a file system"* in the developer sense. They're managing a coworker who has access to one.

The adoption question is not *"do they understand parent and child directories?"* It's *"can they set boundaries, inspect behavior, and recover from mistakes with confidence?"*

Train for that, and the file system takes care of itself.

## Where This Is Going: Camp Claude

The vision behind these notes is a ground-up curriculum — a *Camp Claude* — that meets non-technical users where they actually are and walks them through the real adoption arc:

1. **Start with chat.** What is a chatbot, how do you hold a useful conversation, how do you give it context and get something back worth using?
2. **Introduce Projects.** How do you organize your work in Chat? What belongs in a Project, and why does scoping help you and Claude both?
3. **Add connectors.** What is a connector? Why does Claude need permission to see your inbox or your calendar? How do you add one, and how do you know what it can do?
4. **Layer in customization.** What are skills? How do you shape Claude to your workflow instead of starting from scratch every time?
5. **Graduate to Cowork.** Now that the user can hold a conversation and customize their experience, they're ready to hand Claude a folder and start executing real work on real files.
6. **Only then, if relevant, Code.** For the small subset of learners who want to build software.

That progression respects how people actually learn. It treats file-system knowledge as a *late-stage concept*, not a prerequisite. It builds collaboration competency before environment competency. And it recognizes that the desktop — with Cowork as the execution layer — is where workflow automation finally becomes real for non-technical users. That's the moment when "I use a chatbot" turns into "I work with an agent."

This is the real on-ramp. Camp Claude is the attempt to build it.

---

## Sources & References

**Full links**

- https://journals.publishing.umich.edu/ergo/article/id/2249/
- https://journals.publishing.umich.edu/ergo/article/2249/galley/1317/view/
- https://www.nngroup.com/articles/mental-models/

**Source domains**

onlinelibrary.wiley · journals.publishing.umich · pmc.ncbi.nlm.nih · nngroup · landbase · tomworkshop.github · informationr · about.gitlab · cloudsecurityalliance · ijsat · ntu

*These cover personal file navigation research, mental model literature, UX guidance on agent transparency, and zero-trust / agent-safety frameworks that informed the supervision-literacy and competency-ladder sections above.*
