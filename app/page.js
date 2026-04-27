"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Clients from "./components/Clients";
import WhyAccredian from "./components/WhyAccredian";
import DomainExpertise from "./components/DomainExpertise";
import CourseSegmentation from "./components/CourseSegmentation";
import WhoShouldJoin from "./components/WhoShouldJoin";
import CAT from "./components/CAT";
import HowItWorks from "./components/HowItWorks";
import FAQs from "./components/FAQs";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import EnquireModal from "./components/EnquireModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full overflow-hidden">
      <Navbar onEnquire={openModal} />
      
      <div id="home" className="flex justify-center items-start">
        <div className="max-w-[85rem] w-full">
          <Hero onEnquire={openModal} />
        </div>
      </div>

      <div className="sm:px-16 px-0 flex justify-center items-start">
        <div className="max-w-[85rem] w-full">
          <Stats />
          <Clients />
          <WhyAccredian />
          <DomainExpertise />
          <CourseSegmentation />
          <WhoShouldJoin />
          <CAT />
          <HowItWorks />
          <FAQs onEnquire={openModal} />
          <Testimonials />
          <CTASection onEnquire={openModal} />
        </div>
      </div>

      <Footer onEnquire={openModal} />

      {/* Global Enquire Modal */}
      <EnquireModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
