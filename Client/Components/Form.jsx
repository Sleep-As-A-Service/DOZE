import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

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
        const { name, value } = event.target;
        const newArr = [...answers];
        newArr[currentQuestion] = { [name] : value };
        setAnswers(newArr);
        // setRadioChecked(true);
        console.log('totalscore', answers);
    }
    function handleSubmit(event) {
        console.log('submitted');
        // NEED TO ADD LOGIC HERE TO HANDLE SUBMITTING THE FINISHED FORM
        // REQ.BODY OF POST SHOULD BE ANSWERS ARRAY AND USER ID
    }
    function handleNext() {
        console.log('next');
        setCurrentQuestion(currentQuestion + 1);
    }
    function handlePrev() {
        console.log('prev');
        setCurrentQuestion(currentQuestion - 1);
    }
    let sum = answers.reduce((acc, curr) => {
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
    </form>
  );
}

function Question({ question, handleChange, index }) {
    return (
        <div>
            <div>{question.text}</div>
            <input type="radio" id="never" name={question.name} value={0} index={index} onChange={handleChange} />
                <label hmtlFor="never">Never</label><br></br>
            <input type="radio" id="sometimes" name={question.name} value={2} index={index} onChange={handleChange} />
                <label htmlFor="sometimes">Sometimes</label><br></br>
            <input type="radio" id="always" name={question.name} value={4} index={index} onChange={handleChange} />
                <label htmlFor="always">Always</label><br></br>
        </ div>
    );
}

export default Questionnaire;