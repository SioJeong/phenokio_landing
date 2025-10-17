import AppDownload from "@/components/AppDownload";
import Feature1 from "@/components/Feature1";
import Feature2 from "@/components/Feature2";
import Feature3 from "@/components/Feature3";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import StickyBottomBar from "@/components/StickyBottomBar";
import WhySection from "@/components/WhySection";

const Index = () => {
  const handleCTAClick = (buttonId: string) => {
    console.log("CTA clicked:", buttonId);
    // Scroll to app download section
    const appDownloadSection = document.getElementById("app-download");
    if (appDownloadSection) {
      appDownloadSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen font-sans">
      <div id="hero">
        <Hero onCTAClick={handleCTAClick} />
      </div>
      <WhySection />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <div id="app-download">
        <AppDownload />
      </div>
      <Footer />
      <StickyBottomBar onCTAClick={handleCTAClick} />
    </div>
  );
};

export default Index;
