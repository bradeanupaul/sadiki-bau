"use client";
import React from "react";
import { LuCompass, LuFileText, LuBuilding2 } from "react-icons/lu";

const SectionSteps = () => {
  return (
    <section className="bg-[#121212] text-white py-28 px-4">
      <div className="w-[90%] md:w-[80%] xl:w-[70%] mx-auto">
        {/* Titlu */}
        <div className="text-center space-y-3" data-aos="fade-up">
          <h2 className="text-xl md:text-2xl font-bold text-red-700">
            Von der Vision zur Realität – Wir begleiten Sie bei jedem Schritt
          </h2>
          <p className="text-[#737373] text-base md:text-lg max-w-3xl mx-auto">
            Individuelle Beratung, professionelle Planung und nahtlose Umsetzung – alles aus einer Hand.
          </p>
        </div>

        {/* Pași */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 text-left">
          {[
            {
              Icon: LuCompass,
              title: "Wir beraten Sie persönlich!",
              desc: "Wir helfen Ihnen, Ihr Projekt erfolgreich umzusetzen. Nur mit fachkundiger Beratung kann aus einem durchdachten Projekt ein Traumhaus werden.",
              delay: 0,
            },
            {
              Icon: LuFileText,
              title: "Planung, Gestaltung, Kosten",
              desc: "Wir entwerfen und planen Ihr Traumhaus. Unsere langjährige Erfahrung in der Baubranche ist Ihr Vorteil!",
              delay: 100,
            },
            {
              Icon: LuBuilding2,
              title: "Verwirklichen Sie Ihr Traumhaus",
              desc: "Wir organisieren und koordinieren alle Bauaktivitäten! Sie erhalten alles aus einer Hand.",
              delay: 200,
            },
          ].map(({ Icon, title, desc, delay }, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 group"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              <div className="flex items-center gap-3">
                <Icon className="text-red-600 text-4xl min-w-[24px] group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-white text-base">{title}</h3>
              </div>
              <p className="text-sm text-gray-300 pl-7">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSteps;
