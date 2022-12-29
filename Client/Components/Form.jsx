import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

const questionArray = ['question 1', 'question 2', 'question 3', 'question 4'];


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
        }
    ];

    function handleChange(event) {
        const { name, value } = event.target;
        setAnswers([...answers, { [name]: value }]);
    }
    function handleSubmit(event) {
        console.log('submitted')
        // event.preventDefault();
        // api.submitAnswers(answers);
    }
    function handleNext() {
        console.log('next')
        setCurrentQuestion(currentQuestion + 1);
    }
    function handlePrev() {
        console.log('prev')
        setCurrentQuestion(currentQuestion - 1);
    }

  return (
    <Form onSubmit={handleSubmit}>
        <Question
            question={questions[currentQuestion]}
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

function Question({ question, handleChange }) {
    return (
        <div>
        <div>{question.text}</div>
        <input
            type="radio"
            name={question.name}
            onChange={handleChange}
        />
        </div>
    );
}

function Form({ children, onSubmit }) {
    return <form onSubmit={onSubmit}>{children}</form>;
}

export default Questionnaire;