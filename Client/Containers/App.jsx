import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Questionnaire from "../Components/Questionnaire.jsx";
import NewJournal from "../Components/NewJournal.jsx";
// import '../Sass/styles.css';


const App = () => {    
    return(
        <div>
            {/* <Questionnaire /> */}
            <NewJournal />
        </div>
    )
}

export default App;
