import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Question({ question, handleChange, index }) {

    const options = [   
        {id: 'Never', name: question.name, value: 0}, 
        {id: 'Sometimes', name: question.name, value: 2}, 
        {id: 'Always', name: question.name, value: 4}
    ];

    return (
        <div>
            {
                options.map(option => (
                    <div key={option.id}>
                        <input type="radio" id={option.id} name={option.name} value={option.value} onChange={handleChange} index={index} />
                            <label htmlFor={option.id}>{option.id}</label>
                    </div>
                ))
            }
        </div>
    )
}
export default Question;