import React from "react";
import "./HeroimgStyles.css";
import face from "../assets/Andrew-p.jpg"
import {Link} from "react-router-dom"

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={face} alt="Andrew, an Indonesian man with black hair in white shirt smiling."/>
                <div className="content">
                    <h1>Andrew Tjahjadi</h1>
                    <p>HCI Researcher + Software Engineer</p>
                    <div>
                        <Link to="/project" className="btn">Projects</Link>
                        <Link to="/contact" className="btn btn-light">contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HeroImg;