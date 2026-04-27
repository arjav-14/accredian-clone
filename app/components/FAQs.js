"use client";
import { useState, useRef, useEffect } from "react";

export default function FAQs() {
  const [activeTab, setActiveTab] = useState("Course");
  const [openIndex, setOpenIndex] = useState(0);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const scrollContainerRef = useRef(null);

  const faqData = {
    Course: [
      {
        question: "What types of corporate training programs does Accredian offer?",
        answer: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech."
      },
      {
        question: "What domain specializations are available?",
        answer: "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI."
      }
    ],
    Delivery: [
      {
        question: "Can the courses be customized for specific industries or teams?",
        answer: "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization’s goals."
      },
      {
        question: "Who are the instructors for these programs?",
        answer: "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights."
      },
      {
        question: "What formats are the programs delivered in?",
        answer: "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements."
      }
    ],
    Miscellaneous: [
      {
        question: "What is the ideal team size for corporate training?",
        answer: "Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts."
      },
      {
        question: "How do we get started with Accredian?",
        answer: "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process — from skill gap analysis to a custom program tailored to your needs."
      }
    ]
  };

  const tabs = [
    { name: "About the Course", id: "Course" },
    { name: "About the Delivery", id: "Delivery" },
    { name: "Miscellaneous", id: "Miscellaneous" }
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      // Initial check
      handleScroll();
    }
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div id="faqs" className="faqs w-full mt-20 sm:mt-32 flex flex-col items-center px-4 max-w-6xl mx-auto relative">
      <div className="text-left md:text-center w-full mb-10 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight font-circular">
          Frequently Asked <span className="text-universal">Questions</span>
        </h2>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-8 lg:gap-16">
        
        {/* Tabs Container */}
        <div className="relative w-full md:w-1/3">
          
          {/* Left Arrow (Dynamic) */}
          {showLeftArrow && (
            <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-white via-white/80 to-transparent flex items-center justify-start md:hidden z-10">
              <button 
                onClick={() => scroll("left")}
                className="w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center ml-0 active:scale-90 transition-transform"
              >
                <svg className="w-4 h-4 text-universal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
          )}

          {/* Horizontal Scroll on Mobile */}
          <div 
            ref={scrollContainerRef}
            className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible w-full gap-4 pb-4 md:pb-0 scrollbar-hide snap-x relative pr-8 md:pr-0"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setOpenIndex(0);
                }}
                className={`whitespace-nowrap px-6 md:px-8 py-3.5 md:py-5 rounded-xl border text-sm font-bold transition-all duration-300 font-circular text-center min-w-[180px] md:min-w-0 snap-center ${
                  activeTab === tab.id
                    ? "bg-white text-universal border-gray-100 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] md:scale-[1.02] border-none"
                    : "bg-white text-gray-400 border-gray-200 hover:border-universal hover:text-universal"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Right Arrow (Dynamic) */}
          {showRightArrow && (
            <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-white via-white/80 to-transparent flex items-center justify-end md:hidden z-10">
              <button 
                onClick={() => scroll("right")}
                className="w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center mr-0 active:scale-90 transition-transform"
              >
                <svg className="w-4 h-4 text-universal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Right Content for Questions */}
        <div className="w-full md:w-2/3 flex flex-col">
          <div className="space-y-4">
            {faqData[activeTab].map((item, idx) => (
              <div 
                key={idx}
                className="border-b border-gray-100 last:border-b-0 pb-2 md:pb-4"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  className="w-full flex justify-between items-start text-left py-4 group focus:outline-none"
                >
                  <span className={`text-[15px] sm:text-[17px] font-bold pr-8 transition-colors font-circular leading-snug ${
                    openIndex === idx ? "text-universal" : "text-gray-800"
                  }`}>
                    {item.question}
                  </span>
                  <span className={`mt-1 transform transition-all duration-300 ${openIndex === idx ? "rotate-180 text-universal" : "text-gray-400 opacity-60"}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === idx ? "max-h-96 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed font-circular font-medium">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 md:mt-12 flex justify-center w-full">
            <button className="bg-universal text-white font-bold py-3.5 px-12 rounded-xl shadow-lg hover:bg-blue-700 transition-all active:scale-[0.98] font-circular text-sm">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
