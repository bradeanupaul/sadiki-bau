"use client";
import React from "react";
import Image from "next/image";

const ImageOverlay = () => {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      {/* Imagine fundal */}
      <Image
        src="/images/background-image.png"
        alt="Hero Haus"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Overlay semi-transparent */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Conținut */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          className="text-2xl md:text-3xl font-bold text-red-700 leading-tight max-w-4xl"
          data-aos="fade-up"
        >
          Präzise bauen. Mit <br className="hidden md:block" /> Leidenschaft renovieren.
        </h1>

        <p
          className="text-white text-lg md:text-xl mt-4 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Von der Grundlage bis zur Vollendung – wir liefern Handwerkskunst, die dem Test der Zeit standhält
        </p>

        {/* Butoane */}
        <div className="flex gap-4 mt-6" data-aos="fade-up" data-aos-delay="200">
          <a
            href="#more"
            className="bg-red-700 text-white px-6 py-2 rounded-full text-sm hover:bg-black transition btn-hover-wipe"
          >
            Mehr erfahren
          </a>
          <a
            href="#contact"
            className="border border-red-700 text-red-700 px-6 py-2 rounded-full text-sm hover:border-black hover:text-black transition btn-hover-wipe"
          >
            Kontakt
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImageOverlay;
