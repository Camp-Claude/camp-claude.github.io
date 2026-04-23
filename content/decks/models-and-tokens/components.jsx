// Shared design tokens + slide components for the Claude Models & Tokens deck.
// Aesthetic: warm editorial minimal. Instrument Serif (display) + Inter Tight (body)
// + JetBrains Mono (labels, numbers). Paper/ink/rust palette.

const TYPE_SCALE = {
  display: 140,
  mega: 220,
  title: 72,
  subtitle: 48,
  lead: 40,
  body: 32,
  small: 26,
  caption: 22,
  micro: 24,
};

const SPACING = {
  paddingTop: 110,
  paddingBottom: 110,
  paddingX: 140,
  titleGap: 56,
  itemGap: 32,
  sectionGap: 80,
};

const COLORS = {
  paper: '#F4EEE3',       // warm off-white
  paperSoft: '#EBE3D3',
  ink: '#1F1C17',         // deep warm ink
  inkSoft: '#3A352D',
  muted: '#807668',
  line: 'rgba(31, 28, 23, 0.18)',
  lineSoft: 'rgba(31, 28, 23, 0.10)',
  rust: '#B5532A',        // primary accent
  rustSoft: '#D98962',
  sage: '#6B7A5A',        // secondary accent
  cream: '#FBF7EE',
};

const FONTS = {
  serif: '"Instrument Serif", "Cormorant Garamond", Georgia, serif',
  sans: '"Inter Tight", "Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, Menlo, monospace',
};

// ─────────────────────────────────────────────────────────────
// Primitives
// ─────────────────────────────────────────────────────────────

function Frame({ children, bg = COLORS.paper, color = COLORS.ink, style = {}, pad = true }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: bg, color,
      fontFamily: FONTS.sans,
      padding: pad ? `${SPACING.paddingTop}px ${SPACING.paddingX}px ${SPACING.paddingBottom}px` : 0,
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
      ...style,
    }}>
      {children}
    </div>
  );
}

function SlideChrome({ section, page, total, color = COLORS.muted }) {
  return (
    <>
      <div style={{
        position: 'absolute', top: 44, left: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color,
      }}>
        {section}
      </div>
      <div style={{
        position: 'absolute', top: 44, right: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.12em', color,
        fontVariantNumeric: 'tabular-nums',
      }}>
        {String(page).padStart(2, '0')} <span style={{opacity: 0.45}}> / {String(total).padStart(2, '0')}</span>
      </div>
      <div style={{
        position: 'absolute', bottom: 44, left: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color,
      }}>
        Claude · Models &amp; Tokens
      </div>
      <div style={{
        position: 'absolute', bottom: 44, right: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.14em', color,
      }}>
        A Cowork Workshop
      </div>
    </>
  );
}

function Eyebrow({ children, color = COLORS.rust, style = {} }) {
  return (
    <div style={{
      fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
      letterSpacing: '0.22em', textTransform: 'uppercase',
      color, ...style,
    }}>{children}</div>
  );
}

function Title({ children, color = COLORS.ink, size = TYPE_SCALE.title, style = {} }) {
  return (
    <h1 style={{
      fontFamily: FONTS.serif, fontWeight: 400,
      fontSize: size, lineHeight: 1.02, letterSpacing: '-0.015em',
      color, margin: 0, textWrap: 'balance',
      ...style,
    }}>{children}</h1>
  );
}

function Body({ children, size = TYPE_SCALE.body, color = COLORS.inkSoft, style = {} }) {
  return (
    <p style={{
      fontFamily: FONTS.sans, fontSize: size,
      lineHeight: 1.42, letterSpacing: '-0.005em',
      color, margin: 0, textWrap: 'pretty',
      ...style,
    }}>{children}</p>
  );
}

function Rule({ color = COLORS.line, style = {} }) {
  return <div style={{ height: 1, background: color, width: '100%', ...style }} />;
}

// Simple geometric vehicle icons — monochrome line, NOT illustrative.
// Bike (Haiku), Sedan (Sonnet), Moving truck (Opus).
function Vehicle({ kind, color = COLORS.ink, size = 220 }) {
  const stroke = Math.max(2, size / 110);
  const sw = { stroke: color, strokeWidth: stroke, fill: 'none',
    strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (kind === 'bike') {
    return (
      <svg viewBox="0 0 220 130" width={size} height={size * 130 / 220} aria-hidden="true">
        <circle cx="45" cy="95" r="28" {...sw} />
        <circle cx="175" cy="95" r="28" {...sw} />
        <path d="M45 95 L110 95 L80 50 L150 50 L175 95" {...sw} />
        <path d="M110 95 L135 50" {...sw} />
        <path d="M145 40 L165 40" {...sw} />
        <path d="M70 45 L95 45" {...sw} />
      </svg>
    );
  }
  if (kind === 'sedan') {
    return (
      <svg viewBox="0 0 260 130" width={size} height={size * 130 / 260} aria-hidden="true">
        <path d="M20 95 L30 70 L70 45 L175 45 L215 70 L240 75 L240 95" {...sw} />
        <path d="M70 45 L85 70 L200 70 L175 45" {...sw} />
        <path d="M130 45 L130 70" {...sw} />
        <circle cx="70" cy="95" r="18" {...sw} fill={COLORS.paper} />
        <circle cx="195" cy="95" r="18" {...sw} fill={COLORS.paper} />
        <path d="M20 95 L240 95" {...sw} />
      </svg>
    );
  }
  if (kind === 'truck') {
    return (
      <svg viewBox="0 0 320 160" width={size} height={size * 160 / 320} aria-hidden="true">
        {/* Cab */}
        <path d="M20 130 L20 85 L55 85 L75 60 L130 60 L130 130" {...sw} />
        <path d="M60 85 L75 65 L120 65 L120 85 Z" {...sw} />
        {/* Box */}
        <path d="M130 130 L130 40 L300 40 L300 130" {...sw} />
        <path d="M150 55 L280 55 M150 70 L280 70 M150 85 L280 85 M150 100 L280 100 M150 115 L280 115" {...sw} opacity="0.45" />
        {/* Ground */}
        <path d="M10 130 L310 130" {...sw} />
        {/* Wheels */}
        <circle cx="60" cy="130" r="20" {...sw} fill={COLORS.paper} />
        <circle cx="195" cy="130" r="20" {...sw} fill={COLORS.paper} />
        <circle cx="260" cy="130" r="20" {...sw} fill={COLORS.paper} />
      </svg>
    );
  }
  return null;
}

// ─────────────────────────────────────────────────────────────
// Slide layouts — all exported to window at bottom
// ─────────────────────────────────────────────────────────────

function TitleSlide() {
  return (
    <Frame bg={COLORS.ink} color={COLORS.paper}>
      <div style={{
        position: 'absolute', top: 44, left: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: COLORS.rustSoft,
      }}>
        Foundations · Session 02
      </div>
      <div style={{
        position: 'absolute', top: 44, right: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.16em', color: 'rgba(244,238,227,0.55)',
      }}>
        Draft · 2026.04.18
      </div>

      <div style={{
        position: 'absolute', left: SPACING.paddingX, right: SPACING.paddingX,
        top: '32%', transform: 'translateY(-20%)',
      }}>
        <Eyebrow color={COLORS.rustSoft}>A practical reference</Eyebrow>
        <div style={{ height: 36 }} />
        <Title size={TYPE_SCALE.display} color={COLORS.paper} style={{
          fontStyle: 'italic',
        }}>
          Models, Tokens,<br/>
          <span style={{ fontStyle: 'normal' }}>and the Weekly Limit.</span>
        </Title>
        <div style={{ height: 48 }} />
        <div style={{
          maxWidth: 1000,
          fontFamily: FONTS.sans,
          fontSize: TYPE_SCALE.lead,
          lineHeight: 1.3,
          color: 'rgba(244,238,227,0.72)',
          fontWeight: 300,
        }}>
          How to pick Haiku, Sonnet, or Opus — and why your
          usage sometimes disappears faster than expected.
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 44, left: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'rgba(244,238,227,0.55)',
      }}>
        Claude · Cowork Curriculum
      </div>
      <div style={{
        position: 'absolute', bottom: 44, right: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.14em', color: 'rgba(244,238,227,0.55)',
      }}>
        ~ 30 min + Q&amp;A
      </div>
    </Frame>
  );
}

function WhyMatters({ page, total }) {
  return (
    <Frame>
      <SlideChrome section="Opening" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', maxWidth: 1400 }}>
        <Eyebrow>Why this matters</Eyebrow>
        <div style={{ height: SPACING.titleGap }} />
        <Title size={TYPE_SCALE.title} style={{ fontStyle: 'italic' }}>
          ChatGPT migrants have never
          <br/>chosen a model in their life.
        </Title>
        <div style={{ height: SPACING.itemGap + 16 }} />
        <Body size={TYPE_SCALE.lead} style={{ maxWidth: 1200, fontWeight: 300, color: COLORS.inkSoft }}>
          Claude hands that choice back to you. Three options live
          behind every conversation. Pick the wrong one and you waste
          usage, wait too long, or hit weekly limits for no good reason.
        </Body>
      </div>
    </Frame>
  );
}

function OneSentence({ page, total }) {
  return (
    <Frame bg={COLORS.cream}>
      <SlideChrome section="The one-sentence version" page={page} total={total} />
      <div style={{
        height: '100%', display: 'flex', flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <div style={{
          fontFamily: FONTS.serif,
          fontSize: 96,
          lineHeight: 1.15,
          letterSpacing: '-0.015em',
          color: COLORS.ink,
          maxWidth: 1500,
        }}>
          Haiku is <em style={{ color: COLORS.rust }}>fast and cheap.</em>{' '}
          Sonnet is <em style={{ color: COLORS.rust }}>balanced.</em>{' '}
          Opus is <em style={{ color: COLORS.rust }}>for the hard stuff.</em>
        </div>
        <div style={{ height: 60 }} />
        <Body size={TYPE_SCALE.body} style={{ maxWidth: 1100, color: COLORS.muted }}>
          Every message costs tokens. Long conversations cost
          more every turn. The weekly limit is a real ceiling —
          match the model to the task and you&rsquo;ll rarely hit it.
        </Body>
      </div>
    </Frame>
  );
}

function SectionDivider({ number, label, title, page, total, bg = COLORS.ink, color = COLORS.paper }) {
  return (
    <Frame bg={bg} color={color} pad={true}>
      <div style={{
        position: 'absolute', top: 44, left: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: COLORS.rustSoft,
      }}>
        Part {number}
      </div>
      <div style={{
        position: 'absolute', top: 44, right: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.14em', color: 'rgba(244,238,227,0.5)',
      }}>
        {String(page).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
      <div style={{
        height: '100%', display: 'flex', flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <div style={{
          fontFamily: FONTS.mono, fontSize: TYPE_SCALE.small,
          letterSpacing: '0.3em', textTransform: 'uppercase',
          color: COLORS.rustSoft, opacity: 0.9,
        }}>
          {label}
        </div>
        <div style={{ height: 40 }} />
        <div style={{
          fontFamily: FONTS.serif, fontWeight: 400,
          fontSize: TYPE_SCALE.display, lineHeight: 1.02,
          letterSpacing: '-0.02em', color, textWrap: 'balance',
          fontStyle: 'italic',
        }}>
          {title}
        </div>
      </div>
      <div style={{
        position: 'absolute', bottom: 44, left: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'rgba(244,238,227,0.5)',
      }}>
        Claude · Models &amp; Tokens
      </div>
    </Frame>
  );
}

function ThreeEngines({ page, total }) {
  const cols = [
    { kind: 'bike', name: 'Haiku', tag: 'The bike', blurb: 'Fast in traffic, zero fuel, wrong for road trips.' },
    { kind: 'sedan', name: 'Sonnet', tag: 'The sedan', blurb: 'Reliable, comfortable, handles 90% of what life throws at you.' },
    { kind: 'truck', name: 'Opus', tag: 'The moving truck', blurb: 'Overkill for a grocery run. Indispensable when you\u2019re moving a house.' },
  ];
  return (
    <Frame>
      <SlideChrome section="Three engines, one garage" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Eyebrow>The metaphor</Eyebrow>
        <div style={{ height: SPACING.titleGap - 16 }} />
        <Title size={TYPE_SCALE.title}>Three engines, one garage.</Title>
        <div style={{ height: 80 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 80, flex: 1, alignContent: 'start' }}>
          {cols.map((c, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div style={{ height: 180, display: 'flex', alignItems: 'flex-end' }}>
                <Vehicle kind={c.kind} color={COLORS.ink} size={c.kind === 'truck' ? 280 : 240} />
              </div>
              <Rule />
              <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.rust }}>
                {c.tag}
              </div>
              <div style={{ fontFamily: FONTS.serif, fontSize: 88, lineHeight: 1, letterSpacing: '-0.02em' }}>
                {c.name}
              </div>
              <Body size={TYPE_SCALE.small} style={{ color: COLORS.inkSoft, maxWidth: 420 }}>
                {c.blurb}
              </Body>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function ModelProfile({ page, total, name, tag, vehicle, bestFor, notFor, rule }) {
  return (
    <Frame>
      <SlideChrome section={`The three models · ${name}`} page={page} total={total} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 120, height: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Eyebrow>{tag}</Eyebrow>
          <div style={{ height: 24 }} />
          <div style={{ fontFamily: FONTS.serif, fontSize: 200, lineHeight: 0.9, letterSpacing: '-0.03em' }}>
            {name}
          </div>
          <div style={{ height: 48 }} />
          <Vehicle kind={vehicle} color={COLORS.ink} size={vehicle === 'truck' ? 280 : 240} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 44 }}>
          <div>
            <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.sage }}>
              Best for
            </div>
            <div style={{ height: 18 }} />
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {bestFor.map((b, i) => (
                <li key={i} style={{ fontFamily: FONTS.sans, fontSize: TYPE_SCALE.body, lineHeight: 1.3, color: COLORS.ink, display: 'flex', gap: 20 }}>
                  <span style={{ color: COLORS.sage, fontFamily: FONTS.mono, fontSize: TYPE_SCALE.small }}>+</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.rust }}>
              Not for
            </div>
            <div style={{ height: 18 }} />
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {notFor.map((b, i) => (
                <li key={i} style={{ fontFamily: FONTS.sans, fontSize: TYPE_SCALE.body, lineHeight: 1.3, color: COLORS.inkSoft, display: 'flex', gap: 20 }}>
                  <span style={{ color: COLORS.rust, fontFamily: FONTS.mono, fontSize: TYPE_SCALE.small }}>−</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <Rule />
          <div>
            <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.muted }}>
              Rule of thumb
            </div>
            <div style={{ height: 16 }} />
            <div style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontSize: TYPE_SCALE.lead, lineHeight: 1.25, color: COLORS.ink }}>
              {rule}
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function AtAGlance({ page, total }) {
  const rows = [
    { name: 'Haiku', speed: 'Fast', cost: 'Cheap', depth: 'Light', use: 'Simple, high-volume' },
    { name: 'Sonnet', speed: 'Quick', cost: 'Moderate', depth: 'Strong', use: 'Most daily work' },
    { name: 'Opus', speed: 'Steady', cost: 'Highest', depth: 'Deepest', use: 'Hard, ambiguous' },
  ];
  return (
    <Frame bg={COLORS.cream}>
      <SlideChrome section="The three models" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Eyebrow>At a glance</Eyebrow>
        <div style={{ height: SPACING.titleGap }} />
        <Title size={TYPE_SCALE.title}>Same brand, different engines.</Title>
        <div style={{ height: 70 }} />
        <div style={{ border: `1px solid ${COLORS.line}`, borderRadius: 4, overflow: 'hidden' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr 2fr',
            padding: '28px 36px', gap: 24,
            background: COLORS.ink, color: COLORS.paper,
            fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>
            <div>Model</div><div>Speed</div><div>Cost / token</div><div>Reasoning depth</div><div>Primary use</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr 2fr',
              padding: '36px 36px', gap: 24,
              borderTop: i === 0 ? 'none' : `1px solid ${COLORS.line}`,
              alignItems: 'center',
              background: COLORS.paper,
            }}>
              <div style={{ fontFamily: FONTS.serif, fontSize: 56, lineHeight: 1 }}>{r.name}</div>
              <div style={{ fontFamily: FONTS.sans, fontSize: TYPE_SCALE.body, color: COLORS.ink }}>{r.speed}</div>
              <div style={{ fontFamily: FONTS.sans, fontSize: TYPE_SCALE.body, color: COLORS.ink }}>{r.cost}</div>
              <div style={{ fontFamily: FONTS.sans, fontSize: TYPE_SCALE.body, color: COLORS.ink }}>{r.depth}</div>
              <div style={{ fontFamily: FONTS.sans, fontSize: TYPE_SCALE.body, color: COLORS.inkSoft }}>{r.use}</div>
            </div>
          ))}
        </div>
        <div style={{ height: 40 }} />
        <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, color: COLORS.muted, letterSpacing: '0.05em' }}>
          Opus costs roughly 10–20× more per token than Haiku.
        </div>
      </div>
    </Frame>
  );
}

Object.assign(window, {
  TYPE_SCALE, SPACING, COLORS, FONTS,
  Frame, SlideChrome, Eyebrow, Title, Body, Rule, Vehicle,
  TitleSlide, WhyMatters, OneSentence, SectionDivider,
  ThreeEngines, ModelProfile, AtAGlance,
});
