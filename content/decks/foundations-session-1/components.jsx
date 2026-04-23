// Camp Claude Foundations · Session 01 · Three Doors
// Shared design tokens + opening/Section I slide components.
// Aesthetic: warm editorial minimal. Matches the program/brand-system.md spec.

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
  paper: '#F4EEE3',
  paperSoft: '#EBE3D3',
  ink: '#1F1C17',
  inkSoft: '#3A352D',
  muted: '#807668',
  line: 'rgba(31, 28, 23, 0.18)',
  lineSoft: 'rgba(31, 28, 23, 0.10)',
  rust: '#B5532A',
  rustSoft: '#D98962',
  sage: '#6B7A5A',
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
        Camp Claude · Three Doors
      </div>
      <div style={{
        position: 'absolute', bottom: 44, right: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.14em', color,
      }}>
        Foundations · Session 01
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

// ─────────────────────────────────────────────────────────────
// Door illustrations — simple geometric, one per surface
// ─────────────────────────────────────────────────────────────

function Door({ kind, color = COLORS.ink, size = 260 }) {
  const stroke = Math.max(2, size / 120);
  const sw = { stroke: color, strokeWidth: stroke, fill: 'none',
    strokeLinecap: 'round', strokeLinejoin: 'round' };

  if (kind === 'chat') {
    // Door with a speech bubble inside
    return (
      <svg viewBox="0 0 200 280" width={size} height={size * 280 / 200} aria-hidden="true">
        {/* Door frame */}
        <path d="M30 270 L30 30 L170 30 L170 270" {...sw} />
        <path d="M20 270 L180 270" {...sw} />
        {/* Door handle */}
        <circle cx="150" cy="155" r="5" {...sw} fill={color} />
        {/* Speech bubble inside */}
        <path d="M60 95 L60 140 L90 140 L105 160 L100 140 L140 140 L140 95 Z" {...sw} />
        <circle cx="80" cy="117" r="3" fill={color} />
        <circle cx="100" cy="117" r="3" fill={color} />
        <circle cx="120" cy="117" r="3" fill={color} />
      </svg>
    );
  }

  if (kind === 'cowork') {
    // Door with a folder + files visible
    return (
      <svg viewBox="0 0 200 280" width={size} height={size * 280 / 200} aria-hidden="true">
        {/* Door frame */}
        <path d="M30 270 L30 30 L170 30 L170 270" {...sw} />
        <path d="M20 270 L180 270" {...sw} />
        {/* Door handle */}
        <circle cx="150" cy="155" r="5" {...sw} fill={color} />
        {/* Folder tab and body */}
        <path d="M60 100 L90 100 L95 110 L140 110 L140 170 L60 170 Z" {...sw} />
        {/* File lines inside folder */}
        <path d="M72 125 L128 125" {...sw} opacity="0.55" />
        <path d="M72 140 L128 140" {...sw} opacity="0.55" />
        <path d="M72 155 L110 155" {...sw} opacity="0.55" />
      </svg>
    );
  }

  if (kind === 'code') {
    // Door with a terminal prompt inside
    return (
      <svg viewBox="0 0 200 280" width={size} height={size * 280 / 200} aria-hidden="true">
        {/* Door frame */}
        <path d="M30 270 L30 30 L170 30 L170 270" {...sw} />
        <path d="M20 270 L180 270" {...sw} />
        {/* Door handle */}
        <circle cx="150" cy="155" r="5" {...sw} fill={color} />
        {/* Terminal window */}
        <path d="M55 95 L145 95 L145 170 L55 170 Z" {...sw} />
        <path d="M55 110 L145 110" {...sw} opacity="0.55" />
        {/* Prompt */}
        <path d="M68 130 L80 138 L68 146" {...sw} />
        <path d="M88 146 L120 146" {...sw} opacity="0.55" />
        <path d="M68 158 L115 158" {...sw} opacity="0.4" />
      </svg>
    );
  }

  return null;
}

// ─────────────────────────────────────────────────────────────
// Slide components — opening + Section I
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
        Foundations · Session 01
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
        <Eyebrow color={COLORS.rustSoft}>A Camp Claude workshop</Eyebrow>
        <div style={{ height: 36 }} />
        <Title size={TYPE_SCALE.display} color={COLORS.paper} style={{ fontStyle: 'italic' }}>
          Three Doors.<br/>
          <span style={{ fontStyle: 'normal' }}>One Claude.</span>
        </Title>
        <div style={{ height: 48 }} />
        <div style={{
          maxWidth: 1100,
          fontFamily: FONTS.sans,
          fontSize: TYPE_SCALE.lead,
          lineHeight: 1.3,
          color: 'rgba(244,238,227,0.72)',
          fontWeight: 300,
        }}>
          How to tell Chat, Cowork, and Code apart —
          and which one to use for what you&rsquo;re about to do.
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 44, left: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'rgba(244,238,227,0.55)',
      }}>
        Camp Claude · Foundations
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
          You&rsquo;ve met Claude.
          <br/>But only through <em style={{ color: COLORS.rust }}>one door</em>.
        </Title>
        <div style={{ height: SPACING.itemGap + 16 }} />
        <Body size={TYPE_SCALE.lead} style={{ maxWidth: 1200, fontWeight: 300, color: COLORS.inkSoft }}>
          Most people arrive from ChatGPT and assume Claude is &ldquo;another chatbot.&rdquo;
          That assumption quietly limits everything else you&rsquo;ll learn.
          Claude isn&rsquo;t one thing — it&rsquo;s three surfaces, each built for a different job.
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
          Chat is <em style={{ color: COLORS.rust }}>a chatbot.</em>{' '}
          Cowork is <em style={{ color: COLORS.rust }}>a task executor.</em>{' '}
          Code is <em style={{ color: COLORS.rust }}>an agentic workstation.</em>
        </div>
        <div style={{ height: 60 }} />
        <Body size={TYPE_SCALE.body} style={{ maxWidth: 1100, color: COLORS.muted }}>
          Same account. Same brand. Three different workspaces.
          Pick the one that matches the job — or everything else gets harder.
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
        Camp Claude · Three Doors
      </div>
    </Frame>
  );
}

function ThreeDoorsHero({ page, total }) {
  const cols = [
    { kind: 'chat', name: 'Chat', tag: 'The chatbot', blurb: 'Claude on the internet. Words in, words out.' },
    { kind: 'cowork', name: 'Cowork', tag: 'The task executor', blurb: 'Claude at a desk, working on one project at a time.' },
    { kind: 'code', name: 'Code', tag: 'The agentic workstation', blurb: 'Claude with the keys to the whole workshop.' },
  ];
  return (
    <Frame>
      <SlideChrome section="Three doors, one Claude" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Eyebrow>The metaphor</Eyebrow>
        <div style={{ height: SPACING.titleGap - 16 }} />
        <Title size={TYPE_SCALE.title}>Three doors, one Claude.</Title>
        <div style={{ height: 80 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 80, flex: 1, alignContent: 'start' }}>
          {cols.map((c, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div style={{ height: 260, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                <Door kind={c.kind} color={COLORS.ink} size={200} />
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

function DoorProfile({ page, total, name, tag, door, bestFor, notFor, rule }) {
  return (
    <Frame>
      <SlideChrome section={`The three doors · ${name}`} page={page} total={total} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 120, height: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Eyebrow>{tag}</Eyebrow>
          <div style={{ height: 24 }} />
          <div style={{ fontFamily: FONTS.serif, fontSize: 200, lineHeight: 0.9, letterSpacing: '-0.03em' }}>
            {name}
          </div>
          <div style={{ height: 48 }} />
          <Door kind={door} color={COLORS.ink} size={240} />
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
    { name: 'Chat',   output: 'Words',           access: 'No file access',        who: 'Everyone — your thinking layer' },
    { name: 'Cowork', output: 'Changes to files', access: 'Vertical — one folder', who: 'Non-technical users getting real work done' },
    { name: 'Code',   output: 'Changes anywhere', access: 'Horizontal + vertical', who: 'Developers and power users' },
  ];
  return (
    <Frame bg={COLORS.cream}>
      <SlideChrome section="The three doors" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Eyebrow>At a glance</Eyebrow>
        <div style={{ height: SPACING.titleGap }} />
        <Title size={TYPE_SCALE.title}>Same brand, different scopes.</Title>
        <div style={{ height: 70 }} />
        <div style={{ border: `1px solid ${COLORS.line}`, borderRadius: 4, overflow: 'hidden' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1.2fr 1.3fr 2fr',
            padding: '28px 36px', gap: 24,
            background: COLORS.ink, color: COLORS.paper,
            fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>
            <div>Door</div><div>Output</div><div>Access pattern</div><div>Primary user</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr 1.2fr 1.3fr 2fr',
              padding: '36px 36px', gap: 24,
              borderTop: i === 0 ? 'none' : `1px solid ${COLORS.line}`,
              alignItems: 'center',
              background: COLORS.paper,
            }}>
              <div style={{ fontFamily: FONTS.serif, fontSize: 56, lineHeight: 1 }}>{r.name}</div>
              <div style={{ fontFamily: FONTS.sans, fontSize: TYPE_SCALE.body, color: COLORS.ink }}>{r.output}</div>
              <div style={{ fontFamily: FONTS.sans, fontSize: TYPE_SCALE.body, color: COLORS.ink }}>{r.access}</div>
              <div style={{ fontFamily: FONTS.sans, fontSize: TYPE_SCALE.body, color: COLORS.inkSoft }}>{r.who}</div>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function SameAccount({ page, total }) {
  return (
    <Frame>
      <SlideChrome section="Three doors, one account" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', maxWidth: 1500 }}>
        <Eyebrow>The quiet detail</Eyebrow>
        <div style={{ height: 36 }} />
        <Title size={TYPE_SCALE.title}>
          Same subscription.<br/>
          <em style={{ color: COLORS.rust }}>Three different workspaces.</em>
        </Title>
        <div style={{ height: 50 }} />
        <Body size={TYPE_SCALE.lead} style={{ maxWidth: 1300, fontWeight: 300, color: COLORS.inkSoft }}>
          You don&rsquo;t pick a door once and live in it. You pick the one that matches
          what you&rsquo;re about to do — and switch the moment the job changes.
        </Body>
        <div style={{ height: 60 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: 80, alignItems: 'center' }}>
          <Door kind="chat"   color={COLORS.muted} size={120} />
          <Door kind="cowork" color={COLORS.muted} size={120} />
          <Door kind="code"   color={COLORS.muted} size={120} />
        </div>
      </div>
    </Frame>
  );
}
