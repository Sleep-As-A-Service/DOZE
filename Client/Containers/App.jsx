import '../Sass/styles.scss';

import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';

import Questionnaire from "../Components/Questionnaire.jsx";
import NewJournal from "../Components/NewJournal.jsx";
import Home from './Home.jsx';

const App = () => {    
    return(
        <div>
            <Routes>
                <Route 
                    path='/'
                    element={<Home />} 
                />
                <Route path='/questions' element={ <Questionnaire /> } />
                {/* <Route path='/journals' element={} />
                <Route path='/sleep-data' element={} /> */}
            </Routes>
            <NewJournal />
        </div>
    )
}

export default App;
