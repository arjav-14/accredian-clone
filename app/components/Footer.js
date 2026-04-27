"use client";
import Link from 'next/link';

export default function Footer({ onEnquire }) {
  return (
    <footer className="w-full bg-white pt-5 md:pt-10 pb-5 xl:px-12 px-6">
      <div className="max-w-[85rem] mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-10 gap-8">
          {/* Logo and Socials */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
              alt="logo"
              className="w-[124px] h-[32px] mb-6"
            />
            <div className="flex space-x-4">
              {['facebook', 'linkedin', 'twitter', 'instagram', 'youtube'].map((social) => (
                <Link key={social} href="#" className="text-gray-900 hover:text-universal transition-colors">
                  <div className="w-5 h-5 flex items-center justify-center">
                    {/* Placeholder for social icons - using simple text for brevity in this mock */}
                    <span className="capitalize text-xs font-bold">{social[0]}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Enquire CTA */}
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={onEnquire}
              className="bg-universal text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all active:scale-[0.98] font-circular"
            >
              Enquire Now
            </button>
            <p className="text-gray-600 text-sm mt-2 font-circular">Speak with our Advisor</p>
          </div>
        </div>

        <hr className="border-gray-200 mb-10" />

        {/* Middle Section: Links and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-5">
          {/* Company Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-6 font-circular">Accredian</h3>
            <ul className="space-y-4">
              {['About', 'Blog', 'Why Accredian'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-700 hover:text-universal transition-colors text-sm font-circular">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-6 font-circular">Contact Us</h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-700 font-circular">
                Email us: <Link href="mailto:enterprise@accredian.com" className="text-universal hover:underline">enterprise@accredian.com</Link>
              </p>
              <p className="text-sm text-gray-700 leading-relaxed font-circular">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, <br className="hidden md:block" />
                Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-200 mb-8" />

        {/* Bottom Section: Copyright */}
        <div className="text-center">
          <p className="text-gray-600 text-[13px] font-circular">
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
