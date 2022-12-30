import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

// const questionArray = ['question 1', 'question 2', 'question 3', 'question 4'];


function Questionnaire() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const questions = [
        {
        text: 'question 1?',
        name: 'q1'
        },
        {
        text: 'question 2?',
        name: 'q2'
        },
        {
        text: 'question 3?',
        name: 'q3'
        },
        {
        text: 'question 4?',
        name: 'q4'
        }
    ];


    function handleChange(event) {
        // every time you click a new answer, it updates the state array    
 
            const { name, value } = event.target
            let newArr = [...answers]; // copying the old datas array
            newArr[currentQuestion] = { [name] : value }
            console.log('newArr', newArr)
            setAnswers(newArr);

        console.log('totalscore', answers)
    }
    function handleSubmit(event) {
        console.log('submitted')

        // NEED TO ADD LOGIC HERE TO HANDLE SUBMITTING THE FINISHED FORM
    }
    function handleNext() {
        console.log('next')
        setCurrentQuestion(currentQuestion + 1);
        // console.log('is array?', Array.isArray(answers))
    }
    function handlePrev() {
        console.log('prev')
        setCurrentQuestion(currentQuestion - 1);
    }

  return (
    <Form onSubmit={handleSubmit}>
        <Question
            question={questions[currentQuestion]}
            index={currentQuestion}
            handleChange={handleChange}
        />

        {currentQuestion > 0 && (
            <button type="button" onClick={handlePrev}>
                Previous
            </button>
            )}
        {currentQuestion < questions.length - 1 && (
            <button type="button" onClick={handleNext}>
            Next
            </button>
        )}
        {currentQuestion === questions.length - 1 && (
            <button type="submit">Submit</button>
        )}
    </Form>
  );
}

function Question({ question, handleChange, index }) {

    return (
        <div>
            <div>{question.text}</div>
            <input type="radio" id="never" name={question.name} value="0" index={1} onChange={handleChange} />
                <label hmtlFor="never">Never</label><br></br>
            <input type="radio" id="sometimes" name={question.name} value="2" index={index} onChange={handleChange} />
                <label htmlFor="sometimes">Sometimes</label><br></br>
            <input type="radio" id="always" name={question.name} value="4" index={index} onChange={handleChange} />
                <label htmlFor="always">Always</label><br></br>
        </ div>
    );
}

function Form({ children, onSubmit }) {
    return <form onSubmit={onSubmit}>{children}</form>;
}

export default Questionnaire;