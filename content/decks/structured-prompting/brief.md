# Camp Claude Deck Brief — Structured Prompting

*Brief for Claude Design (via Cowork) to produce the deck for the
[Structured Prompting](../../teach/structured-prompting.md) teaching asset.*

**Drafted: 2026-04-28**

---

## Source asset

`content/teach/structured-prompting.md` — synthesized from Anthropic's
Applied AI team's "Prompting 101" workshop. Walks through the ten layers
of a properly structured prompt, the iterative empirical loop, and the
progression from one-line to shipped on a Swedish car-insurance use case.

---

## The Ten-Question Brief

### 1. Duration
**30 min + Q&A** (Foundations session default). The progression demo
(four prompt versions) is the natural live moment — should land mid-deck
around the 15-min mark.

### 2. Audience
**Professional learners / upskillers — AI-fluent but not developers.**
Same default audience as Models & Tokens. Most have prompted Claude before
but only with one-liners. The lightbulb moment is realizing structure is
load-bearing.

### 3. Tone
**Classroom / educational — clear, patient, confident.** No engineering
jargon. The Anthropic workshop is itself in this register, so the deck
should match.

### 4. Title style
**Short noun-phrase titles.** Examples to use:
- *The Ten Layers*
- *Brief, Not a Sentence*
- *Order of Operations*
- *Examples Are Lessons*
- *Cache the Static, Think the Hard Stuff*

### 5. Aesthetic
**Default Camp Claude visual identity.** Warm paper palette, Instrument
Serif + Inter Tight + JetBrains Mono, rust accent, sage secondary. No
overrides. See `program/brand-system.md`.

### 6. Metaphor
**A one-page brief — like the brief you'd hand a new contractor on day one.**

This metaphor unifies the deck. A prompt isn't a question, it's a brief —
ten numbered sections you'd write down for a real coworker. The visual
motif: a stylized one-page document with ten labeled sections, lit up one
at a time as the deck progresses. Numbered tabs / margin pulls / section
glyphs.

Secondary visual: **the four-version progression** — show the same prompt
growing from one paragraph to a full brief, with the corresponding output
quality climbing from "skiing accident" → "shared fault, structured
verdict."

### 7. Interactivity
**No** — straight presentation deck. The progression demo is enough live
energy.

### 8. Speaker notes
**Brief bullet reminders.** 1–2 sentences per slide. Specific anchors:
the "skiing accident" moment, the order-of-analysis insight, the prompt
caching aside, the "iterative empirical science" pull-quote.

### 9. Emphasis

The single line every slide should ladder up to:

> *"A real prompt is a brief, not a sentence."*

Three pull-quotes from the source workshop to surface visually:

1. *"There are six elements to a properly structured prompt. Most people
   are using one. Maybe two. That is not a skill issue."* — @sarutalksai
   summarizing Hannah's framing
2. *"The order in which Claude analyzes information is very important."*
   — Hannah, on why instructions order the analysis
3. *"Prompt engineering is an iterative empirical science."* — Christian,
   on the build-fail-fix loop

### 10. Output

- `deck-stage.js` — slide registry
- `components.jsx` — slide components using the design tokens
- `index.html` — deck scaffold
- Per `decks/models-and-tokens/` precedent, may produce 2–3 component files

---

## Suggested Slide Order

This is the *intended* deck shape. Claude Design should refine — but the
narrative arc should hold.

| # | Section | Slide |
|---|---|---|
| 1 | Cold open | The "skiing accident" — Claude's confident wrong answer |
| 2 | Pivot | "A real prompt is a brief, not a sentence" |
| 3 | The metaphor | The one-page brief, ten sections, all introduced |
| 4 | Layer 1 | Task / role |
| 5 | Layer 2 | Tone |
| 6 | Layer 3 | Background data (cacheable) |
| 7 | Layer 4 | Instructions — *order matters* |
| 8 | Layer 5 | Examples — your accumulated judgment |
| 9 | Layer 6 | Conversation history — when relevant |
| 10 | Layer 7 | Immediate task reminder |
| 11 | Layer 8 | Important guidelines — fence the cliffs |
| 12 | Layer 9 | Output formatting (XML tags) |
| 13 | Layer 10 | Prefilled response |
| 14 | Section break | The progression demo — V1 → V4 side by side |
| 15 | Demo V1 | One-liner → "skiing accident" |
| 16 | Demo V2 | Add role + tone → correct domain, no verdict |
| 17 | Demo V3 | Add background data → confident verdict |
| 18 | Demo V4 | Add instructions + format → shippable structured output |
| 19 | The loop | The iterative empirical science slide |
| 20 | Tools aside | Prompt caching + extended thinking |
| 21 | Decision rule | What to use when — chat / Cowork / automation |
| 22 | Common mistakes | One-liner promptitis, hand-rolled parsing, etc. |
| 23 | Graduation | What you should be able to do |
| 24 | Source credit | Anthropic Applied AI team — Hannah + Christian |

---

## Per-Deck Notes for Claude Design

- **The numbered-layer motif** is the dominant visual — make sure each
  layer slide visually echoes the same brief-document metaphor (margin
  numeral, section header in Instrument Serif, body in Inter Tight, code
  examples in JetBrains Mono).
- **The progression sequence** (slides 14–18) should feel like *one*
  slide that grows, not four disconnected slides. Same composition,
  more layers added each time, output quality climbing.
- **Pull-quote treatment** — Instrument Serif italic, large, rust accent,
  generous whitespace. Reserve this treatment for the three quotes
  surfaced in question 9.
- **Code samples** in the format/prefill slides should use Camp Claude's
  mono-code block treatment. Show real `<final_verdict>` and prefill
  examples — not pseudocode.
- **No engineering jargon**. The audience is upskillers, not API
  developers. Words like "system prompt" need a one-line definition the
  first time they appear.

---

## Production Checklist

After Claude Design returns the JSX:

- [ ] `index.html` renders all 24 slides without console errors
- [ ] The progression demo (slides 14–18) reads as a single growing
      composition, not four flat slides
- [ ] All three pull-quotes use the same Instrument Serif italic
      treatment with rust accent
- [ ] Code samples are JetBrains Mono on `paperSoft` background
- [ ] Speaker notes are present and ≤2 sentences each
- [ ] Export to PDF for the handout version produces a clean two-up
      printable layout
