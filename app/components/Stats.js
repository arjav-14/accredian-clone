export default function Stats() {
  return (
    <div className="tools w-full overflow-hidden flex flex-col items-center pt-8 sm:pt-28 px-4 capitalize">
      <div className="text-center mb-6 mx-2">
        <h2 className="text-2xl mx-1 sm:text-4xl font-bold text-gray-900 leading-tight">
          Our<span className="text-universal"> Track Record</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1">
          The Numbers Behind <span className="text-universal">Our Success</span>
        </p>
      </div>
      <div className="relative w-full">
        <div id="stats" className="absolute -top-[100px] left-0"></div>
        <div className="w-full flex justify-center p-4 text-center">
          <div>
            <div className="hidden sm:flex justify-start p-4 gap-10 rounded-xl">
              <div className="flex flex-col justify-start gap-4 items-center border-r-2 pr-4 ">
                <div className="text-2xl text-universal font-semibold w-24 h-12 bg-blue-100 p-2 rounded-full">
                  <h2>10K+</h2>
                </div>
                <div>
                  <p className="max-w-[300px]">Professionals trained for exceptional career success</p>
                </div>
              </div>
              <div className="flex flex-col justify-start gap-4 items-center border-r-2 pr-4 ">
                <div className="text-2xl text-universal font-semibold w-24 h-12 bg-blue-100 p-2 rounded-full">
                  <h2>200+</h2>
                </div>
                <div>
                  <p className="max-w-[300px]">Sessions delivered with unmatched learning excellence</p>
                </div>
              </div>
              <div className="flex flex-col justify-start gap-4 items-center border-r-0 pr-4 ">
                <div className="text-2xl text-universal font-semibold w-24 h-12 bg-blue-100 p-2 rounded-full">
                  <h2>5K+</h2>
                </div>
                <div>
                  <p className="max-w-[300px]">Active learners engaged in dynamic courses</p>
                </div>
              </div>
            </div>
            <div className="sm:hidden grid grid-cols-1 p-4 gap-10 rounded-xl">
              <div className="flex justify-start items-center text-left gap-4 border-b-2 pb-4 ">
                <div className="flex justify-center items-center text-universal text-center font-semibold w-full max-w-[70px] bg-blue-100 p-2 rounded-full">
                  <h2 className="text-md md:text-2xl">10K+</h2>
                </div>
                <div>
                  <p className="text-md md:text-2xl">Professionals trained for exceptional career success</p>
                </div>
              </div>
              <div className="flex justify-start items-center text-left gap-4 border-b-2 pb-4 ">
                <div className="flex justify-center items-center text-universal text-center font-semibold w-full max-w-[70px] bg-blue-100 p-2 rounded-full">
                  <h2 className="text-md md:text-2xl">200+</h2>
                </div>
                <div>
                  <p className="text-md md:text-2xl">Sessions delivered with unmatched learning excellence</p>
                </div>
              </div>
              <div className="flex justify-start items-center text-left gap-4 border-b-0 pr-4 ">
                <div className="flex justify-center items-center text-universal text-center font-semibold w-full max-w-[70px] bg-blue-100 p-2 rounded-full">
                  <h2 className="text-md md:text-2xl">5K+</h2>
                </div>
                <div>
                  <p className="text-md md:text-2xl">Active learners engaged in dynamic courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
