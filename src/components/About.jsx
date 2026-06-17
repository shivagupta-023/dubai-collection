export default function About() {
  return (
    <section id="about" className="bg-[#fafafa] py-24 px-4 md:px-6">
      {/* Container set to exact 1200px for desktop and full width for mobile */}
      <div className="max-w-[1300px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        
        {/* Left Column - Heading + Main image */}
        <div className="flex flex-col gap-8 md:gap-12">
          <h2 className="font-cormorant text-2xl md:text-3xl tracking-[0.15em] uppercase text-[#1a1a1a]">
            About Dubai Collection
          </h2>
          
          <div className="w-full aspect-[4/5] h-[40vh] md:h-[65vh] md:aspect-square bg-[#e8e8e8] overflow-hidden group">
            {/* Main Image: Aap yahan apni actual image ka path daal sakte hain */}
            <img 
              src="/ColorPro/club-intense.jpeg" 
              alt="Dubai Collection Fragrance" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Right Column - Thumbnails + Text */}
        <div className="flex flex-col gap-10 md:pt-20">
          
          {/* Thumbnails row (Aligned to top right) */}
          <div className= "w-full flex justify-end">
            <div className="flex gap-4 w- full md:w-[65%]">
              {["erbba", "marshmallow", "rome"].map((i) => (
              <div key={i} className="flex-1 aspect-square bg-[#e8e8e8] overflow-hidden">
                {/* Thumbnail Images: Yahan choti images ke paths dalenge */}
                <img 
                  src={`/ColorPro/${i}.jpeg`} 
                  alt={`Dubai Collection Detail ${i}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6 text-sm md:text-base font-inter text-[#3a3a3a] leading-[1.8] ">
            <p >
              We believe a perfume is not just a scent—it's a story, a memory, and a reflection of who you are.
            </p>
            <p >
              At Dubai Collection, we craft fine fragrances using the highest quality ingredients, sourced from around the world. Each scent is thoughtfully composed to evoke emotion, inspire confidence, and leave a lasting impression.
            </p>
            <p >
              Our mission is simple: to create timeless fragrances that become part of your signature.
            </p>
            <p >
              Thank you for being part of our journey.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}