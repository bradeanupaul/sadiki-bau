'use client';
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative bg-white w-full h-[700px] flex flex-col justify-between overflow-hidden">

      {/* ✅ Wrapper general cu text + imagine */}
      <div className="w-[90%] md:w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch h-full relative z-10">

        {/* TEXT */}
        <div data-aos="fade-down" className="flex flex-col justify-center mt-[-200px] md:mt-0">
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

        {/* ✅ IMAGINE pe desktop */}
        <div data-aos="fade-up" className="mx-auto hidden md:block max-w-[800px] h-full">
          <Image
            src="/images/sadiki-hero.png"
            alt="hero"
            width={800}
            height={800}
            className="w-full h-full object-contain object-bottom"
            priority
          />
        </div>
      </div>

      {/* ✅ IMAGINE pe mobil – absolut jos, mai mare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:hidden w-[400px] h-[300px] z-0">
        <Image
          src="/images/sadiki-hero.png"
          alt="hero"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>


    </div>
  );
};

export default Hero;
