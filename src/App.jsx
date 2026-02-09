import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoanProducts from "./components/LoanProducts";
import WhyChoose from "./components/WhyChoose";
import ReferEarn from "./components/ReferEarn";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-shell">
      <div className="header-bg">
  <Navbar />
  <Hero />
</div>
        <LoanProducts />
        <WhyChoose />
        <ReferEarn />
        <Footer />
      
    </div>
  );
}

export default App;
