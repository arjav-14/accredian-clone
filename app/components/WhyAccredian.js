export default function WhyAccredian() {
  return (
    <div className="pt-16 px-4 md:px-8 xl:px-12">
      <div className="text-center pb-8 mx-2">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          The <span className="text-universal">Accredian Edge</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1">
          Key Aspects of <span className="text-universal">Our Strategic Training</span>
        </p>
      </div>
      <div className="relative w-full">
        <div id="accredianEdge" className="absolute -top-[100px] left-0"></div>
        <div className="w-full hidden sm:flex justify-center items-center mb-8">
          <img 
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg" 
            alt="Our Solutions" 
            className="w-[100%] h-auto rounded-lg"
          />
        </div>
        <div className="flex sm:hidden w-full justify-center items-center mb-8">
          <img 
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-mobile.svg" 
            alt="Our Solutions" 
            className="w-[100%] h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
