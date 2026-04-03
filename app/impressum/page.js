'use client';

import React from 'react';

export default function Impressum() {
  return (
    <main
      style={{
        minHeight: '100vh',
        padding: 'clamp(24px, 5vw, 56px) 16px',
        background:
          'radial-gradient(1200px 480px at 10% -10%, rgba(46, 140, 255, 0.16), transparent 60%), var(--background)',
      }}
    >
      <div
        style={{
          maxWidth: 860,
          margin: '0 auto',
          background: 'var(--surface)',
          border: '1px solid rgba(7, 101, 212, 0.12)',
          borderRadius: 18,
          boxShadow: '0 16px 40px rgba(11, 28, 61, 0.08)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            padding: 'clamp(20px, 4vw, 34px)',
            background:
              'linear-gradient(95deg, rgba(7, 101, 212, 0.08), rgba(46, 140, 255, 0.03))',
            borderBottom: '1px solid rgba(7, 101, 212, 0.14)',
          }}
        >
          <h1 style={{ margin: 0, fontSize: 'clamp(1.9rem, 4vw, 2.5rem)' }}>Impressum</h1>
        </div>

        <div style={{ padding: 'clamp(20px, 4vw, 34px)', lineHeight: 1.75 }}>
          <section style={{ marginBottom: 26 }}>
            <p>
              <strong>Angaben gemaess § 5 TMG:</strong>
            </p>
            <p>
              Dennis Hundsbüscher
              <br />
              Handwerk &amp; Montage Hundsbüscher
              <br />
              Buterlandstr 43
              <br />
              48599 Gronau
            </p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <p>
              <strong>Kontakt:</strong>
            </p>
            <p>
              Telefon: [folgt]
              <br />
              E-Mail: [folgt]
            </p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <p>
              <strong>Umsatzsteuer-ID:</strong>
            </p>
            <p>[wird nachgereicht]</p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <p>
              <strong>Verantwortlich fuer den Inhalt nach § 55 Abs. 2 RStV:</strong>
            </p>
            <p>
              Dennis Hundsbüscher
              <br />
              Buterlandstr 43
              <br />
              48599 Gronau
            </p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <p>
              <strong>EU-Streitschlichtung:</strong>
            </p>
            <p>
              Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:
              <br />
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--brand)', fontWeight: 600, wordBreak: 'break-word' }}
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          </section>

          <section>
            <p>
              <strong>Verbraucherstreitbeilegung / Universalschlichtungsstelle:</strong>
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
