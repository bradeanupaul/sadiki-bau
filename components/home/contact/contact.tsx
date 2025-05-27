"use client";

import React, { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    nachname: "",
    email: "",
    nachricht: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://hook.eu2.make.com/i3qm8fu3xreyd4klm9os43rlex309v4b",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        setMessage("Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.");
        setForm({
          name: "",
          nachname: "",
          email: "",
          nachricht: "",
        });
      } else {
        setMessage("Fehler beim Senden. Bitte versuchen Sie es erneut.");
      }
    } catch (err) {
      setMessage("Serverfehler. Bitte versuchen Sie es später noch einmal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full py-26 bg-white">
      <div className="w-[85%] md:w-[80%] xl:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT: Image */}
        <div
          className="lg:col-span-4 self-center max-h-[360px] max-w-[360px] overflow-hidden rounded-xl"
          data-aos="fade-right"
        >
          <Image
            src="/images/haus1.jpg"
            alt="Haus"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* MIDDLE: Form */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-4 flex flex-col gap-4 self-center"
          data-aos="fade-up"
        >
          <div>
            <label className="text-sm font-medium text-gray-800">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Wert"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl px-3 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-800">Nachname</label>
            <input
              name="nachname"
              type="text"
              placeholder="Wert"
              value={form.nachname}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl px-3 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-800">E-Mail</label>
            <input
              name="email"
              type="email"
              placeholder="Wert"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl px-3 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-800">Nachricht</label>
            <textarea
              name="nachricht"
              placeholder="Wert"
              rows={4}
              value={form.nachricht}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl px-3 py-2 text-sm"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            aria-label="Formular absenden"
            className="text-sm w-fit bg-red-800 text-white px-6 py-2 rounded-2xl hover:bg-black transition-all uppercase disabled:opacity-60 disabled:cursor-not-allowed btn-hover-wipe"
            disabled={loading}
          >
            {loading ? "Wird gesendet..." : "Absenden"}
          </button>

          {message && (
            <p className={`text-sm mt-2 ${message.startsWith("Vielen") ? "text-red-800" : "text-red-800"}`}>
              {message}
            </p>
          )}
        </form>

        {/* RIGHT: Text */}
        <div
          className="lg:col-span-4 space-y-4 self-center"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-bold text-red-700 leading-tight uppercase">
            Lassen Sie uns gemeinsam <br /> etwas Großartiges schaffen
          </h2>
          <h3 className="text-lg font-semibold text-gray-800">
            Sie haben ein Projekt im Kopf? Wir helfen Ihnen gerne.
          </h3>
          <p className="text-sm text-[#333]">
            Egal, ob Sie bei null anfangen oder Unterstützung für ein laufendes Bauprojekt benötigen – unser erfahrenes Team steht Ihnen zur Seite. Bei Sadiki Bau legen wir Wert auf Arbeit, die präzise, langlebig und individuell auf Ihre Bedürfnisse zugeschnitten ist.
          </p>
          <p className="text-sm text-[#333]">
            Füllen Sie das Formular aus und teilen Sie uns mit, wie wir Ihnen helfen können. Wir melden uns umgehend mit Antworten, Lösungen oder einem kostenlosen Beratungsgespräch – denn gute Ergebnisse beginnen mit einem guten Gespräch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
