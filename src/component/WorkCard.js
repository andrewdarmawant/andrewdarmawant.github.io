import React from 'react';
import "./WorkCardStyle.css";

import im1 from "../assets/brainERRp.jpg";
import im2 from "../assets/campus_map.png";
import im3 from "../assets/money_tracker.png";
import im4 from "../assets/tictactoe.jpg";
import { NavLink } from 'react-router-dom';

const WorkCard = () => {
    return (
            <div  className='pro-card'>
                    <img src={im1} alt="image"/>
                    <h2 className='pro-title'>Brain ERRp</h2>
                    <div className='pro-details'>
                        <p>This is Text</p>
                        <div className='pro-btns'>
                        {/* <NavLink to="url.com" className="btn">View</NavLink> */}
                        <NavLink to="url.com" className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>    )
};

export default WorkCard;