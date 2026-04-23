# Camp Claude — Brand System

*The design language for every premium Camp Claude deck. Extracted from the Models & Tokens workshop deck generated in Claude Design. Use this as the reference for every future custom deck.*

**Working draft — April 18, 2026**

---

## Why This Asset Exists

Claude Design — Anthropic's design product accessed through Cowork — generates custom editorial-quality decks from a well-structured brief. The first deck shipped from Camp Claude (*Models, Tokens, and the Weekly Limit*) committed to a specific design language: warm paper palette, editorial serif/sans/mono typography, a three-vehicle metaphor, and a defined set of slide archetypes.

This asset captures that design language so every future deck uses the same tokens, components, and aesthetic. The [deck-generator skill](../skills/deck-generator.md) consumes this file as its visual contract.

---

## The One-Sentence Version

**Warm paper palette, three-font editorial system, one accent color plus one secondary, and a library of roughly 25 slide archetypes — the constraints that make every Camp Claude deck feel like the same program.**

---

## Production Path

Camp Claude's premium decks are produced via **Claude Design** in Cowork — not Gamma.

1. Author provides the deck brief (see [deck-generator.md](../skills/deck-generator.md)).
2. Claude Design reads the source asset from [teach/](../teach/).
3. Claude Design generates `deck-stage.js` (renderer), `components.jsx` (slide components), and an HTML scaffold.
4. Output opens as a live browser presentation and exports to PDF for handouts.

Gamma remains the volume backup for industry pitch decks, drafts, and one-offs where the editorial quality isn't load-bearing.

---

## Typography

Three fonts, three jobs. Consistent across every slide.

| Font | Role | Where it appears |
|---|---|---|
| **Instrument Serif** (Google Fonts) | Display — titles, big numbers, pull quotes | Slide titles, section headers, the one-sentence version slide |
| **Inter Tight** (weights 300–600) | Body — paragraphs, captions, UI labels | All body copy, bullet lists, table cells |
| **JetBrains Mono** (weights 400–500) | Labels — eyebrows, chrome, numeric data | Page counters, section markers, uppercase eyebrows, token counts |

### Type Scale (pixel values at 1920×1080 deck size)

```
mega       220   — reserved for marquee numbers (e.g., "200,000")
display    140   — hero display on title slide
title       72   — standard slide titles
subtitle    48
lead        40   — hero body copy under titles
body        32   — standard body copy
small       26   — secondary body copy
caption     22   — small labels
micro       24   — chrome (page numbers, section tags)
```

### Typographic rules

- Display and title type is **Instrument Serif**. Italic is used heavily for emphasis — *"exponentially expensive,"* *"let that number sit."*
- Body is **Inter Tight**, weight 300–400. Never bold for emphasis — use italics or rust accent.
- Labels are **JetBrains Mono** with letter-spacing `0.18em`–`0.22em` and `textTransform: uppercase`. This is the editorial label look.
- **Numerals** use `fontVariantNumeric: 'tabular-nums'` whenever they appear in tables, page counters, or data.
- Line-height: display 0.9–1.05, title 1.02–1.1, body 1.3–1.42. Tight up top, looser in body.
- **textWrap: 'balance'** on titles, **textWrap: 'pretty'** on body.

---

## Color Palette

Warm neutrals with one accent and one secondary. Semantic names.

| Token | Hex | Role |
|---|---|---|
| `paper` | `#F4EEE3` | Primary slide background — warm off-white |
| `paperSoft` | `#EBE3D3` | Softer paper variant for alternate slides |
| `cream` | `#FBF7EE` | Softest neutral — used for "breathing room" slides |
| `ink` | `#1F1C17` | Primary text — deep warm ink, not pure black |
| `inkSoft` | `#3A352D` | Secondary text — softer ink |
| `muted` | `#807668` | Tertiary text — chrome, captions |
| `line` | `rgba(31, 28, 23, 0.18)` | Primary rules and borders |
| `lineSoft` | `rgba(31, 28, 23, 0.10)` | Soft table dividers |
| `rust` | `#B5532A` | **Primary accent** — emphasis, key numbers, the one accent color |
| `rustSoft` | `#D98962` | Softer rust — for dark backgrounds or secondary use |
| `sage` | `#6B7A5A` | **Secondary accent** — sparingly used, usually for "positive" content |

### Usage rules

- **Paper** is the default background. Use **ink** background for the title slide, section dividers, and one emphasis slide per section (like the 200,000 token slide).
- **Rust** is the only red-orange on any slide. Use it to highlight a single word or phrase in a title (*"exponentially expensive"*), a key number, or the accent axis of a comparison.
- **Sage** is the secondary accent. Use it for the "positive" side of a comparison (best-for bullets, `+` markers). Never replace rust with sage.
- Contrast pairs: ink on paper (primary text), paperSoft on ink (dark-background text), rust on paper (accent highlight).
- **Never introduce a new color.** If it's important enough to stand out, it's rust.

---

## Spacing

Constants that govern slide rhythm.

```
paddingTop        110
paddingBottom     110
paddingX          140
titleGap           56    — gap between eyebrow and title
itemGap            32    — gap between bullet items
sectionGap         80    — gap between major slide sections
```

All measurements in pixels at 1920×1080. Generous whitespace is not optional — it's the aesthetic.

---

## Slide Primitives (reusable components)

These live in `components.jsx` and get composed into archetypes below.

| Primitive | Purpose |
|---|---|
| **Frame** | Slide container — sets background, text color, padding |
| **SlideChrome** | Top/bottom chrome — section label, page counter, deck title, footer tag |
| **Eyebrow** | Uppercase mono label above titles — *"Why this matters,"* *"The hidden mechanic"* |
| **Title** | Instrument Serif title — default 72pt, scalable |
| **Body** | Inter Tight body copy |
| **Rule** | 1px horizontal line — `COLORS.line` by default |
| **Vehicle** | SVG illustration (bike / sedan / truck) for the Haiku / Sonnet / Opus metaphor |

Additional visual primitives (extend as needed): DigitalDesk (for connectors deck), ThreeDoors (for Foundations Session 1), etc. Each primitive is a reusable composable, not a one-off.

---

## Slide Archetypes

Every slide in a Camp Claude deck is an instance of one of these patterns. Extending a deck = using an archetype, not inventing a new layout.

### Opening & framing

| Archetype | Purpose |
|---|---|
| **TitleSlide** | Deck opener — ink background, display serif italic, session ID + date chrome |
| **WhyMatters** | Problem statement — eyebrow + italic title + 3-line lead |
| **OneSentence** | The distilled insight — cream background, 96pt serif, rust emphasis on key phrases |

### Structural

| Archetype | Purpose |
|---|---|
| **SectionDivider** | Roman-numeral part marker — ink background, rust eyebrow, italic display title |
| **EndSlide** | Closing slide — quiet "Questions?" or similar |

### Content layouts

| Archetype | Purpose |
|---|---|
| **ThreeColumn** (e.g., ThreeEngines) | 3-column comparison with illustration, rule, tag, name, blurb |
| **TwoColumnProfile** (e.g., ModelProfile) | 2-column split — big name + illustration left, lists + rule right |
| **DataTable** (e.g., AtAGlance) | Editorial table — ink header row, paper body rows, serif names |
| **SplitWithTable** (e.g., TokenDefinition) | Title + body on one side, data table on the other |
| **AxisCompare** (e.g., BothSidesCount) | 2-column with different top-border colors — neutral vs. accent |
| **NumberedList** (e.g., ContextContents, HabitsAll) | 2-column — title left, numbered mono list right |

### Emphasis slides

| Archetype | Purpose |
|---|---|
| **BigNumber** | Full-bleed ink slide, single huge number in display serif |
| **HiddenMechanic** | Cream background, 104pt italic serif key insight, 40pt lead below |
| **BarChart** (e.g., TurnComparison) | Horizontal bar comparison with display numerals and labels |
| **MultiplierCallout** (e.g., ThirtyTurnOpus) | Single big cost-multiplier number with supporting text |
| **Directive** (e.g., SlowdownSignal) | Actionable takeaway — big italic directive, minimal body |

### Closing

| Archetype | Purpose |
|---|---|
| **Recap** (e.g., DecisionRecap) | Recap of the decision rule — screenshotable framework |
| **TryThisWeek** | Actionable closing — 3 specific moves |
| **Landmark** | Landmark language list — phrases to commit to memory |

---

## Aesthetic Principles

Five non-negotiables that keep the system coherent.

1. **Warm, not cool.** Paper and ink, not white and black. No SaaS-blue anywhere.
2. **Editorial, not promotional.** This is a magazine aesthetic. No corporate gradients, no CTA buttons on slides, no stock photography.
3. **One accent, one secondary.** Rust is the accent. Sage is the secondary. Nothing else. Color restraint is the signal.
4. **Serif for display, sans for body, mono for labels.** Never mix. No serif body, no sans titles.
5. **Generous whitespace.** Slides should feel under-filled, not overpacked. If you can't remove something without losing meaning, the layout is wrong.

---

## Metaphor Discipline

Every deck has one visual metaphor that carries through opening, middle, and close. Examples:

| Deck | Metaphor |
|---|---|
| Models & Tokens | Three vehicles (bike / sedan / truck) for Haiku / Sonnet / Opus |
| Chat vs Cowork vs Code | Three doors |
| Skills vs Connectors vs Plugins | Employee handbook entry / key / pre-assembled toolkit |
| Automation Equation | Three ingredients — instructions × access × cadence |
| Connectors by Industry | The digital desk with specialty tools stacked on top |
| Cowork Task Anatomy | Three panels as three questions |

The metaphor appears at least three times in the deck: opening setup, mid-deck reinforcement, closing payoff. If a deck can't sustain a metaphor, the source asset probably isn't focused enough.

---

## How to Extend

When a new deck adds a concept that doesn't fit existing archetypes:

1. **First check** if an existing archetype can carry the content with different copy. Nine times out of ten it can.
2. **If a new archetype is needed**, design it within the constraints: paper or ink backgrounds only, the three fonts, rust or sage for accent.
3. **Name it and add it to this file.** Future decks reuse, never reinvent.
4. **Never introduce a new color.** If it's important enough to stand out, it's rust.
5. **Never introduce a new font.** Three fonts, three jobs.

---

## Chrome Specification

The SlideChrome primitive sits on every non-opening, non-section-divider slide.

```
[section label]                         [page] / [total]
                   [slide content]
[deck title]                            [footer tag]
```

- **Top-left:** uppercase mono section label, color = `rustSoft` on dark bg, `muted` on light bg.
- **Top-right:** zero-padded page counter (e.g., `07 / 32`), tabular nums.
- **Bottom-left:** deck title in uppercase mono (e.g., *"Claude · Models & Tokens"*).
- **Bottom-right:** footer tag (e.g., *"A Cowork Workshop"* or *"~ 30 min + Q&A"*).

All chrome uses `TYPE_SCALE.micro` (24px) with `letter-spacing: 0.14em` to `0.22em`.

---

## Landmark Language

- Camp Claude's visual language is *warm editorial* — paper and ink, not white and black.
- *Three fonts, three jobs.* Instrument Serif for display, Inter Tight for body, JetBrains Mono for labels.
- *One accent is rust. One secondary is sage.* Everything else is neutral.
- Every slide is an instance of an *archetype*. Don't reinvent — reuse.
- *Generous whitespace is not optional.* The under-filled look is the aesthetic.
- Chrome uses *mono labels* with letter-spacing `0.18em`+ . That's the editorial look.
- Numerals use *tabular-nums*. Always.
- Claude Design is the *production engine*. Gamma is the volume backup.
- Every deck has *one metaphor* that appears at least three times.

Say these enough and every future deck ships inside the same visual universe.
