"use client";
import React, { useEffect } from 'react'
import Hero from './hero/hero';
import Info from './info/info'
import Separator from './separator/separator';
import Steps from './steps/steps';
import Image from './image/image';
import Description from './description/description'
import Testimonials from './testimonials/testimonials'
import Contact from './contact/contact'
import Footer from './footer/footer'
import ScrollToTop from '../helper/scrolltotop';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(()=> {
        const initAOS = async() => {
            await import("aos");
            AOS.init({
                duration: 1000,
                easing: "ease",
                once: true,
                anchorPlacement: "top-bottom",
            });
        };

        initAOS();

    }, []);

    return (
    <div className="overflow-hidden">
        <Hero />
        <Separator />
        <Info />
        <Steps />
        <Image />
        <Description />
        <Testimonials />
        <Contact />
        <Footer />
        <ScrollToTop />
    </div>
    );
};

export default Home