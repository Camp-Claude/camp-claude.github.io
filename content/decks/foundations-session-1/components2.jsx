// Camp Claude Foundations · Session 01 · Three Doors
// Second batch of slide components — Sections II through VI.

function TheQuestion({ page, total }) {
  return (
    <Frame bg={COLORS.ink} color={COLORS.paper}>
      <div style={{
        position: 'absolute', top: 44, left: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: COLORS.rustSoft,
      }}>The decision rule</div>
      <div style={{
        position: 'absolute', top: 44, right: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.14em', color: 'rgba(244,238,227,0.5)',
      }}>{String(page).padStart(2, '0')} / {String(total).padStart(2, '0')}</div>

      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{
          fontFamily: FONTS.mono, fontSize: TYPE_SCALE.small,
          letterSpacing: '0.3em', textTransform: 'uppercase', color: COLORS.rustSoft,
        }}>
          Ask yourself
        </div>
        <div style={{ height: 48 }} />
        <div style={{
          fontFamily: FONTS.serif, fontSize: 144, lineHeight: 1.02,
          letterSpacing: '-0.02em', color: COLORS.paper, fontStyle: 'italic',
          maxWidth: 1600,
        }}>
          What do I want Claude
          <br/>to <em style={{ color: COLORS.rustSoft, fontStyle: 'italic' }}>produce?</em>
        </div>
        <div style={{ height: 56 }} />
        <Body size={TYPE_SCALE.body} color="rgba(244,238,227,0.65)" style={{ maxWidth: 1100 }}>
          Before you type. Every time. This is the whole rule.
        </Body>
      </div>
    </Frame>
  );
}

function ThreeAnswers({ page, total }) {
  const rows = [
    { want: 'Words', door: 'Chat',   desc: 'A draft. A summary. A plan. A thought partner.' },
    { want: 'Changes to files in one folder', door: 'Cowork', desc: 'A real task on real work — and you want guardrails.' },
    { want: 'Changes across your system',     door: 'Code',   desc: 'Multiple folders, a terminal, software you\u2019re building.' },
  ];
  return (
    <Frame>
      <SlideChrome section="The decision rule" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Eyebrow>Three answers, three doors</Eyebrow>
        <div style={{ height: SPACING.titleGap - 16 }} />
        <Title size={TYPE_SCALE.title}>The answer picks the door.</Title>
        <div style={{ height: 70 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, flex: 1, justifyContent: 'center' }}>
          {rows.map((r, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1.4fr 0.6fr 2fr',
              padding: '36px 44px', gap: 40, alignItems: 'center',
              background: i % 2 === 0 ? COLORS.paper : COLORS.cream,
              border: `1px solid ${COLORS.line}`, borderRadius: 4,
            }}>
              <div style={{ fontFamily: FONTS.serif, fontSize: 56, lineHeight: 1.05, letterSpacing: '-0.01em', color: COLORS.ink }}>
                {r.want}
              </div>
              <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, letterSpacing: '0.2em', textTransform: 'uppercase', color: COLORS.rust }}>
                → {r.door}
              </div>
              <Body size={TYPE_SCALE.small} style={{ color: COLORS.inkSoft }}>{r.desc}</Body>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function WorkedExamples({ page, total }) {
  const examples = [
    { task: '"Summarize this email thread and draft a reply."', answer: 'Chat', reason: 'Output is words. No files involved.' },
    { task: '"Review this proposal folder and tighten every section."', answer: 'Cowork', reason: 'Real files, bounded to one folder, real edits.' },
    { task: '"Refactor the database layer across the entire codebase."', answer: 'Code', reason: 'Multiple folders. Terminal. Developer work.' },
  ];
  return (
    <Frame bg={COLORS.cream}>
      <SlideChrome section="The decision rule" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Eyebrow>Worked examples</Eyebrow>
        <div style={{ height: SPACING.titleGap - 16 }} />
        <Title size={TYPE_SCALE.title}>The rule, applied.</Title>
        <div style={{ height: 64 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36, flex: 1, justifyContent: 'center' }}>
          {examples.map((ex, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '2.2fr 0.6fr 1.4fr', gap: 48, alignItems: 'baseline' }}>
              <div style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontSize: TYPE_SCALE.lead, lineHeight: 1.25, color: COLORS.ink }}>
                {ex.task}
              </div>
              <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.body, letterSpacing: '0.12em', textTransform: 'uppercase', color: COLORS.rust, fontWeight: 500 }}>
                {ex.answer}
              </div>
              <Body size={TYPE_SCALE.small} style={{ color: COLORS.muted }}>{ex.reason}</Body>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function NotCompetitors({ page, total }) {
  return (
    <Frame>
      <SlideChrome section="How they fit together" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', maxWidth: 1500 }}>
        <Eyebrow>Not competitors</Eyebrow>
        <div style={{ height: 40 }} />
        <Title size={TYPE_SCALE.title} style={{ fontStyle: 'italic' }}>
          The three doors aren&rsquo;t choices
          <br/>between <em style={{ color: COLORS.rust }}>one or another</em>.
        </Title>
        <div style={{ height: 48 }} />
        <Body size={TYPE_SCALE.lead} style={{ maxWidth: 1300, fontWeight: 300, color: COLORS.inkSoft }}>
          They&rsquo;re stages of a pipeline. You&rsquo;ll move between them in a single afternoon —
          thinking in Chat, acting in Cowork, and occasionally reaching into Code when the work
          calls for it. The skill is knowing which door the current moment needs.
        </Body>
      </div>
    </Frame>
  );
}

function ThinkActBuild({ page, total }) {
  const stages = [
    { door: 'Chat',   verb: 'Think', blurb: 'Draft, explore, organize. Produce words you\u2019ll act on later.' },
    { door: 'Cowork', verb: 'Act',   blurb: 'Take what you figured out and let Claude touch your real files.' },
    { door: 'Code',   verb: 'Build', blurb: 'Cross folders. Run commands. Ship software — for the few who need it.' },
  ];
  return (
    <Frame bg={COLORS.cream}>
      <SlideChrome section="The pipeline" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Eyebrow>The arc of any piece of work</Eyebrow>
        <div style={{ height: SPACING.titleGap - 16 }} />
        <Title size={TYPE_SCALE.title}>Think · Act · Build.</Title>
        <div style={{ height: 80 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, flex: 1, alignItems: 'stretch' }}>
          {stages.map((s, i) => (
            <div key={i} style={{
              display: 'flex', flexDirection: 'column', gap: 20,
              background: COLORS.paper, padding: '44px 40px',
              border: `1px solid ${COLORS.line}`, borderRadius: 4,
            }}>
              <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.rust }}>
                Stage {i + 1} · {s.door}
              </div>
              <div style={{ fontFamily: FONTS.serif, fontSize: 108, lineHeight: 1, letterSpacing: '-0.02em', color: COLORS.ink }}>
                {s.verb}.
              </div>
              <Rule />
              <Body size={TYPE_SCALE.small} style={{ color: COLORS.inkSoft }}>{s.blurb}</Body>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function CommonPath({ page, total }) {
  const steps = [
    'Think through the problem in Chat — use a Project to hold the context.',
    'Hand Claude the relevant folder in Cowork — let it edit real files.',
    'For most of you, the work ends there. That\u2019s the whole point.',
    'If the work ever crosses folders or needs a terminal — that\u2019s Code.',
  ];
  return (
    <Frame>
      <SlideChrome section="The pipeline" page={page} total={total} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 140, height: '100%', alignItems: 'center' }}>
        <div>
          <Eyebrow>A common path</Eyebrow>
          <div style={{ height: 36 }} />
          <Title size={TYPE_SCALE.title}>
            How the workflow
            <br/>actually <em style={{ color: COLORS.rust }}>flows</em>.
          </Title>
        </div>
        <div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
            {steps.map((it, i) => (
              <li key={i} style={{
                display: 'grid', gridTemplateColumns: '64px 1fr', alignItems: 'baseline',
                padding: '22px 0', borderTop: `1px solid ${COLORS.lineSoft}`,
                fontFamily: FONTS.sans, fontSize: TYPE_SCALE.body, lineHeight: 1.3, color: COLORS.ink,
              }}>
                <span style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, color: COLORS.rust, fontVariantNumeric: 'tabular-nums' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Frame>
  );
}

function WhyCowork({ page, total }) {
  return (
    <Frame bg={COLORS.cream}>
      <SlideChrome section="Why Cowork matters" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', maxWidth: 1600 }}>
        <Eyebrow>The upgrade</Eyebrow>
        <div style={{ height: 40 }} />
        <div style={{
          fontFamily: FONTS.serif, fontSize: 104, lineHeight: 1.05,
          letterSpacing: '-0.02em', color: COLORS.ink, fontStyle: 'italic',
        }}>
          ChatGPT ends
          <br/><span style={{ fontStyle: 'normal' }}>where Cowork <em style={{ color: COLORS.rust }}>begins</em>.</span>
        </div>
        <div style={{ height: 56 }} />
        <Body size={TYPE_SCALE.lead} style={{ maxWidth: 1400, fontWeight: 300, color: COLORS.inkSoft }}>
          Chat can talk about your files. Cowork can actually touch them —
          inside a sandbox you control. That&rsquo;s the leap. That&rsquo;s why Camp Claude exists.
        </Body>
      </div>
    </Frame>
  );
}

function TheSandbox({ page, total }) {
  return (
    <Frame>
      <SlideChrome section="The sandbox" page={page} total={total} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 140, height: '100%', alignItems: 'center' }}>
        <div>
          <Eyebrow>The one-sentence rule</Eyebrow>
          <div style={{ height: 36 }} />
          <Title size={TYPE_SCALE.title}>
            Claude can see <em style={{ color: COLORS.rust }}>everything</em>
            <br/>in the folder you hand it —
            <br/>and <em style={{ color: COLORS.rust }}>nothing</em> outside.
          </Title>
          <div style={{ height: 48 }} />
          <Body size={TYPE_SCALE.body} style={{ maxWidth: 640 }}>
            That&rsquo;s the whole guardrail. You choose the scope.
            Claude stays inside it. No surprises, no wandering.
          </Body>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{
            border: `2px solid ${COLORS.ink}`, borderRadius: 6,
            padding: '40px 44px', background: COLORS.paper,
          }}>
            <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, letterSpacing: '0.2em', textTransform: 'uppercase', color: COLORS.sage }}>Inside the sandbox</div>
            <div style={{ height: 20 }} />
            <Body size={TYPE_SCALE.small} style={{ color: COLORS.ink }}>
              The folder you hand Claude + everything inside it (sub-folders, files, skills, active connectors).
            </Body>
          </div>
          <div style={{
            border: `2px dashed ${COLORS.rust}`, borderRadius: 6,
            padding: '40px 44px', background: COLORS.cream,
          }}>
            <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, letterSpacing: '0.2em', textTransform: 'uppercase', color: COLORS.rust }}>Outside the sandbox</div>
            <div style={{ height: 20 }} />
            <Body size={TYPE_SCALE.small} style={{ color: COLORS.inkSoft }}>
              Your desktop. Your downloads. Other projects. Other folders. Invisible to Claude.
            </Body>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function BeyondCanvas({ page, total }) {
  return (
    <Frame>
      <SlideChrome section="Cowork vs Canvas" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
        <Eyebrow>Why Cowork is different</Eyebrow>
        <div style={{ height: 40 }} />
        <Title size={TYPE_SCALE.title} style={{ maxWidth: 1400 }}>
          ChatGPT&rsquo;s Canvas writes <em style={{ color: COLORS.rust }}>about</em> your work.
          <br/>Cowork works <em style={{ color: COLORS.rust }}>on</em> it.
        </Title>
        <div style={{ height: 70 }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, maxWidth: 1600 }}>
          <div style={{ borderTop: `2px solid ${COLORS.muted}`, paddingTop: 28 }}>
            <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, letterSpacing: '0.2em', textTransform: 'uppercase', color: COLORS.muted }}>Canvas (ChatGPT)</div>
            <div style={{ height: 16 }} />
            <div style={{ fontFamily: FONTS.serif, fontSize: 64, lineHeight: 1.1, color: COLORS.ink }}>
              A draft in the chat
            </div>
            <div style={{ height: 20 }} />
            <Body size={TYPE_SCALE.small} style={{ color: COLORS.inkSoft }}>
              You copy it out. Paste it into Word. Edit by hand. The loop never quite closes.
            </Body>
          </div>
          <div style={{ borderTop: `2px solid ${COLORS.rust}`, paddingTop: 28 }}>
            <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, letterSpacing: '0.2em', textTransform: 'uppercase', color: COLORS.rust }}>Cowork (Claude)</div>
            <div style={{ height: 16 }} />
            <div style={{ fontFamily: FONTS.serif, fontSize: 64, lineHeight: 1.1, color: COLORS.ink }}>
              The real file, changed
            </div>
            <div style={{ height: 20 }} />
            <Body size={TYPE_SCALE.small} style={{ color: COLORS.inkSoft }}>
              Claude edits your actual file, inside the folder you pointed it at. The loop closes.
            </Body>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function WhatCodeIs({ page, total }) {
  return (
    <Frame>
      <SlideChrome section="The third door" page={page} total={total} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 120, height: '100%', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <Eyebrow>What Code is, briefly</Eyebrow>
          <Title size={TYPE_SCALE.title}>
            Code is <em style={{ color: COLORS.rust }}>Claude with the seatbelts off.</em>
          </Title>
          <Body size={TYPE_SCALE.body} style={{ color: COLORS.inkSoft, maxWidth: 640 }}>
            It runs in your terminal. No sandbox. Access to your whole system — files, processes,
            the network. It&rsquo;s the most powerful door and the one you shouldn&rsquo;t open unless
            you want the responsibility.
          </Body>
          <Rule />
          <div style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontSize: TYPE_SCALE.lead, lineHeight: 1.25, color: COLORS.ink, maxWidth: 640 }}>
            &ldquo;Claude with the keys to the whole workshop.&rdquo;
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Door kind="code" color={COLORS.ink} size={380} />
        </div>
      </div>
    </Frame>
  );
}

function Permission({ page, total }) {
  return (
    <Frame bg={COLORS.cream}>
      <SlideChrome section="The third door" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', maxWidth: 1600 }}>
        <Eyebrow>Permission to skip</Eyebrow>
        <div style={{ height: 40 }} />
        <div style={{
          fontFamily: FONTS.serif, fontSize: 104, lineHeight: 1.05,
          letterSpacing: '-0.02em', color: COLORS.ink, fontStyle: 'italic',
        }}>
          You probably won&rsquo;t open
          <br/><span style={{ fontStyle: 'normal' }}>the <em style={{ color: COLORS.rust }}>third door</em> — and that&rsquo;s fine.</span>
        </div>
        <div style={{ height: 56 }} />
        <Body size={TYPE_SCALE.lead} style={{ maxWidth: 1400, fontWeight: 300, color: COLORS.inkSoft }}>
          Code is for developers. Cowork is the right door for about 95% of the people
          in this room — including people doing real, serious work. You&rsquo;re not missing anything.
          If Code ever becomes relevant for you, Camp Claude has a separate track for that.
        </Body>
      </div>
    </Frame>
  );
}

function Landmark({ page, total }) {
  const phrases = [
    'Chat is Claude on the internet.',
    'Cowork is Claude at a desk, working on one project at a time.',
    'Code is Claude with the keys to the whole workshop.',
    'Chat is vertical. Cowork is vertical. Code is horizontal + vertical.',
    'The sandbox is the folder you hand Claude — and everything inside.',
    'Ask "what do I want to produce?" before you type. That\u2019s the whole rule.',
  ];
  return (
    <Frame>
      <SlideChrome section="Landmark language" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Eyebrow>Say these enough and they stick</Eyebrow>
        <div style={{ height: SPACING.titleGap - 16 }} />
        <Title size={TYPE_SCALE.title}>Phrases that travel.</Title>
        <div style={{ height: 56 }} />
        <div style={{ flex: 1 }}>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {phrases.map((p, i) => (
              <li key={i} style={{
                display: 'grid', gridTemplateColumns: '72px 1fr', alignItems: 'baseline',
                padding: '22px 0', borderTop: `1px solid ${COLORS.lineSoft}`,
              }}>
                <span style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, color: COLORS.rust, fontVariantNumeric: 'tabular-nums' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontSize: 44, lineHeight: 1.25, color: COLORS.ink }}>
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Frame>
  );
}

function SetupToday({ page, total }) {
  const steps = [
    'Download the Claude desktop app — claude.ai/download.',
    'Log in with the account you already use on the web.',
    'Click each of the three tabs at the top — Chat, Cowork, Code.',
    'Notice the sidebar change for each. You don\u2019t need to do anything yet — just look.',
  ];
  return (
    <Frame bg={COLORS.cream}>
      <SlideChrome section="Your setup" page={page} total={total} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 140, height: '100%', alignItems: 'center' }}>
        <div>
          <Eyebrow>Your setup today</Eyebrow>
          <div style={{ height: 36 }} />
          <Title size={TYPE_SCALE.title}>
            Four small moves
            <br/>to <em style={{ color: COLORS.rust }}>find all three doors</em>.
          </Title>
          <div style={{ height: 36 }} />
          <Body size={TYPE_SCALE.body} style={{ color: COLORS.muted, maxWidth: 560 }}>
            Takes about five minutes. Do this before Session 2.
          </Body>
        </div>
        <div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {steps.map((s, i) => (
              <li key={i} style={{
                display: 'grid', gridTemplateColumns: '64px 1fr', alignItems: 'baseline',
                padding: '20px 0', borderTop: `1px solid ${COLORS.line}`,
                fontFamily: FONTS.sans, fontSize: TYPE_SCALE.body, lineHeight: 1.3, color: COLORS.ink,
              }}>
                <span style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, color: COLORS.sage, fontVariantNumeric: 'tabular-nums' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Frame>
  );
}

function TryThisWeek({ page, total }) {
  return (
    <Frame>
      <SlideChrome section="Closing" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', maxWidth: 1500 }}>
        <Eyebrow>Try this week</Eyebrow>
        <div style={{ height: 40 }} />
        <Title size={TYPE_SCALE.title}>
          Before every Claude conversation,
          <br/>ask yourself <em style={{ color: COLORS.rust }}>which door</em>.
        </Title>
        <div style={{ height: 48 }} />
        <Body size={TYPE_SCALE.lead} style={{ maxWidth: 1400, fontWeight: 300, color: COLORS.inkSoft }}>
          Five times a day. Out loud if you can. You&rsquo;ll feel the choice become automatic
          within a week. Next session we start living inside Chat — Projects, Context, Artifacts.
        </Body>
      </div>
    </Frame>
  );
}

function Graduation({ page, total }) {
  return (
    <Frame bg={COLORS.ink} color={COLORS.paper}>
      <div style={{
        position: 'absolute', top: 44, left: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.rustSoft,
      }}>Graduation moment</div>
      <div style={{
        position: 'absolute', top: 44, right: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.14em', color: 'rgba(244,238,227,0.5)',
      }}>{String(page).padStart(2, '0')} / {String(total).padStart(2, '0')}</div>

      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{
          fontFamily: FONTS.mono, fontSize: TYPE_SCALE.small,
          letterSpacing: '0.3em', textTransform: 'uppercase', color: COLORS.rustSoft,
        }}>
          By the end of today you can
        </div>
        <div style={{ height: 40 }} />
        <div style={{
          fontFamily: FONTS.serif, fontSize: 128, lineHeight: 1.02,
          letterSpacing: '-0.02em', color: COLORS.paper, fontStyle: 'italic',
          maxWidth: 1600,
        }}>
          Name the door
          <br/>before you type.
        </div>
        <div style={{ height: 56 }} />
        <Body size={TYPE_SCALE.body} color="rgba(244,238,227,0.65)" style={{ maxWidth: 1100 }}>
          If you can answer &ldquo;which door?&rdquo; before you open your mouth,
          you&rsquo;ve already outgrown 90% of ChatGPT users.
        </Body>
      </div>
    </Frame>
  );
}

function NextSession({ page, total }) {
  const upcoming = [
    { n: '02', title: 'Chat, Projects, Context, Artifacts', blurb: 'Upgrade your chat skills. Learn what Projects actually do.' },
    { n: '03', title: 'Skills, Connectors, Plugins',        blurb: 'The three levers for shaping Claude to how you work.' },
    { n: '04', title: 'A Taste of Cowork',                  blurb: 'Open the second door. Run a real task on a real folder.' },
  ];
  return (
    <Frame>
      <SlideChrome section="What comes next" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Eyebrow>The next three sessions</Eyebrow>
        <div style={{ height: SPACING.titleGap - 16 }} />
        <Title size={TYPE_SCALE.title}>Each session stacks on the last.</Title>
        <div style={{ height: 64 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, flex: 1, justifyContent: 'center' }}>
          {upcoming.map((s, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '120px 1.4fr 2fr',
              padding: '30px 0', gap: 48, alignItems: 'baseline',
              borderTop: `1px solid ${COLORS.line}`,
            }}>
              <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.small, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.rust, fontVariantNumeric: 'tabular-nums' }}>
                Session {s.n}
              </div>
              <div style={{ fontFamily: FONTS.serif, fontSize: 48, lineHeight: 1.1, letterSpacing: '-0.015em', color: COLORS.ink }}>
                {s.title}
              </div>
              <Body size={TYPE_SCALE.small} style={{ color: COLORS.inkSoft }}>{s.blurb}</Body>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function EndSlide() {
  return (
    <Frame bg={COLORS.ink} color={COLORS.paper}>
      <div style={{
        position: 'absolute', top: 44, left: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.rustSoft,
      }}>End of session 01</div>

      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{
          fontFamily: FONTS.serif, fontSize: TYPE_SCALE.mega, lineHeight: 0.95,
          letterSpacing: '-0.03em', color: COLORS.paper, fontStyle: 'italic',
        }}>
          Questions?
        </div>
        <div style={{ height: 48 }} />
        <Body size={TYPE_SCALE.lead} color="rgba(244,238,227,0.6)" style={{ maxWidth: 900, fontWeight: 300 }}>
          What&rsquo;s one task you&rsquo;re planning to use Claude for this week —
          and which door would you pick?
        </Body>
      </div>

      <div style={{
        position: 'absolute', bottom: 44, left: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'rgba(244,238,227,0.55)',
      }}>
        Camp Claude · Foundations · Session 01
      </div>
      <div style={{
        position: 'absolute', bottom: 44, right: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.14em', color: 'rgba(244,238,227,0.5)',
      }}>
        See you in Session 02
      </div>
    </Frame>
  );
}
