# Camp Claude — Content Production Map

*What becomes a video, what becomes a PDF, what becomes a slide deck, what happens live, and what stays internal. The production plan for Camp Claude's entire content layer.*

**Working draft — April 18, 2026**

---

## Why This Asset Exists

Camp Claude now has a dozen teaching assets. Each one has a natural delivery format — but without mapping that upfront, you'll build decks for things that should be videos, and PDFs for things that should be live demos. This asset is the production map. Every piece of content is named, format-assigned, and placed into the curriculum arc.

---

## The One-Sentence Version

**Record videos for things that don't change. Build PDFs for things learners will reference later. Build decks for narrative teaching. Do live screen-shares for anything involving the real UI. Save in-person for brand and community moments.**

---

## The Five Formats

| Format | Good for | Why |
|---|---|---|
| **Pre-recorded video** | Intros, setup, evergreen concepts | Record once, reuse every cohort |
| **PDF handout** | Reference material, checklists, decision cards | Learners come back to these |
| **Slide deck** (live) | Narrative teaching during sessions | Carries the argument in real time |
| **Live screen-share** | Anything involving the actual UI | Fluency comes from seeing you work |
| **Live in-person** | Brand, community, networking | Mercantile, corporate, keynotes |

---

## Pre-Recorded Video (record once, reuse forever)

Short, evergreen, async. Shot in one afternoon.

| Video | Length | Source asset | When used |
|---|---|---|---|
| **"Why Claude is different"** (pre-work) | 5–7 min | Chat vs Cowork vs Code | Sent before Foundations Session 1 |
| **"Install the desktop app"** (pre-work) | 3–5 min | Settings Tour | Sent before Foundations Session 1 |
| **"Five Settings That Actually Matter"** | 3–5 min | Settings Tour | Evergreen community reference |
| **Short marketing clips** (social, ads, landing page) | 30–60 sec | Cut from above | Ongoing marketing |

**Production note.** Record with screen-share and a webcam corner. No fancy editing — rough cuts are fine. Host on Vimeo or inside the community platform.

---

## PDF Handouts (takeaways learners keep)

One-page reference cards. Build in Gamma or Canva. Exported as PDF. Pin in community.

| PDF | Source asset | When used |
|---|---|---|
| **The Three Doors — One-Page Reference** | Chat vs Cowork vs Code | Session 1 takeaway |
| **Skills vs Connectors vs Plugins — Cheat Sheet** | Skills vs Connectors vs Plugins | Session 3 takeaway |
| **The Automation Equation — Planner Worksheet** | Automation Equation | Session 4 (planning) / Full cohort Session 5 (capstone) |
| **Five Settings That Actually Matter** | Settings Tour | Session 1 takeaway |
| **Models & Tokens — Decision Card** | Models & Tokens | Session 2 takeaway |
| **Your First Cowork Task — Checklist** | Cowork Task Anatomy | Session 4 takeaway |
| **Welcome Packet** (1-page program intro) | Foundations Curriculum | Pre-enrollment / enrollment confirmation |
| **Tech Setup Guide** | Settings Tour | Pre-work packet |

**Production note.** Each handout should be one page (front only) for easy printing. Title at top, 3–5 key points, the landmark language from the source asset as a footer. Branded consistently once the Camp Claude visual identity is set.

---

## Slide Decks (live sessions — built in Gamma)

Primary teaching artifact. Generated via the deck-generator skill from the source asset, polished in Gamma.

| Deck | Slides | Covers | Priority |
|---|---|---|---|
| **Foundations Session 1** | 13 | Three doors, setup | 🟢 Build first |
| **Foundations Session 2** | 14 | Chat, Projects, Artifacts, Models & Tokens | 🟢 Build first |
| **Foundations Session 3** | 14 | Customize — Skills, Connectors, Plugins | 🟢 Build first |
| **Foundations Session 4** | 14 | Cowork taste, Task Anatomy, automation preview | 🟢 Build first |
| **Keynote / taster** (Mercantile, speaking) | 20–25 | Full Camp Claude pitch | 🟡 Before first event |
| **Full cohort Session decks (1–5)** | 15–20 each | Full curriculum, deeper | 🟡 After Foundations validated |
| **Industry pitch decks** (10 of them) | 12–15 each | Per-industry corporate sales | 🔴 As corporate leads come in |

**Production note.** Built from the [deck-generator.md](../skills/deck-generator.md) skill in Gamma. One skill, many decks — don't build each from scratch. Export both as live presentation links *and* PDF takeaways.

---

## Live Screen-Share (during sessions — not pre-built)

This is the real teaching. No deck can replace it. Every session includes ~20 minutes of live screen-share where you *do the thing* in front of the cohort. No script — the fluency IS the point.

| Live moment | Session |
|---|---|
| Click through Chat / Cowork / Code tabs | Session 1 |
| Create a Chat Project with pinned files | Session 2 |
| Install a connector live (Gmail or Calendar) | Session 3 |
| Write a skill live — a real `CLAUDE.md` | Session 3 |
| Run a Cowork task on a real folder | Session 4 |
| Show the three panels updating (Progress / Project / Context) | Session 4 |
| Preview Scheduled (without building one) | Session 4 |

**Production note.** Don't over-rehearse these. Part of the value is seeing you recover when Claude does something unexpected. That's the real fluency learners need to absorb.

---

## Live In-Person (event-based, optional)

For brand, community, and high-credibility moments.

| Event | Format | Goal |
|---|---|---|
| **Mercantile Library launch** | Half-day, 40 seats, Cincinnati | Brand + lead gen + pilot learning |
| **Corporate on-site workshop** | Full-day or half-day, private | Revenue ($15K–35K) |
| **Speaking engagements / keynotes** | 45–60 min talk variant of taster | Credibility + funnel to cohort |

**Production note.** Skip in-person for the hands-on teaching itself — virtual beats it for screen-share and breakouts. Use in-person for what it's uniquely good at: energy, networking, photos, testimonials.

---

## Internal Docs (facilitator-facing, not learner-facing)

| Doc | Purpose |
|---|---|
| **Foundations Curriculum** | The session-by-session plan |
| **Full Cohort Syllabus** | The deeper 5-session plan |
| **Facilitator Guide** | Session scripts, timing, common failure modes |
| **Asset Library** | Index of every asset and where it lives |
| **Deck Generator Skill** | `CLAUDE.md` that turns assets into decks |
| **Content Production Map** *(this file)* | What becomes video / PDF / deck / live |

---

## The Simple Rule — Which Format When

When a new piece of content shows up, ask:

| Question | Format |
|---|---|
| Can it be said the same way every time? | **Video** (record once) |
| Will they want to reference it later? | **PDF** (one-page takeaway) |
| Does it need a narrative arc and time to land? | **Slide deck** (live session) |
| Does it involve clicking the real UI? | **Live screen-share** (no scripting) |
| Is it brand, community, or credibility? | **Live in-person** |
| Is it facilitator-only? | **Internal doc** |

Many pieces of content answer yes to more than one — in that case, build the *primary* format first and adapt to the others as needed. Example: "Chat vs Cowork vs Code" is primarily a slide deck (Session 1), but gets adapted into a PDF takeaway and a short video clip for marketing.

---

## The Production Sprint

If you execute on this map, here's the real work:

| Day | Task |
|---|---|
| **Day 1 (afternoon)** | Record all 3 pre-work videos |
| **Day 2** | Build all 4 Foundations decks via Gamma skill |
| **Day 3** | Build all 8 PDF handouts via Gamma |
| **Day 4** | Community setup (Skool or Circle) + landing page shell |
| **Day 5** | Stripe checkout + enrollment form |
| **Week 2–3** | Marketing / enrollment push — fill first cohort |
| **Week 4–7** | Pilot cohort runs (4 Foundations sessions) |
| **Week 8** | Iterate based on pilot feedback |
| **Week 9+** | Open public cohort + begin corporate conversations |

**Roughly 5 focused days of production work** covers every content piece the first cohort needs. Everything after is iteration and distribution.

---

## Teaching Implications

Treat this map as the source of truth for what gets built when.

- **When building a new teaching asset**, immediately ask: *what format does this become?* Don't let assets sit unformatted — they decay.
- **When a cohort feedback surfaces a missing piece**, check the map — is it a new video, a new PDF, or a live demo adjustment? That answers production priority.
- **When building industry cohorts**, the same format map applies — you're just swapping the underlying assets.

---

## Landmark Language

- *Video = evergreen.* Record once, ship forever.
- *PDF = reference.* Give them something to come back to.
- *Deck = narrative.* A story told live.
- *Live screen-share = fluency.* Let them watch you work — including the misses.
- *In-person = brand and community.* Not teaching — memory.
- *Don't build decks for things that should be videos.* Don't build PDFs for things that should be live demos.
- *Build the primary format first.* Adapt to the others as needed.

Say these and the production plan stops being a list and starts being a system.
