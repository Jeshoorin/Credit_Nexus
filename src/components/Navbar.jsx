import Container from "./Container";

export default function Navbar() {
  return (
    <header>
      <Container className="nav">
        <div className="logo">
          <img className="logo-image" src="/CN_logo.png" alt="Credit Nexus" />
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#refer">Refer &amp; Earn</a>
          <a href="#contact">Contact</a>
        </nav>
      </Container>
    </header>
  );
}
