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
        text: 'I take daytime naps lasting two or more hours.',
        id: 'q1'
        },
        {
        text: 'I go to bed at different times from day to day.',
        id: 'q2'
        },
        {
        text: 'I get out of bed at different times from day to day.',
        id: 'q3'
        },
        {
        text: 'I exercise to the point of sweating within 1 hr of going to bed.',
        id: 'q4'
        },
        {
        text: 'I stay in bed longer than I should two or three times a week.',
        id: 'q5'
        },
        {
        text: 'I use alcohol, tobacco, or caffeine within 4hrs of going to bed or after going to bed.',
        id: 'q6'
        },
        {
        text: 'I do something that may wake up before bedtime (for example: play video games, use the internet, or clean).',
        id: 'q7'
        },
        {
        text: 'I go to bed feeling stressed, angry, upset, or nervous.',
        id: 'q8'
        },
        {
        text: 'I use my bed for things other than sleeping or sex (for example: watch television, read, eat, or study).',
        id: 'q9'
        },
        {
        text: 'I sleep on an uncomfortable bed (for example: poor mattress or pillow, too much or not enough blankets).',
        id: 'q10'
        },
        {
        text: 'I sleep in an uncomfortable bedroom (for example: too bright, too stuffy, too hot, too cold, or too noisy).',
        id: 'q11'
        },
        {
        text: 'I do important work before bedtime (for example: pay bills, schedule, or study).',
        id: 'q12'
        },
        {
        text: 'I think, plan, or worry when I am in bed.',
        id: 'q13'
        },
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
                <button className="question-button submit-button" type="submit">Submit</button>
            )}
        </form>
    </div>
    
  );
}



export default Questionnaire;
