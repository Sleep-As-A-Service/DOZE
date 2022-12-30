import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Question from "./Question.jsx";

function Questionnaire() {
    // currentQuestion is a number that corresponds to an index in the answers array
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // answers is an array of objects [{questionName: score}]
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
        // OBJECT DECONSTRUCT EVENT.TARGET TO GRAB NAME AND VALUE
        const { name, value } = event.target;
        // CLONE ANSWERS STATE ARRAY SO NOT DIRECTLY MUTATING STATE
        const newArr = [...answers];
        newArr[currentQuestion] = { [name] : value };
        setAnswers(newArr);
        // console.log('totalscore', answers);
    }
    function handleSubmit(event) {
        console.log('submitted');
        // NEED TO ADD LOGIC HERE TO HANDLE SUBMITTING THE FINISHED FORM
        // REQ.BODY OF POST SHOULD BE ANSWERS ARRAY AND USER ID
    }
    function handleNext() {
        console.log('next');
        // INCREMENT CURRENTQUESTION TO ACCESS NEXT QUESTION BY INDEX IN ARRAY OF QUESTIONS
        setCurrentQuestion(currentQuestion + 1);
        // RESET FORM WHEN CLICKING NEXT BUTTON SO NOTHING IS ALREADY CHECKED
        document.getElementById('questionForm').reset();
    }
    // function handlePrev() {
    //     console.log('prev');
    //     setCurrentQuestion(currentQuestion - 1);
    // }

    // JUST FOR VISUALS/TESTING
    const sum = answers.reduce((acc, curr) => {
        return acc + parseInt(Object.values(curr)[0], 10);
      }, 0);


  return (
    <form id="questionForm" onSubmit={handleSubmit}>
        <div>Sum: {sum}</div>
        <Question
            question={questions[currentQuestion]}
            index={currentQuestion}
            handleChange={handleChange}
        />
        {/* 
        COULDN'T FIGURE OUT GOOD WAY TO IMPLEMENT PREVIOUS, WASN'T ABLE TO SAVE ANSWERS AS I WENT
        {currentQuestion > 0 && (
            <button type="button" onClick={handlePrev}>
                Previous
            </button>
            )} */}
        {currentQuestion < questions.length - 1 && (
            <button type="button" onClick={handleNext}>
            Next
            </button>
        )}
        {currentQuestion === questions.length - 1 && (
            <button type="submit">Submit</button>
        )}
    </form>
  );
}



export default Questionnaire;