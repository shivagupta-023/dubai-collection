import { useState, useEffect } from "react";

const navLinks = ["Shop", "About", "Journal"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Page load animation trigger
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-8 transition-all duration-300 ${
          isScrolled || menuOpen ? "py-4 bg-black" : "py-5 bg-transparent"
        }`}
      >
        {/* Desktop Links — slide down from top with stagger */}
        <div className="hidden md:flex items-center gap-10 w-1/3">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`text-white text-sm font-inter tracking-widest uppercase hover:opacity-70 transition-all duration-500 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
              }`}
              style={{ transitionDelay: mounted ? `${i * 80}ms` : "0ms" }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div
          className={`flex md:hidden items-center w-1/3 transition-all duration-500 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:opacity-70 transition-opacity"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Logo — fade + slide down (slight delay) */}
        <div
          className={`flex justify-center w-1/3 transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          style={{ transitionDelay: mounted ? "160ms" : "0ms" }}
        >
          <a
            href="#"
            className="text-[#A6A6A6] font-cormorant text-xl md:text-3xl tracking-[0.7em] uppercase flex flex-col"
          >
            Dubai{" "}
            <span className="text-[12px] tracking-[0.4em] -ml-3 text-center">Collection</span>
          </a>
        </div>

        {/* Icons — fade in last */}
        <div
          className={`flex items-center justify-end gap-4 md:gap-5 w-1/3 transition-all duration-500 ease-out ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: mounted ? "320ms" : "0ms" }}
        >
          <button className="text-white hover:opacity-70 transition-opacity">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
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
          {navLinks.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`text-white text-xl font-inter tracking-widest uppercase hover:opacity-70 transition-all duration-500 ease-out ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 90 + 80}ms` : "0ms" }}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
