import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ShowcaseSection from "./components/ShowcaseSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <div className="font-sans">
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
