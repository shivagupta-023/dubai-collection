import { useRef, useEffect, useState } from 'react';

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

const leftFeatures = [
  { title: "CHOOSE SCENT", desc: "The advisory team is always ready to join you on a journey of discovery to find your own unique scent.", image: "/SimplePro/pic1.jpeg" },
  { title: "EXPERIENCE MIXING", desc: "One of the favorite experiences at Morta is the process of mixing perfume right at the store.", image: "/SimplePro/pic2.jpeg" },
];

export default function OurBrand() {
  const [headingRef, headingInView] = useInView(0.2);
  const [featuresRef, featuresInView] = useInView(0.1);
  const [rightImgRef, rightImgInView] = useInView(0.05);
  const [rightTextRef, rightTextInView] = useInView(0.2);

  return (
    <section className="bg-[#fcfbfc] py-12 md:py-20 overflow-hidden">
      <div className="w-full flex flex-col md:flex-row">

        {/* Left Column */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end px-5 md:px-8 lg:px-12">
          <div className="w-full max-w-[600px] flex flex-col gap-8 md:gap-16 mb-12 md:mb-0">

            {/* Heading — slide from left */}
            <h2
              ref={headingRef}
              className={`font-cormorant text-2xl md:text-3xl tracking-[0.15em] uppercase text-[#1a1a1a] text-left transition-all duration-700 ease-out ${
                headingInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              YOUR OWN MARK!
            </h2>

            {/* Feature cards — staggered fade-up */}
            <div ref={featuresRef} className="flex flex-col gap-10 md:gap-10">
              {leftFeatures.map((feature, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-4 md:gap-10 items-start justify-between transition-all duration-700 ease-out ${
                    i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                  } ${featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: featuresInView ? `${i * 150}ms` : '0ms' }}
                >
                  <div className="w-full md:w-[200px] aspect-[4/3] md:h-[40vh] bg-[#e8e8e8] flex-shrink-0 overflow-hidden group">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-1 flex-1">
                    <p className="font-inter text-[12px] md:text-[11px] tracking-wide text-[#1a1a1a] uppercase mb-1.5 md:mb-2.5 font-medium">
                      {feature.title}
                    </p>
                    <p className="font-inter text-[13px] md:text-[12px] text-[#666] leading-[1.6] md:leading-[1.8] md:max-w-[450px]">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 pl-0 md:pl-10 lg:pl-16 pr-0">

          {/* Big Image — slide from right */}
          <div
            ref={rightImgRef}
            className={`w-full h-[50vh] md:h-screen bg-[#e8e8e8] overflow-hidden transition-all duration-1000 ease-out ${
              rightImgInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <img
              src="/SimplePro/pic3.jpeg"
              alt="Personalized Bottle"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Text below big image — fade up */}
          <div
            ref={rightTextRef}
            className={`px-5 md:px-0 md:pr-8 pb-4 transition-all duration-700 ease-out ${
              rightTextInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <p className="font-inter text-[12px] md:text-[11px] tracking-wide text-[#1a1a1a] uppercase mb-1.5 md:mb-2 font-medium">
              PERSONALIZED
            </p>
            <p className="font-inter text-[13px] md:text-[12px] text-[#666] leading-[1.6] md:leading-[1.8] max-w-sm">
              Proud to be a pioneer in creating your personal mark with instant laser engraving service in just a few minutes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
