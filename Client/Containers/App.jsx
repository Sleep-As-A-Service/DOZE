import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Form from "../Components/Form.jsx";
// import Question from "../Components/Question.jsx";
import Questionnaire from "../Components/Form.jsx";
// import '../Sass/styles.css';


const App = () => {
    // const [question, setQuestion] = useState()
    
    return(
        <div className = "blue">
            <Questionnaire />
        </div>
    )
}

export default App;
