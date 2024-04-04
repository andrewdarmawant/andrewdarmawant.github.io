import React from 'react';
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Heroimg2 from "../component/Heroimg2";
import PricingCard from '../component/PricingCard';
import WorkCard from "../component/WorkCard"
const Project = () => {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="PROJECTS" text="Some of my most recent works"/>
            <WorkCard/ >
            <PricingCard />
            <Footer />
        </div>
    )
};

export default Project;