import { useState } from "react";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import Feature1 from "@/components/Feature1";
import Feature2 from "@/components/Feature2";
import Feature3 from "@/components/Feature3";
import PreRegistration from "@/components/PreRegistration";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen font-sans">
      <Hero onCTAClick={handleCTAClick} />
      <WhySection />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <div id="registration">
        <PreRegistration />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
