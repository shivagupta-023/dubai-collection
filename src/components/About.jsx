import { useRef, useEffect, useState } from 'react';

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
};

export default function About() {
  const [headingRef, headingInView] = useInView(0.2);
  const [mainImgRef, mainImgInView] = useInView(0.1);
  const [thumbsRef, thumbsInView] = useInView(0.1);
  const [textRef, textInView] = useInView(0.1);

  return (
    <section id="about" className="bg-[#fafafa] py-24 px-4 md:px-6">
      <div className="max-w-[1300px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

        {/* Left Column */}
        <div className="flex flex-col gap-8 md:gap-12">

          {/* Heading — fade in from left */}
          <h2
            ref={headingRef}
            className={`font-cormorant text-2xl md:text-3xl tracking-[0.15em] uppercase text-[#1a1a1a] transition-all duration-700 ease-out ${
              headingInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            About Dubai Collection
          </h2>

          {/* Main Image — fade up */}
          <div
            ref={mainImgRef}
            className={`w-full aspect-4/5 h-[40vh] md:h-[65vh] md:aspect-square bg-[#e8e8e8] overflow-hidden group transition-all duration-800 ease-out ${
              mainImgInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <img
              src="/SimplePro/about1.jpeg"
              alt="Dubai Collection Fragrance"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-10 md:pt-20">

          {/* Thumbnails — staggered fade up */}
          <div ref={thumbsRef} className="w-full flex justify-end">
            <div className="flex gap-4 w-full md:w-[65%]">
              {["about2", "about3", "about4"].map((i, index) => (
                <div
                  key={i}
                  className={`flex-1 aspect-square bg-[#e8e8e8] overflow-hidden transition-all duration-700 ease-out ${
                    thumbsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: thumbsInView ? `${index * 120}ms` : '0ms' }}
                >
                  <img
                    src={`/SimplePro/${i}.jpeg`}
                    alt={`Dubai Collection Detail ${i}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Text — each paragraph fades in one by one */}
          <div ref={textRef} className="flex flex-col gap-6 text-sm md:text-base font-inter text-[#3a3a3a] leading-[1.8]">
            {[
              { id: "p1", text: "We believe a perfume is not just a scent—it's a story, a memory, and a reflection of who you are." },
              { id: "p2", text: "At Dubai Collection, we craft fine fragrances using the highest quality ingredients, sourced from around the world. Each scent is thoughtfully composed to evoke emotion, inspire confidence, and leave a lasting impression." },
              { id: "p3", text: "Our mission is simple: to create timeless fragrances that become part of your signature." },
              { id: "p4", text: "Thank you for being part of our journey." }
            ].map(({ id, text }, index) => (
              <p
                key={id}
                className={`transition-all duration-600 ease-out ${
                  textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: textInView ? `${index * 120}ms` : '0ms' }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
