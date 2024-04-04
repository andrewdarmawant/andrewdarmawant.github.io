import React from "react";
import Navbar from "../component/Navbar";
import HeroImg from "../component/Heroimg";
import Footer from "../component/Footer";
import Work from "../component/Work";

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroImg />
            <Work/>
            <Footer />
        </div>
    )
};

export default Home;