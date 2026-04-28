---
title: "Structured Prompting — The Ten-Layer Brief"
description: "A practical guide to Anthropic's ten-element prompt structure: when each layer matters, why most people only use one or two, and how to build a prompt that actually ships."
module: 8
section: "teach"
tier: "free"
readTime: "12 min read"
updated: "2026-04-28"
---

# Structured Prompting — The Ten-Layer Brief

*A practical guide to building a real prompt — the one you'd hand a coworker on day one, not the one-line ask you'd type into search. Synthesized from Anthropic's "Prompting 101" workshop with the Applied AI team.*

**Working draft — April 28, 2026**

---

## Why This Asset Exists

Most people prompt Claude the way they search Google — type a sentence, press enter, hope. That works for trivia. It does not work when you want Claude to act as a real coworker handling a real task with real stakes.

Anthropic's Applied AI team has a name for this gap. In their words: *"there are six elements to a properly structured prompt. Most people are using one. Maybe two. That is not a skill issue."* Translation: the difference between a prompt that mostly works and a prompt that ships isn't talent or cleverness — it's structure.

This asset names the ten layers of a real prompt, shows you when each one matters, and walks through the progression Anthropic uses internally to take a one-line ask and turn it into a coworker-grade brief.

---

## The One-Sentence Version

**A real prompt is less like a question and more like a one-page brief — task, tone, background data, instructions, examples, and a reminder of what you actually want — and the more of those layers you write down, the more the model can do without guessing.**

---

## The Mental Model: A Brief, Not a Sentence

Imagine you're handing a task to a contractor on their first day. You wouldn't say *"figure out the insurance claim."* You'd hand them:

- A **role description** — "you're a claims adjuster"
- A **tone** — "stay confident, don't guess"
- The **forms and reference material** they'll always need
- **Step-by-step instructions** for how to work through a case
- A few **example cases** with how you'd handle them
- A **reminder** at the end — "and don't forget to wrap your final verdict in the standard format"

A good Claude prompt is the same shape. It's a brief, not a sentence.

---

## The Ten Layers

Here are the ten layers Anthropic walks through. Not every prompt needs every layer — but knowing which ones exist is what lets you reach for the right one when a prompt is underperforming.

### 1. Task description and role

**What it does.** Tells Claude who it is and what job it's doing.

**Why it matters.** Without this, Claude has to *infer* the task from the data, which is where most "weird" outputs come from. In the workshop's demo, an unspecified task led Claude to confidently call a Swedish car-accident form a *skiing accident*.

**What it looks like.** *"You are an AI assistant helping a human claims adjuster review car accident report forms in Swedish."*

**Rule of thumb.** Always set the role. It's the single highest-leverage layer.

---

### 2. Tone context

**What it does.** Tells Claude how to behave when it's uncertain — confident vs. hedging, factual vs. creative, terse vs. expansive.

**Why it matters.** A claims adjuster cannot afford a creative answer. A brainstorming partner cannot afford a hedging one. The same model produces both — but only if you tell it which mode you're in.

**What it looks like.** *"Stay factual and confident. If you cannot determine fault from the evidence, say so explicitly — do not guess."*

**Rule of thumb.** If you've ever been frustrated by Claude over-hedging or over-claiming, the fix is here.

---

### 3. Background data, documents, and images

**What it does.** Provides the static reference material Claude will need every time. Form schemas, glossaries, persona docs, brand guidelines.

**Why it matters.** This is the layer that turns a generic model into a specialized one. Anything that doesn't change between calls belongs here, in the system prompt.

**What it looks like.** *"The form has 17 numbered rows. Row 1 is 'leaving a parking spot,' Row 12 is 'changing lanes,' …"*

**Pro tip.** This layer is also a perfect candidate for **prompt caching** — Claude charges less for tokens it has already seen on a previous request. Static reference material → cached → cheaper and faster every time.

---

### 4. Detailed instructions

**What it does.** Breaks the task into a step-by-step list.

**Why it matters.** This is where you encode *the order of analysis*. The Anthropic workshop's biggest insight: *"the order in which Claude analyzes information matters."*

In their demo, Claude only became reliable when the prompt instructed it to **read the form first**, list every checked box, **then** look at the sketch and reconcile. Reverse the order and Claude tries to interpret an ambiguous drawing without the form's grounding context.

**What it looks like.**
1. *"Read the form carefully. List every checked box."*
2. *"Now examine the sketch. Match what you see to the form."*
3. *"Make your assessment. If anything is ambiguous, say so."*

**Rule of thumb.** When Claude's reasoning is going off the rails, the fix is usually to be explicit about the *order* of steps, not just the steps themselves.

---

### 5. Examples (few-shot)

**What it does.** Shows Claude how to handle specific tricky cases, by example.

**Why it matters.** This is where your accumulated human judgment goes. Every failure case becomes an example. Every edge case becomes an example. Examples teach Claude things that are nearly impossible to articulate in instructions alone.

**What it looks like.**
```
<example>
<input>[image: form with rows 4 and 9 both checked]</input>
<reasoning>This is the contested-fault edge case. When both vehicles
mark contributory boxes, the verdict is "shared fault" not "unable
to determine."</reasoness>
<output>Shared fault — both vehicles took contributory action.</output>
</example>
```

**Rule of thumb.** Don't try to write a perfect prompt up front. Write a basic one, find where it fails, add the failure as an example. Repeat. Anthropic calls this *"the iterative empirical science of prompt engineering."*

---

### 6. Conversation history

**What it does.** Includes prior turns in a multi-step interaction.

**Why it matters.** For a one-shot task (like analyzing a single form), this layer is empty. For a chat-style application (a customer-support agent, a writing partner), the conversation history *is* the context — without it the model has amnesia between turns.

**Rule of thumb.** Skip this for batch tasks. Include it for anything user-facing.

---

### 7. Immediate task reminder

**What it does.** Repeats the task right before you ask Claude to start.

**Why it matters.** When the system prompt is long, the original task can drift to the back of Claude's "attention." A short reminder at the end pulls it forward. Belt and suspenders.

**What it looks like.** *"Now analyze this specific accident report and determine fault."*

**Rule of thumb.** If your prompt is over a page, you need this.

---

### 8. Important guidelines

**What it does.** Calls out the rules that matter most — the ones you'd be upset about if Claude broke.

**Why it matters.** This is where you explicitly fence off failure modes. *"Do not invent boxes that aren't checked. If the sketch is unintelligible, say so."* Generic instructions in section 4 set the path. Guidelines here name the cliff edges.

**Rule of thumb.** Anything that would make you say *"I can't believe Claude did that"* belongs as a guideline.

---

### 9. Output formatting

**What it does.** Specifies the exact shape of the response — XML tags, JSON, markdown, plain text.

**Why it matters.** If Claude's output feeds another system, the format isn't optional. *"Wrap your final verdict in `<final_verdict>` tags. Everything else is reasoning and can be discarded."*

**Pro tip.** Claude was fine-tuned heavily on **XML tags**, so they're the most reliable structuring tool. Markdown also works. Use named tags (`<final_verdict>`, `<reasoning>`) so downstream code can parse without ambiguity.

---

### 10. Prefilled response

**What it does.** Starts Claude's reply for it. You write the first character or two, and Claude continues from there.

**Why it matters.** This is the cleanest way to force structured output. If you prefill `[`, Claude almost certainly continues with valid JSON. If you prefill `<final_verdict>`, Claude jumps straight to the verdict and skips the preamble.

**Rule of thumb.** Use prefill when you need Claude's output to drop directly into another tool — a database, an API, a downstream LLM call.

---

## The Progression: From One Line to Shipped

The workshop walks through four versions of the same prompt to show what each layer adds. Here's the progression:

### Version 1 — The one-liner

> *"Review this accident report and tell me what happened."*

**What Claude does.** Confidently calls it a *skiing accident on a Swedish street*. The data was a car-insurance form; nothing in the prompt told Claude that.

**Lesson.** Without a role, Claude infers — and inference is where weird outputs come from.

---

### Version 2 — Add task and tone

> *"You are an AI assistant helping a human claims adjuster review car accident report forms in Swedish. Stay factual and confident. If you cannot determine fault, say so."*

**What Claude does.** Correctly identifies it as a car accident. Reads some boxes. Says "I cannot determine fault from the evidence available."

**Lesson.** Role + tone fixes the obvious failure mode (the skiing hallucination) but Claude still doesn't have enough to make a verdict.

---

### Version 3 — Add background data

> *Plus: full schema of the 17-row form, what each row means, how humans fill it out (circles, X's, scribbles), what to expect from the sketch.*

**What Claude does.** Stops narrating "what is this form?" and gets to work. Confidently identifies Vehicle B as at fault.

**Lesson.** Static reference material is the difference between Claude *exploring* the data every time and Claude *applying* known structure.

---

### Version 4 — Add detailed instructions and guidelines

> *Plus: read the form first, list every checked box, then look at the sketch, then reconcile. Don't invent boxes. Wrap the final verdict in `<final_verdict>` tags.*

**What Claude does.** Walks through the form box-by-box, then the sketch, then writes a clean structured verdict that downstream code can parse.

**Lesson.** This is the version you ship. It's not magic — it's six explicit layers instead of one.

---

## The Iterative Loop

The workshop's most important meta-lesson: **don't try to write a perfect prompt up front.** That's not how production prompts get built. The real loop:

1. **Write the simplest prompt that names the task.** One or two layers.
2. **Run it on real cases.** Watch where it fails.
3. **Diagnose the failure.** Did Claude hallucinate? → guidelines. Did Claude analyze in the wrong order? → instructions. Did Claude misread the form? → background data.
4. **Add the right layer.** Each layer fixes a specific kind of failure.
5. **Repeat.** Every failure case is a new example, a new guideline, or a tightened instruction.

This is why Anthropic calls prompting an *"iterative empirical science."* The structure isn't decoration. Each layer fixes a specific class of bug.

---

## Two Production Tools You Should Know About

### Prompt caching

Claude charges less for tokens it has already seen on a recent request. Your background data (Layer 3) is identical every call — cache it. The savings on a high-volume application can be 10x or more.

### Extended thinking

Claude 4 (and 3.7) support extended thinking — a hidden scratchpad where the model reasons before answering. Two reasons to enable it:

1. **Quality.** Hard tasks get better answers when the model thinks first.
2. **Debugging.** Read the scratchpad. See exactly where Claude's reasoning went off-track. *Then bake the fix into your system prompt.* The Applied AI team specifically calls extended thinking *"a crutch for prompt engineering"* — use it to discover what your prompt is missing.

---

## The Decision Rule

**For chat — start with Layer 1 (role) and Layer 2 (tone). Iterate from there.**

**For Cowork tasks — add Layer 3 (background data) and Layer 4 (instructions). This is where the real work happens.**

**For automation / API — add Layers 5 (examples), 8 (guidelines), and 9 (formatting). These are what make a prompt reliable enough to run unattended.**

**Use prefill (Layer 10) any time the output needs to slot into another system.**

---

## Common Mistakes

**One-liner promptitis.** "Summarize this." "Fix this." "Translate this." If you're frustrated by inconsistent results, the fix is almost always a role + tone + instructions, not a clever rephrasing of the one-liner.

**Burying the task in background data.** If your prompt is mostly schema and persona, with the task hidden in the middle, add Layer 7 (immediate reminder) at the end.

**No examples for the tricky cases.** If you have a recurring failure, examples solve it faster than rewording instructions.

**Hand-rolled JSON parsing.** If you're using regex to extract Claude's output, you're missing Layer 9 (XML tags) and Layer 10 (prefill). A `<final_verdict>` tag plus prefilled `<final_verdict>` makes downstream parsing trivial.

---

## What Graduation Looks Like

You can take a one-line task you've been frustrated with, identify which layers you're missing, and rewrite it as a five-or-six-layer brief. The first time you do this you will be surprised at how much better the output is — and that surprise is the lesson.

---

*Source: Anthropic Applied AI team's "Prompting 101" workshop, presented by Hannah and Christian. The original walks through a real Swedish car-insurance use case, using Claude 4 with temperature 0 and a wide max-token budget, in the Anthropic Console.*
