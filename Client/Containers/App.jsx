import '../Sass/styles.scss';

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Navigation from "./Navigation.jsx";
import Questionnaire from "../Components/Questionnaire.jsx";

const App = () => {    
    return(
        <div className = "blue">
            <Navigation />
            <Questionnaire />
        </div>
    )
}

export default App;
