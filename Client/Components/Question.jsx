import React, { useEffect, useState } from "react";

function Question({ question, handleChange, index }) {

    const options = [   
        {id: 'Never', name: question.id, value: 0},
        {id: 'Rarely', name: question.id, value: 1}, 
        {id: 'Sometimes', name: question.id, value: 2}, 
        {id: 'Frequently', name: question.id, value: 3},
        {id: 'Always', name: question.id, value: 4}
    ];

    return (
        <div className="question-text"> 
            <h3>{question.text}</h3>
            {
                options.map(option => (
                    <div className="radio-option" key={option.id}>
                        <input 
                        type="radio" 
                        id={option.id} 
                        name={option.name} 
                        value={option.value} 
                        onClick={handleChange} 
                        index={index} 
                        />
                            <label htmlFor={option.id}>{option.id}</label>
                    </div>
                ))
            }
        </div>
    )
}
export default Question;
