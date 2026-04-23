// Third batch: usage, decision rule, habits, closing.

function WeeklyBudget({ page, total }) {
  return (
    <Frame>
      <SlideChrome section="Usage" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', maxWidth: 1500 }}>
        <Eyebrow>Your weekly budget</Eyebrow>
        <div style={{ height: 44 }} />
        <Title size={TYPE_SCALE.title}>
          A real ceiling — not a
          <br/>soft nudge. <em style={{ color: COLORS.rust }}>Respect it and it rarely bites.</em>
        </Title>
        <div style={{ height: 70 }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, maxWidth: 1500 }}>
          <div>
            <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, letterSpacing: '0.2em', textTransform: 'uppercase', color: COLORS.muted }}>Weekly</div>
            <div style={{ height: 16 }} />
            <div style={{ fontFamily: FONTS.serif, fontSize: 60, lineHeight: 1.1, color: COLORS.ink }}>
              Total cap for the week.
            </div>
            <div style={{ height: 20 }} />
            <Body size={TYPE_SCALE.small} style={{ color: COLORS.inkSoft, maxWidth: 520 }}>
              Often split across &ldquo;All models&rdquo; and a separate &ldquo;Sonnet only&rdquo; counter, depending on your plan.
            </Body>
          </div>
          <div>
            <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, letterSpacing: '0.2em', textTransform: 'uppercase', color: COLORS.rust }}>Session</div>
            <div style={{ height: 16 }} />
            <div style={{ fontFamily: FONTS.serif, fontSize: 60, lineHeight: 1.1, color: COLORS.ink }}>
              A rolling short-window cap.
            </div>
            <div style={{ height: 20 }} />
            <Body size={TYPE_SCALE.small} style={{ color: COLORS.inkSoft, maxWidth: 520 }}>
              Resets every few hours. Prevents you from burning the whole weekly allowance in one sitting.
            </Body>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function CostDrivers({ page, total }) {
  const drivers = [
    { n: '01', h: 'The model you picked', b: 'Opus costs roughly 10–20× more per token than Haiku.' },
    { n: '02', h: 'How much context is loaded', b: 'Long conversations, attached files, and active connectors all grow the bill.' },
    { n: '03', h: 'How long Claude\u2019s reply is', b: 'A short answer costs fewer output tokens than a five-page essay.' },
  ];
  return (
    <Frame bg={COLORS.cream}>
      <SlideChrome section="Usage · what moves the needle" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Eyebrow>Three cost drivers</Eyebrow>
        <div style={{ height: SPACING.titleGap - 16 }} />
        <Title size={TYPE_SCALE.title}>Every bill comes from the same three levers.</Title>
        <div style={{ height: 80 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 64, flex: 1, alignContent: 'start' }}>
          {drivers.map((d, i) => (
            <div key={i} style={{ borderTop: `2px solid ${COLORS.ink}`, paddingTop: 28 }}>
              <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, letterSpacing: '0.2em', color: COLORS.rust, fontVariantNumeric: 'tabular-nums' }}>
                {d.n}
              </div>
              <div style={{ height: 20 }} />
              <div style={{ fontFamily: FONTS.serif, fontSize: 56, lineHeight: 1.08, color: COLORS.ink, letterSpacing: '-0.01em' }}>
                {d.h}
              </div>
              <div style={{ height: 24 }} />
              <Body size={TYPE_SCALE.small} style={{ color: COLORS.inkSoft }}>{d.b}</Body>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function UsageTab({ page, total }) {
  return (
    <Frame>
      <SlideChrome section="Usage · reading the dashboard" page={page} total={total} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 120, height: '100%', alignItems: 'center' }}>
        <div>
          <Eyebrow>Reading the usage tab</Eyebrow>
          <div style={{ height: 36 }} />
          <Title size={TYPE_SCALE.title}>Three counters, three time horizons.</Title>
          <div style={{ height: 44 }} />
          <Body size={TYPE_SCALE.body} style={{ maxWidth: 640 }}>
            If you&rsquo;re hitting session limits often, the model is too big or the chats are too long.
            If you&rsquo;re hitting weekly limits, your overall pattern needs tuning.
          </Body>
        </div>
        <div style={{ border: `1px solid ${COLORS.line}`, borderRadius: 4, overflow: 'hidden' }}>
          {[
            { label: 'Current session', sub: 'Rolling short-window limit. Resets every few hours.', bar: 0.42, color: COLORS.rust },
            { label: 'Weekly limit', sub: 'Total cap across the week.', bar: 0.28, color: COLORS.ink },
            { label: 'Daily scheduled runs', sub: 'Routine runs used today vs. your daily allowance.', bar: 0.6, color: COLORS.sage },
          ].map((row, i) => (
            <div key={i} style={{ padding: '36px 40px', borderTop: i === 0 ? 'none' : `1px solid ${COLORS.lineSoft}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.ink }}>
                  {row.label}
                </div>
                <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, color: COLORS.muted, fontVariantNumeric: 'tabular-nums' }}>
                  {Math.round(row.bar * 100)}%
                </div>
              </div>
              <div style={{ height: 14 }} />
              <div style={{ height: 10, background: COLORS.lineSoft, borderRadius: 999 }}>
                <div style={{ height: '100%', width: `${row.bar * 100}%`, background: row.color, borderRadius: 999 }} />
              </div>
              <div style={{ height: 14 }} />
              <Body size={TYPE_SCALE.caption} style={{ color: COLORS.muted }}>{row.sub}</Body>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function TwoQuestions({ page, total }) {
  return (
    <Frame bg={COLORS.cream}>
      <SlideChrome section="The decision rule" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
        <Eyebrow>The decision rule</Eyebrow>
        <div style={{ height: 44 }} />
        <Title size={TYPE_SCALE.title}>
          Two questions. Every time.
        </Title>
        <div style={{ height: 80 }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, maxWidth: 1600 }}>
          {[
            { n: '01', q: 'How hard is this task?', a: ['Easy, one-step → Haiku', 'Moderate judgment → Sonnet', 'Ambiguous, real nuance → Opus'] },
            { n: '02', q: 'How often will I run it?', a: ['One-time or rare → pick by hardness', 'High-volume / scheduled → drop one tier', 'Sonnet → Haiku; Opus → Sonnet'] },
          ].map((b, i) => (
            <div key={i}>
              <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, letterSpacing: '0.22em', color: COLORS.rust, fontVariantNumeric: 'tabular-nums' }}>{b.n}</div>
              <div style={{ height: 16 }} />
              <div style={{ fontFamily: FONTS.serif, fontSize: 64, lineHeight: 1.1, color: COLORS.ink, letterSpacing: '-0.01em' }}>{b.q}</div>
              <div style={{ height: 28 }} />
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {b.a.map((x, j) => (
                  <li key={j} style={{ fontFamily: FONTS.sans, fontSize: TYPE_SCALE.body, lineHeight: 1.3, color: COLORS.inkSoft, display: 'flex', gap: 16 }}>
                    <span style={{ color: COLORS.muted, fontFamily: FONTS.mono, fontSize: TYPE_SCALE.small }}>—</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function WorkedExamples({ page, total }) {
  const rows = [
    {
      task: '"Summarize this email in one sentence."',
      h: 'Easy',
      v: 'One-time',
      pick: 'Haiku',
      vehicle: 'bike',
    },
    {
      task: '"Every weekday at 7am, triage my inbox and draft replies."',
      h: 'Moderate',
      v: 'Daily, automated',
      pick: 'Sonnet',
      note: 'Dropped one tier because it runs every day.',
      vehicle: 'sedan',
    },
    {
      task: '"Help me decide: rebuild our onboarding flow or patch it?"',
      h: 'Hard, ambiguous',
      v: 'One-time',
      pick: 'Opus',
      vehicle: 'truck',
    },
  ];
  return (
    <Frame>
      <SlideChrome section="The decision rule · worked examples" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Eyebrow>Worked examples</Eyebrow>
        <div style={{ height: SPACING.titleGap - 16 }} />
        <Title size={TYPE_SCALE.title}>From task to the right key on the hook.</Title>
        <div style={{ height: 56 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, flex: 1, justifyContent: 'center' }}>
          {rows.map((r, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '120px 1fr 180px 220px 220px',
              alignItems: 'center', gap: 36,
              padding: '28px 0',
              borderTop: `1px solid ${COLORS.line}`,
              borderBottom: i === rows.length - 1 ? `1px solid ${COLORS.line}` : 'none',
            }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Vehicle kind={r.vehicle} color={COLORS.ink} size={110} />
              </div>
              <div>
                <div style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontSize: 36, lineHeight: 1.2, color: COLORS.ink }}>
                  {r.task}
                </div>
                {r.note && (
                  <div style={{ height: 10 }} />
                )}
                {r.note && (
                  <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, color: COLORS.muted, letterSpacing: '0.05em' }}>
                    {r.note}
                  </div>
                )}
              </div>
              <div>
                <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro, letterSpacing: '0.2em', textTransform: 'uppercase', color: COLORS.muted }}>Hardness</div>
                <div style={{ height: 8 }} />
                <div style={{ fontFamily: FONTS.sans, fontSize: TYPE_SCALE.small, color: COLORS.ink }}>{r.h}</div>
              </div>
              <div>
                <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro, letterSpacing: '0.2em', textTransform: 'uppercase', color: COLORS.muted }}>Frequency</div>
                <div style={{ height: 8 }} />
                <div style={{ fontFamily: FONTS.sans, fontSize: TYPE_SCALE.small, color: COLORS.ink }}>{r.v}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro, letterSpacing: '0.2em', textTransform: 'uppercase', color: COLORS.rust }}>Pick</div>
                <div style={{ height: 6 }} />
                <div style={{ fontFamily: FONTS.serif, fontSize: 56, lineHeight: 1, color: COLORS.ink }}>{r.pick}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function HabitsAll({ page, total }) {
  const habits = [
    ['01', 'Match the model to the task.', 'Default to Sonnet. Drop to Haiku for obvious things. Reach for Opus only when you need it.'],
    ['02', 'Start fresh chats for new topics.', 'Don\u2019t let one thread balloon to 50 turns across three unrelated things.'],
    ['03', 'Use Projects to scope context.', 'Pinned files only load when referenced — cheaper than re-attaching.'],
    ['04', 'In Cowork, keep folders lean.', 'Every file counts toward context. Archive what a task doesn\u2019t need.'],
    ['05', 'Load tools only when needed.', 'Settings → Capabilities. The other setting pre-loads every connector into every chat.'],
    ['06', 'Right-size scheduled tasks.', 'Daily runs rarely need Opus. Haiku or Sonnet saves enormous usage over a week.'],
    ['07', 'Don\u2019t attach what you don\u2019t need.', 'Every file uploaded stays in context for the rest of the conversation.'],
  ];
  return (
    <Frame bg={COLORS.cream}>
      <SlideChrome section="Habits" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Eyebrow>Seven ways to preserve tokens</Eyebrow>
        <div style={{ height: SPACING.titleGap - 20 }} />
        <Title size={TYPE_SCALE.title}>Small habits. Much longer weekly ceiling.</Title>
        <div style={{ height: 48 }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px 80px', flex: 1, alignContent: 'start' }}>
          {habits.map(([n, h, b], i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '64px 1fr',
              padding: '20px 0', borderTop: `1px solid ${COLORS.lineSoft}`,
              alignItems: 'baseline', gap: 24,
            }}>
              <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, color: COLORS.rust, fontVariantNumeric: 'tabular-nums' }}>{n}</div>
              <div>
                <div style={{ fontFamily: FONTS.serif, fontSize: 34, lineHeight: 1.15, color: COLORS.ink, letterSpacing: '-0.005em' }}>{h}</div>
                <div style={{ height: 8 }} />
                <Body size={TYPE_SCALE.small} style={{ color: COLORS.inkSoft, lineHeight: 1.35 }}>{b}</Body>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function DecisionRecap({ page, total }) {
  return (
    <Frame bg={COLORS.ink} color={COLORS.paper}>
      <div style={{
        position: 'absolute', top: 44, left: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.rustSoft,
      }}>Closing · the decision rule</div>
      <div style={{
        position: 'absolute', top: 44, right: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.14em', color: 'rgba(244,238,227,0.5)',
      }}>{String(page).padStart(2, '0')} / {String(total).padStart(2, '0')}</div>

      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
        <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.small, letterSpacing: '0.3em', textTransform: 'uppercase', color: COLORS.rustSoft }}>
          If you remember one slide
        </div>
        <div style={{ height: 52 }} />
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 80,
        }}>
          {[
            { kind: 'bike', name: 'Haiku', line: 'fast and cheap.' },
            { kind: 'sedan', name: 'Sonnet', line: 'balanced.' },
            { kind: 'truck', name: 'Opus', line: 'for the hard stuff.' },
          ].map((c, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div style={{ height: 150, display: 'flex', alignItems: 'flex-end' }}>
                <Vehicle kind={c.kind} color={COLORS.paper} size={c.kind === 'truck' ? 240 : 200} />
              </div>
              <Rule color="rgba(244,238,227,0.2)" />
              <div style={{ fontFamily: FONTS.serif, fontSize: 96, lineHeight: 1, letterSpacing: '-0.02em' }}>{c.name}</div>
              <div style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontSize: TYPE_SCALE.lead, color: 'rgba(244,238,227,0.72)' }}>
                is <em style={{ color: COLORS.rustSoft, fontStyle: 'italic' }}>{c.line}</em>
              </div>
            </div>
          ))}
        </div>
        <div style={{ height: 80 }} />
        <Rule color="rgba(244,238,227,0.18)" />
        <div style={{ height: 32 }} />
        <div style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontSize: TYPE_SCALE.lead, color: 'rgba(244,238,227,0.78)', maxWidth: 1400 }}>
          Match the model to the task, and the weekly limit rarely bites.
        </div>
      </div>
    </Frame>
  );
}

function TryThisWeek({ page, total }) {
  const challenges = [
    { tag: 'Monday', line: 'Audit your last five chats. Which should have been on a smaller model?' },
    { tag: 'Wednesday', line: 'Start a fresh chat the moment one feels slow. Notice the difference.' },
    { tag: 'Friday', line: 'Pick one scheduled task. If it\u2019s on Opus, drop it to Sonnet.' },
  ];
  return (
    <Frame>
      <SlideChrome section="Try it this week" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
        <Eyebrow>Try it this week</Eyebrow>
        <div style={{ height: 44 }} />
        <Title size={TYPE_SCALE.title} style={{ maxWidth: 1500 }}>
          Three small moves. One full week.
        </Title>
        <div style={{ height: 70 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 80 }}>
          {challenges.map((c, i) => (
            <div key={i} style={{ borderTop: `2px solid ${COLORS.ink}`, paddingTop: 28 }}>
              <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.rust }}>
                {c.tag}
              </div>
              <div style={{ height: 28 }} />
              <div style={{ fontFamily: FONTS.serif, fontSize: 44, lineHeight: 1.15, color: COLORS.ink, fontStyle: 'italic' }}>
                {c.line}
              </div>
            </div>
          ))}
        </div>
        <div style={{ height: 80 }} />
        <Body size={TYPE_SCALE.body} style={{ color: COLORS.muted, maxWidth: 1100 }}>
          Come back next session with one number: <span style={{ color: COLORS.rust }}>how much of your weekly budget did you use?</span>
        </Body>
      </div>
    </Frame>
  );
}

function Landmark({ page, total }) {
  const lines = [
    'Haiku is fast and cheap. Sonnet is balanced. Opus is for the hard stuff.',
    'A token is roughly ¾ of a word.',
    'Context is everything Claude can see at once.',
    'Every turn re-sends the whole conversation.',
    'Long chats get exponentially expensive.',
    'If a chat feels slow, start a new one.',
    'Scheduled tasks should almost always run on Haiku or Sonnet.',
    'Tokens are finite. The weekly limit is real.',
  ];
  return (
    <Frame bg={COLORS.cream}>
      <SlideChrome section="Landmark language" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
        <Eyebrow>Landmark language</Eyebrow>
        <div style={{ height: 40 }} />
        <Title size={TYPE_SCALE.title} style={{ maxWidth: 1500 }}>
          The phrases we say — and keep saying.
        </Title>
        <div style={{ height: 54 }} />
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
          {lines.map((l, i) => (
            <li key={i} style={{
              padding: '18px 0',
              borderTop: `1px solid ${COLORS.lineSoft}`,
              fontFamily: FONTS.serif, fontSize: 34, lineHeight: 1.2, color: COLORS.ink, letterSpacing: '-0.005em',
            }}>
              {l}
            </li>
          ))}
        </ul>
      </div>
    </Frame>
  );
}

function EndSlide() {
  return (
    <Frame bg={COLORS.ink} color={COLORS.paper}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 48 }}>
        <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.small, letterSpacing: '0.35em', textTransform: 'uppercase', color: COLORS.rustSoft }}>
          End of session
        </div>
        <div style={{
          fontFamily: FONTS.serif, fontSize: 220, lineHeight: 1, color: COLORS.paper,
          fontStyle: 'italic', letterSpacing: '-0.02em',
        }}>
          Questions?
        </div>
        <div style={{ display: 'flex', gap: 60, alignItems: 'center' }}>
          <Vehicle kind="bike" color={COLORS.paper} size={90} />
          <Vehicle kind="sedan" color={COLORS.paper} size={110} />
          <Vehicle kind="truck" color={COLORS.paper} size={130} />
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 44, left: SPACING.paddingX, fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(244,238,227,0.5)' }}>
        Claude · Models &amp; Tokens · Foundations 02
      </div>
    </Frame>
  );
}

Object.assign(window, {
  WeeklyBudget, CostDrivers, UsageTab, TwoQuestions, WorkedExamples,
  HabitsAll, DecisionRecap, TryThisWeek, Landmark, EndSlide,
});
