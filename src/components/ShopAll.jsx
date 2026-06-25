import React, { useRef, useEffect, useState } from 'react';

const collectionsData = [
  {
    id: "men",
    title: "MEN COLLECTION",
    products: [
      { id: "m1", name: "Tweed", type: "Extrait", size: "50ml", price: "₹1999", image: "/forman/tweed.png" },
      { id: "m2", name: "Saviour", type: "Extrait", size: "50ml", price: "₹1999", image: "/forman/saviour.png" },
      { id: "m3", name: "Rome", type: "Extrait", size: "50ml", price: "₹1999", image: "/forman/rome.png" },
      { id: "m4", name: "Invincible", type: "Extrait", size: "50ml", price: "₹1999", image: "/forman/invincible.png" },
      { id: "m5", name: "Intensely Strong", type: "Extrait", size: "50ml", price: "₹1999", image: "/forman/intensely.png" },
      { id: "m6", name: "Ice Lust", type: "Extrait", size: "50ml", price: "₹1999", image: "/forman/ice.png" },
      { id: "m7", name: "Erba", type: "Extrait", size: "50ml", price: "₹1999", image: "/forman/ebra.png" },
      { id: "m8", name: "Club Absolute", type: "Extrait", size: "50ml", price: "₹1999", image: "/forman/club.png" },
      { id: "m9", name: "Can't Imagine", type: "Extrait", size: "50ml", price: "₹1999", image: "/forman/cant.png" },
      { id: "m10", name: "Aqua 6", type: "Extrait", size: "50ml", price: "₹1999", image: "/forman/aqua.png" }
    ]
  },
  {
    id: "women",
    title: "WOMEN COLLECTION",
    products: [
      { id: "w1", name: "Boutique", type: "Extrait", size: "50ml", price: "₹1999", image: "/forwomen/boutique.png" },
      { id: "w2", name: "Goddess", type: "Extrait", size: "50ml", price: "₹1999", image: "/forwomen/goodess.png" },
      { id: "w3", name: "Liberty", type: "Extrait", size: "50ml", price: "₹1999", image: "/forwomen/liberty.png" },
      { id: "w4", name: "Madame", type: "Extrait", size: "50ml", price: "₹1999", image: "/forwomen/madame.png" },
      { id: "w5", name: "Marshmallow", type: "Extrait", size: "50ml", price: "₹1999", image: "/forwomen/marshmallow.png" },
      { id: "w6", name: "Paradoxe", type: "Extrait", size: "50ml", price: "₹1999", image: "/forwomen/paradoxe.png" },
      { id: "w7", name: "Pure Vanilla", type: "Extrait", size: "50ml", price: "₹1999", image: "/forwomen/pure.png" }
    ]
  }
];

// Intersection Observer hook — fires once when element enters viewport
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

const CollectionSlider = ({ title, products }) => {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const [headerRef, headerInView] = useInView();
  const [cardsRef, cardsInView] = useInView(0.05);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="flex flex-col mb-10 md:mb-12">
      {/* Header — slides in from left & right on scroll */}
      <div
        ref={headerRef}
        className={`flex items-center justify-between mb-5 px-4 md:px-8 max-w-350 mx-auto w-full transition-all duration-700 ease-out ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h2
          className={`font-inter text-sm md:text-base tracking-[0.15em] text-[#1a1a1a] uppercase font-medium transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
          }`}
        >
          {title}
        </h2>
        <a
          href={`/collections/${title.split(' ')[0].toLowerCase()}`}
          className={`font-inter text-[11px] md:text-[12px] tracking-widest uppercase text-[#666] hover:text-[#1a1a1a] border-b border-transparent hover:border-[#1a1a1a] transition-all duration-300 pb-0.5 ${
            headerInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
          }`}
          style={{ transitionDelay: headerInView ? '150ms' : '0ms' }}
        >
          All Products
        </a>
      </div>

      {/* Products Horizontal Scroll */}
      <div className="w-full overflow-hidden" ref={cardsRef}>
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className="flex overflow-x-auto gap-4 md:gap-6 px-4 md:px-8 pb-4 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col items-center min-w-50 md:min-w-60 snap-center group select-none transition-all duration-700 ease-out ${
                cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: cardsInView ? `${index * 80}ms` : '0ms' }}
            >
              {/* Product Image Box */}
              <div className="w-full h-[280px] md:h-[320px] bg-[#f8f8f8] mb-4 flex justify-center items-center overflow-hidden transition-shadow duration-500 group-hover:shadow-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[80%] object-contain mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-108 pointer-events-none"
                  style={{ transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                />
              </div>

              {/* Product Details — subtle fade-up after image */}
              <h3
                className={`font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-medium mb-1 hover:text-gray-600 transition-all duration-500 cursor-pointer capitalize ${
                  cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: cardsInView ? `${index * 80 + 200}ms` : '0ms' }}
              >
                {product.name}
              </h3>
              <p
                className={`font-inter text-[11px] md:text-[12px] text-[#666] mb-2 transition-all duration-500 ${
                  cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: cardsInView ? `${index * 80 + 260}ms` : '0ms' }}
              >
                {product.size} - {product.type}
              </p>
              <p
                className={`font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-medium mb-3 transition-all duration-500 ${
                  cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: cardsInView ? `${index * 80 + 320}ms` : '0ms' }}
              >
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ShopCollections() {
  const [sectionRef, sectionInView] = useInView(0.05);

  return (
    <section
      ref={sectionRef}
      className={`bg-white py-10 md:py-16 overflow-hidden transition-opacity duration-700 ease-out ${
        sectionInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {collectionsData.map((collection) => (
        <CollectionSlider
          key={collection.id}
          title={collection.title}
          products={collection.products}
        />
      ))}
    </section>
  );
}
