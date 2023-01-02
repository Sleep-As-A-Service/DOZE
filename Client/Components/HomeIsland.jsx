import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {HiOutlineMagnifyingGlass, RiZzzFill, VscNotebook} from 'react-icons';
import React, { useEffect, useState } from "react";

const HomeIsland = () => {
    const divData = [
        {icon: <RiZzzFill />, text: 'Assess your sleep quality'},
        {icon: <VscNotebookRiZzzFill/>, text: 'Go to your journal'},
        {icon: <HiOutlineMagnifyingGlass />, text: 'See your data'},
    ];
  return (
    <div>

    </div>
  )
}

export default HomeIsland
