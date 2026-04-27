"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar({ onEnquire }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Stats", href: "#stats", id: "stats" },
    { name: "Clients", href: "#clients", id: "clients" },
    { name: "Accredian Edge", href: "#accredianEdge", id: "accredianEdge" },
    { name: "CAT", href: "#cat", id: "cat" },
    { name: "How It Works", href: "#howItWorks", id: "howItWorks" },
    { name: "FAQs", href: "#faqs", id: "faqs" },
    { name: "Testimonials", href: "#testimonials", id: "testimonials" },
  ];

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset for navbar
      
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md py-6 px-6 md:px-14 ">
      <div className="max-w-[85rem] mx-auto flex justify-between items-center">
        <img 
          src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp" 
          alt="logo" 
          className="w-[124px] h-[32px]"
        />
        
        <ul className="hidden md:flex justify-end items-center flex-1 space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <li 
              key={`nav-desktop-${link.id}`} 
              className={`text-[16px] font-circular font-normal cursor-pointer transition-all duration-300 ${
                activeSection === link.id 
                  ? "text-universal font-semibold border-b-[3px] border-universal" 
                  : "text-black hover:text-universal"
              }`}
            >
              <Link href={link.href} onClick={() => setActiveSection(link.id)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex items-center">
          <svg 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            stroke="currentColor" 
            fill="none" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            aria-hidden="true" 
            className="w-8 h-8 text-black cursor-pointer" 
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          
          <div className={`${isMobileMenuOpen ? "flex" : "hidden"} fixed top-[88px] right-5 bg-white shadow-lg p-6 rounded-xl`}>
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={`nav-mobile-${link.id}`} className="text-[16px] font-circular text-black cursor-pointer">
                  <Link 
                    href={link.href}
                    onClick={() => {
                       setIsMobileMenuOpen(false);
                       setActiveSection(link.id);
                    }}
                    className={`${activeSection === link.id ? "text-universal font-semibold border-b-[2px] border-universal" : "text-black"}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onEnquire();
                  }}
                  className="w-full bg-universal text-white py-2 rounded-lg font-semibold"
                >
                  Enquire Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
