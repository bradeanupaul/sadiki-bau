import React from "react";
import Image from "next/image";

const carImages = [
  "car1.jpg", "car2.jpg", "car3.jpg", "car4.jpg",
  "car5.jpg", "car6.jpg", "car7.jpg", "car8.jpg",
];

const FuhrparkSection = () => {
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
          src="/images/car-icon.png" 
          alt="Background Symbol"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 w-[85%] md:w-[80%] xl:w-[70%] mx-auto">
        {/* Titlu + descriere */}
        <div className="mb-12 text-left" data-aos="fade-right">
          <h2 className="text-xl md:text-2xl font-bold text-red-700 mb-1">Unser Fuhrpark</h2>
          <p className="text-sm md:text-base text-[#121212]">
            <span className="font-semibold">Moderne Ausrüstung für effiziente Ausführung</span><br />
            Unser umfangreicher Fuhrpark an modernen Baufahrzeugen und Geräten ermöglicht es uns,
            schneller, sicherer und effizienter zu arbeiten. Vom Aushub bis zum Materialtransport setzen wir
            auf erstklassige Maschinen, um Ihr Projekt reibungslos und termingerecht umzusetzen.
          </p>
        </div>

        {/* Galerie de imagini cu animații individuale */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {carImages.map((img, i) => (
            <div
              key={i}
              className="rounded-md overflow-hidden group"
              data-aos="zoom-in"
              data-aos-delay={i * 100} // Delay progresiv
            >
              <Image
                src={`/images/${img}`}
                alt={`Car ${i + 1}`}
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
          data-aos-delay="200"
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

          {/* CTA */}
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

export default FuhrparkSection;
