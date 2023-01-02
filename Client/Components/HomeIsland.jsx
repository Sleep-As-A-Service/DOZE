import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { HiMagnifyingGlass } from 'react-icons/hi2';
import { RiZzzFill } from 'react-icons/ri';
import { VscNotebook } from 'react-icons/vsc';

const HomeIsland = () => {
    const divData = [
        {icon: <RiZzzFill size={'2em'} style={{color: '#BB86FC'}}/>, text: 'Assess your sleep quality'},
        {icon: <VscNotebook size={'2em'} style={{color: '#BB86FC'}}/>, text: 'Go to your journal'},
        {icon: <HiMagnifyingGlass size={'2em'} style={{color: '#BB86FC'}}/>, text: 'See your data'},
    ];

    const dataComponents = divData.map((data, index) => {
        return (
            <div 
                key={index}
                className="island-buttons"
            >
                {data.icon}
                {data.text}
            </div>
        )
    });
    
  return (
    <div className="island-container">
        {dataComponents}
    </div>
  )
}

export default HomeIsland;
