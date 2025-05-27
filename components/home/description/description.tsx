import React from "react";
import Image from "next/image";

const Description = () => {
  return (
    <section id="about" className="w-full py-28 bg-white">
      <div className="w-[80%] md:w-[70%] xl:w-[65%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        
        {/* TEXT SIDE */}
        <div className="space-y-4 lg:col-span-2" data-aos="fade-right">
          <h2 className="text-2xl font-bold text-red-700">
            Unsere Arbeit in Bildern
          </h2>
          <h3 className="text-lg text-[#737373] font-semibold">
            Sehen Sie die Qualität, die uns auszeichnet
          </h3>
          <p className="text-[#121212] text-sm leading-relaxed">
            Entdecken Sie unser visuelles Portfolio und lassen Sie sich von der hochwertigen Handwerkskunst von Sadiki Bau inspirieren. 
            Von modernen Innenrenovierungen bis hin zu langlebigen und präzisen Bauprojekten zeigt unsere Galerie unser Engagement für Exzellenz bis ins kleinste Detail. 
            Jedes Bild erzählt eine Geschichte von Professionalität, Zuverlässigkeit und nachhaltigen Ergebnissen.
          </p>
          <p className="text-black font-bold text-md mt-4 leading-snug">
            Erfahren Sie, wie wir Ihre Vision zum Leben erwecken können
          </p>
          <a href="#contact"
            aria-label="Kontaktieren Sie uns"
            className="bg-red-800 text-white text-sm px-6 py-2 rounded-full hover:bg-black transition mt-2 btn-hover-wipe uppercase"
          >
            Kontaktieren Sie uns
          </a>
        </div>

        {/* IMAGE GALLERY */}
        <div className="grid grid-cols-3 gap-4 lg:col-span-3" data-aos="fade-left">
          {["haus1.jpg", "haus2.jpg", "haus3.jpg", "haus4.jpg", "haus5.jpg", "haus6.jpg"].map((img, idx) => (
            <div key={idx} className="group overflow-hidden rounded-md">
              <Image
                src={`/images/${img}`}
                alt={`Haus ${idx + 1}`}
                width={200}
                height={200}
                className="w-full aspect-[4/4] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Description;
