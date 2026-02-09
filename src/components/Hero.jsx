import Container from "./Container";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <Container>
        <h1 className="hero-title">
          <span>Know Your Right Bank</span>
          <span className="hero-title-accent">Apply Smart</span>
        </h1>
        <p className="hero-subtitle">
          Lender-friendly, borrower-first platform helping you secure Personal,
          Home and Property-backed loans with ease.
        </p>
        <div className="hero-actions">
          <a
            href="https://wa.me/919025113903"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Apply for a Loan
          </a>
          <a
            href="https://wa.me/919025113903"
            className="btn btn-outline"
            target="_blank"
            rel="noreferrer"
          >
            Refer and Earn
          </a>
        </div>
      </Container>
    </section>
  );
}
