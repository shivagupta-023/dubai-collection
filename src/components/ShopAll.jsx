// const collections = [
//   { id: 1, title: "MAN COLLECTION", image: "/man-collection.jpg" },
//   { id: 2, title: "WOMAN COLLECTION", image: "/woman-collection.jpg" },
//   { id: 3, title: "UNISEX COLLECTION", image: "/unisex-collection.jpg" },
// ];

// export default function ShopByCollection() {
//   return (
//     <section className="bg-white py-16 px-4 md:px-6">
//       {/* 1300px max-width on desktop, full width on mobile */}
//       <div className="max-w-[1300px] w-full mx-auto">
        
//         <h2 className="font-cormorant text-2xl md:text-3xl tracking-[0.15em] uppercase text-[#1a1a1a] mb-8 md:mb-12 text-left">
//           Shop By <br/>Collection
//         </h2>

//         {/* 2 Column Grid for Mobile, 3 Column Grid for Desktop */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
//           {collections.map((collection, index) => (
//             <div 
//               key={collection.id} 
//               // index === 2 means the 3rd item (Unisex). On mobile it takes 2 columns, on desktop 1 column.
//               className={`border border-[#e5e5e5] rounded-xl overflow-hidden group cursor-pointer bg-white transition-shadow hover:shadow-lg ${
//                 index === 2 ? "col-span-2 md:col-span-1" : "col-span-1"
//               }`}
//             >
//               {/* Image Section */}
//               {/* Mobile aspect ratios: Man/Woman are 4/5 (taller), Unisex is 16/9 (wider). All reset to 4/3 on desktop */}
//               <div 
//                 className={`w-full overflow-hidden bg-[#f5f5f5] ${
//                   index === 2 ? "aspect-[16/5] md:aspect-[4/3]" : "aspect-[16/9] md:aspect-[4/3]"
//                 }`}
//               >
//                 <img 
//                   src={collection.image} 
//                   alt={collection.title} 
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//               </div>
              
//               {/* Content Section - Padding & text scaled down for mobile so it fits nicely side-by-side */}
//               <div className="p-2 md:p-6 flex flex-col gap-1 md:gap-1.5">
//                 <h3 className="font-inter text-[11px] md:text-[15px] font-semibold text-[#1a1a1a] tracking-wide">
//                   {collection.title}
//                 </h3>
                
//                 <div className="flex items-center gap-1 md:gap-1.5 text-[10px] md:text-[13px] font-inter font-medium text-[#666] group-hover:text-[#1a1a1a] transition-colors">
//                   Explore Now
//                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-[14px] md:h-[14px]">
//                     <path d="M5 12h14M12 5l7 7-7 7"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//       </div>
//     </section>
//   );
// }






import React, { useRef } from 'react';

// Collections Data (Aapka existing data)
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
  },
  {
    id: "unisex",
    title: "UNISEX COLLECTION",
    products: [
      { id: "u1", number: "01", name: "Musk Mallow", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "u2", number: "02", name: "Santal Blush", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "u3", number: "03", name: "Citrus Grove", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "u4", number: "04", name: "Matcha Green", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "u5", number: "05", name: "Sea Salt & Sage", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "u6", number: "06", name: "Bergamot Breeze", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "u7", number: "07", name: "Cedarwood Spark", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
      { id: "u8", number: "08", name: "Vanilla Woods", type: "Eau de Parfum", size: "50ml", price: "₹1999", image: "/perfume-bottle.jpg" },
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
    <div className="flex flex-col mb-16 md:mb-24">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8 px-4 md:px-8 max-w-[1400px] mx-auto w-full">
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
          // 'cursor-grab' add kiya gaya hai drag feel ke liye
          className="flex overflow-x-auto gap-6 md:gap-10 px-4 md:px-8 pb-8 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              // 'select-none' add kiya hai taaki drag karte time text select na ho
              className="flex flex-col items-center min-w-[200px] md:min-w-[240px] snap-center group select-none"
            >
              {/* Product Image */}
              <div className="w-full h-[280px] md:h-[320px] bg-[#f8f8f8] mb-6 flex justify-center items-center overflow-hidden">
                {/* 'pointer-events-none' drag interfere na kare isliye image par laga diya gaya hai */}
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
              <p className="font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-medium mb-4">
                {product.price}
              </p>

              {/* Add to Cart Button */}
              <button className="border border-[#e5e5e5] text-[#1a1a1a] font-inter text-[10px] md:text-[11px] tracking-widest uppercase py-2.5 px-6 hover:border-black hover:bg-black hover:text-white transition-all duration-300">
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
    <section className="bg-white py-16 md:py-24 overflow-hidden">
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