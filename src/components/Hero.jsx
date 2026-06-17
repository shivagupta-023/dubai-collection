// export default function Hero() {
//   const fragrances = [
//     { name: "SANTAL VERDE", type: "Eau de Parfum" },
//     { name: "BOIS ALLIVÉ", type: "Eau de Parfum" },
//     { name: "LUMIÈRE D'OR", type: "Eau de Parfum" },
//     { name: "GRIS MALLORCA", type: "Eau de Parfum" },
//     { name: "BLANC D'ARGENT", type: "Eau de Parfum" },
//   ];

//   return (
//     <section className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center pt-20 pb-16 px-8">
//       <div className="w-full flex items-center justify-center gap-2 mb-14">
//         <span className="text-[#c8b89a] font-inter text-xs tracking-[0.25em] uppercase">discover collections</span>
//         <div className="w-24 h-px bg-[#c8b89a]"></div>
//         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="1.5">
//           <path d="M5 12h14M12 5l7 7-7 7"/>
//         </svg>
//       </div>

//       <div className="flex items-end justify-center gap-3 md:gap-5 w-full max-w-5xl">
//         {fragrances.map((f, i) => {
//           const scale = i === 2 ? "scale-110" : i === 1 || i === 3 ? "scale-100" : "scale-90";
//           return (
//             <div key={i} className={`flex flex-col items-center gap-3 transition-transform hover:scale-105 cursor-pointer ${scale}`}>
//               {/* Bottle SVG */}
//               <div className="relative flex flex-col items-center">
//                 <div className="w-3 h-6 bg-gradient-to-b from-[#c0a882] to-[#a08060] rounded-t-sm"></div>
//                 <div className="w-10 h-14 md:w-14 md:h-20 bg-gradient-to-br from-[#e8e0d4] via-[#d4c9b8] to-[#b8a88a] rounded-sm border border-[#c8b89a]/30 flex flex-col items-center justify-end pb-2 relative overflow-hidden">
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
//                   <p className="text-[5px] md:text-[6px] font-cormorant tracking-wider text-[#3a2e22] text-center font-semibold leading-tight">{f.name}</p>
//                   <p className="text-[4px] md:text-[5px] font-inter text-[#5a4e3a] text-center mt-0.5">{f.type}</p>
//                   <p className="text-[4px] md:text-[5px] font-cormorant tracking-widest text-[#3a2e22] text-center mt-1">MORTA</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }



export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#1a1a1a]">
      {/* Banner Image */}
      <img
        src="/your-banner-image.jpeg" 
        alt="Hero Banner"
        className="w-full h-full object-cover object-center"
      />
      
      {/* Optional: Agar aapko image ke upar thoda dark overlay chahiye text ke liye, to isey use kar sakte hain */}
      {/* <div className="absolute inset-0 bg-black/30"></div> */}
    </section>
  );
}