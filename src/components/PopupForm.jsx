import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const indianCitiesList = [
  "Agra", "Ahmedabad", "Ajmer", "Aligarh", "Amritsar", "Asansol", "Aurangabad", "Bareilly", "Belagavi", "Bengaluru", "Bhavnagar", "Bhilai", "Bhiwandi", "Bhopal", "Bhubaneswar", "Bikaner", "Bokaro", "Chandigarh", "Chennai", "Coimbatore", "Cuttack", "Dehradun", "Delhi", "Dhanbad", "Durgapur", "Faridabad", "Firozabad", "Ghaziabad", "Gorakhpur", "Guntur", "Gurugram", "Guwahati", "Gwalior", "Hubli-Dharwad", "Hyderabad", "Indore", "Jabalpur", "Jaipur", "Jalandhar", "Jalgaon", "Jammu", "Jamnagar", "Jamshedpur", "Jhansi", "Jodhpur", "Kakinada", "Kannur", "Kanpur", "Kochi", "Kolhapur", "Kolkata", "Kollam", "Kota", "Kozhikode", "Kurnool", "Ludhiana", "Lucknow", "Madurai", "Malappuram", "Mangaluru", "Meerut", "Moradabad", "Mumbai", "Mysuru", "Nagpur", "Nanded", "Nashik", "Nellore", "Noida", "Patna", "Puducherry", "Pune", "Raipur", "Rajkot", "Rajahmundry", "Ranchi", "Rourkela", "Salem", "Sangli", "Saharanpur", "Siliguri", "Solapur", "Srinagar", "Surat", "Thiruvananthapuram", "Thrissur", "Tiruchirappalli", "Tirunelveli", "Tiruppur", "Ujjain", "Vadodara", "Varanasi", "Vasai-Virar", "Vijayawada", "Visakhapatnam", "Warangal"
];

const formFields = [
  { name: "business_name", type: "text", placeholder: "Store / Business Name", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { name: "contact_name", type: "text", placeholder: "Contact Person Name", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  { name: "whatsapp_number", type: "tel", placeholder: "WhatsApp Number", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> },
];

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  // Show popup after 5s
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Slight delay so CSS transition plays on entry
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => setVisible(true), 50);
      return () => clearTimeout(t);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.sendForm('service_03zim2q', 'template_unvs38g', form.current, '-ioVqATtgtRiNtLjK')
      .then(() => {
        setIsSubmitting(false);
        setIsOpen(false);
        alert("Thank you! Your inquiry has been sent to Dubai Collection.");
      }, () => {
        setIsSubmitting(false);
        alert("Something went wrong. Please try again.");
      });
  };

  if (!isOpen) return null;

  const submitOpacity = !visible ? 0 : isSubmitting ? 0.7 : 1;

  return (
    // Overlay — fade in
    <div
      className="fixed inset-0 z-100000 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.4s ease-out',
      }}
    >
      {/* Modal card — scale + fade up */}
      <div
        className="bg-[#fcfbfc] w-full max-w-[800px] max-h-[90vh] md:max-h-[85vh] rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.94) translateY(16px)',
          transition: 'opacity 0.45s ease-out, transform 0.45s ease-out',
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-10 text-[#888] hover:text-[#1a1a1a] transition-colors p-1"
          aria-label="Close popup"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left image */}
        <div className="hidden md:block w-[45%] relative bg-[#ececec] overflow-hidden">
          <img
            src="/contact-us-img.jpeg"
            alt="Dubai Collection Perfume"
            className="w-full h-full object-cover"
            style={{
              transform: visible ? 'scale(1)' : 'scale(1.06)',
              transition: 'transform 0.8s ease-out',
            }}
          />
        </div>

        {/* Right form */}
        <div className="w-full md:w-[55%] p-6 md:p-8 flex flex-col justify-center overflow-y-auto">

          {/* Heading — fade up */}
          <div
            className="mb-5 md:mb-6 mt-2"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.5s ease-out 0.15s, transform 0.5s ease-out 0.15s',
            }}
          >
            <h2 className="font-cormorant text-2xl md:text-[28px] leading-[1.15] text-[#1a1a1a] mb-2">
              Wholesale <br /> Business Inquiry
            </h2>
            <p className="font-inter text-[11.5px] md:text-[12px] text-[#666] leading-[1.5]">
              Interested in stocking our fragrances? Connect with our wholesale team to explore retail and distribution opportunities.
            </p>
          </div>

          <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-3">
            {/* Text fields — staggered fade up */}
            {formFields.map(({ name, type, placeholder, icon }, i) => (
              <div
                key={name}
                className="relative"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(10px)',
                  transition: `opacity 0.45s ease-out ${0.2 + i * 0.07}s, transform 0.45s ease-out ${0.2 + i * 0.07}s`,
                }}
              >
                <input
                  type={type}
                  name={name}
                  required
                  placeholder={placeholder}
                  className="w-full border border-[#e5e5e5] rounded-md py-2.5 pl-3 pr-9 font-inter text-[12px] text-[#1a1a1a] placeholder-[#a0a0a0] bg-transparent focus:outline-none focus:border-[#a0a0a0] transition-colors"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a0a0a0] pointer-events-none">
                  {icon}
                </div>
              </div>
            ))}

            {/* City select */}
            <div
              className="relative cursor-pointer"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.45s ease-out 0.41s, transform 0.45s ease-out 0.41s',
              }}
            >
              <select
                name="city"
                required
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className={`w-full border border-[#e5e5e5] rounded-md py-2.5 pl-3 pr-9 font-inter text-[12px] bg-transparent appearance-none focus:outline-none focus:border-[#a0a0a0] transition-colors cursor-pointer ${selectedCity === "" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}
              >
                <option value="" disabled>Choose City</option>
                {indianCitiesList.map((city) => (
                  <option key={city} value={city} className="text-[#1a1a1a]">{city}</option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a0a0a0] flex items-center gap-1 pointer-events-none">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-2 w-full bg-gradient-to-r from-[#d1d5d8] via-[#eef1f2] to-[#d1d5d8] text-[#1a1a1a] font-inter text-[11px] font-semibold tracking-[0.15em] uppercase py-3.5 rounded-md shadow-sm transition-opacity ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
              style={{
                opacity: visible ? (isSubmitting ? 0.7 : 1) : 0,
                transform: visible ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.45s ease-out 0.48s, transform 0.45s ease-out 0.48s',
              }}
            >
              {isSubmitting ? "Sending Inquiry..." : "Request Partnership"}
            </button>
          </form>

          {/* Footer badges */}
          <div
            className="mt-5 flex flex-wrap justify-between items-center gap-1 border-t border-[#f0f0f0] pt-4"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.5s ease-out 0.55s',
            }}
          >
            {[
              { label: "Wholesale Pricing" },
              { label: "Dedicated Support" },
              { label: "Premium Packaging" },
            ].map(({ label }) => (
              <div key={label} className="flex items-center gap-1 text-[10px] text-[#666] font-inter">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
