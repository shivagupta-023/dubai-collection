export default function OurBrand() {
  const leftFeatures = [
    {
      title: "CHOOSE SCENT",
      desc: "The advisory team is always ready to join you on a journey of discovery to find your own unique scent.",
      image: "/SimplePro/pic1.jpeg" 
    },
    {
      title: "EXPERIENCE MIXING",
      desc: "One of the favorite experiences at Morta is the process of mixing perfume right at the store.",
      image: "/SimplePro/pic2.jpeg" 
    },
  ];

  return (
    <section className="bg-[#fcfbfc] py-12 md:py-20 overflow-hidden">
      <div className="w-full flex flex-col md:flex-row">
        
        {/* Left Column - Mobile ke liye px-5 add kiya taaki content screen se na chipke */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end px-5 md:px-8 lg:px-12">
          {/* Mobile pe gap-12 ki jagah gap-8 kiya aur margin bottom kam kiya */}
          <div className="w-full max-w-[600px] flex flex-col gap-8 md:gap-16 mb-12 md:mb-0">
            <h2 className="font-cormorant text-2xl md:text-3xl tracking-[0.15em] uppercase text-[#1a1a1a] text-left">
              YOUR OWN MARK!
            </h2>
            
            <div className="flex flex-col gap-10 md:gap-10">
              {leftFeatures.map((feature, i) => (
                <div 
                  key={i} 
                  className={`flex flex-col gap-4 md:gap-10 items-start justify-between ${
                    i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Small Images - h-[40vh] hatakar w-full aur aspect-[4/3] rakha taaki mobile pe perfect ratio aaye */}
                  <div className="w-full md:w-[200px] aspect-[4/3] md:h-[40vh] bg-[#e8e8e8] flex-shrink-0">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Text Content */}
                  <div className="pt-1 flex-1">
                    <p className="font-inter text-[12px] md:text-[11px] tracking-wide text-[#1a1a1a] uppercase mb-1.5 md:mb-2.5 font-medium">
                      {feature.title}
                    </p>
                    {/* max-w-[220px] sirf desktop pe rakha hai, taaki mobile pe text theek se flow ho */}
                    <p className="font-inter text-[13px] md:text-[12px] text-[#666] leading-[1.6] md:leading-[1.8] md:max-w-[450px]">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Mobile pe padding left (pl) zero rakhi taaki consistency aaye */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 pl-0 md:pl-10 lg:pl-16 pr-0">
          
          {/* Big Vertical Image - Mobile pe height [50vh] ya standard 400px behtar rehti hai */}
          <div className="w-full h-[50vh] md:h-[100vh] bg-[#e8e8e8]">
            <img 
              src="/SimplePro/pic3.jpeg" 
              alt="Personalized Bottle" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Text Below Big Image - Mobile ke liye px-5 lagaya (waisa hi jaisa left column mein tha) */}
          <div className="px-5 md:px-0 md:pr-8 pb-4">
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