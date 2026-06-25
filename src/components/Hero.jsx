import { useState, useEffect } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  const imgStyle = {
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'scale(1)' : 'scale(1.05)',
    transition: 'opacity 1.4s ease-out, transform 2s ease-out',
  };

  return (
    <section className="relative w-full h-screen bg-[#1a1a1a] overflow-hidden">
      {/* Desktop Banner */}
      <img
        src="/desktop-banner-image.jpeg"
        alt="Hero Banner Desktop"
        className="hidden md:block w-full h-full object-cover object-center"
        style={imgStyle}
      />

      {/* Mobile Banner */}
      <img
        src="/mobile-banner-image.png"
        alt="Hero Banner Mobile"
        className="block md:hidden w-full h-full object-cover object-center"
        style={{ ...imgStyle, transitionDelay: '80ms' }}
      />
    </section>
  );
}
