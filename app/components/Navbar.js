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
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm py-6 px-6 lg:px-14">
      <div className="max-w-[85rem] mx-auto flex justify-between items-center relative">
        <div className="flex-shrink-0">
          <img 
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp" 
            alt="logo" 
            className="w-[124px] h-[32px] object-contain"
          />
        </div>
        
        {/* Desktop Links (Hidden until LG) */}
        <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <li 
              key={`nav-desktop-${link.id}`} 
              className={`text-[15px] xl:text-[16px] font-circular font-semibold cursor-pointer transition-all duration-300 relative py-1 ${
                activeSection === link.id 
                  ? "text-universal" 
                  : "text-black hover:text-universal"
              }`}
            >
              <Link href={link.href} onClick={() => setActiveSection(link.id)}>
                {link.name}
              </Link>
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-universal rounded-full"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 focus:outline-none z-[70]"
          >
            <svg 
              className="w-8 h-8 text-black"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
          
          <div className={`${isMobileMenuOpen ? "flex" : "hidden"} absolute top-[88px] right-5 bg-white shadow-lg p-6 rounded-xl flex-col z-[60]`}>
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
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
