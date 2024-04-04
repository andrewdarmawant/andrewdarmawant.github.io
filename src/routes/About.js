import React from 'react';
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Heroimg2 from '../component/Heroimg2';
import AboutContent from '../component/AboutContent'

const About = () => {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="About" text="A brief description of me"/>
            <AboutContent />
            <Footer />
        </div>
    )
};

export default About;