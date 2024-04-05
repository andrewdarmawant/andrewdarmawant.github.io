import React from 'react';
import "./WorkCardStyle.css";

import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
    return (
            <div className='pro-card'>
                    <h2 className='pro-title'>{props.title}</h2>
                    <img src={props.imgsrc} alt="project photo"/>
                    <div className='pro-details'>
                        <p>{props.text}</p>
                        <div className='pro-btns'>
                        {/* <NavLink to="url.com" className="btn">View</NavLink> */}
                        <NavLink to={props.source} className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>    )
};

export default WorkCard;