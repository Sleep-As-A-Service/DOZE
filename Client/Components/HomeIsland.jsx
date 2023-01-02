import React, { useEffect, useState } from "react";

import { HiMagnifyingGlass } from 'react-icons/hi2';
import { Link } from "react-router-dom";
import { RiZzzFill } from 'react-icons/ri';
import { VscNotebook } from 'react-icons/vsc';

const HomeIsland = () => {
    const divData = [
        {icon: <RiZzzFill size={'2em'} style={{color: '#BB86FC'}}/>, text: 'Assess your sleep quality', route: "questions"},
        {icon: <VscNotebook size={'2em'} style={{color: '#BB86FC'}}/>, text: 'Go to your journal', route: "journals"},
        {icon: <HiMagnifyingGlass size={'2em'} style={{color: '#BB86FC'}}/>, text: 'See your data', route: "sleep-data"},
    ];

    const dataComponents = divData.map((data, index) => {
        return (
            <Link to={data.route}>
                <div 
                    key={index}
                    className="island-buttons"
                >
                    {data.icon}
                    {data.text}
                </div>
            </Link>
        )
    });
    
  return (
    <div className="island-container">
        {dataComponents}
    </div>
  )
}

export default HomeIsland;
