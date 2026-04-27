export default function Clients() {
  const clients = [
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png",
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png",
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png",
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg"
  ];

  return (
    <div className="pt-8 sm:pt-28 xl:px-12 px-4 text-center w-full">
      <div className="text-center mx-2">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight font-circular">
          Our Proven <span className="text-universal">Partnerships</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 pt-3 m-auto font-circular">
          Successful Collaborations With the <span className="text-universal">Industry’s Best</span>
        </p>
      </div>
      <div className="relative w-full overflow-hidden mt-6">
        <div id="clients" className="absolute -top-[100px] left-0"></div>

        {/* Desktop Grid (Hidden on Mobile) */}
        <div className="hidden sm:flex justify-center items-center w-full">
          <ul className="grid grid-cols-3 md:grid-cols-6 xl:grid-cols-6 gap-6 md:gap-8 xl:gap-12 items-center">
            {clients.map((url, idx) => (
              <li key={`client-desktop-${idx}`} className="flex justify-center items-center p-4">
                <img
                  src={url}
                  alt="client"
                  className="object-contain w-24 h-auto"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="block sm:hidden relative w-full overflow-hidden py-6">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...clients, ...clients, ...clients].map((url, idx) => (
              <div key={`client-mobile-${idx}`} className="flex justify-center items-center px-10 min-w-[160px]">
                <img src={url} alt="client" className="w-24 h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
