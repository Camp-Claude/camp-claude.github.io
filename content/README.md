# Camp Claude

*A cohort-based training program teaching non-technical professionals to work with Claude as a real coworker — not just a chatbot. Runs as a short Foundations cohort (4 sessions) funneling into a deeper full cohort (5 sessions), with industry-specific private cohorts on top.*

**Maintained by** Brandon Z. Hoff / RUDI.

---

## Directory Structure

```
content/
├── README.md                  # This file — top-level index
├── program/                   # Program design — internal, facilitator-facing
├── teach/                     # Learner-facing concepts (source for decks + PDFs)
├── reference/                 # Reference material (non-teaching)
├── skills/                    # CLAUDE.md skill files
├── decks/                     # Rendered Gamma decks (one subfolder per session)
├── handouts/                  # PDF one-pagers (learner takeaways)
├── videos/                    # Scripts + recordings
└── marketing/                 # Public-facing landing, social, pitch
```

---

## What's Where

### [program/](program/) — Program design (internal)

Files here are for the facilitator and the program architect. Not learner-facing.

| File | Purpose |
|---|---|
| [syllabus.md](program/syllabus.md) | Full cohort curriculum outline (5 sessions) |
| [foundations-curriculum.md](program/foundations-curriculum.md) | Short cohort curriculum (4 sessions × 60 min) — the on-ramp |
| [facilitator-guide.md](program/facilitator-guide.md) | Session scripts, timing, exercises, failure modes |
| [asset-library.md](program/asset-library.md) | Master index of every asset the program needs |
| [asset-plan.docx](program/asset-plan.docx) | Asset planning Word doc |
| [content-production-map.md](program/content-production-map.md) | What becomes video / PDF / deck / live / in-person |
| [brand-system.md](program/brand-system.md) | Visual design system — typography, palette, slide archetypes for Claude Design decks |
| [agent-training-notes.md](program/agent-training-notes.md) | The pedagogical spine — how to teach supervision |

### [teach/](teach/) — Learner-facing concepts

The curriculum body. Each file is the source material for a session deck *and* a PDF handout.

| File | Concept |
|---|---|
| [chat-vs-cowork-vs-code.md](teach/chat-vs-cowork-vs-code.md) | The three doors — when to use which Claude surface |
| [skills-vs-connectors-vs-plugins.md](teach/skills-vs-connectors-vs-plugins.md) | The three levers for shaping Claude |
| [interface-tour.md](teach/interface-tour.md) | The three sidebars (Chat / Cowork / Code), side by side |
| [cowork-task-anatomy.md](teach/cowork-task-anatomy.md) | Progress / Project / Context — the three panels of a live Cowork task |
| [automation-equation.md](teach/automation-equation.md) | Skill × Connector × Scheduled = Automation — the capstone formula |
| [settings-tour.md](teach/settings-tour.md) | Five settings that actually matter (especially *Keep Computer Awake*) |
| [models-and-tokens.md](teach/models-and-tokens.md) | Haiku / Sonnet / Opus — when to use what, how to preserve usage |

### [reference/](reference/) — Non-teaching reference

Material that supports the program but isn't taught directly in sessions.

| File | Purpose |
|---|---|
| [connectors-by-industry.md](reference/connectors-by-industry.md) | The Core 4 Channels + 10 industry-specific connector stacks for private cohort sales |
| [connector-governance-pattern.md](reference/connector-governance-pattern.md) | How regulated firms (financial, legal, healthcare) use Claude safely. The front-desk metaphor + the six-step de-identification pipeline. Spine of the Corporate Security Module. |
| [compliance-mental-model.md](reference/compliance-mental-model.md) | What compliance officers are actually thinking. The ten questions they'll ask, LLM-general concerns, Claude-specific posture (honest), red/green flags, and how to run the conversation. |
| [agent-security-model.md](reference/agent-security-model.md) | The companion to the governance pattern — what the agent can *do* once it has access. The ten agent-specific risks (prompt injection, confused deputy, autonomy drift, supply chain) mapped to OWASP LLM Top 10 and MITRE ATLAS. The CISO conversation. |
| [zenith-connector-governance.pdf](reference/zenith-connector-governance.pdf) | The canonical case study — a real firm's AI governance playbook. Source material for the pattern above. |

### [skills/](skills/) — CLAUDE.md skill files

Skill files you copy into a Cowork Project as `CLAUDE.md` to activate.

| File | Purpose |
|---|---|
| [deck-generator.md](skills/deck-generator.md) | Turns any Camp Claude asset into a Gamma-ready deck outline |

### [decks/](decks/) — Rendered deck outputs

One subfolder per session. Populated as decks are generated via Gamma.

- `foundations-session-1/`
- `foundations-session-2/`
- `foundations-session-3/`
- `foundations-session-4/`

Each folder holds: exported PPTX, exported PDF, speaker notes, any reference screenshots.

### [handouts/](handouts/) — PDF one-pagers

Rendered PDF takeaways for learners. Pin these in the community space.

### [videos/](videos/) — Video scripts + recordings

Pre-recorded video content. Scripts live here before recording, file references after.

### [marketing/](marketing/) — Public-facing

Landing pages, social assets, pitch materials.

| File | Purpose |
|---|---|
| [landing.html](marketing/landing.html) | Camp Claude landing page |

---

## Naming Conventions

1. **Folders** — lowercase, single-word, plural for collections (`teach/`, `skills/`, `decks/`).
2. **Files** — lowercase-hyphenated-descriptive (`chat-vs-cowork-vs-code.md`).
3. **No redundant prefixes** inside subfolders — we're already in `content/`, so no more `claude-` or `camp-claude-` on individual files.
4. **No dates or version numbers** in filenames — git handles history.
5. **Subfolders for generated outputs** — each deck gets its own folder for exports, speaker notes, handout PDF.

---

## Authoring Voice (apply to every new teaching asset)

Every file in `teach/` and `reference/` follows the same voice:

- **Plain language**, not jargon. *"Folder"* not *"directory."* *"Where work lives"* not *"filesystem."*
- **Landmark over path.** Describe things by what they are, not where they technically live.
- **One-sentence rules.** Every concept has a memorable one-liner. These become slide titles.
- **Observation over explanation.** Show, don't tell. Use screenshots where possible.
- **Respect the audience.** AI-fluent professionals, not beginners — but not developers either.
- **Working draft dates** at the top (`Working draft — YYYY-MM-DD`).
- **Landmark Language section** at the bottom — the committable phrases for that asset.

---

## Where to Start

**If you're building a new asset:** follow the voice above, put it in `teach/` or `reference/`, and add a row to this README.

**If you're running a cohort:** start with [program/facilitator-guide.md](program/facilitator-guide.md), then work through [program/foundations-curriculum.md](program/foundations-curriculum.md).

**If you're producing content:** [program/content-production-map.md](program/content-production-map.md) tells you what format every piece of content should take.

**If you're selling a corporate cohort:** [reference/connectors-by-industry.md](reference/connectors-by-industry.md) has the industry-specific stacks and the sales discovery framework.

**If you're generating a deck:** premium decks go through **Claude Design** (in Cowork), not Gamma. Copy both [skills/deck-generator.md](skills/deck-generator.md) and [program/brand-system.md](program/brand-system.md) into a Cowork Project as reference files, then give Claude Design the brief with a source asset from `teach/`. The Models & Tokens deck in [decks/models-and-tokens/](decks/models-and-tokens/index.html) is the reference for the quality bar.
