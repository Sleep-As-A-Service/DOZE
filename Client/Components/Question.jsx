import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Question({ question, handleChange, index }) {

    const options = [{id: 'Never', name: question.name, value: 0}, {id: 'Sometimes', name: question.name, value: 2}, {id: 'Always', name: question.name, value: 4}]

    return (
        <div>
            {options.map(option => (
                <div key={option.id}>
                <input type="radio" id={option.id} name={option.name} value={option.value} onChange={handleChange} index={index} />
                    <label htmlFor={option.id}>{option.id}</label>
                </div>
            ))}
        </div>
//         <div>
//             <div>{question.text}</div>
//             <input type="radio" id="never" name={question.name} value={0} index={index} onClick={handleChange} />
//                 <label hmtlFor="never">Never</label><br></br>
//             <input type="radio" id="sometimes" name={question.name} value={2} index={index} onClick={handleChange} />
//                 <label htmlFor="sometimes">Sometimes</label><br></br>
//             <input type="radio" id="always" name={question.name} value={4} index={index} onClick={handleChange} />
//                 <label htmlFor="always">Always</label><br></br>
//         </ div>
    );
}
export default Question;