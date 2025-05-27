import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Markus H., Wien",
    date: "12. März 2025",
    title: "Professionell, pünktlich",
    text: "Sadiki Bau hat unsere Erwartungen übertroffen. Das Team war professionell, stets im Zeitplan, und die Kommunikation während des gesamten Projekts war ausgezeichnet. Unsere Haussanierung wurde ohne Verzögerungen und mit großer Sorgfalt zum Detail abgeschlossen.",
  },
  {
    name: "Elena P., Graz",
    date: "23. Februar 2025",
    title: "Hochwertige Arbeit",
    text: "Wir haben Sadiki Bau für ein gewerbliches Projekt engagiert und könnten nicht zufriedener sein. Ihre Handwerkskunst ist erstklassig, und sie sind sehr auf unsere Wünsche eingegangen. Jede Phase verlief reibungslos, und das Endergebnis spricht für sich.",
  },
  {
    name: "Thomas W., Linz",
    date: "30. Januar 2025",
    title: "Vertrauenswürdiges Team",
    text: "Es ist selten, ein Bauunternehmen zu finden, das sowohl Qualität als auch Integrität bietet. Das Team von Sadiki Bau war von Anfang an transparent, hilfsbereit und engagiert. Ich würde sie ohne Zögern jedem empfehlen, der ernsthafte Ergebnisse sucht.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#121212] py-26 w-full">
      <div className="w-[85%] md:w-[75%] xl:w-[60%] mx-auto text-center text-white space-y-4">
        {/* Header */}
        <h2 className="text-xl md:text-2xl font-semibold" data-aos="fade-up">
          Vertraut von Kunden in ganz Österreich
        </h2>
        <p
          className="text-white text-sm md:text-md max-w-2xl mx-auto"
          data-aos="fade-up"

        >
          Echte Erfahrungsberichte zufriedener Kunden, die Sadiki Bau ihre Projekte anvertraut haben.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-start">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white text-black rounded-2xl px-6 py-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"

            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 w-4 h-4" />
                ))}
              </div>

              {/* Title + Text */}
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-800 mb-6">{item.text}</p>

              {/* Avatar */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="/images/avatar.jpg"
                    alt={`Avatar von ${item.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
