import Contact from '@/components/home/contact/contact';
import Footer from '@/components/home/footer/footer';
import Hero from '@/components/home/hero/hero';
import Separator from '@/components/home/separator/separator';
import Image from '@/components/home/image/image'
import Steps from '@/components/home/steps/steps';
import Testimonials from '@/components/home/testimonials/testimonials';
import FuhrparkPage from '@/components/home/fuhrpark/fuhrpark';
import React from 'react'
import ScrollToTop from '@/components/helper/scrolltotop';

const Fuhrpark = () => {
    return <div className="overflow-hidden">
        <Hero />
        <Separator />
        <FuhrparkPage />
        <Steps />
        <Image />
        <Testimonials />
        <Contact />
        <Footer />
        <ScrollToTop />
    </div>;
};

export default Fuhrpark