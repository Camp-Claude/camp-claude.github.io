// Second batch of slide components: tokens, context, usage, decision rule, habits, closing.

function TokenDefinition({ page, total }) {
  return (
    <Frame>
      <SlideChrome section="Tokens" page={page} total={total} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 140, height: '100%', alignItems: 'center' }}>
        <div>
          <Eyebrow>What a token is</Eyebrow>
          <div style={{ height: 36 }} />
          <Title size={TYPE_SCALE.title}>
            A small unit of text —
            <br/>roughly <em style={{ color: COLORS.rust }}>¾ of a word</em>.
          </Title>
          <div style={{ height: 48 }} />
          <Body size={TYPE_SCALE.body} style={{ maxWidth: 640 }}>
            About four characters each. Every message you send costs tokens.
            Every message Claude sends back costs tokens. Both count toward your weekly limit.
          </Body>
        </div>
        <div>
          <div style={{
            fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
            letterSpacing: '0.2em', textTransform: 'uppercase', color: COLORS.muted,
          }}>
            A rough conversion
          </div>
          <div style={{ height: 32 }} />
          <div style={{ border: `1px solid ${COLORS.line}`, borderRadius: 4 }}>
            {[
              ['"Hello world"', '2 tokens'],
              ['One sentence', '15 – 30'],
              ['Short email', '100 – 300'],
              ['One page', '500 – 750'],
              ['Ten-page doc', '5,000 – 7,500'],
              ['Book chapter', '20,000 – 50,000'],
            ].map(([a, b], i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '1fr auto',
                padding: '26px 32px', alignItems: 'baseline',
                borderTop: i === 0 ? 'none' : `1px solid ${COLORS.lineSoft}`,
              }}>
                <div style={{ fontFamily: FONTS.sans, fontSize: TYPE_SCALE.body, color: COLORS.ink }}>{a}</div>
                <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.body, color: COLORS.rust, fontVariantNumeric: 'tabular-nums' }}>{b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

function BothSidesCount({ page, total }) {
  return (
    <Frame bg={COLORS.cream}>
      <SlideChrome section="Tokens" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
        <Eyebrow>Both sides count</Eyebrow>
        <div style={{ height: 40 }} />
        <Title size={TYPE_SCALE.title} style={{ maxWidth: 1400 }}>
          Input tokens. Output tokens.
          <br/><em style={{ color: COLORS.rust, fontStyle: 'italic' }}>Both pull from the same bucket.</em>
        </Title>
        <div style={{ height: 70 }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, maxWidth: 1500 }}>
          <div style={{ borderTop: `2px solid ${COLORS.ink}`, paddingTop: 28 }}>
            <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, letterSpacing: '0.2em', textTransform: 'uppercase', color: COLORS.muted }}>Input</div>
            <div style={{ height: 16 }} />
            <div style={{ fontFamily: FONTS.serif, fontSize: 64, lineHeight: 1.1, color: COLORS.ink }}>
              What you send
            </div>
            <div style={{ height: 20 }} />
            <Body size={TYPE_SCALE.small} style={{ color: COLORS.inkSoft }}>
              Your prompt, attachments, project instructions, every prior turn of the chat.
            </Body>
          </div>
          <div style={{ borderTop: `2px solid ${COLORS.rust}`, paddingTop: 28 }}>
            <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, letterSpacing: '0.2em', textTransform: 'uppercase', color: COLORS.rust }}>Output</div>
            <div style={{ height: 16 }} />
            <div style={{ fontFamily: FONTS.serif, fontSize: 64, lineHeight: 1.1, color: COLORS.ink }}>
              What Claude writes
            </div>
            <div style={{ height: 20 }} />
            <Body size={TYPE_SCALE.small} style={{ color: COLORS.inkSoft }}>
              Reply text, artifacts, code blocks. A five-page essay costs more than a one-line answer.
            </Body>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function ContextContents({ page, total }) {
  const items = [
    'Every message you\u2019ve sent in the current chat',
    'Every message Claude has sent back',
    'Any files you\u2019ve attached',
    'Project-level instructions and pinned files',
    'Active connectors\u2019 relevant data',
    'The current CLAUDE.md skill (if you\u2019re in Cowork)',
  ];
  return (
    <Frame>
      <SlideChrome section="Context" page={page} total={total} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 140, height: '100%', alignItems: 'center' }}>
        <div>
          <Eyebrow>What context holds</Eyebrow>
          <div style={{ height: 36 }} />
          <Title size={TYPE_SCALE.title}>
            Everything Claude can see
            <br/>at once — <em style={{ color: COLORS.rust }}>not just your prompt</em>.
          </Title>
        </div>
        <div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
            {items.map((it, i) => (
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

function BigNumber({ page, total }) {
  return (
    <Frame bg={COLORS.ink} color={COLORS.paper}>
      <div style={{
        position: 'absolute', top: 44, left: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.rustSoft,
      }}>Context · the window</div>
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
          The context window
        </div>
        <div style={{ height: 40 }} />
        <div style={{
          fontFamily: FONTS.serif, fontSize: 360, lineHeight: 0.9,
          letterSpacing: '-0.04em', color: COLORS.paper, fontVariantNumeric: 'tabular-nums',
        }}>
          200,000
        </div>
        <div style={{ height: 32 }} />
        <div style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontSize: TYPE_SCALE.lead, color: 'rgba(244,238,227,0.72)' }}>
          tokens and up — roughly 150,000 words, the length of a short novel.
        </div>
        <div style={{ height: 60 }} />
        <Body size={TYPE_SCALE.body} color="rgba(244,238,227,0.6)" style={{ maxWidth: 1100 }}>
          That sounds unlimited. <span style={{ color: COLORS.rustSoft }}>It is not.</span>
        </Body>
      </div>
    </Frame>
  );
}

function HiddenMechanic({ page, total }) {
  return (
    <Frame bg={COLORS.cream}>
      <SlideChrome section="Context · the key insight" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', maxWidth: 1600 }}>
        <Eyebrow>The hidden mechanic</Eyebrow>
        <div style={{ height: 40 }} />
        <div style={{
          fontFamily: FONTS.serif, fontSize: 104, lineHeight: 1.05,
          letterSpacing: '-0.02em', color: COLORS.ink, fontStyle: 'italic',
        }}>
          Every turn re-sends
          <br/><span style={{ fontStyle: 'normal' }}>the <em style={{ color: COLORS.rust }}>entire</em> conversation.</span>
        </div>
        <div style={{ height: 56 }} />
        <Body size={TYPE_SCALE.lead} style={{ maxWidth: 1300, fontWeight: 300, color: COLORS.inkSoft }}>
          So Claude can &ldquo;remember&rdquo; what was said, the full history travels
          back with every message. A 20-turn chat sends the whole history 20 times.
          Token cost compounds.
        </Body>
      </div>
    </Frame>
  );
}

function TurnComparison({ page, total }) {
  const turns = [
    { n: 1, tokens: 100, label: 'Fresh chat', cost: 'Tiny' },
    { n: 15, tokens: 1500, label: 'Mid-session', cost: 'Noticeable' },
    { n: 30, tokens: 3000, label: 'Long thread', cost: 'Heavy' },
  ];
  const max = 3000;
  return (
    <Frame>
      <SlideChrome section="Context · the compound cost" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Eyebrow>Turn 1 vs. turn 30</Eyebrow>
        <div style={{ height: SPACING.titleGap - 16 }} />
        <Title size={TYPE_SCALE.title}>
          The same chat gets
          <br/><em style={{ color: COLORS.rust }}>exponentially expensive</em>.
        </Title>
        <div style={{ height: 70 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 44, flex: 1, justifyContent: 'center' }}>
          {turns.map((t, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr 280px', alignItems: 'center', gap: 48 }}>
              <div>
                <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.muted }}>Turn</div>
                <div style={{ fontFamily: FONTS.serif, fontSize: 96, lineHeight: 1, color: COLORS.ink, fontVariantNumeric: 'tabular-nums' }}>
                  {String(t.n).padStart(2, '0')}
                </div>
              </div>
              <div>
                <div style={{
                  height: 28, background: COLORS.rust,
                  width: `${(t.tokens / max) * 100}%`,
                  borderRadius: 2,
                }} />
                <div style={{ height: 14 }} />
                <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, color: COLORS.inkSoft, fontVariantNumeric: 'tabular-nums' }}>
                  ~{t.tokens.toLocaleString()} tokens of history sent
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.muted }}>
                  {t.label}
                </div>
                <div style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontSize: TYPE_SCALE.lead, color: COLORS.ink }}>
                  {t.cost}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function ThirtyTurnOpus({ page, total }) {
  return (
    <Frame bg={COLORS.ink} color={COLORS.paper}>
      <div style={{
        position: 'absolute', top: 44, left: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.rustSoft,
      }}>A worked example</div>
      <div style={{
        position: 'absolute', top: 44, right: SPACING.paddingX,
        fontFamily: FONTS.mono, fontSize: TYPE_SCALE.micro,
        letterSpacing: '0.14em', color: 'rgba(244,238,227,0.5)',
      }}>{String(page).padStart(2, '0')} / {String(total).padStart(2, '0')}</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 120, height: '100%', alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.small, letterSpacing: '0.3em', textTransform: 'uppercase', color: COLORS.rustSoft }}>
            A 30-turn Opus chat
          </div>
          <div style={{ height: 40 }} />
          <div style={{
            fontFamily: FONTS.serif, fontSize: TYPE_SCALE.display, lineHeight: 1, color: COLORS.paper,
            fontStyle: 'italic',
          }}>
            can easily cost
          </div>
          <div style={{ height: 32 }} />
          <div style={{
            fontFamily: FONTS.serif, fontSize: 280, lineHeight: 0.9,
            color: COLORS.rustSoft, letterSpacing: '-0.04em',
          }}>
            50 – 100×
          </div>
          <div style={{ height: 32 }} />
          <div style={{ fontFamily: FONTS.serif, fontSize: TYPE_SCALE.lead, color: 'rgba(244,238,227,0.7)', fontStyle: 'italic' }}>
            what a new, short Opus chat costs.
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(244,238,227,0.55)' }}>
            What drives it
          </div>
          <Rule color="rgba(244,238,227,0.18)" />
          {[
            ['01', 'The history gets longer each turn.'],
            ['02', 'Opus tokens cost 10 – 20× more than Haiku.'],
            ['03', 'Output tokens grow with longer, more considered replies.'],
            ['04', 'Attached files stay in context for the life of the chat.'],
          ].map(([n, t], i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 20, alignItems: 'baseline' }}>
              <div style={{ fontFamily: FONTS.mono, fontSize: TYPE_SCALE.caption, color: COLORS.rustSoft, fontVariantNumeric: 'tabular-nums' }}>{n}</div>
              <div style={{ fontFamily: FONTS.sans, fontSize: TYPE_SCALE.body, lineHeight: 1.35, color: 'rgba(244,238,227,0.88)' }}>{t}</div>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function SlowdownSignal({ page, total }) {
  return (
    <Frame bg={COLORS.cream}>
      <SlideChrome section="Context · the signal" page={page} total={total} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', maxWidth: 1500 }}>
        <Eyebrow>If the chat feels slow —</Eyebrow>
        <div style={{ height: 40 }} />
        <div style={{
          fontFamily: FONTS.serif, fontSize: 128, lineHeight: 1,
          color: COLORS.ink, fontStyle: 'italic', letterSpacing: '-0.02em',
        }}>
          Start a <em style={{ color: COLORS.rust, fontStyle: 'italic' }}>new</em> one.
        </div>
        <div style={{ height: 60 }} />
        <Body size={TYPE_SCALE.lead} style={{ maxWidth: 1300, fontWeight: 300, color: COLORS.inkSoft }}>
          Slowness is the visible tell that context has grown heavy.
          A fresh chat costs nothing and gives Claude room to think again.
        </Body>
      </div>
    </Frame>
  );
}

Object.assign(window, {
  TokenDefinition, BothSidesCount, ContextContents, BigNumber,
  HiddenMechanic, TurnComparison, ThirtyTurnOpus, SlowdownSignal,
});
