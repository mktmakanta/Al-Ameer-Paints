import ContactSection from "@/components/sections/ContactSection";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <div
        className="relative w-full flex items-center justify-center"
        style={{
          height: "340px",
          backgroundImage: "url(/images/contact-page.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-bold text-5xl md:text-6xl">
            Talk to Our Team
          </h1>
          <p className="text-white/70 mt-3 text-lg">
            Our team is available to assist with product information, technical
            guidance, and order enquiries.
          </p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default ContactPage;
