import Contact from '@/components/home/contact/contact';
import Footer from '@/components/home/footer/footer';
import Hero from '@/components/home/hero/hero';
import Separator from '@/components/home/separator/separator'; 
import Image from '@/components/home/image/image'
import Steps from '@/components/home/steps/steps';
import Testimonials from '@/components/home/testimonials/testimonials';
import AubenanlagenPage from '@/components/home/aubenanlagen/aubenanlagen';
import React from 'react'
import ScrollToTop from '@/components/helper/scrolltotop';

const Außenanlagen = () => {
    return <div className="overflow-hidden">
        <Hero />
        <Separator />
        <AubenanlagenPage />
        <Steps />
        <Image />
        <Testimonials />
        <Contact />
        <Footer />
        <ScrollToTop />
    </div>;
};

export default Außenanlagen