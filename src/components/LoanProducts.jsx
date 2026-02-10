import Container from "./Container";

export default function LoanProducts() {
  return (
    <section id="services">
      <Container>
        <h2 className="section-heading">Our Loan Products</h2>
        <div className="product-grid">
          <article className="card">
            <div className="card-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48">
                <circle cx="24" cy="16" r="8" />
                <path d="M10 40c2.5-7 9-12 14-12s11.5 5 14 12" />
              </svg>
            </div>
            <h3 className="card-title">Personal Loan</h3>
            <p className="card-body">
              Salary credited to bank account, monthly salary ₹15,000+, and CIBIL score 700+.
            </p>
            <a
              href="https://wa.me/919025113903"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Apply Now
            </a>
          </article>

          <article className="card">
            <div className="card-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48">
                <path d="M8 20h32l-4-10H12z" />
                <path d="M12 20v18h24V20" />
                <path d="M18 38V26h12v12" />
              </svg>
            </div>
            <h3 className="card-title">Home Loan</h3>
            <p className="card-body">
              Land Purchase | Flat Purchase | Home Construction | Balance Transfer with Top-Up
            </p>
            <a
              href="https://wa.me/919025113903"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Apply Now
            </a>
          </article>

          <article className="card">
            <div className="card-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48">
                <path d="M8 22l16-12 16 12" />
                <path d="M12 22v16h24V22" />
                <circle cx="31" cy="30" r="5" />
                <path d="M31 27v6m-2-4h4" />
              </svg>
            </div>
            <h3 className="card-title">Loan Against Property</h3>
            <p className="card-body">
              Unlock the true value of your property with good attractive rates.
            </p>
            <a
              href="https://wa.me/919025113903"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Apply Now
            </a>
          </article>
        </div>
      </Container>
    </section>
  );
}
