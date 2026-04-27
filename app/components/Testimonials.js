"use client";
import { useState } from "react";

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials = [
    {
      company: "ADP",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
      text: "\"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.\""
    },
    {
      company: "Bayer",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
      text: "\"Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.\""
    },
    {
      company: "Reliance",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
      text: "\"Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.\""
    }
  ];

  // Grouping logic: Page 0 has first 2, Page 1 has the 3rd
  const visibleTestimonials = currentPage === 0
    ? testimonials.slice(0, 2)
    : testimonials.slice(2, 3);

  return (
    <div className="testimonials w-full mt-16 sm:mt-20 flex flex-col items-center">
      <div className="text-center mb-10 mx-2">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Testimonials from <span className="text-universal">Our Partners</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          What <span className="text-universal">Our Clients</span> Are Saying
        </p>
      </div>

      <div className="relative w-full px-4 min-h-[300px]">
        <div id="testimonials" className="absolute -top-[100px] left-0"></div>
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 max-w-6xl mx-auto transition-all duration-500">
          {visibleTestimonials.map((test, idx) => (
            <div
              key={`testi-${test.company}-${idx}`}
              className="bg-white border border-gray-300 rounded-xl p-6 flex flex-row items-center w-full md:w-1/2 lg:w-1/2 min-h-[250px] shadow-sm animate-in fade-in slide-in-from-right-4 duration-500"
            >
              <div className="w-full flex flex-col justify-start items-start pl-6 h-full">
                <div className="h-16 mb-4 flex items-center gap-4">
                  <img src={test.logo} alt={test.company} className="h-14 w-14 object-contain" />
                </div>
                <p className="text-neutral-600 text-base font-light">
                  {test.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center space-x-3 mt-10">
          <button
            onClick={() => setCurrentPage(0)}
            className={`w-2 h-2 rounded-full transition-all ${currentPage === 0 ? "bg-universal scale-125" : "bg-gray-300 hover:bg-gray-400"}`}
            aria-label="Page 1"
          ></button>
          <button
            onClick={() => setCurrentPage(1)}
            className={`w-2 h-2 rounded-full transition-all ${currentPage === 1 ? "bg-universal scale-125" : "bg-gray-300 hover:bg-gray-400"}`}
            aria-label="Page 2"
          ></button>
        </div>
      </div>
    </div>
  );
}
