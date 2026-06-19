import React, { useRef } from 'react';

// Collections Data (Unisex hata diya gaya hai, aur names UPPERCASE kar diye hain)
const collectionsData = [
  {
    id: "men",
    title: "MEN COLLECTION",
    products: [
      { id: "m1", number: "01", name: "TWEED", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/forman/Tweed_result.webp" },
      { id: "m2", number: "02", name: "SAVIOUR", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/forman/SAVIOUR _result.webp" },
      { id: "m3", number: "03", name: "ROME", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/forman/Rome _result.webp" },
      { id: "m4", number: "04", name: "INVINCIBLE", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/forman/INVINCIBLE _result.webp" },
      { id: "m5", number: "05", name: "INTENSELY STRONG", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/forman/intensely strong _result.webp" },
      { id: "m6", number: "06", name: "ICE LUST", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/forman/ICE LUST_result.webp" },
      { id: "m7", number: "07", name: "ERBA", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/forman/Erba_result.webp" },
      { id: "m8", number: "08", name: "CLUB INTENSE", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/forman/CLUB Intense _result.webp" },
      { id: "m9", number: "09", name: "CLUB ABSOLUTE", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/forman/Club absolute_result.webp" },
      { id: "m10", number: "10", name: "CAN'T IMAGINE", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/forman/can_t imagine_result.webp" },
      { id: "m11", number: "11", name: "AQUA 6", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/forman/Aqua 6 _result.webp" }
    ]
  },
  {
    id: "women",
    title: "WOMEN COLLECTION",
    products: [
      { id: "w1", number: "01", name: "BOUTIQUE", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/forwomen/Boutique_result.webp" },
      { id: "w2", number: "02", name: "GODDESS", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/forwomen/GODDESS_result.webp" },
      { id: "w3", number: "03", name: "LIBERTY", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/forwomen/Liberty_result.webp" },
      { id: "w4", number: "04", name: "MADAME", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/forwomen/madame_result.webp" },
      { id: "w5", number: "05", name: "MARSHMALLOW", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/forwomen/marshmallow _result.webp" },
      { id: "w6", number: "06", name: "PARADOXE", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/forwomen/paradoxe _result.webp" },
      { id: "w7", number: "07", name: "PURE VANILLA", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/forwomen/Pure vanilla _result.webp" },
      { id: "w8", number: "08", name: "PURE VANILLA", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/forwomen/pure vanilla_result.webp" }
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
    <div className="flex flex-col mb-10 md:mb-12">
      {/* Header Section */}
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
          className="flex overflow-x-auto gap-4 md:gap-6 px-4 md:px-8 pb-4 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className="flex flex-col items-center min-w-[200px] md:min-w-[240px] snap-center group select-none"
            >
              {/* Product Image */}
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
              {/* uppercase class yahan add ki hai safety ke liye */}
              <h3 className="font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-medium mb-1 hover:text-gray-600 transition-colors cursor-pointer uppercase">
                {product.name}
              </h3>
              <p className="font-inter text-[11px] md:text-[12px] text-[#666] mb-2">
                {product.size} - {product.type}
              </p>
              <p className="font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-medium mb-3">
                {product.price}
              </p>
              {/* Add To Cart button yahan se remove kar diya gaya hai */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ShopCollections() {
  return (
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