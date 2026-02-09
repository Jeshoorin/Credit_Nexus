import Container from "./Container";

export default function Navbar() {
  return (
    <header>
      <Container className="nav">
        <div className="logo">
          <div className="logo-mark" />
          <div>
            <div className="logo-text-main">CREDIT</div>
            <div className="logo-text-sub">NEXUS</div>
          </div>
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
