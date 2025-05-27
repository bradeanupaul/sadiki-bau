"use client";
import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
    openNav: () => void;
};

const Nav = ({ openNav }: Props) => {

    const [navBg, setNavBg]=useState(false);

    useEffect(()=>{
        const handler = () => {
            if(window.scrollY >= 90) setNavBg(true);
            if(window.scrollY < 90) setNavBg(false);
        };

        window.addEventListener("scroll", handler);

        return () => window.removeEventListener("scroll", handler);
    }, []);

    return <div className={`transition-all ${navBg ? "bg-[#121212]":"bg-white"} duration-200 h-[10vh] z-[100] fixed w-full`}>
        <div className="flex items-center h-full justify-between w-[80%] xl:w-[70%] mx-auto">
            {/* Logo */}
            <div className="flex items-center space-x-2">
            <>
            {/* Mobil: logo roșu pătrat */}
            <img
                src="/images/sadiki-logo-red.png"
                alt="Sadiki Red Logo"
                className="block lg:hidden w-[48px] h-[48px]"
            />

            {/* Desktop: logo alb/negru în funcție de scroll */}
            <img
                src={navBg ? "/images/sadiki-white-logo.png" : "/images/sadiki-black-logo.png"}
                alt="Sadiki Logo"
                className="hidden lg:block max-w-[175px] w-full h-auto"
            />
            </>


            </div>
            {/* NavLinks */}
            <div className="hidden lg:flex items-center space-x-5 uppercase">
                {NavLinks.map((link) => (
                    <Link
                    href={link.url}
                    key={link.id}
                    className={`text-sm px-4 py-1 rounded-full transition-all duration-200 ${
                        navBg
                        ? "bg-white text-black hover:bg-red-800 hover:text-white btn-hover-wipe"
                        : "bg-red-800 text-white hover:bg-black btn-hover-wipe"
                    }`}
                    >
                    <p>{link.label}</p>
                    </Link>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-5">
                {/* 1st button about us */}
                <a
                    href="#about"
                    className={`btn-hover-wipe uppercase text-sm px-4 py-1 border rounded-full transition-all duration-200 ${
                        navBg
                        ? "text-white border-white hover:text-red-800 hover:border-red-800 btn-hover-wipe"
                        : "text-red-800 border-red-800 hover:text-black hover:border-black btn-hover-wipe"
                    }`}
                    >
                    Über uns
                </a>
                <a
                    href="#contact"
                    className={`uppercase text-sm px-4 py-1 border rounded-full transition-all duration-200 ${
                        navBg
                        ? "text-white border-white hover:text-red-800 hover:border-red-800"
                        : "text-red-800 border-red-800 hover:text-black hover:border-black"
                    }`}
                    >
                    Kontakt
                </a>
            </div>
            {/* BurgerMenu */}
            <HiBars3BottomRight
                onClick={openNav}
                className={`w-8 h-8 cursor-pointer lg:hidden transition-colors duration-200 ${
                    navBg ? "text-white hover:text-red-800" : "text-black hover:text-red-800"
                }`}
            />
        </div>
    </div>;
};

export default Nav


