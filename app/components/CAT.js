export default function CAT() {
  return (
    <section className="w-full mt-12 sm:mt-24 py-4 flex flex-col items-center second-bg-grad overflow-hidden">
      <div className="text-center mx-2">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          The <span className="text-universal">CAT Framework</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto">
          Our Proven Approach to <span className="text-universal">Learning Excellence</span>
        </p>
      </div>
      <div className="relative w-full">
        <div id="cat" className="absolute -top-[100px] left-0"></div>
        <div className="w-full flex justify-center mt-16">
          <img 
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/catV2.svg" 
            alt="Our Solutions" 
            className="w-[90%] sm:w-[70%] h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
