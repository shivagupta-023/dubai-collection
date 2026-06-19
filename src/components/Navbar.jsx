import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll track karne ke liye useEffect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  return (
    <>
      <nav 
        className={` absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-8 transition-all duration-300 ${
          isScrolled || menuOpen
            ? "py-4 " // Scroll ya menu open hone par Glassmorphism
            : "py-5 bg-transparent" // Top par transparent
        }`}
      >
        {/* Left Side: Desktop Links */}
        <div className="hidden md:flex items-center gap-10 w-1/3">
          <a href="#" className="text-white text-sm font-inter tracking-widest uppercase hover:opacity-70 transition-opacity">Shop</a>
          <a href="#" className="text-white text-sm font-inter tracking-widest uppercase hover:opacity-70 transition-opacity">About</a>
          <a href="#" className="text-white text-sm font-inter tracking-widest uppercase hover:opacity-70 transition-opacity">Journal</a>
        </div>

        {/* Left Side: Mobile Hamburger Button */}
        <div className="flex md:hidden items-center w-1/3">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:opacity-70 transition-opacity"
          >
            {menuOpen ? (
              // Close (X) Icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Hamburger Icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center w-1/3">
          <a href="#" className="text-[#A6A6A6] font-cormorant text-xl md:text-3xl tracking-[0.7em] uppercase flex flex-col ">
            Dubai <span className="text-[12px] tracking-[0.4em] -ml-3 text-center"> Collection</span>
          </a>
        </div>

        {/* Right Side: Icons (Search, Cart) */}
        <div className="flex items-center justify-end gap-4 md:gap-5 w-1/3">
          <button className="text-white hover:opacity-70 transition-opacity">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <button className="text-white hover:opacity-70 transition-opacity relative">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-10">
          <a href="#" className="text-white text-xl font-inter tracking-widest uppercase hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="#" className="text-white text-xl font-inter tracking-widest uppercase hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#" className="text-white text-xl font-inter tracking-widest uppercase hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>Journal</a>
        </div>
      </div>
    </>
  );
}