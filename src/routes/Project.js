import React from 'react';
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Heroimg2 from "../component/Heroimg2";


const Project = () => {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="PROJECTS" text="Some of my most recent works"/>
            <Footer />
        </div>
    )
};

export default Project;