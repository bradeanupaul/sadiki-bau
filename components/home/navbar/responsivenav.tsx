'use client';
import React, { useState } from 'react'
import MobileNav from './mobilenav';
import Nav from './nav';

const ResponsiveNav = () => {

    const [showNav, setShowNav] = useState(false);

    const openNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);

    return (
    <div>
        <Nav openNav = {openNavHandler} />
        <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
    );
};

export default ResponsiveNav;