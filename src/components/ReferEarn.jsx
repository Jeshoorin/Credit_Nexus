import Container from "./Container";
import referIllustration from "../assets/refer-illustration.svg";

export default function ReferEarn() {
  return (
    <section id="refer">
      <Container>
        <div className="refer-row">
          <div className="refer-illustration">
            <img src={referIllustration} alt="Referral illustration" />
          </div>

          <div className="refer-card">
            <h2 className="refer-title">Refer &amp; Earn</h2>
            <p className="refer-step">
              <span>Refer -&gt; Approve -&gt; Get Paid</span>
            </p>
            <p className="refer-desc">
              Share Credit Nexus with your network and earn attractive rewards
              on every successful loan disbursal.
            </p>
            <div className="refer-footer">
              <a href="#contact" className="btn btn-primary">
                Join as a Partner
              </a>
              <div className="refer-links">
                <span>Join as a Partner</span>
                <span>&gt;&gt;&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
