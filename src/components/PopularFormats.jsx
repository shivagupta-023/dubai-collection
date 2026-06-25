import React, { useState, useEffect, useRef } from 'react';

const formats = [
  { name: "Madame", size: "50ml", image: "/SimplePro/madame.jpeg" },
  { name: "EBRA", size: "50ml", image: "/SimplePro/erba.jpeg" },
  { name: "PURE VANILLA", size: "50ml", image: "/SimplePro/pure-vanila.jpeg" },
  { name: "ROME", size: "50ml", image: "/SimplePro/rome.jpeg" },
];

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
};

export default function PopularFormats() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [titleRef, titleInView] = useInView(0.2);
  const [cardsRef, cardsInView] = useInView(0.1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === formats.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev === formats.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? formats.length - 1 : prev - 1));

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8 border-t border-[#e8e0d0]">
      <div className="max-w-[1200px] w-full mx-auto">

        {/* Title — fade up */}
        <h2
          ref={titleRef}
          className={`font-cormorant text-xl md:text-3xl tracking-[0.15em] uppercase text-[#1a1a1a] mb-8 md:mb-12 text-center transition-all duration-700 ease-out ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Popular Formats
        </h2>

        {/* Desktop — staggered fade-up cards */}
        <div ref={cardsRef} className="hidden md:grid md:grid-cols-4 md:gap-12 md:items-end">
          {formats.map((f, i) => (
            <div
              key={f.name}
              className={`flex flex-col items-center gap-4 group cursor-pointer transition-all duration-700 ease-out ${
                cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: cardsInView ? `${i * 100}ms` : '0ms' }}
            >
              <div className="w-full aspect-3/4 bg-[#f5f5f5] overflow-hidden rounded-md transition-shadow duration-500 group-hover:shadow-md">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <p className="font-inter text-[13px] tracking-wide text-[#1a1a1a] uppercase font-medium">
                  {f.name}
                </p>
                <p className="font-inter text-[12px] text-[#666] mt-1">
                  {f.size}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile — auto slider (unchanged) */}
        <div className="block md:hidden relative w-full max-w-70 mx-auto">
          <div className="overflow-hidden w-full pb-2">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {formats.map((f) => (
                <div key={f.name} className="min-w-full flex flex-col items-center gap-4 px-2">
                  <div className="w-full aspect-3/4 bg-[#f5f5f5] overflow-hidden rounded-md">
                    <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-center px-1">
                    <p className="font-inter text-[12px] tracking-wide text-[#1a1a1a] uppercase font-medium leading-tight">{f.name}</p>
                    <p className="font-inter text-[12px] text-[#666] mt-1">{f.size}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-[40%] -left-8 z-10 bg-white/90 p-2 rounded-full shadow-md hover:bg-white active:scale-95 transition-transform"
            aria-label="Previous format"
          >
            <svg width="18" height="18" fill="none" stroke="#1a1a1a" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-[40%] -right-8 z-10 bg-white/90 p-2 rounded-full shadow-md hover:bg-white active:scale-95 transition-transform"
            aria-label="Next format"
          >
            <svg width="18" height="18" fill="none" stroke="#1a1a1a" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
