# Camp Claude

**The open curriculum for working with Claude as a real coworker — not just a chatbot.**

Most agent training starts too late. It assumes you already know what an LLM is, how agents differ from chatbots, and which Claude surface you should be using. Camp Claude starts at the ground floor and walks you all the way to workflow automation, with each module resting on the one before it.

The goal isn't to turn you into an engineer. It's to make you a competent, confident collaborator with a powerful agent.

**Live site:** https://camp-claude.github.io/campclaude/

---

## The Curriculum at a Glance

Four phases, twelve modules. Each has a clear graduation moment — a behavior, not a quiz.

| Phase | Modules | What you'll be able to do |
|---|---|---|
| **1 — Orientation** | 0–3 | Explain what Claude is, why agents matter, and pick the right surface |
| **2 — Chat Fluency** | 4–7 | Hold useful conversations, organize Projects, install connectors and skills |
| **3 — Execution** | 8–10 | Graduate from Chat to Cowork and safely let Claude touch real files |
| **4 — Automation & Beyond** | 11–12 | Ship a live, running automation you actually rely on |

Full outline in [content/program/syllabus.md](content/program/syllabus.md).

## Who It's For

- **Non-technical professionals** who want to delegate real work to Claude, not just chat with it.
- **Facilitators and trainers** rolling out agent adoption inside a company or team.
- **Self-paced learners** who want a workbook they can move through on their own time.

## Repo Structure

```text
campclaude/
├── content/    # Curriculum, reference material, decks, and program docs
│   ├── program/    # Syllabus, facilitator guide, brand system
│   ├── teach/      # Module teaching notes
│   ├── reference/  # Background concepts (agent security, connectors, compliance)
│   ├── decks/      # Presentation decks for live sessions
│   └── skills/     # Skills bundled with the curriculum
└── site/       # Astro static site (the public face)
```

## Local Development

```bash
cd site
npm install
npm run dev
```

The site reads markdown directly from `../content/`, so edits to curriculum files show up on next reload.

## Deployment

`main` auto-deploys to GitHub Pages via the [deploy workflow](.github/workflows/deploy.yml).

Until the `campclaude.ai` domain is wired up, the site serves from `camp-claude.github.io/campclaude/`. The Astro config uses a `GH_PAGES` env var to set the correct `base` path during the Pages build — remove it from the workflow once the custom domain is live.

## Contributing

Camp Claude is open curriculum. Corrections, clarifications, and new modules welcome. Open an issue or PR against `main`.

## License

TBD.
