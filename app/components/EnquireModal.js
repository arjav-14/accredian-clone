"use client";
import { useState } from "react";

export default function EnquireModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    domain: "",
    candidates: "",
    mode: "",
    location: ""
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Backup: Save to Browser's Local Storage
        const existingSubmissions = JSON.parse(localStorage.getItem("myEnquiries") || "[]");
        existingSubmissions.push({ ...formData, id: Date.now(), date: new Date().toLocaleString() });
        localStorage.setItem("myEnquiries", JSON.stringify(existingSubmissions));

        setStatus("success");
        alert("Enquiry submitted successfully! We will contact you soon.");
        onClose();
      } else {
        setStatus("error");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      alert("Submission failed. Check your connection.");
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="relative bg-white w-full max-w-3xl rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in duration-300 mx-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Left Side: Image */}
        <div className="hidden md:block md:w-[45%] h-auto">
          <img 
            src="/formphoto.png" 
            alt="Corporate meeting" 
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Side: Form */}
        <div 
          id="scrollbar2"
          className="w-full md:w-[55%] p-4 md:p-8 flex flex-col justify-center bg-white overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1C1C1C]">Enquire Now</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name" 
                required
                className="w-full border-b-2 border-gray-100 py-2 focus:border-[#1b72e8] outline-none transition-colors text-sm text-gray-700 placeholder:text-gray-400 font-circular"
              />
            </div>

            {/* Email */}
            <div>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email" 
                required
                className="w-full border-b-2 border-gray-100 py-2 focus:border-[#1b72e8] outline-none transition-colors text-sm text-gray-700 placeholder:text-gray-400 font-circular"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 border-b-2 border-gray-100 py-2">
              <div className="flex items-center gap-1 cursor-pointer">
                <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-4 h-3 object-contain" />
                <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
                <span className="text-gray-600 text-xs font-circular">+91</span>
              </div>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full outline-none focus:border-[#1b72e8] transition-colors text-sm text-gray-700 font-circular"
                placeholder="Phone number"
              />
            </div>

            {/* Company */}
            <div>
              <input 
                type="text" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter company name" 
                className="w-full border-b-2 border-gray-100 py-2 focus:border-[#1b72e8] outline-none transition-colors text-sm text-gray-700 placeholder:text-gray-400 font-circular"
              />
            </div>

            {/* Domain */}
            <div className="relative">
              <select 
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-100 py-2 focus:border-[#1b72e8] outline-none bg-transparent appearance-none text-gray-400 text-sm font-circular cursor-pointer"
              >
                <option value="">Select Domain</option>
                <option value="Data Science">Data Science</option>
                <option value="Product Management">Product Management</option>
                <option value="Gen-AI">Generative AI</option>
              </select>
              <div className="absolute right-0 top-3 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* No. of Candidates */}
            <div>
              <input 
                type="text" 
                name="candidates"
                value={formData.candidates}
                onChange={handleChange}
                placeholder="Enter No. of candidates" 
                className="w-full border-b-2 border-gray-100 py-2 focus:border-[#1b72e8] outline-none transition-colors text-sm text-gray-700 placeholder:text-gray-400 font-circular"
              />
            </div>

            {/* Mode of Delivery */}
            <div className="relative">
              <select 
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-100 py-2 focus:border-[#1b72e8] outline-none bg-transparent appearance-none text-gray-400 text-sm font-circular cursor-pointer"
              >
                <option value="">Select Mode of Delivery *</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="hybrid">Hybrid</option>
              </select>
              <div className="absolute right-0 top-3 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Location */}
            <div>
              <input 
                type="text" 
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Eg: Gurgoan, Delhi, India" 
                className="w-full border-b-2 border-gray-100 py-2 focus:border-[#1b72e8] outline-none transition-colors text-sm text-gray-700 placeholder:text-gray-400 font-circular"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit"
                disabled={status === "loading"}
                className={`w-full text-white font-semibold py-2.5 rounded-lg shadow-md transition-all active:scale-[0.98] font-circular text-sm flex justify-center items-center ${
                  status === "loading" ? "bg-gray-400 cursor-not-allowed" : "bg-[#1b72e8] hover:bg-blue-600"
                }`}
              >
                {status === "loading" ? (
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                {status === "loading" ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
