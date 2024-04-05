import React, { useState } from 'react';
import "./FooterStyle.css";
import {FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {

    const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);
    const toggleHover = () => setHover(!hover);
    const toggleHover2 = () => setHover2(!hover2);

    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <h1>Let's get in touch</h1>
                    {/* <div className='location'>
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
                        </div> */}
                </div>
                <div className='right'>
                        <div className='social'>
                            <div className={hover ?'highlight' :''}
                            onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                                <h4>
                                <Link to="https://github.com/andrewdarmawant">
                                    <p><FaGithub size={30} style={{color:"#000", margin:"0.5rem 2rem 0 0"}} /> Browse my Github</p>
                                </Link>
                                </h4>
                            </div>

                            <div className={hover2 ?'highlight' :''}
                            onMouseEnter={toggleHover2} onMouseLeave={toggleHover2}>
                                <h4>
                                <Link to="https://linkedin.com/in/andrewdarmawant">
                                    <p><FaLinkedin size={30} style={{color:"#000", margin:"0.5rem 2rem 0 0"}} textAnchor='Connect With Me'/> Connect With Me</p>
                                </Link>
                                </h4>
                            </div>
                        </div>
                </div>
            </div>
            <p class="copyright">Copyright &copy; {(new Date().getFullYear())} - Andrew Darmawan Tjahjadi </p>
        </div>
    )
};

export default Footer;