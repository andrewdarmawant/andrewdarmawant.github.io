import React, { useState } from 'react';
import "./NavbarStyles.css";
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const[color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 10) {
            setColor(true);
        }else{
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);
    
    return (
        <div className={color ? "header header-bg shadow": 'header'}>
            <Link to="/"> 
                <h1>ADT</h1>
            </Link>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li>
                    <Link to="/">Home </Link>
                </li>
                <li>
                    <Link to="/project">Project </Link>
                </li>
                <li>
                    <Link to="/about">About </Link>
                </li>
                <li>
                    <Link to="/contact">Contact </Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}> 
                {/* {click ? 
                (<FaTimes size={20} style={{color:"#767676"}}/>):
                (<FaBars size={20} style={{color:"#767676"}}/>)
                } */}
                <div id="nav-icon" className={click ? 'open' : ''} >
                    <span></span>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                </div>
            </div>
        </div>
    )
};







export default Navbar;