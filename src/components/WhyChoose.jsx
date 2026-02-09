import Container from "./Container";

export default function WhyChoose() {
  return (
    <section id="about">
      <Container>
        <h2 className="section-heading">Why Choose Credit Nexus</h2>
        <div className="why-grid">
          <div className="why-item">
            <div className="why-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48">
                <path d="M6 20h36L24 10z" />
                <path d="M10 20v14M18 20v14M30 20v14M38 20v14" />
                <path d="M8 38h32" />
              </svg>
            </div>
            <div className="why-label">20+ Banks &amp; NBFCs</div>
            <div>More options, better approval chances.</div>
          </div>

          <div className="why-item">
            <div className="why-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="12" />
                <path d="M24 18v7l5 3" />
                <path d="M34 14l5-5" />
                <path d="M34 14h7" />
              </svg>
            </div>
            <div className="why-label">Quick Disbursal</div>
            <div>Faster processing with minimal paperwork.</div>
          </div>

          <div className="why-item">
            <div className="why-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48">
                <path d="M24 8l14 5v11c0 9-6 14-14 16-8-2-14-7-14-16V13z" />
                <path d="M18 24l5 5 8-8" />
              </svg>
            </div>
            <div className="why-label">Safe &amp; Secure</div>
            <div>Bank-grade security &amp; encryption.</div>
          </div>

          <div className="why-item">
            <div className="why-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48">
                <rect x="14" y="22" width="20" height="14" rx="3" />
                <path d="M18 22v-4a6 6 0 0 1 12 0v4" />
              </svg>
            </div>
            <div className="why-label">Trusted Network</div>
            <div>Verified lending partners you can rely on.</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
