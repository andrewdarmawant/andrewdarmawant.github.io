import React from 'react';
import "./FooterStyle.css";
import {FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <h1>Let's get in touch</h1>
                    <div className='location'>
                        <FaHome size={30} style={{color:"#000", marginRight:"2rem"}} />
                            <div>
                                <p> Seattle, WA </p>
                            </div>
                        </div>

                        <div className='phone'>
                            <h4>
                                <FaPhone size={20} style={{color:"#000", marginRight:"2rem"}} />
                                123456789
                            </h4>
                        </div>

                        <div className='email'>
                            <h4>
                                <FaMailBulk size={20} style={{color:"#000", marginRight:"2rem"}} />
                                adt04 at cs.washington.edu
                            </h4>
                        </div>
                </div>
                <div className='right'>
                        <div className='social'>
                            <div className='github'>
                                <h4>
                                <FaGithub size={30} style={{color:"#000", marginRight:"2rem"}} />
                                https://github.com/andrewdarmawant
                                </h4>
                            </div>

                            <div className='linkedin'>
                                <h4>
                                    <FaLinkedin size={30} style={{color:"#000", marginRight:"2rem"}} />
                                    https://linkedin.com/in/andrewdarmawant
                                </h4>
                            </div>
                        </div>
                        
                </div>
            </div>
        </div>
    )
};

export default Footer;