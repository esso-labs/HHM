'use client';

import React from 'react';

export default function AGB() {
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
            Allgemeine Gesch&auml;ftsbedingungen (AGB)
          </h1>
          <p style={{ margin: '8px 0 0 0', fontSize: '0.95rem', opacity: 0.8 }}>
            Handwerk &amp; Montage Hundsb&uuml;scher
          </p>
        </div>

        <div style={{ padding: 'clamp(20px, 4vw, 34px)', lineHeight: 1.75 }}>
          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>1. Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Gesch&auml;ftsbedingungen gelten f&uuml;r alle Leistungen von Handwerk &amp; Montage
              Hundsb&uuml;scher, Dennis Hundsb&uuml;scher, im Bereich M&ouml;bel- und K&uuml;chenmontage, Reparatur,
              Aufbereitung sowie erg&auml;nzende Dienstleistungen.
            </p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>2. Leistungen</h2>
            <p>
              Wir bieten Dienstleistungen im Bereich Montage, Anpassung, Reparatur und Aufbereitung von M&ouml;beln und
              K&uuml;chen an.
            </p>
            <p>Ein Verkauf von M&ouml;beln oder Ersatzteilen erfolgt nicht.</p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>3. Angebot &amp; Vertragsschluss</h2>
            <p>
              Angebote erfolgen unverbindlich, h&auml;ufig auf Basis von Fotos (z. B. per WhatsApp).
            </p>
            <p>Ein Vertrag kommt zustande, sobald ein Angebot vom Kunden best&auml;tigt wird.</p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>4. Preise &amp; Zahlung</h2>
            <p>Alle Preise werden individuell vereinbart.</p>
            <p>
              Die Zahlung erfolgt nach Absprache (z. B. bar oder per &Uuml;berweisung nach Leistungserbringung).
            </p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>5. Leistungsumfang</h2>
            <p>Der genaue Leistungsumfang ergibt sich aus dem vereinbarten Angebot.</p>
            <p>
              Zus&auml;tzliche Arbeiten, die nicht im Angebot enthalten sind, werden gesondert berechnet.
            </p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>6. Termine &amp; Ausf&uuml;hrung</h2>
            <p>Vereinbarte Termine werden nach M&ouml;glichkeit eingehalten.</p>
            <p>Verz&ouml;gerungen durch unvorhersehbare Umst&auml;nde behalten wir uns vor.</p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>7. Mitwirkungspflicht des Kunden</h2>
            <p>
              Der Kunde stellt sicher, dass alle notwendigen Voraussetzungen f&uuml;r die Durchf&uuml;hrung der Arbeiten
              gegeben sind (z. B. Zugang, Platz, vorhandene Materialien).
            </p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>8. Haftung</h2>
            <p>F&uuml;r Sch&auml;den haften wir nur bei Vorsatz und grober Fahrl&auml;ssigkeit.</p>
            <p>F&uuml;r bereits vorhandene Sch&auml;den oder Materialfehler wird keine Haftung &uuml;bernommen.</p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>9. Gew&auml;hrleistung</h2>
            <p>Es gelten die gesetzlichen Gew&auml;hrleistungsrechte.</p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>10. Umzugsleistungen</h2>
            <p>Kleinere Umz&uuml;ge k&ouml;nnen durch uns durchgef&uuml;hrt werden.</p>
            <p>F&uuml;r gr&ouml;&szlig;ere Umz&uuml;ge arbeiten wir mit Partnerfirmen zusammen.</p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>11. Schlussbestimmungen</h2>
            <p>Es gilt das Recht der Bundesrepublik Deutschland.</p>
            <p>
              Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der &uuml;brigen Bestimmungen
              unber&uuml;hrt.
            </p>
          </section>

          <section style={{ borderTop: '1px solid rgba(7, 101, 212, 0.12)', paddingTop: 20, marginTop: 40 }}>
            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Stand: 03.04.2026</p>
          </section>
        </div>
      </div>
    </main>
  );
}
