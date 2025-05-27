import React from "react";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-12">
      <div className="w-[80%] md:w-[70%] xl:w-[60%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-9 text-center md:text-left items-center">
        {/* Col 1: Logo + Copyright */}
        <div className="flex flex-col items-center md:items-center gap-2">
          <Image
            src="/images/sadiki-white-logo.png"
            alt="Sadiki Bau Logo"
            width={250}
            height={125}
            className="object-contain"
          />
          <p className="text-sm font-bold">© 2025 Sadiki Bau GmbH</p>
          <p className="text-sm font-bold">Alle Rechte vorbehalten.</p>
          <p className="text-sm text-gray-400">
            <span className="hover:text-white cursor-pointer">Datenschutz</span>{" "}
            |{" "}
            <span className="hover:text-white cursor-pointer">Haftungsausschluss</span>
          </p>
        </div>

        {/* Col 2: Text CTA */}
        <div className="flex flex-col text-center items-center gap-4">
          <p className="text-lg font-semibold">Bereit für Ihr nächstes Bauprojekt?</p>
          <p className="text-sm text-gray-300 max-w-[400px]">
            Wir unterstützen Sie mit fachkundiger Beratung und zuverlässiger Umsetzung von Anfang bis Ende.
          </p>
          <p className="text-sm text-red-600 font-medium">
            Nehmen Sie noch heute Kontakt mit uns auf!
          </p>
          <div className="flex gap-4">
            <a href="#more" className="bg-white text-black px-4 py-1.5 rounded-full text-sm hover:bg-red-800 hover:text-white transition btn-hover-wipe">
              Mehr erfahren
            </a>
            <a href="#contact" className="border border-white px-4 py-1.5 rounded-full text-sm hover:border-red-800 hover:text-red-800 transition btn-hover-wipe">
              Kontakt
            </a>
          </div>
        </div>

        {/* Col 3: Contact Info */}
        <div className="flex flex-col items-center md:items-center gap-2">
          <p className="text-lg font-semibold">Kontakt</p>
          <p className="text-sm">Adresse: Musterstraße 1, 1010 Wien, Österreich</p>
          <p className="text-sm">
            Telefon: <span className="text-red-600">+43 123 456 789</span>
          </p>
          <p className="text-sm">
            E-Mail: <span className="text-red-600">office@sadiki-bau.at</span>
          </p>
          <div className="flex gap-4 mt-2 text-xl">
            <FaXTwitter className="hover:text-red-600 cursor-pointer" />
            <FaInstagram className="hover:text-red-600 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
            <FaLinkedinIn className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
