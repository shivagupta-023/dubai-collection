import React, { useState, useEffect } from 'react';

// Duniya ke sabhi deshon ki list
const countriesList = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Country select karne ke liye state
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Wholesale Form Submitted! Country:", selectedCountry);
    setIsOpen(false); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100000] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-500">
      
      <div className="bg-[#fcfbfc] w-full max-w-[800px] max-h-[90vh] md:max-h-[85vh] rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative animate-fade-in-up">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-10 text-[#888] hover:text-[#1a1a1a] transition-colors p-1"
          aria-label="Close popup"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* LEFT SIDE: Image */}
        <div className="hidden md:block w-[45%] relative bg-[#ececec]">
          <img 
            src="/contact-us-img.jpeg" 
            alt="Dubai Collection Perfume" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT SIDE: Form Content */}
        <div className="w-full md:w-[55%] p-6 md:p-8 flex flex-col justify-center overflow-y-auto">
          
          <div className="mb-5 md:mb-6 mt-2">
            <h2 className="font-cormorant text-2xl md:text-[28px] leading-[1.15] text-[#1a1a1a] mb-2">
              Wholesale <br /> Business Inquiry
            </h2>
            <p className="font-inter text-[11.5px] md:text-[12px] text-[#666] leading-[1.5]">
              Interested in stocking our fragrances? Connect with our wholesale team to explore retail and distribution opportunities.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
            
            <div className="relative">
              <input 
                type="text" 
                required
                placeholder="Store / Business Name"
                className="w-full border border-[#e5e5e5] rounded-md py-2.5 pl-3 pr-9 font-inter text-[12px] text-[#1a1a1a] placeholder-[#a0a0a0] bg-transparent focus:outline-none focus:border-[#a0a0a0] transition-colors"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a0a0a0] pointer-events-none">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </div>
            </div>

            <div className="relative">
              <input 
                type="text" 
                required
                placeholder="Contact Person Name"
                className="w-full border border-[#e5e5e5] rounded-md py-2.5 pl-3 pr-9 font-inter text-[12px] text-[#1a1a1a] placeholder-[#a0a0a0] bg-transparent focus:outline-none focus:border-[#a0a0a0] transition-colors"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a0a0a0] pointer-events-none">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
            </div>

            <div className="relative">
              <input 
                type="tel" 
                required
                placeholder="WhatsApp Number"
                className="w-full border border-[#e5e5e5] rounded-md py-2.5 pl-3 pr-9 font-inter text-[12px] text-[#1a1a1a] placeholder-[#a0a0a0] bg-transparent focus:outline-none focus:border-[#a0a0a0] transition-colors"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a0a0a0] pointer-events-none">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
            </div>

            <div className="relative">
              <input 
                type="email" 
                required
                placeholder="Email Address"
                className="w-full border border-[#e5e5e5] rounded-md py-2.5 pl-3 pr-9 font-inter text-[12px] text-[#1a1a1a] placeholder-[#a0a0a0] bg-transparent focus:outline-none focus:border-[#a0a0a0] transition-colors"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a0a0a0] pointer-events-none">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
            </div>

            {/* Country Dropdown FIXED */}
            <div className="relative cursor-pointer">
              <select 
                required
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                // Agar country select nahi hai toh placeholder color (#a0a0a0) dikhayega
                className={`w-full border border-[#e5e5e5] rounded-md py-2.5 pl-3 pr-9 font-inter text-[12px] bg-transparent appearance-none focus:outline-none focus:border-[#a0a0a0] transition-colors cursor-pointer ${selectedCountry === "" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}
              >
                {/* Default placeholder value */}
                <option value="" disabled>Choose Country</option>
                
                {countriesList.map((country, index) => (
                  // Select ke dropdown ke andar items hamesha dark dikhe isliye class "text-[#1a1a1a]"
                  <option key={index} value={country} className="text-[#1a1a1a]">
                    {country}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a0a0a0] flex items-center gap-1 pointer-events-none">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>

            <button 
              type="submit"
              className="mt-2 w-full bg-gradient-to-r from-[#d1d5d8] via-[#eef1f2] to-[#d1d5d8] text-[#1a1a1a] font-inter text-[11px] font-semibold tracking-[0.15em] uppercase py-3.5 rounded-md shadow-sm hover:opacity-90 transition-opacity"
            >
              Request Partnership
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