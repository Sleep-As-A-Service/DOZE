import '../Sass/styles.scss';

import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';

import Home from './Home.jsx';
import Questionnaire from "../Components/Questionnaire.jsx";

const App = () => {    
    return(
        <div>
            <Routes>
                <Route 
                    path='/'
                    element={<Home />} 
                />
                <Route path='questions' element={ <Questionnaire /> } />
                {/* <Route path='journals' element={} /> */}
            </Routes>
            
        </div>
    )
}

export default App;
