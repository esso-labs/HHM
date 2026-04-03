'use client';

import React from 'react';

export default function Privacy() {
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
            Privacy Policy
          </h1>
          <p style={{ margin: '8px 0 0 0', fontSize: '0.95rem', opacity: 0.8 }}>
            Handwerk &amp; Montage Hundsb&uuml;scher
          </p>
        </div>

        <div style={{ padding: 'clamp(20px, 4vw, 34px)', lineHeight: 1.75 }}>
          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>1. Data Protection at a Glance</h2>
            <p>
              The protection of your personal data is important to us. We treat your personal data confidentially and in
              accordance with the applicable data protection regulations.
            </p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>2. Responsible Party</h2>
            <p>
              Dennis Hundsb&uuml;scher
              <br />
              Handwerk &amp; Montage Hundsb&uuml;scher
              <br />
              Buterlandstr 43
              <br />
              48599 Gronau
              <br />
              Email: [to be added]
            </p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>3. Data Collection on This Website</h2>
            <p>Your data is collected in part when you provide it to us (e.g., via WhatsApp or email).</p>
            <p>
              Other data is collected automatically by IT systems when you visit the website (e.g., browser type, time of
              access, IP address).
            </p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>4. Use of Your Data</h2>
            <p>Your data is processed to handle your inquiry and to provide our services.</p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>5. WhatsApp Communication</h2>
            <p>If you contact us via WhatsApp, your data will be used to process your request.</p>
            <p>Please note that WhatsApp processes personal data.</p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>6. Hosting</h2>
            <p>
              This website is hosted by Vercel.
              <br />
              The provider is Vercel Inc.
            </p>
            <p>
              When visiting the website, data is automatically collected (e.g., IP address) that is necessary to provide
              the website.
            </p>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>7. Your Rights</h2>
            <p>You have the right at any time to:</p>
            <ul>
              <li>Obtain information about your stored data</li>
              <li>Request correction of incorrect data</li>
              <li>Request deletion of your data, provided there are no legal retention obligations</li>
              <li>Request restriction of processing</li>
            </ul>
          </section>

          <section style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>8. Contact</h2>
            <p>If you have any questions about data protection, please contact:</p>
            <p>Email: [to be added]</p>
          </section>

          <section style={{ borderTop: '1px solid rgba(7, 101, 212, 0.12)', paddingTop: 20, marginTop: 40 }}>
            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Status: April 3, 2026</p>
          </section>
        </div>
      </div>
    </main>
  );
}
