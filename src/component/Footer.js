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
                            <div className={hover ?'highlight github' :'github'}
                            onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                                <h4>
                                <Link to="https://github.com/andrewdarmawant">
                                    <FaGithub size={30} style={{color:"#000", marginRight:"2rem"}} /> 
                                    Browse my Github
                                </Link>
                                </h4>
                            </div>

                            <div className={hover2 ?'highlight linkedin' :'linkedin'}
                            onMouseEnter={toggleHover2} onMouseLeave={toggleHover2}>
                                <h4>
                                <Link to="https://linkedin.com/in/andrewdarmawant">
                                    <FaLinkedin size={30} style={{color:"#000", marginRight:"2rem"}} />
                                    Connect With Me
                                    </Link>
                                </h4>
                            </div>
                        </div>
                </div>
            </div>
            <p class="copyright">Copyright &copy; {(new Date().getFullYear())} </p>
        </div>
    )
};

export default Footer;