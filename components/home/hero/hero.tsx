import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="relative bg-white w-full h-[700px] flex flex-col justify-between overflow-hidden">
  <div className="w-[70%] md:w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch h-full">
    
    {/* TEXT */}
    <div data-aos="fade-down" className="flex flex-col justify-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl mt-6 mb-4 font-bold text-red-800 leading-tight">
        Präzise bauen. Mit Leidenschaft renovieren.
      </h1>
      <p className="text-base md:text-lg text-[#121212] leading-relaxed">
        Vom Fundament bis zur Fertigstellung – wir liefern Handwerkskunst, die die Zeit überdauert.
      </p>
      <div className="flex gap-4 mt-6">
        <a
          href="#more"
          className="w-fit text-sm px-3 py-1.5 rounded-full transition-all duration-200 bg-red-800 text-white hover:bg-black uppercase btn-hover-wipe"
        >
          Mehr erfahren
        </a>
        <a
          href="#contact"
          className="w-fit text-sm px-3 py-1.5 border rounded-full transition-all duration-200 text-red-800 border-red-800 hover:text-black hover:border-black uppercase btn-hover-wipe"
        >
          Kontakt
        </a>
      </div>

    </div>

    {/* IMAGINE */}
    <div data-aos="fade-up" className="mx-auto hidden md:block max-w-[600px] h-full">
      <Image
        src="/images/sadiki-hero.png"
        alt="hero"
        width={600}
        height={600}
        className="w-full h-full object-contain object-bottom"
        priority
      />
    </div>

  </div>
</div>


    );
};

export default Hero;
