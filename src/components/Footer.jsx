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
            <span>Arumbakkam, Chennai - 600106</span>
          </div>
          <div className="footer-line">
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="6" width="18" height="12" rx="2" />
                <path d="M3 8l9 6 9-6" />
              </svg>
            </span>
            <span>creditnexusfinancialservice@gmail.com</span>
          </div>
        </div>

        <div className="footer-contact">
          <div className="footer-line">
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M7 4h4l2 5-3 2c2 4 5 7 9 9l2-3 5 2v4c0 1-1 2-2 2-10 0-18-8-18-18 0-1 1-2 2-2z" />
              </svg>
            </span>
            <span>9025113903</span>
          </div>
          
        </div>

        <div className="footer-social">
          <a
  href="https://www.facebook.com/people/Credit-Nexus-Financial-Service/61577637682850/"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="social-circle">f</div>
</a>
         <a
  href="https://www.linkedin.com/company/credit-nexus-financial-service/"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="social-circle">in</div>
</a>
          <a
  href="https://www.instagram.com/creditnexusfinancialservice/"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="social-circle">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25-.88a1.13 1.13 0 1 1-2.26 0 1.13 1.13 0 0 1 2.26 0z"/>
    </svg>
  </div>
</a>
        </div>

        <div className="footer-copy">&copy; Credit Nexus Financial Services</div>
      </Container>
    </footer>
  );
}
