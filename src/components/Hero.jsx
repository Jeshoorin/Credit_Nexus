import Container from "./Container";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <Container>
        <h1 className="hero-title">Know your right bank - Apply Smart</h1>
        <p className="hero-subtitle">
          Lender-friendly, borrower-first platform helping you secure personal,
          business and property-backed loans with ease.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Apply for a Loan
          </a>
          <a href="#refer" className="btn btn-outline">
            Refer and Earn
          </a>
        </div>
      </Container>
    </section>
  );
}
