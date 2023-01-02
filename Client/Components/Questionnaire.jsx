import { BrowserRouter, Navigate, Route, Routes, useRevalidator } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Navigation from "../Containers/Navigation.jsx";
import Question from "./Question.jsx";

function Questionnaire() {
    // currentQuestion is a number that corresponds to an index in the answers array
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // answers is an array of objects [{questionName: score}]
    const [answers, setAnswers] = useState([]);
    const questions = [
        {
        text: 'question 1?',
        id: 'q1'
        },
        {
        text: 'question 2?',
        id: 'q2'
        },
        {
        text: 'question 3?',
        id: 'q3'
        },
        {
        text: 'question 4?',
        id: 'q4'
        }
    ];

    const sum = answers.reduce((acc, curr) => {
        return acc + parseInt(Object.values(curr)[0], 10);
    }, 0);
    

    function handleChange(event) {
        // OBJECT DECONSTRUCT EVENT.TARGET TO GRAB NAME AND VALUE
        const { id, value } = event.target;
        // CLONE ANSWERS STATE ARRAY SO NOT DIRECTLY MUTATING STATE
        const newArr = [...answers];
        newArr[currentQuestion] = { [id] : value };
        setAnswers(newArr);
        console.log('totalscore', sum);
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert('submitted', answers)
        console.log('submitted');
        // fetch('/forms', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         user: userID,
        //         answers: answers,
        //         totalScore: sum
        //     })
        //     .then((res) => res.json())
        //     .then((data) => console.log(data))
            
        // })
        // NEED TO ADD LOGIC HERE TO HANDLE SUBMITTING THE FINISHED FORM
        // REQ.BODY OF POST SHOULD BE USERID, ANSWERS ARRAY, TOTAL SCORE
    }
    function handleNext() {
        console.log('next', sum);
        // INCREMENT CURRENTQUESTION TO ACCESS NEXT QUESTION BY INDEX IN ARRAY OF QUESTIONS
        setCurrentQuestion(currentQuestion + 1);
        // RESET FORM WHEN CLICKING NEXT BUTTON SO NOTHING IS ALREADY CHECKED
        document.getElementById('questionForm').reset();
    };
    // function handlePrev() {
    //     console.log('prev');
    //     setCurrentQuestion(currentQuestion - 1);
    // }

  return (
    <div className="question-container">
        <Navigation />
        <form id="question-form" onSubmit={handleSubmit}>
            {/* <div>Sum: {sum}</div> */}
            <Question
                question={questions[currentQuestion]}
                index={currentQuestion}
                handleChange={handleChange}
            />
            {/* Attempted to implement previous button, could not get to work.
            {currentQuestion > 0 && (
                <button type="button" onClick={handlePrev}>
                    Previous
                </button>
                )} */}
            {currentQuestion < questions.length - 1 && (
                <button className="question-button" type="button" onClick={handleNext}>
                Next
                </button>
            )}
            {currentQuestion === questions.length - 1 && (
                <button className="question-button" type="submit">Submit</button>
            )}
        </form>
    </div>
    
  );
}



export default Questionnaire;
