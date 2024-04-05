import React, { useState, useEffect } from 'react';
import "./AboutContentStyle.css"
import {Link} from "react-router-dom"
import Macbook from "../assets/macbook.jpg"
import rubiks from "../assets/rubics.jpg"
import photo from "../assets/head-photo.jpg"
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

const Project = () => {
    const [git, setGit] = useState(false);
    const [linked, setLinked] = useState(false);
    const [mail, setMail] = useState(false);

    const toggleGit = () => setGit(!git);
    const toggleLinked = () => setLinked(!linked);
    const toggleMail = () => setMail(!mail);
    let color = 'toolbar';
    if (git) {
        color += ' black';
    } else if (linked) {
        color += ' blue'
    } else if (mail) {
        color += ' lblue'
    } else {
        color = 'toolbar def'
    }

    useEffect(() => {});

    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>Hello! I'm Andrew, a Senior from the University of Washington's Computer Science & Engineering program, where my passion for problem-solving drives me. With a curious mind, I've explored the realms of machine learning, web development, and data science through roles that range from research assistantships to software and data science internships. Each experience, whether developing product prototype at Baw Bab Technologies Inc, improving logistics at Blibli.com, or contributing to student life as a 
                    Web Development Engineer, has been a step in my journey to decode the complexities of our digital age. Get in touch with me through the form linked below.</p>
                <Link to="/contact">
                    <button className='btn'> Contact </button>
                </Link>
            </div>
            <div className='right'>
                {/* <div className='img-stack top'>
                        <img src={Macbook} className='img' alt="macbook" />
                    </div>
                    <div className='img-stack bottom'>
                        <img src={rubiks} className='img' alt="cube" />
                    </div> */}
                <div className='img-container'>
                    <div className='photoCard'>
                        <img src={photo} alt='another image of the author' loading='lazy'/>
                        <div className={color}>
                            <Link className="github" to="https://github.com/andrewdarmawant" onMouseEnter={toggleGit} onMouseLeave={toggleGit}><FaGithub size={30} style={{color:"#000"}} /> </Link>
                            <Link className="linkedin" to="https://linkedin.com/in/andrewdarmawant" onMouseEnter={toggleLinked} onMouseLeave={toggleLinked}><FaLinkedin size={30} style={{color:"#000"}} /> </Link>
                            <Link className="mail" to="mailto:adt04@cs.washington.edu?subject=Nice%20to%20Meet%20You!&body=Hey%2C%0D%0A%0D%0AI%20found%20you%20on%20your%20website!%0D%0A%0D%0A"
                            onMouseEnter={toggleMail} onMouseLeave={toggleMail}><FaMailBulk size={30} style={{color:"#000"}} /> </Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
};

export default Project;