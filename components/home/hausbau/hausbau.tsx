import React from "react";
import Image from "next/image";

const hausImages = [
  "haus1.jpg", "haus2.jpg", "haus3.jpg", "haus4.jpg",
  "haus5.jpg", "haus6.jpg", "haus7.jpg", "haus8.jpg",
  "haus9.jpg", "haus10.jpg", "haus11.jpg", "haus12.jpg",
  "haus13.jpg", "haus14.jpg", "haus15.jpg", "haus16.jpg",
];

const HausbauSection = () => {
  return (
    <section className="relative bg-white py-16 px-4 w-full overflow-hidden">
      {/* Imagine fundal gri */}
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] opacity-70 z-0 pointer-events-none">
        <Image
          src="/images/sadiki-gray-logo.png"
          alt="Background Symbol"
          fill
          className="object-contain"
        />
      </div>

      {/* Icon fundal gri */}
      <div className="absolute top-10 right-10 w-[300px] h-[300px] opacity-30 z-0 pointer-events-none">
        <Image
          src="/images/haus-icon.png"
          alt="Background Symbol"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 w-[85%] md:w-[80%] xl:w-[70%] mx-auto">
        {/* Titlu + descriere */}
        <div className="mb-12 text-left" data-aos="fade-right">
          <h2 className="text-xl md:text-2xl font-bold text-red-700 mb-1">Hausbau</h2>
          <p className="text-sm md:text-base text-[#121212]">
            <span className="font-semibold">Stabile, zuverlässige Häuser mit Sorgfalt gebaut</span><br />
            Bei Sadiki Bau bieten wir hochwertige Bauleistungen im Wohnbereich, die genau auf Ihre Bedürfnisse
            zugeschnitten sind. Ob Einfamilienhaus, Reihenhaus oder Anbau – wir garantieren eine präzise Ausführung,
            langlebige Bausubstanz und einen stressfreien Bauablauf von Anfang bis Ende.
          </p>
        </div>

        {/* Galerie cu animații individuale */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {hausImages.map((img, i) => (
            <div
              key={i}
              className="rounded-md overflow-hidden group"
              data-aos="zoom-in"
              data-aos-delay={i * 75}
            >
              <Image
                src={`/images/${img}`}
                alt={`Haus ${i + 1}`}
                width={300}
                height={200}
                className="w-full h-[160px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="flex flex-col md:flex-row justify-between items-center border-t pt-10 gap-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/sadiki-black-logo.png"
              alt="Sadiki Bau Logo"
              width={450}
              height={225}
            />
          </div>

          {/* Text & CTA */}
          <div className="text-md text-left text-[#121212] max-w-xl">
            <p>
              <span className="text-red-700 font-semibold text-2xl">Interesse an einer Zusammenarbeit mit uns?</span>
            </p>
            <p className="text-sm md:text-base text-[#121212]">
              <span className="font-semibold">Kontaktieren Sie uns noch heute für eine kostenlose Beratung.</span><br />
              Lassen Sie uns Ihr Projekt mit Fachwissen, Präzision<br />
              und Engagement zum Leben erwecken.
            </p>
            <div className="mt-2">
              <a href="#contact" className="bg-red-800 text-white text-sm px-4 py-1.5 rounded-full hover:bg-black transition">
                Kontaktieren Sie uns
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HausbauSection;
