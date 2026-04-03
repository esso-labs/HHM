'use client';

import React from 'react';

export default function Datenschutz() {
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
          <h1 style={{ margin: 0, fontSize: 'clamp(1.9rem, 4vw, 2.5rem)' }}>
            Datenschutzerklärung
          </h1>
          <p style={{ margin: '8px 0 0 0', fontSize: '0.95rem', opacity: 0.8 }}>
            Handwerk &amp; Montage Hundsbüscher
          </p>
        </div>

        <div style={{ padding: 'clamp(20px, 4vw, 34px)', lineHeight: 1.75 }}>
          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>1. Datenschutz auf einen Blick</h2>
            <p>
              Der Schutz Ihrer persoenlichen Daten ist uns wichtig. Wir behandeln Ihre personenbezogenen Daten vertraulich
              und entsprechend der gesetzlichen Datenschutzvorschriften.
            </p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>2. Verantwortliche Stelle</h2>
            <p>
              Dennis Hundsbüscher
              <br />
              Handwerk &amp; Montage Hundsbüscher
              <br />
              Buterlandstr 43
              <br />
              48599 Gronau
              <br />
              E-Mail: [folgt]
            </p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>3. Datenerfassung auf dieser Website</h2>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. per WhatsApp oder E-Mail).
            </p>
            <p>
              Andere Daten werden automatisch beim Besuch der Website durch IT-Systeme erfasst (z. B. Browser, Uhrzeit,
              IP-Adresse).
            </p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>4. Nutzung Ihrer Daten</h2>
            <p>
              Die Verarbeitung Ihrer Daten erfolgt zur Bearbeitung Ihrer Anfrage sowie zur Durchfuehrung unserer
              Dienstleistungen.
            </p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>5. WhatsApp-Kommunikation</h2>
            <p>
              Wenn Sie uns per WhatsApp kontaktieren, werden Ihre Daten zur Bearbeitung Ihrer Anfrage verwendet.
            </p>
            <p>
              Bitte beachten Sie, dass WhatsApp personenbezogene Daten verarbeitet.
            </p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>6. Hosting</h2>
            <p>
              Diese Website wird bei Vercel gehostet.
              <br />
              Anbieter ist die Vercel Inc.
            </p>
            <p>
              Beim Besuch der Website werden automatisch Daten erfasst (z. B. IP-Adresse), die zur Bereitstellung der
              Website erforderlich sind.
            </p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>7. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul>
              <li>Auskunft ueber Ihre gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Loeschung Ihrer Daten, sofern keine gesetzliche Aufbewahrungspflicht besteht</li>
              <li>Einschraenkung der Verarbeitung</li>
            </ul>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>8. Kontakt</h2>
            <p>Bei Fragen zum Datenschutz wenden Sie sich an:</p>
            <p>E-Mail: [folgt]</p>
          </section>

          <section style={{ borderTop: '1px solid rgba(7, 101, 212, 0.12)', paddingTop: 20, marginTop: 40 }}>
            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
              Stand: 03.04.2026
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
