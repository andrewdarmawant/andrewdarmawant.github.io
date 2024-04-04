import React from 'react';
import "./WorkCardStyle.css";

import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';
import { NavLink } from 'react-router-dom';

const Work = () => {
    return (
        <div className='work-container'>
            <h1 className='pro-heading'>Projects</h1>
            <div className='pro-container'>
                {WorkCardData.map((val, ind) => {
                    return(
                        <WorkCard 
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        source={val.source}
                        />
                    )
                })}
            </div>
        </div>
    )
};

export default Work;