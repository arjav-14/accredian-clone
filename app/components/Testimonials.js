"use client";
import { useState, useRef, useEffect } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const testimonials = [
    {
      company: "Reliance",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
      text: "\"Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.\""
    },
    {
      company: "ADP",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
      text: "\"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.\""
    },
    {
      company: "Bayer",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
      text: "\"Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.\""
    }
  ];

  // Handle scroll to update dots
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="testimonials w-full mt-16 sm:mt-24 flex flex-col items-center">
      <div className="text-center mb-10 mx-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight font-circular">
          Testimonials from <span className="text-universal">Our Partners</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3 font-circular">
          What <span className="text-universal">Our Clients</span> Are Saying
        </p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div id="testimonials" className="absolute -top-[100px] left-0"></div>
        
        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((test, idx) => (
            <div
              key={`testi-${idx}`}
              className="min-w-full md:min-w-[calc(50%-12px)] snap-center"
            >
              <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full min-h-[320px] justify-center mx-1">
                <div className="mb-6 flex justify-center items-center h-16 w-full">
                  <img 
                    src={test.logo} 
                    alt={test.company} 
                    className="max-h-full max-w-[120px] object-contain" 
                  />
                </div>
                <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed font-circular font-medium italic">
                  {test.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Improved Pagination Dots */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={`dot-${idx}`}
              onClick={() => scrollTo(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx 
                  ? "w-6 bg-universal" 
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
