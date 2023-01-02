import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Questionnaire from "../Components/Questionnaire.jsx";
// import '../Sass/styles.css';


const App = () => {    
    return(
        <div className = "blue">
            <Questionnaire />
        </div>
    )
}

export default App;
