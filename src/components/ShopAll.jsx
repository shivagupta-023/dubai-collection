import React, { useRef } from 'react';

// Collections Data (Unisex hata diya gaya hai)
const collectionsData = [
  {
    id: "men",
    title: "MEN COLLECTION",
    products: [
      { id: "m1", number: "01", name: "Oud Wood", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "m2", number: "02", name: "Savage Musk", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "m3", number: "03", name: "Aqua Marine", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "m4", number: "04", name: "Midnight Leather", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "m5", number: "05", name: "Spiced Amber", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "m6", number: "06", name: "Vetiver Blanc", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "m7", number: "07", name: "Smoky Tobacco", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "m8", number: "08", name: "Black Pepper", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
    ]
  },
  {
    id: "women",
    title: "WOMEN COLLECTION",
    products: [
      { id: "w1", number: "01", name: "Rose Vanilla", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "w2", number: "02", name: "Jasmine Bloom", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "w3", number: "03", name: "Velvet Orchid", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "w4", number: "04", name: "Peony Blush", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "w5", number: "05", name: "Sweet Cherry", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "w6", number: "06", name: "Lotus Dew", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "w7", number: "07", name: "White Lily", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "w8", number: "08", name: "Golden Freesia", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
    ]
  }
];

const CollectionSlider = ({ title, products }) => {
  // Scroll Logic Ke Liye Refs
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Mouse Down (Jab drag start ho)
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  // Mouse Leave / Up (Jab drag end ho jaye)
  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;
  };

  // Mouse Move (Jab drag ho raha ho)
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Scroll speed
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    // Spacing reduced here: mb-16 md:mb-24 se mb-10 md:mb-12 kar diya
    <div className="flex flex-col mb-10 md:mb-12">
      {/* Header Section */}
      {/* Spacing reduced here: mb-8 se mb-5 kar diya */}
      <div className="flex items-center justify-between mb-5 px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <h2 className="font-inter text-sm md:text-base tracking-[0.15em] text-[#1a1a1a] uppercase font-medium">
          {title}
        </h2>
        {/* ALL PRODUCTS Link */}
        <a 
          href={`/collections/${title.split(' ')[0].toLowerCase()}`} 
          className="font-inter text-[11px] md:text-[12px] tracking-widest uppercase text-[#666] hover:text-[#1a1a1a] border-b border-transparent hover:border-[#1a1a1a] transition-all duration-300 pb-0.5"
        >
          All Products
        </a>
      </div>

      {/* Products Horizontal Scroll Container */}
      <div className="w-full overflow-hidden">
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          // Spacing reduced here: gap-6 md:gap-10 se gap-4 md:gap-6 kar diya
          className="flex overflow-x-auto gap-4 md:gap-6 px-4 md:px-8 pb-4 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className="flex flex-col items-center min-w-[200px] md:min-w-[240px] snap-center group select-none"
            >
              {/* Product Image */}
              {/* Spacing reduced here: mb-6 se mb-4 kar diya */}
              <div className="w-full h-[280px] md:h-[320px] bg-[#f8f8f8] mb-4 flex justify-center items-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-[80%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                />
              </div>

              {/* Product Details */}
              <p className="font-inter text-[10px] text-[#888] mb-1">
                {product.number}
              </p>
              <h3 className="font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-medium mb-1 hover:text-gray-600 transition-colors cursor-pointer">
                {product.name}
              </h3>
              <p className="font-inter text-[11px] md:text-[12px] text-[#666] mb-2">
                {product.size} - {product.type}
              </p>
              <p className="font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-medium mb-3">
                {product.price}
              </p>

              {/* Add to Cart Button */}
              <button className="border border-[#e5e5e5] text-[#1a1a1a] font-inter text-[10px] md:text-[11px] tracking-widest uppercase py-2 px-6 hover:border-black hover:bg-black hover:text-white transition-all duration-300">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ShopCollections() {
  return (
    // Main section padding reduced here: py-16 md:py-24 se py-10 md:py-16 kar diya
    <section className="bg-white py-10 md:py-16 overflow-hidden">
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