"use client";
import React from "react";
import { FaInstagram, FaYoutube, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="w-full bg-red-800 text-white py-3 px-5">
      <div className="w-[80%] md:w-[70%] mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6 sm:gap-4">
        {/* Left Text */}
        <p className="text-md hidden sm:block">
          Beratung, Planung und Umsetzung Ihres Traumhauses
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-white text-lg justify-center">
          <FaXTwitter className="hover:text-[#121212] cursor-pointer" />
          <FaInstagram className="hover:text-[#121212] cursor-pointer" />
          <FaYoutube className="hover:text-[#121212] cursor-pointer" />
          <FaLinkedinIn className="hover:text-[#121212] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
