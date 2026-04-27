"use client";
import { useState, useRef, useEffect } from "react";

export default function CourseSegmentation() {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef(null);

  const segments = [
    { title: "Program Specific", img: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/project-management-v2.webp" },
    { title: "Industry Specific", img: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/digital-transformation-v2.webp" },
    { title: "Topic Specific", img: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/data-science-v2.webp" },
    { title: "Level Specific", img: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/senior-management-v2.webp" }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(scrollPosition / (width * 0.8)); // 0.8 because card is w-[85%]
      setActiveSlide(index);
    }
  };

  return (
    <section className="mt-12 sm:mt-28 md:mx-16 mb-10 bg-white text-center font-circular">
      <div className="text-center mb-10 mx-2">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          Tailored <span className="text-universal">Course Segmentation</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1">
          Explore <span className="text-universal">Custom-fit Courses</span> Designed to Address Every Professional Focus
        </p>
      </div>

      {/* Desktop Grid (sm and up) */}
      <div className="hidden sm:flex flex-wrap justify-center px-6 gap-6">
        {segments.map((segment, idx) => (
          <div key={idx} className="bg-white rounded-lg w-full sm:max-w-[300px] shadow-lg border border-gray-300 overflow-hidden">
            <img src={segment.img} alt={segment.title} className="w-full h-40 object-cover" />
            <h4 className="text-xl font-semibold text-universal p-6">
              {segment.title}
            </h4>
          </div>
        ))}
      </div>

      {/* Mobile Swipe Carousel (max-sm) */}
      <div className="block sm:hidden relative w-full px-4">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-6"
        >
          {segments.map((segment, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-[85vw] snap-center bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden"
            >
              <img src={segment.img} alt={segment.title} className="w-full h-44 object-cover" />
              <h4 className="text-xl font-semibold text-universal p-6">
                {segment.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center space-x-2 mt-2">
          {segments.map((_, idx) => (
            <span 
              key={idx}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeSlide === idx ? "bg-universal w-6" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
