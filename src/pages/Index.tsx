import AppDownload from "@/components/AppDownload";
import AppReviews from "@/components/AppReviews";
import Feature1 from "@/components/Feature1";
import Feature2 from "@/components/Feature2";
import Feature3 from "@/components/Feature3";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import { useCallback } from "react";

const Index = () => {
  const handleCTAClick = useCallback((buttonId: string) => {
    console.log("CTA clicked:", buttonId);
    // Scroll to app download section
    const appDownloadSection = document.getElementById("app-download");
    if (appDownloadSection) {
      appDownloadSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <div id="hero">
        <Hero onCTAClick={handleCTAClick} />
      </div>
      <WhySection />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <AppReviews />
      <div id="app-download">
        <AppDownload />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
