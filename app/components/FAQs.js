"use client";
import { useState } from "react";

export default function FAQs({ onEnquire }) {
  const [activeTab, setActiveTab] = useState("course");
  const [openIndex, setOpenIndex] = useState(0);

  const tabs = [
    { id: "course", label: "About the Course" },
    { id: "delivery", label: "About the Delivery" },
    { id: "miscellaneous", label: "Miscellaneous" },
  ];

  const faqs = {
    course: [
      { q: "What types of corporate training programs does Accredian offer?", a: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech." },
      { q: "What domain specializations are available?", a: "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI." },
    ],
    delivery: [
      { q: "How are the training sessions delivered?", a: "Sessions can be delivered online (live instructor-led), in-person at your office, or via a hybrid model depending on your team's requirements." },
      { q: "Can the schedule be customized?", a: "Yes, we work closely with your L&D teams to create flexible schedules that minimize disruption to regular work hours." },
    ],
    miscellaneous: [
      { q: "Do participants receive certifications?", a: "Yes, all participants receive industry-recognized certifications from Accredian upon successful completion of the program." },
      { q: "Is there post-training support provided?", a: "We provide extended access to learning materials and dedicated support channels for up to 6 months post-program." },
    ],
  };

  const currentFaqs = faqs[activeTab];

  return (
    <div id="faqsSection" className="w-full flex justify-center mt-16 sm:mt-16 md:py-12 xl:px-12 px-4">
      <div className="w-full max-w-[85rem]">
        <div className="w-full">
          <h2 className="text-2xl mx-1 md:text-4xl font-bold text-gray-900 leading-tight">
            Frequently Asked <span className="text-universal">Questions</span>
          </h2>
        </div>
        
        <div className="relative w-full">
          <div id="faqs" className="absolute -top-[100px] left-0"></div>
          <div className="flex gap-4 mt-8 md:mt-12 md:flex-row flex-col">
            {/* Tabs */}
            <div className="w-full md:flex-[0.3] relative">
              <div className="no-scrollbar md:max-w-sm md:px-4 py-2 flex flex-row md:flex-col items-center gap-4 md:gap-6 max-w-[90vw] overflow-x-auto">
                {tabs.map((tab) => (
                  <div 
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); setOpenIndex(0); }}
                    className={`w-full max-w-[280px] rounded-md border px-4 py-4 text-center cursor-pointer transition-all ${
                      activeTab === tab.id 
                        ? "drop-shadow-lg md:drop-shadow-xl bg-white border-transparent" 
                        : "border-neutral-300 bg-transparent"
                    }`}
                  >
                    <h1 className={`text-sm whitespace-nowrap max-md:text-nowrap lg:text-lg font-semibold ${activeTab === tab.id ? "text-universal" : "text-neutral-500"}`}>
                      {tab.label}
                    </h1>
                  </div>
                ))}
              </div>
            </div>

            {/* Accordion */}
            <div className="w-full md:flex-[0.7] md:px-4 flex flex-col">
              <div className="space-y-4">
                {currentFaqs.map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <button
                      className="w-full text-left py-4 px-6 flex justify-between items-center transition-colors hover:bg-gray-50"
                      onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                    >
                      <h1 className={`text-lg font-semibold transition-colors ${openIndex === idx ? "text-universal" : "text-gray-900"}`}>
                        {faq.q}
                      </h1>
                      <svg 
                        className={`w-6 h-6 transition-transform duration-300 ${openIndex === idx ? "rotate-x-180" : ""}`} 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? "max-h-96" : "max-h-0"}`}>
                      <div className="px-6 pb-6 text-gray-600">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-6">
                <button 
                  onClick={onEnquire}
                  className="px-6 py-3 bg-universal text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-blue-700"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
