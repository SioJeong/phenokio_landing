import { useState } from "react";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import Feature1 from "@/components/Feature1";
import Feature2 from "@/components/Feature2";
import Feature3 from "@/components/Feature3";
import PreRegistration from "@/components/PreRegistration";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";

const Index = () => {
  const handleCTAClick = (buttonId: string) => {
    console.log("CTA clicked:", buttonId);
    // Scroll to registration section
    const registrationSection = document.getElementById("registration");
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen font-sans pb-20">
      <div id="hero">
        <Hero onCTAClick={handleCTAClick} />
      </div>
      <WhySection />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <div id="registration">
        <PreRegistration />
      </div>
      <Footer />
      <StickyBottomBar onCTAClick={handleCTAClick} />
    </div>
  );
};

export default Index;
