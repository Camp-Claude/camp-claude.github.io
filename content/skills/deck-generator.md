# Camp Claude — Deck Generator Skill

*The brief template Claude Design consumes to produce a Camp Claude deck from any teaching asset. Copy this file into a Cowork Project as `CLAUDE.md` alongside your asset library.*

**Working draft — April 18, 2026**

---

## Purpose

Camp Claude's premium decks are produced via **Claude Design** — Anthropic's design product accessed through Cowork. Claude Design takes a structured brief and outputs a custom React-rendered deck matching the Camp Claude brand system.

This skill is the brief template. It includes the ten questions Claude Design asks, the Camp Claude defaults for each, and per-deck-type overrides. Feed this (plus a source asset from [teach/](../teach/)) into Claude Design and you get a deck in the right voice, aesthetic, and structure every time.

See [program/brand-system.md](../program/brand-system.md) for the visual tokens, typography, and slide archetypes Claude Design will use.

---

## The One-Sentence Version

**Claude Design asks ten questions to shape a deck. Camp Claude has consistent answers for eight of them — only duration, emphasis, and metaphor vary per asset.**

---

## Production Workflow

1. Pick the source asset from `teach/`.
2. Fill in the brief below (most answers are defaults — override only what's task-specific).
3. Paste the brief into Claude Design via Cowork.
4. Claude Design generates `deck-stage.js`, `components.jsx`, and an HTML scaffold.
5. Open the HTML in a browser, review, tweak, export to PDF for handouts.

---

## The Ten-Question Brief

Answer each question. Use the Camp Claude default unless the deck demands an override.

### 1. Duration

- **Default:** 30 min + Q&A (Foundations session)
- **Overrides:** 45 min for full-cohort sessions, 20 min for keynote tasters, 60 min for industry deep-dives

### 2. Audience

- **Default:** Professional learners / upskillers — AI-fluent but not developers
- **Overrides:** *"Executives"* for industry pitch decks, *"Facilitators"* for train-the-trainer decks

### 3. Tone

- **Default:** Classroom / educational — clear, patient, confident
- **Overrides:** *"Executive briefing"* for corporate decks, *"Keynote"* for Mercantile / speaking

### 4. Title style

- **Default:** Short noun-phrase titles (e.g., *"The Three Models"*, *"Token Basics"*)
- **Overrides:** Rarely — keep consistent for brand recognition

### 5. Aesthetic

- **Default:** Clean minimalist — warm paper palette, Instrument Serif + Inter Tight + JetBrains Mono, rust accent, sage secondary (see [brand-system.md](../program/brand-system.md))
- **Overrides:** Never. This is the Camp Claude visual identity.

### 6. Metaphor

- **Default:** Yes — make it a running visual motif throughout
- **Specify per deck** — what the metaphor is (e.g., *"three vehicles"* for Models & Tokens, *"three doors"* for Three Surfaces, *"digital desk"* for Connectors, *"three ingredients"* for Automation Equation)

### 7. Interactivity

- **Default:** No — straight presentation deck
- **Overrides:** *"Yes, live polls"* only if the session design requires it

### 8. Speaker notes

- **Default:** Brief bullet reminders only — 1–2 sentences per slide, conversational, specific
- **Overrides:** *"Full script"* for new facilitator training, *"None"* for learner-only handouts

### 9. Emphasis

- **Specify per deck** — which section deserves the most weight?
- Examples:
  - *Models & Tokens:* **"What context is and why long chats get expensive"**
  - *Foundations Session 1:* **"The three doors — Cowork is the upgrade"**
  - *Automation Equation:* **"The three-ingredient formula"**
  - *Cowork Task Anatomy:* **"The three panels as the three questions of supervision"**

### 10. Closing shape

- **Default:** Decision-rule recap + "try it this week" + landmark language + questions
- **Overrides:** *"Book a call"* CTA for industry pitch decks

---

## The Camp Claude Defaults — Ready to Paste

Use this block verbatim when filling in the brief. Only **metaphor** and **emphasis** change per deck.

```
- duration: 30 min + Q&A
- audience: Professional learners / upskillers — AI-fluent but not developers
- tone: Classroom / educational — clear, patient, confident
- title_style: Short noun-phrase titles
- aesthetic: Clean minimalist — warm paper palette, Instrument Serif + Inter Tight + JetBrains Mono, rust (#B5532A) accent, sage (#6B7A5A) secondary — see program/brand-system.md for the full spec
- metaphor: [specify — e.g., "three vehicles", "three doors", "digital desk"]
- interactivity: No — straight presentation deck
- speaker_notes: Brief bullet reminders only — 1–2 sentences per slide
- emphasis: [specify the load-bearing section]
- closing: Decision-rule recap + "try it this week" + landmark language + questions
```

---

## Per-Deck-Type Overrides

| Deck type | Duration | Tone | Metaphor | Emphasis |
|---|---|---|---|---|
| **Foundations Session 1** (Three Doors) | 30 min | Classroom | Three doors | Cowork is the upgrade |
| **Foundations Session 2** (Chat, Projects, Context, Artifacts, Models) | 30 min | Classroom | Your Claude desk | Context management + model choice |
| **Foundations Session 3** (Skills, Connectors, Plugins) | 30 min | Classroom | Employee handbook / key / toolkit | The three levers for shaping Claude |
| **Foundations Session 4** (Cowork Taste) | 30 min | Classroom | Three panels = three questions | Supervision made visible |
| **Models & Tokens** (reference deck) | 30 min | Classroom | Three vehicles | What context is & why long chats get expensive |
| **Automation Equation** | 30 min | Classroom | Three ingredients | The formula: instructions × access × cadence |
| **Connectors by Industry** | 30 min | Classroom | The digital desk | Core 4 + industry stacks layered on top |
| **Keynote / Mercantile taster** | 45–60 min | Keynote | Program-specific | The agent shift — from chatbot to coworker |
| **Industry pitch (corporate sales)** | 20 min | Executive briefing | Industry-specific | Their team's stack + one automation |
| **Train-the-trainer** | 45 min | Facilitator | None | What to watch for in each session |

---

## Worked Example

**Source asset:** `teach/models-and-tokens.md`

**Brief given to Claude Design:**

```
Build a slide deck for students from the attached file.

Answers:
- duration: 30+ minutes (full workshop, ~32 slides)
- audience: Professional learners / upskillers
- tone: Classroom / educational — clear, patient
- title_style: Short noun-phrase titles (e.g., "The Three Models", "Token Basics")
- aesthetic: Clean minimalist — warm paper palette, serif/sans/mono mix, rust accent
- metaphor: Yes — three vehicles (bike / sedan / moving truck) as a running visual motif
- interactivity: No — straight presentation deck
- speaker_notes: Brief bullet reminders only
- emphasis: What context is & why long chats get expensive
- closing: Decision-rule recap + "try it this week"
```

**Output.** 32 slides, six sections (Three Models / Tokens / Context / Usage / Decision Rule / Closing), paper + ink + rust palette, Instrument Serif + Inter Tight + JetBrains Mono typography, three-vehicle metaphor carried through with geometric SVG illustrations. Live in `edu/campclaude/content/decks/models-and-tokens/`.

**This is the reference deck.** Every future Camp Claude deck should match its quality bar.

---

## Before You Generate — Pre-Flight Checklist

- [ ] Source asset lives in `teach/` or `reference/` and is finalized (not a draft).
- [ ] Source asset has a **Landmark Language** section at the end — Claude Design uses these as the closing slide.
- [ ] You've chosen the metaphor (or confirmed "none" if the content doesn't support one).
- [ ] You've specified the emphasis — which section carries the most weight.
- [ ] You've picked the deck type from the override table above.
- [ ] [program/brand-system.md](../program/brand-system.md) is in the same Cowork Project so Claude Design can apply the visual tokens.

---

## After Generation — Review Checklist

- [ ] Section dividers use Roman numerals (I, II, III, IV, V, VI).
- [ ] Title slide is ink background with display serif italic.
- [ ] Every section has at least one paper-background content slide and one cream-background "breathing room" slide.
- [ ] Rust is used as accent, sage as secondary — no other colors.
- [ ] Every slide has a speaker note.
- [ ] Chrome (section label + page counter + deck title + footer tag) is consistent across content slides.
- [ ] Final slide is "Questions" or equivalent — not a CTA.
- [ ] The metaphor appears at least three times — opening, middle, closing.
- [ ] Landmark language from the source asset appears verbatim on the closing slide.

---

## Common Failure Modes to Avoid

**Filler slides.** No *"Agenda,"* *"About Me,"* *"Thank you"* slides. Open with the hook. Close with the graduation moment.

**Over-stuffed slides.** If slide text runs past 30 words, that content belongs in the speaker note.

**Generic titles.** *"The Three Doors"* is fine. *"Overview of Claude's Interfaces"* is dead. Titles carry the argument.

**Missing speaker notes.** Speaker notes are how the facilitator remembers what to say. Don't skip them.

**Metaphor stops halfway.** If the opening introduces a metaphor, the middle and closing must reinforce it. Abandoned metaphors are worse than no metaphor.

**New colors.** The palette is the palette. No blues, no greens except sage, no gradients.

---

## How to Use This Skill

**In Cowork:** save this file as `CLAUDE.md` in a Cowork Project called *"Camp Claude Decks."* Put all `teach/` assets and the `brand-system.md` in that Project. Now any task like *"generate a deck from automation-equation.md"* triggers this skill and Claude Design produces the deck automatically.

**In Chat:** paste this as the Project instruction for a Chat Project called *"Camp Claude Decks."* Same effect for Chat-generated briefs.

---

## Landmark Language

- Claude Design is *the production engine*. The brief is *the load-bearing input*.
- The ten questions are always the same. Most answers are *Camp Claude defaults*. Only *metaphor* and *emphasis* change per deck.
- *Short noun-phrase titles* — always. No sentences in slide titles.
- Camp Claude decks are *warm editorial*. Not SaaS, not corporate.
- Every deck has *a graduation moment and a try-this-week*. Never skip.
- The Models & Tokens deck is *the reference*. Match its quality bar.

Say these enough and every deck ships at the same level.
