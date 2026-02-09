import Container from "./Container";

export default function Footer() {
  return (
    <footer id="contact">
      <Container className="footer-grid">
        <div className="footer-contact">
          <div className="footer-line">
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 3a7 7 0 0 0-7 7c0 5.2 7 11 7 11s7-5.8 7-11a7 7 0 0 0-7-7z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            <span>129 Main St, Anytown, USA</span>
          </div>
          <div className="footer-line">
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="6" width="18" height="12" rx="2" />
                <path d="M3 8l9 6 9-6" />
              </svg>
            </span>
            <span>info@creditnexus.com</span>
          </div>
        </div>

        <div className="footer-contact">
          <div className="footer-line">
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M7 4h4l2 5-3 2c2 4 5 7 9 9l2-3 5 2v4c0 1-1 2-2 2-10 0-18-8-18-18 0-1 1-2 2-2z" />
              </svg>
            </span>
            <span>+1 (409) 358 3380</span>
          </div>
          <div className="footer-line">
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="6" width="18" height="12" rx="2" />
                <path d="M3 8l9 6 9-6" />
              </svg>
            </span>
            <span>hq@creditnexus.com</span>
          </div>
        </div>

        <div className="footer-social">
          <div className="social-circle">f</div>
          <div className="social-circle">t</div>
          <div className="social-circle">in</div>
        </div>

        <div className="footer-copy">&copy; Credit Nexus Financial Services</div>
      </Container>
    </footer>
  );
}
