export default function WhoShouldJoin() {
  const groups = [
    { 
      title: "Tech Professionals", 
      desc: "Enhance expertise, embrace tech, drive innovation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-check w-10 h-10 sm:w-14 sm:h-14 mb-2">
          <path d="m9 10 2 2 4-4"></path>
          <rect width="20" height="14" x="2" y="3" rx="2"></rect>
          <path d="M12 17v4"></path>
          <path d="M8 21h8"></path>
        </svg>
      )
    },
    { 
      title: "Non-Tech Professionals", 
      desc: "Adapt digitally, collaborate in tech environments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-x w-10 h-10 sm:w-14 sm:h-14 mb-2">
          <path d="m14.5 12.5-5-5"></path>
          <path d="m9.5 12.5 5-5"></path>
          <rect width="20" height="14" x="2" y="3" rx="2"></rect>
          <path d="M12 17v4"></path>
          <path d="M8 21h8"></path>
        </svg>
      )
    },
    { 
      title: "Emerging Professionals", 
      desc: "Develop powerful skills for rapid career growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap w-10 h-10 sm:w-14 sm:h-14 mb-2">
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
          <path d="M22 10v6"></path>
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
        </svg>
      )
    },
    { 
      title: "Senior Professionals", 
      desc: "Strengthen leadership, enhance strategic decisions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase w-10 h-10 sm:w-14 sm:h-14 mb-2">
          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          <rect width="20" height="14" x="2" y="6" rx="2"></rect>
        </svg>
      )
    }
  ];

  return (
    <div className="mt-12 sm:mt-28 xl:px-6 px-4 lg:mx-10 bg-universal sm:rounded-lg flex flex-col md:flex-row">
      <div className="md:w-1/2 pt-12 md:pl-6 text-white flex flex-col justify-between">
        <div>
          <h4 className="text-lg sm:text-xl font-medium">Who Should Join?</h4>
          <h1 className="text-2xl md:text-[40px] leading-[39px] capitalize mt-2 font-semibold">
            Strategic Skill Enhancement
          </h1>
        </div>
        <div className="w-[300px] justify-center hidden md:block">
          <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/imagehuman.png" alt="Human Illustration" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-12 text-white gap-10">
        {groups.map((group, idx) => (
          <div key={idx} className="flex gap-4 sm:gap-2 flex-row sm:flex-col items-center sm:items-start text-center sm:text-left">
            <div className="shrink-0 text-white">
              {group.icon}
            </div>
            <div>
              <h2 className="text-[16px] sm:text-[22px] font-semibold">{group.title}</h2>
              <p className="text-sm sm:text-md text-gray-200">{group.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
