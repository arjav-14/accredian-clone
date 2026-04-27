"use client";
import Link from 'next/link';

export default function Footer({ onEnquire }) {
  const socialIcons = [
    { 
      name: 'facebook', 
      svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg> 
    },
    { 
      name: 'linkedin', 
      svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    },
    { 
      name: 'twitter', 
      svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg> 
    },
    { 
      name: 'instagram', 
      svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> 
    },
    { 
      name: 'youtube', 
      svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> 
    }
  ];

  return (
    <footer className="w-full bg-[#1A1A1A] md:bg-white pt-10 md:pt-16 pb-10 xl:px-12 px-6">
      <div className="max-w-[85rem] mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          {/* Logo and Socials */}
          <div className="flex flex-col items-start">
            <div className="mb-8">
               <h1 className="text-white md:text-universal text-3xl font-bold font-circular">accredian</h1>
               <p className="text-gray-400 md:text-gray-500 text-xs tracking-[0.2em] font-circular mt-1 uppercase">credentials that matter</p>
            </div>
            <div className="flex space-x-6">
              {socialIcons.map((social) => (
                <Link key={social.name} href="#" className="text-white md:text-gray-800 hover:text-universal transition-colors">
                  {social.svg}
                </Link>
              ))}
            </div>
          </div>

          {/* Enquire CTA */}
          <div className="flex flex-col items-start md:items-end w-full md:w-auto">
            <button 
              onClick={onEnquire}
              className="bg-universal text-white font-bold py-3 px-10 rounded-lg shadow-lg hover:bg-blue-700 transition-all active:scale-[0.98] font-circular text-sm w-full md:w-auto"
            >
              Enquire Now
            </button>
            <p className="text-gray-300 md:text-gray-600 text-xs mt-3 font-circular font-medium tracking-wide">Speak with our Advisor</p>
          </div>
        </div>

        <hr className="border-gray-800 md:border-gray-200 mb-12" />

        {/* Middle Section: Links and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 mb-10 text-left">
          {/* Company Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-bold text-white md:text-gray-900 mb-6 font-circular tracking-tight">Accredian</h3>
            <ul className="space-y-4">
              {['About', 'Blog', 'Why Accredian'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-300 md:text-gray-700 hover:text-universal transition-colors text-sm font-circular font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-bold text-white md:text-gray-900 mb-6 font-circular tracking-tight">Contact Us</h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-300 md:text-gray-700 font-circular leading-relaxed">
                Email us: <Link href="mailto:enterprise@accredian.com" className="text-universal hover:underline font-bold">enterprise@accredian.com</Link>
              </p>
              <p className="text-sm text-gray-300 md:text-gray-700 leading-7 font-circular">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, <br className="hidden md:block" />
                Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 md:border-gray-200 mb-10" />

        {/* Bottom Section: Copyright */}
        <div className="text-left md:text-center">
          <p className="text-gray-400 md:text-gray-500 text-[13px] font-circular font-medium tracking-wide">
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
