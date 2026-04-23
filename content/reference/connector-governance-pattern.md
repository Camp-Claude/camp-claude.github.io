---
title: "The Connector Governance Pattern — How Regulated Firms Use Claude Safely"
description: "A reusable pattern for regulated firms adopting Claude connectors without exposing sensitive data."
section: "reference"
tier: "free"
readTime: "13 min read"
updated: "2026-04-18"
---

# The Connector Governance Pattern — How Regulated Firms Use Claude Safely

*A reusable pattern for any firm whose compliance team is worried about client data reaching Anthropic's servers. Abstracted from Zenith's AI Connector Governance playbook (see [zenith-connector-governance.pdf](zenith-connector-governance.pdf)) and adapted for any regulated industry — financial services, legal, healthcare, insurance, professional services.*

**Working draft — April 18, 2026**

---

## Why This Asset Exists

Every corporate conversation about Claude — especially with regulated firms — eventually arrives at the same question:

> *"Can we let Claude see our client data without exposing it to Anthropic?"*

The instinctive answer from compliance is usually *"block connectors entirely."* That answer is wrong, and it's the single most common mistake firms make. This asset explains why, and lays out the governance pattern that actually works.

It's a reference for any Camp Claude engagement with a regulated firm, and the spine of the **Corporate Security Module** that should ship with every private cohort in a regulated industry.

---

## The One-Sentence Version

**Connectors don't create data leakage — they prevent it.** Without a connector, advisors copy-paste client data directly into Claude, which is the exact scenario compliance wants to stop. With a firm-controlled connector, identifying information is stripped *before* data ever reaches the AI.

That single reframing is worth the entire asset.

---

## The Problem Compliance Keeps Getting Wrong

| What compliance *thinks* blocking connectors does | What actually happens |
|---|---|
| "If we don't build a connector, client data never reaches Anthropic." | Advisors work around the limitation by copy-pasting client statements into Claude directly. |
| "No connector = no risk." | No connector = no architectural control. The firm has only a policy and a hope that advisors follow it. |
| "Connectors expand the attack surface." | A properly built connector *narrows* the attack surface — it's the only controlled path client data can take to Claude. |

The unintuitive truth: **blocking connectors increases data leakage risk.** A firm-controlled connector is the *only* way to guarantee that identifying information is removed before anything reaches the AI.

---

## The Front Desk Metaphor

Explain this to compliance in one image. It's the clearest explanation we've found.

> Imagine Claude is a consultant sitting in the lobby of your firm. They need client data to do their work. They can't walk into the file room — they don't have a keycard. Instead, they hand a request to the front desk: *"I need the Q1 holdings for Client 007."*
>
> The front desk (the connector) goes to the file room, pulls the folder, **removes the client's name, SSN, account number, and address**, photocopies only the holdings page, and brings it back to the consultant.
>
> The consultant does their analysis on that cleaned-up copy. They never enter the file room. They never see the original. They don't even know the client's real name.

That's the pattern. The connector is the front desk. Claude is the consultant in the lobby. The file room is your CRM, your document store, your database.

---

## The Six-Step De-Identification Pipeline

Every time Claude requests client information through a connector, six things happen inside the connector — automatically, before any data reaches the AI. This pipeline is the governance contract.

| # | Step | What it does |
|---|---|---|
| 1 | **Fetch the file** | Connector retrieves the document from source (Drive, CRM, database). Verifies the requesting user has permission to access this client's records. |
| 2 | **Read the content** | PDFs are converted to text. Spreadsheets are parsed. Docs are exported. Connector now has raw content in structured form. |
| 3 | **Classify the document** | Connector determines document type, checks for PII, and applies firm policy on whether it can be processed by AI. |
| 4 | **Remove identifying information** ⚡ | Every name, account number, SSN, address, and date of birth is replaced with a code number or removed entirely. **The critical step.** |
| 5 | **Keep only what's needed** | If the user asked for "allocation," the connector returns only the holdings table — not the cover page, not the disclosures, not unrelated sections. |
| 6 | **Return cleaned data** | The de-identified, minimized data goes to Claude. Claude analyzes it and presents a draft for human review. |

Steps 4 and 5 are the critical data-protection moves. They run every time, automatically, on every request. The user can't bypass them. Claude can't bypass them. That's the architecture.

---

## The Code Number System

Users never type client names into Claude. They use internal code numbers that mean nothing outside the firm.

| Who / What | What they know |
|---|---|
| **The user** (advisor, lawyer, doctor) | Knows `CLIENT_007` is John Smith from their own knowledge |
| **Claude** | Knows `CLIENT_007` exists as a valid code — nothing else. Cannot look up the real name. |
| **The connector** | Knows `CLIENT_007` = John Smith. Knows which files belong to that client. Performs de-identification. **This mapping never leaves the firm's servers.** |

If a user asked Claude *"who is CLIENT_007?"* — Claude would not know. That information does not exist anywhere in Claude's system. The connector resolves the identity internally and returns only de-identified data.

**If Anthropic's servers were breached**, an attacker would find: *"CLIENT_007 — US Equity ETF: 41%, Tech single stock: 18%."* No way to connect it to a real person.

---

## Acceptable Use Policy (Template)

Every firm adopting Claude needs a written AUP. Here's the template, abstracted from Zenith's. Adapt by swapping *"advisor"* for your role (lawyer, doctor, consultant, etc.) and *"client"* for your subject (patient, matter, case, account).

### Permitted: Use Claude directly

| Activity | Example |
|---|---|
| General research | *"Explain the tax implications of Roth conversions."* |
| Regulatory questions | *"Summarize FINRA's 2025 guidance on AI use."* |
| Market / industry analysis | *"Compare municipal bond yields across states."* |
| Template drafting | *"Write a template for a quarterly review cover letter."* |
| Approved internal company data | *"Summarize our Q1 revenue report."* |
| Internal process work | *"Help me write an agenda for the team meeting."* |
| Learning | *"Explain how direct indexing works."* |

### Required: Use approved connectors (code numbers only)

| Activity | What the user types |
|---|---|
| Portfolio / matter / case review | *"Pull Q1 review for CLIENT_007."* |
| Risk / concentration analysis | *"Check concentration risk for CLIENT_012."* |
| Summary documents | *"Get IPS summary for CLIENT_034."* |
| Document summarization | *"Summarize CLIENT_041's planning notes."* |
| Draft memos | *"Draft a review memo for CLIENT_007 based on Q1 data."* |

### Prohibited: Never do these

| Action | Example | Why |
|---|---|---|
| **Upload client documents** | Dragging a PDF statement into Claude | The entire raw file goes to Anthropic's servers |
| **Paste client data** | Copy-pasting holdings from a spreadsheet | Identifying information enters the AI uncleaned |
| **Type client names** | *"Summarize John Smith's portfolio"* | The client's real name is now on Anthropic's servers |
| **Share account numbers** | *"Account 88923455 has too much tech"* | Account numbers are personally identifiable |
| **Upload scanned images** | Uploading a scanned tax return image | Images with PII cannot be automatically cleaned |

---

## Defining "Approved Internal Company Data"

A common grey area. Use this rule:

**Permitted:** Firm operational information that does *not* contain client PII — revenue reports, compliance checklists, internal policies, meeting agendas, marketing copy, HR drafts, team OKRs, training materials.

**Not permitted (must use connector):** Any document that names a client, references a client account, contains client contact info, or includes client financial data — *even if* it's an "internal" document (advisor's meeting notes, CRM export).

**When in doubt:** If a document mentions a client by name or contains any information that could identify them, it must go through the connector. When uncertain, do not upload — ask compliance.

---

## Controls & Audit

The architecture is only as good as the governance wrapping it. Four controls must be in place.

### Access Controls
- Users can only access their own assigned clients (connector verifies per request).
- Document access restricted by type and folder.
- Connector verifies user identity on every request.
- Users cannot install or modify connectors.

### Data Protection
- Code numbers are the only identifiers Claude sees.
- All names, SSNs, account numbers, addresses removed.
- Only the data needed for the specific task is returned.
- No raw files ever reach Claude.

### Audit Trail
- Every request logged with timestamp and user ID.
- Every file access recorded.
- Every de-identification action documented.
- Logs are immutable, stored on firm infrastructure.

### AI Limits
- Claude cannot access any system directly.
- Claude cannot look up who a code number represents.
- All output is a draft requiring human review.
- Claude does not provide advice or decisions — users do.

---

## Incident Response — When Policy Is Violated

Despite training and controls, someone will eventually type a client name, paste client data, or upload a document. The firm must have a clear process.

| # | Step | Responsible |
|---|---|---|
| 1 | **Detection** — self-reported, flagged in review, or caught in audit log | User / Compliance |
| 2 | **Immediate containment** — delete the conversation in Claude | User |
| 3 | **Notification** — notify supervisor and compliance | User |
| 4 | **Assessment** — severity evaluated (name only vs. PII; single vs. multiple clients); determines whether this is a reportable incident under applicable regulation | Compliance / Legal |
| 5 | **Vendor notification** — if warranted, contact Anthropic to request deletion of the specific conversation data; reference Teams agreement and data deletion procedures | Compliance / IT |
| 6 | **Documentation** — record in incident log: date, user, data exposed, client affected, remediation steps, regulatory notification | Compliance |
| 7 | **Remediation** — additional training; if systemic, evaluate additional technical controls (restricting file upload in admin console, etc.) | Compliance / IT |

---

## Data Retention on Anthropic's Servers

A compliance examiner will ask: *"What does Anthropic keep, and for how long?"* The firm needs documented answers. The short version for Claude Teams (as of 2026):

| Topic | What the firm should know |
|---|---|
| **Conversation data** | Anthropic stores conversation history so users can return to prior sessions. Deletable by user or Teams admin. Retention periods specified in the firm's agreement. |
| **Training data** | Anthropic's policy for Teams and Enterprise: *customer conversations are not used to train AI models*. Confirm in the firm's specific agreement. |
| **Connector data** | Data returned by a connector passes through Claude's context during conversation but follows the same retention policy as any other conversation content. The connector itself maintains its own separate audit log on firm infrastructure. |
| **Deleted conversations** | Anthropic's policy governs how long residual data may persist in backups. Confirm deletion timelines in the agreement. |
| **Trust & safety retention** | Anthropic may retain limited data for abuse prevention even after deletion. Scope and duration should be documented in the firm's agreement. |

**Action required:** Obtain and attach Anthropic's current Data Processing Agreement (DPA) for Teams customers to the firm's internal governance doc. Confirm: (1) conversation retention, (2) deletion procedures, (3) no training on customer data, (4) trust & safety retention scope, (5) incident notification procedures.

---

## How This Addresses Regulatory Requirements

For regulated firms, the governance pattern maps cleanly to the relevant frameworks.

| Regulation | Requirement | How the pattern addresses it |
|---|---|---|
| **SEC Exam Priorities 2025–2026** | Document AI oversight and supervision | All connector activity logged. AI output requires human review. Connectors enforce task-specific limits. |
| **FINRA Notice 24-09** | Supervision rules apply to AI tools | The firm — not Anthropic — controls all data access through its connectors. AI use classified by risk tier. |
| **SEC Regulation S-P (amended 2024)** | Safeguard nonpublic personal information | NPI removed by the connector before data leaves firm infrastructure. Claude never receives NPI. |
| **SEC Books & Records (17a-4 / 204-2)** | Retain AI-generated business communications | Every connector request and AI response captured in immutable audit log, retrievable on demand. |
| **NIST AI RMF** | Govern, Map, Measure, Manage | Connectors provide governance (policies), mapping (classification), measurement (logging), management (de-identification). |
| **SOC 2** | Processing Integrity, Confidentiality | Data minimization and de-identification enforce both criteria. |
| **California CPRA / ADMT** (Jan 2027) | AI decision systems require impact assessments | Connector logging supports impact assessments and opt-out enforcement. |
| **HIPAA** (healthcare) | Safeguard PHI, minimum necessary | De-identification strips PHI before it reaches the AI. Only minimum necessary data returned. |
| **Attorney-client privilege** (legal) | Preserve confidentiality | Client identifiers replaced with matter codes. Privileged content controlled by firm's connector. |

---

## How to Adapt This Pattern for Your Industry

The Zenith playbook was built for wealth management. The pattern is identical across regulated industries — only the nouns change.

| Industry | Replace "client" with | Replace "advisor" with | Key PII to strip |
|---|---|---|---|
| **Financial services** | Client | Advisor | Name, SSN, account number, address, DOB |
| **Legal** | Matter / Party | Attorney | Party name, case number, privileged details, settlement terms |
| **Healthcare** | Patient | Clinician | Name, MRN, SSN, DOB, diagnosis codes, address |
| **Insurance** | Policyholder | Agent / Adjuster | Policy number, claimant name, SSN, medical records |
| **Tax / accounting** | Taxpayer | CPA | Name, SSN, EIN, account numbers, income figures |
| **HR / people ops** | Employee | HR staff | Name, SSN, employee ID, compensation, medical |
| **Consulting** | Client engagement | Consultant | Client name, engagement ID, proprietary metrics |

The **six-step pipeline** and **code number system** work identically. Only the PII definitions and the AUP examples change.

---

## What Camp Claude Delivers in a Regulated-Industry Cohort

A regulated private cohort (financial, legal, healthcare, etc.) should include a **Corporate Security Module** on top of the standard curriculum. Three sessions added to the five-session full cohort:

| Module | What it covers |
|---|---|
| **Corp-Sec 1 — The Reframing** | Why connectors prevent leaks. The front desk metaphor. The architectural control argument. Aimed at compliance and leadership — not the users. |
| **Corp-Sec 2 — The Pattern** | Walking compliance through the six-step pipeline, code number system, AUP template, and audit requirements. |
| **Corp-Sec 3 — The Rollout** | How to build the firm's first connector, how to pilot, how to monitor, how to train the users. Hands-on, with the firm's own stack. |

Pricing for a corporate cohort with this module should reflect the value — regulated-industry cohorts start at **$75K–$150K** per engagement, because this asset *is* the value. A firm's IT/compliance team would pay that to a consultant for the same playbook.

---

## The Summary (for compliance decks)

1. **Connectors prevent data leakage — they do not create it.** Without connectors, users copy-paste client data directly. With connectors, a firm-controlled pipeline strips identifying info before the AI sees it.
2. **Client data does not reach Anthropic in identifiable form.** Names, account numbers, SSNs, addresses removed by the connector. Claude receives only code numbers and structured data.
3. **The firm controls every connector.** Built, hosted, and maintained by the firm. Users cannot install their own. Each connector enforces firm policy independently.
4. **Users use code numbers, not names.** The mapping exists only on the firm's infrastructure.
5. **Everything is logged.** Every request, every file access, every de-identification action, every AI response captured in an immutable audit trail on firm infrastructure.
6. **Human review is required.** AI output is always a draft. Nothing reaches a client without a human reviewing and approving.

---

## Landmark Language

- *Blocking connectors doesn't eliminate risk — it increases it.*
- The connector is *the front desk*. Claude is *the consultant in the lobby*.
- De-identification is *automatic, not optional*. Users cannot bypass it.
- *Code numbers, not names.* Claude never learns who `CLIENT_007` is.
- *Every request is logged. Every access recorded. Every removal documented.*
- If Anthropic's servers were breached, all an attacker would find is *"CLIENT_007 — 41% equities"* — no way to connect it to a real person.
- AI output is *always a draft*. Humans sign.

Say these enough and compliance stops treating connectors as a risk and starts treating them as the control.
