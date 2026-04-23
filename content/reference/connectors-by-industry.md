---
title: "Claude Connectors by Industry — The Digital Desk and Beyond"
description: "The universal connector foundation plus industry-specific stacks for corporate Camp Claude cohorts."
section: "reference"
tier: "free"
readTime: "15 min read"
updated: "2026-04-17"
---

# Claude Connectors by Industry — The Digital Desk and Beyond

*Every knowledge worker has the same four core channels. Industries just layer specialty tools on top.*

**Working draft — April 17, 2026**

---

## Why This Asset Exists

Claude's connector catalog has over 200 entries. Presenting all of them to a learner is useless — it's a wall of logos. The right move is to teach a small *universal foundation* to everyone — the four channels that make up the digital desk of any knowledge worker — and then customize *industry-specific stacks* for private company cohorts.

This asset does both. It names the four core channels (plus two role-dependent optionals), walks through the universal connectors that fill them, and then maps ten industries to their natural specialty stacks.

---

## The One-Sentence Version

**Every knowledge worker has the same digital desk — Communication, Schedule, Storage, Knowledge. Set up those four channels and Claude can do real work. Industries layer specialty tools on top.**

---

## The Core 4 Channels of the Digital Desk

Every knowledge worker, regardless of role or industry, has these four channels active every day. If Claude can't see all four, there are obvious gaps in what it can do for you.

| # | Channel | What it is | Why it's core |
|---|---|---|---|
| 1 | **Communication** | Email, chat, and video | Everyone sends and receives. Claude needs to see *what's coming in*. |
| 2 | **Schedule** | Calendar | Everyone has a clock. Claude needs to know *what's planned*. |
| 3 | **Storage** | Files | Everyone produces artifacts. Claude needs to see *what you've done and your references*. |
| 4 | **Knowledge** | Wiki, notes, SOPs | Everyone has context. Claude needs to see *how your world works* — the "how we do things here." |

### Why these four

With the Core 4, Claude can build almost any day-one automation — morning digest, weekly recap, meeting prep, research briefing, client check-in. Miss one and a whole class of work breaks:

- **No Communication** → Claude can't act on what's happening right now.
- **No Schedule** → Claude has no sense of time.
- **No Storage** → Claude has no memory of your work.
- **No Knowledge** → Claude doesn't know your rules.

---

## The Optional 2 (Role-Dependent)

Two more channels matter for some roles but not all. These layer on top of the Core 4.

| # | Channel | Who needs it |
|---|---|---|
| 5 | **Creation** | Designers, marketers, educators, anyone producing visual or structured artifacts (Canva, Figma, Gamma, PowerPoint). |
| 6 | **Analysis** | Analysts, ops, finance, product, anyone working with datasets (Sheets, Tableau, Metabase, Mixpanel). |

Not everyone makes decks. Not everyone queries data. Creation and Analysis are specializations — teach them when the cohort's role demands it, not by default.

---

## Tool-Agnostic Mapping

The channels are universal. The specific tools vary by ecosystem. Here's what plays each role across Google, Microsoft, and other common stacks.

| Channel | Google | Microsoft | Other |
|---|---|---|---|
| **Communication — email** | Gmail | Outlook | Proton |
| **Communication — chat** | — | Microsoft Teams | Slack, Discord |
| **Communication — video** | Google Meet | Teams | Zoom |
| **Schedule** | Google Calendar | Outlook Calendar | Calendly, Fantastical |
| **Storage** | Google Drive | OneDrive / SharePoint | Dropbox, Box |
| **Knowledge** | — | OneNote / SharePoint wiki | Notion, Confluence |
| **Creation — decks** | Google Slides | PowerPoint | Canva, Gamma |
| **Creation — docs** | Google Docs | Word | — |
| **Analysis** | Google Sheets | Excel | Tableau, Metabase, Airtable |

### Honest gap to name

Claude's current connector catalog is Google-tilted. Outlook, Microsoft Teams, OneDrive, SharePoint, and OneNote do *not* have direct connectors today. For Microsoft shops, the workaround is orchestration connectors (Zapier, Make, n8n) or local-app connectors (Word and PowerPoint via AppleScript on Mac). Name this gap upfront when pitching a Microsoft-heavy corporate cohort — it shapes the curriculum.

### For regulated industries

Any financial, legal, healthcare, insurance, or similar firm will have compliance questions before connector adoption. Walk them through [connector-governance-pattern.md](connector-governance-pattern.md) — the front-desk metaphor and six-step de-identification pipeline. The Zenith case study ([zenith-connector-governance.pdf](zenith-connector-governance.pdf)) is a real firm's playbook you can adapt. A regulated private cohort should bundle the **Corporate Security Module** on top of the standard curriculum, priced $75K–$150K.

---

## The Universal Core Connectors (Foundations Session 3)

These are the seven connectors Claude's catalog ranks most popular. Together they cover the Core 4 Channels plus the universally useful Creation tool, Canva. Every Foundations cohort teaches this set.

### Communication

| Connector | One-sentence overview |
|---|---|
| **Gmail** | Claude reads, drafts, sends, and searches your inbox on your behalf. |
| **Slack** | Claude reads threads, drafts replies, and posts messages in the channels you use. |
| **Zoom for Claude** | Claude searches, recaps, and acts on your recorded meetings. |

### Schedule

| Connector | One-sentence overview |
|---|---|
| **Google Calendar** | Claude checks your schedule, finds conflicts, and creates events. |

### Storage

| Connector | One-sentence overview |
|---|---|
| **Google Drive** | Claude searches, reads, and uploads to the documents you already store there. |

### Knowledge

| Connector | One-sentence overview |
|---|---|
| **Notion** | Claude searches your workspace, updates pages, and pulls context from your knowledge base. |

### Creation (bonus — universally useful)

| Connector | One-sentence overview |
|---|---|
| **Canva** | Claude searches, creates, autofills, and exports designs in your Canva account. |

**Teaching plan.** In Foundations Session 3, every learner installs at least one of these live during the session — usually Gmail or Calendar, because the "wow" is immediate. The morning-inbox-triage capstone in Session 5 uses Gmail as the canonical example.

---

## Industry-Specific Stacks (Private Cohort Pitch)

Each stack below is 6–10 connectors that naturally cluster for one kind of organization. Use these to customize a private cohort — walk in with the right connectors mapped, teach the same three levers (skills × connectors × scheduled), and the automations feel built *for them*, not adapted.

---

### Sales & GTM Teams

| Connector | One-sentence overview |
|---|---|
| **HubSpot** | Claude queries your CRM data to surface personalized pipeline insights. |
| **Apollo.io** | Claude finds buyers, researches accounts, and helps book meetings. |
| **Outreach** | Claude connects to your sales cadences and surfaces performance data. |
| **Clay** | Claude finds prospects, enriches accounts, and personalizes outreach at scale. |
| **Sybill** | Claude pulls insights from your sales calls, deals, and pipeline. |
| **Fireflies** | Claude analyzes meeting transcripts and surfaces what was said and decided. |
| **ZoomInfo** | Claude enriches your contacts and accounts with go-to-market intelligence. |
| **Common Room** | Claude brings your GTM signal data into any sales conversation. |
| **Attio** | Claude searches, manages, and updates your Attio CRM directly. |
| **Close** | Claude connects to Close CRM to securely access and act on sales data. |

**Automations to pitch.** Morning pipeline digest. Pre-meeting account research. Weekly deal-risk summary. Automated follow-up drafts after every sales call.

---

### Marketing Teams

| Connector | One-sentence overview |
|---|---|
| **Klaviyo** | Claude reports on campaigns, strategizes segments, and creates emails using real-time data. |
| **Mailchimp** | Claude builds and analyzes marketing campaigns without leaving the conversation. |
| **Ahrefs** | Claude pulls SEO data, keyword research, and AI search analytics. |
| **Mixpanel** | Claude queries and analyzes your product analytics. |
| **PostHog** | Claude queries events, funnels, and session replays. |
| **Supermetrics** | Claude analyzes marketing performance across 200+ platforms. |
| **Amplitude** | Claude searches and analyzes product usage data. |
| **Customer.io** | Claude explores customer data and generates insights. |
| **Windsor.ai** | Claude connects 325+ marketing, analytics, and CRM data sources. |

**Automations to pitch.** Weekly attribution report. Campaign performance digest. Automated keyword and topic discovery. Monthly funnel health check.

---

### Legal & Professional Services

| Connector | One-sentence overview |
|---|---|
| **Harvey** | Claude answers legal queries, searches vaults, and assists research. |
| **Midpage** | Claude conducts legal research and drafts work product. |
| **DocuSign** | Claude manages contracts and signature workflows. |
| **SignWell** | Claude automates e-signature flows end-to-end. |
| **SignNow** | Claude runs signature workflows directly from conversation. |
| **LegalZoom** | Claude surfaces attorney guidance and business/personal legal tools. |
| **Intapp Celeste** | Claude accesses firm-management data compliantly. |
| **Aiwyn Tax** | Claude estimates federal and state taxes with live calculators. |

**Automations to pitch.** Contract clause summaries. Weekly matter-status digest. Automated NDA first-pass review. Client-intake triage.

---

### Finance & Investment

| Connector | One-sentence overview |
|---|---|
| **PitchBook Premium** | Claude accesses PitchBook's private markets data in context. |
| **Fiscal.ai** | Claude pulls clean public equity fundamentals on demand. |
| **Morningstar** | Claude brings investment and market insights into any chat. |
| **S&P Global** | Claude queries a wide range of S&P datasets. |
| **LSEG** | Claude accesses best-in-class financial data across asset classes. |
| **Quartr** | Claude pulls company research, earnings calls, and financial data. |
| **FactSet AI-Ready Data** | Claude reads institutional-quality financial data and analytics. |
| **Daloopa** | Claude accesses financial fundamentals and KPIs with source links. |
| **CB Insights** | Claude pulls predictive intelligence on private companies. |
| **Moody's** | Claude surfaces risk insights, analytics, and decision intelligence. |

**Automations to pitch.** Pre-earnings call briefing. Weekly portfolio news digest. Automated sector-trend summaries. Deal memo first-drafts.

---

### Healthcare & Life Sciences

| Connector | One-sentence overview |
|---|---|
| **ClinicalTrials** | Claude queries ClinicalTrials.gov data directly. |
| **ICD-10 Codes** | Claude looks up and works with ICD-10-CM and ICD-10-PCS codes. |
| **PubMed** | Claude searches the biomedical literature. |
| **bioRxiv** | Claude accesses bioRxiv and medRxiv preprint data. |
| **Benchling** | Claude connects to R&D data, experiments, and lab notebooks. |
| **Medidata** | Claude works with clinical trial software and site-ranking tools. |
| **NPI Registry** | Claude queries the US National Provider Identifier registry. |
| **ChEMBL** | Claude queries bioactive molecule data. |
| **Open Targets** | Claude accesses drug target discovery and prioritization data. |
| **Owkin** | Claude interacts with AI agents built specifically for biology. |

**Automations to pitch.** Literature-review weekly digest. Trial-site scoring summaries. Coding-audit first-pass. Research landscape briefings.

---

### Nonprofits, Grants & Public Sector

| Connector | One-sentence overview |
|---|---|
| **Candid** | Claude researches nonprofits and funders using Candid's dataset. |
| **Kindora Funder Discovery** | Claude finds funders aligned to your cause. |
| **Granted** | Claude discovers grant opportunities across the entire landscape. |
| **GovTribe** | Claude searches government procurement and spending data. |
| **Benevity** | Claude finds and engages with verified nonprofits. |
| **Tango** | Claude searches US government contracting data. |

**Automations to pitch.** Weekly grant-opportunity alerts. Funder-fit scoring. RFP summaries. Donor-research digest. **This stack is especially relevant to the NSF / AI-Ready America work.**

---

### Engineering & SaaS Teams

| Connector | One-sentence overview |
|---|---|
| **GitHub / GitLab** | Claude reads code, issues, and PRs in your repos. |
| **Linear** | Claude manages issues, projects, and team workflows. |
| **Sentry** | Claude searches errors, queries events, and helps debug issues. |
| **PagerDuty** | Claude manages incidents, services, and on-call schedules. |
| **Vercel** | Claude analyzes deployments and manages projects. |
| **Netlify** | Claude creates, deploys, and manages sites. |
| **Supabase** | Claude manages your Postgres database, auth, and storage. |
| **PlanetScale** | Claude runs queries against your Postgres and MySQL databases. |
| **Figma** | Claude pulls design context and generates aligned code. |
| **Cloudflare Developer Platform** | Claude builds with Cloudflare compute, storage, and AI. |

**Automations to pitch.** Morning ops digest (errors, deploys, on-call). Weekly velocity report. PR-summary briefings. Incident-postmortem first-drafts.

---

### Data & Analytics Teams

| Connector | One-sentence overview |
|---|---|
| **Snowflake** | Claude retrieves structured and unstructured data from your warehouse. |
| **Databricks** | Claude works with managed MCP servers over Unity Catalog and Mosaic AI. |
| **Google BigQuery** | Claude runs advanced analytical queries on BigQuery. |
| **Tableau** | Claude reads and interprets your Tableau dashboards. |
| **Metabase** | Claude queries your Metabase analytics with optimized responses. |
| **Hex** | Claude uses the Hex agent to answer data questions. |
| **Amplitude** | Claude searches and analyzes product usage data. |
| **Omni Analytics** | Claude queries your data through Omni's semantic model. |
| **Starburst** | Claude securely retrieves data across federated sources. |
| **MotherDuck** | Claude gets answers directly from your data. |

**Automations to pitch.** Daily metric digest. Automated anomaly alerts. Weekly dashboard commentary. Stakeholder-question drafts.

---

### Agencies & Consultancies

| Connector | One-sentence overview |
|---|---|
| **Notion** | Claude searches your workspace and updates client pages. |
| **Airtable** | Claude works with your structured client databases. |
| **Slack** | Claude reads and writes in client communication channels. |
| **ClickUp** | Claude manages projects and tasks across teams. |
| **Asana** | Claude coordinates tasks, projects, and goals. |
| **Figma** | Claude pulls design context and generates aligned outputs. |
| **Canva** | Claude creates decks, social posts, and branded designs. |
| **HubSpot** | Claude queries client CRM data for personalized insights. |
| **Gamma** | Claude creates presentations, docs, sites, and social content. |

**Automations to pitch.** Weekly client status summaries. Automated proposal first-drafts. Meeting-prep briefings. Post-delivery recap emails.

---

### Ops & Internal Finance

| Connector | One-sentence overview |
|---|---|
| **Ramp** | Claude searches, accesses, and analyzes your Ramp financial data. |
| **Brex** | Claude automates finance workflows with corporate card and expense data. |
| **QuickBooks** | Claude manages business finances, invoices, and books. |
| **Mercury** | Claude searches, analyzes, and understands your business banking. |
| **Gusto** | Claude queries payroll, benefits, and HR data. |
| **NetSuite** | Claude connects to NetSuite data for analysis and insights. |
| **Stripe** | Claude handles payment processing and financial infrastructure. |
| **Airwallex** | Claude integrates with the Airwallex platform for cross-border payments. |
| **Jaz Accounting** | Claude creates invoices, records bills, reconciles banks, and closes books. |

**Automations to pitch.** Weekly burn-rate briefing. Automated expense categorization. Monthly close first-pass. Cash-runway updates.

---

### Education & Research

| Connector | One-sentence overview |
|---|---|
| **Microsoft Learn** | Claude searches trusted Microsoft documentation. |
| **Udemy Business** | Claude explores skill-building resources for teams. |
| **Scholar Gateway** | Claude enhances responses with scholarly research and citations. |
| **Consensus** | Claude explores scientific research across disciplines. |
| **Learning Commons Knowledge Graph** | Claude works with K–12 standards, skills, and learning progressions. |
| **PubMed** | Claude searches the biomedical literature (if research-adjacent). |

**Automations to pitch.** Weekly research digest. Curriculum alignment checks. Student-progress summaries. Auto-drafted study guides. **This stack aligns directly with the NSF AI-Ready America work.**

---

## Bonus: Automation Orchestration (Cross-Industry)

These connectors are industry-agnostic multipliers — they let Claude talk to almost anything else.

| Connector | One-sentence overview |
|---|---|
| **Zapier** | Claude automates workflows across thousands of apps via conversation. |
| **Make** | Claude runs scenarios and manages your Make account. |
| **n8n** | Claude accesses and runs your self-hosted n8n workflows. |
| **IFTTT** | Claude connects and controls 1,000+ apps. |
| **Workato** | Claude automates workflows and connects business apps. |

**When to teach these.** Not in Foundations — they're meta-tools, better taught in the full cohort or an advanced track for learners who've already built one automation and want to chain it into something bigger.

---

## How to Use This Asset

**In curriculum.**
- Foundations Session 3 → teach the Universal Core connectors that cover the Core 4 Channels. Every cohort, same set.
- Full Camp Claude cohort → layer 2–3 industry connectors on top of the Core 4 if the cohort's role is known (designers add Figma, analysts add Metabase, etc.).
- Private company cohort → discover the industry first, then teach the matching stack on top of the Core 4.
- Advanced track → introduce the orchestration tools (Zapier, Make, n8n) for learners ready to chain automations across the Core 4 and their industry stack.

**In sales conversations.**
- First discovery question: *"Google Workspace or Microsoft 365?"* — the curriculum shape changes materially for Microsoft shops (needs orchestration bridges). Asking this makes you look like you've done this before.
- Second discovery question: *"What specialty tools does your team live in every day?"* — match the answer to an industry stack below.
- The pitch becomes concrete: *"We'll teach your team to set up the Core 4 Channels, then automate three things using the [industry] tools you already pay for."*

**In marketing.**
- Each industry stack can be its own landing page: "Claude for Legal Teams," "Claude for GTM," "Claude for Grant Writers."
- Every landing page answers the same question — *"what can Claude do with the tools I already use?"* — and funnels to a relevant cohort offering.
- Lead with the Core 4 framing as the universal hero: *"Before your specialty tools, there's your desk. Let's set that up first."*

**In community.**
- Pin this in the Resources section.
- New learners self-identify their industry and see their stack.
- Post-cohort, alumni share what automations they built from *their* stack — becomes case-study material.

---

## Landmark Language

- Every knowledge worker has the same *digital desk* — four core channels.
- The *Core 4 Channels* are Communication, Schedule, Storage, Knowledge.
- The *Optional 2* are Creation and Analysis — role-dependent, not universal.
- *Channels are universal. Tools vary by ecosystem.* Google, Microsoft, and other stacks all play the same roles.
- *Universal core* = the seven connectors that fill the Core 4 (plus Canva for Creation).
- *Industry stack* = the specialty connectors that layer on top of the Core 4 for one kind of organization.
- First sales question: *"Google Workspace or Microsoft 365?"* That alone makes you look like you've done this before.
- The automation equation (skill × connector × scheduled) *works identically across every stack*. Change the connectors, keep the curriculum.
- Matching the stack to the audience is *the difference between a generic workshop and a pitched private cohort*.
- If a learner names three tools they live in, *that's their specialty stack* — teach Claude with those on top of the Core 4.

Say these enough and the catalog stops feeling like noise and starts feeling like a product map.
