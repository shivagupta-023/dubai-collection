import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const indianCitiesList = [
  "Agra", "Ahmedabad", "Ajmer", "Aligarh", "Amritsar", "Asansol", "Aurangabad", "Bareilly", "Belagavi", "Bengaluru", "Bhavnagar", "Bhilai", "Bhiwandi", "Bhopal", "Bhubaneswar", "Bikaner", "Bokaro", "Chandigarh", "Chennai", "Coimbatore", "Cuttack", "Dehradun", "Delhi", "Dhanbad", "Durgapur", "Faridabad", "Firozabad", "Ghaziabad", "Gorakhpur", "Guntur", "Gurugram", "Guwahati", "Gwalior", "Hubli-Dharwad", "Hyderabad", "Indore", "Jabalpur", "Jaipur", "Jalandhar", "Jalgaon", "Jammu", "Jamnagar", "Jamshedpur", "Jhansi", "Jodhpur", "Kakinada", "Kannur", "Kanpur", "Kochi", "Kolhapur", "Kolkata", "Kollam", "Kota", "Kozhikode", "Kurnool", "Ludhiana", "Lucknow", "Madurai", "Malappuram", "Mangaluru", "Meerut", "Moradabad", "Mumbai", "Mysuru", "Nagpur", "Nanded", "Nashik", "Nellore", "Noida", "Patna", "Puducherry", "Pune", "Raipur", "Rajkot", "Rajahmundry", "Ranchi", "Rourkela", "Salem", "Sangli", "Saharanpur", "Siliguri", "Solapur", "Srinagar", "Surat", "Thiruvananthapuram", "Thrissur", "Tiruchirappalli", "Tirunelveli", "Tiruppur", "Ujjain", "Vadodara", "Varanasi", "Vasai-Virar", "Vijayawada", "Visakhapatnam", "Warangal"
];

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state
  
  const form = useRef(); // EmailJS ke liye form reference

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Yahan Apni EmailJS Keys Daalein
    emailjs.sendForm(
      'service_03zim2q',    // Replace this
      'template_unvs38g',   // Replace this
      form.current, 
      '-ioVqATtgtRiNtLjK'     // Replace this
    )
    .then((result) => {
        console.log("Email sent successfully:", result.text);
        setIsSubmitting(false);
        setIsOpen(false); // Form close on success
        alert("Thank you! Your inquiry has been sent to Dubai Collection.");
    }, (error) => {
        console.log("Error sending email:", error.text);
        setIsSubmitting(false);
        alert("Something went wrong. Please try again.");
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100000] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-500">
      <div className="bg-[#fcfbfc] w-full max-w-[800px] max-h-[90vh] md:max-h-[85vh] rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative animate-fade-in-up">
        
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-10 text-[#888] hover:text-[#1a1a1a] transition-colors p-1"
          aria-label="Close popup"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="hidden md:block w-[45%] relative bg-[#ececec]">
          <img 
            src="/contact-us-img.jpeg" 
            alt="Dubai Collection Perfume" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-[55%] p-6 md:p-8 flex flex-col justify-center overflow-y-auto">
          <div className="mb-5 md:mb-6 mt-2">
            <h2 className="font-cormorant text-2xl md:text-[28px] leading-[1.15] text-[#1a1a1a] mb-2">
              Wholesale <br /> Business Inquiry
            </h2>
            <p className="font-inter text-[11.5px] md:text-[12px] text-[#666] leading-[1.5]">
              Interested in stocking our fragrances? Connect with our wholesale team to explore retail and distribution opportunities.
            </p>
          </div>

          {/* Form me ref={form} add kiya hai */}
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-3">
            
            <div className="relative">
              {/* name="business_name" add kiya */}
              <input 
                type="text" 
                name="business_name"
                required
                placeholder="Store / Business Name"
                className="w-full border border-[#e5e5e5] rounded-md py-2.5 pl-3 pr-9 font-inter text-[12px] text-[#1a1a1a] placeholder-[#a0a0a0] bg-transparent focus:outline-none focus:border-[#a0a0a0] transition-colors"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a0a0a0] pointer-events-none">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </div>
            </div>

            <div className="relative">
              {/* name="contact_name" add kiya */}
              <input 
                type="text" 
                name="contact_name"
                required
                placeholder="Contact Person Name"
                className="w-full border border-[#e5e5e5] rounded-md py-2.5 pl-3 pr-9 font-inter text-[12px] text-[#1a1a1a] placeholder-[#a0a0a0] bg-transparent focus:outline-none focus:border-[#a0a0a0] transition-colors"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a0a0a0] pointer-events-none">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
            </div>

            <div className="relative">
              {/* name="whatsapp_number" add kiya */}
              <input 
                type="tel" 
                name="whatsapp_number"
                required
                placeholder="WhatsApp Number"
                className="w-full border border-[#e5e5e5] rounded-md py-2.5 pl-3 pr-9 font-inter text-[12px] text-[#1a1a1a] placeholder-[#a0a0a0] bg-transparent focus:outline-none focus:border-[#a0a0a0] transition-colors"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a0a0a0] pointer-events-none">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
            </div>

            <div className="relative cursor-pointer">
              {/* name="city" add kiya */}
              <select 
                name="city"
                required
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className={`w-full border border-[#e5e5e5] rounded-md py-2.5 pl-3 pr-9 font-inter text-[12px] bg-transparent appearance-none focus:outline-none focus:border-[#a0a0a0] transition-colors cursor-pointer ${selectedCity === "" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}
              >
                <option value="" disabled>Choose City</option>
                {indianCitiesList.map((city, index) => (
                  <option key={index} value={city} className="text-[#1a1a1a]">
                    {city}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a0a0a0] flex items-center gap-1 pointer-events-none">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`mt-2 w-full bg-gradient-to-r from-[#d1d5d8] via-[#eef1f2] to-[#d1d5d8] text-[#1a1a1a] font-inter text-[11px] font-semibold tracking-[0.15em] uppercase py-3.5 rounded-md shadow-sm transition-opacity ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
            >
              {isSubmitting ? "Sending Inquiry..." : "Request Partnership"}
            </button>
          </form>

          <div className="mt-5 flex flex-wrap justify-between items-center gap-1 border-t border-[#f0f0f0] pt-4">
            <div className="flex items-center gap-1 text-[10px] text-[#666] font-inter">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              Wholesale Pricing
            </div>
            <div className="flex items-center gap-1 text-[10px] text-[#666] font-inter">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              Dedicated Support
            </div>
            <div className="flex items-center gap-1 text-[10px] text-[#666] font-inter">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              Premium Packaging
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}