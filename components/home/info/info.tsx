import Image from "next/image";
import React from "react";
import { LuUserCheck, LuPackageCheck, LuClock } from "react-icons/lu";

const Info = () => {
  return (
    <section id="more" className="bg-white w-full py-28">
      <div className="w-[80%] md:w-[75%] xl:w-[65%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Text Content */}
        <div className="lg:col-span-5" data-aos="fade-right">
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-2">
            Warum uns Hausbesitzer vertrauen
          </h2>
          <h3 className="text-[#5d5d5d] text-lg font-semibold mb-4">
            Handwerkskunst. Engagement. Kundenorientiertes Bauen.
          </h3>
          <p className="text-[#121212] text-sm mb-2 leading-relaxed">
            Bei Sadiki Bau bringen wir über 35 Jahre praktische Erfahrung in jedes Projekt ein. Ob wir ein neues Zuhause von Grund auf bauen oder einen bestehenden Raum umgestalten – unser Team aus erfahrenen Fachleuten liefert Ergebnisse, die Erwartungen übertreffen.
          </p>
          <p className="text-[#121212] text-sm mb-2 leading-relaxed">
            Von der ersten Beratung bis zum letzten Nagel arbeiten wir eng mit unseren Kunden zusammen, um Transparenz, Qualität und Zufriedenheit in jedem Schritt zu gewährleisten. Unsere Liebe zum Detail, unsere Leidenschaft für den Bau und unser Ruf für Zuverlässigkeit machen uns zur vertrauenswürdigen Wahl für Hausbesitzer in ganz Österreich.
          </p>
          <p className="font-bold text-[#121212] text-lg mt-4">
            Lassen Sie uns gemeinsam etwas Dauerhaftes schaffen.
          </p>
        </div>

        {/* Icons & Images */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          {/* Icons */}
          <div
            className="w-full flex flex-col sm:flex-row gap-6 border-b border-red-800 pb-6"
            data-aos="fade-up"
          >
            {[{
              icon: <LuUserCheck className="w-7 h-7 text-red-800 group-hover:scale-110 transition-transform duration-300" />,
              value: "100%",
              title: "Zufriedenheit der Kunden",
              desc: "Wir bauen mehr als nur Gebäude – wir schaffen Vertrauen."
            },
            {
              icon: <LuPackageCheck className="w-7 h-7 text-red-800 group-hover:scale-110 transition-transform duration-300" />,
              value: "500+",
              title: "Abgeschlossene Projekte",
              desc: "Von Renovierungen bis Großbauten – wir setzen alles um."
            },
            {
              icon: <LuClock className="w-7 h-7 text-red-800 group-hover:scale-110 transition-transform duration-300" />,
              value: "35+",
              title: "Jahre Erfahrung",
              desc: "Bewährte Spitzenleistung im Bau und in der Renovierung – von Anfang an."
            }].map((item, i) => (
              <div key={i} className="text-center flex flex-col items-center gap-2 w-full max-w-sm group">
                <div className="flex items-center gap-2">
                  {item.icon}
                  <p className="text-3xl font-light text-red-800">{item.value}</p>
                </div>
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-sm text-[#121212] text-center">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="zoom-in-up">
            {["haus1.jpg", "haus2.jpg"].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-md group">
                <Image
                  src={`/images/${src}`}
                  alt={`Haus ${i + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
