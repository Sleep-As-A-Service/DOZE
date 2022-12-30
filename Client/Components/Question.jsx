import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Question({ question, handleChange, index }) {
    return (
        <div>
            <div>{question.text}</div>
            <input type="radio" id="never" name={question.name} value={0} index={index} onClick={handleChange} />
                <label hmtlFor="never">Never</label><br></br>
            <input type="radio" id="sometimes" name={question.name} value={2} index={index} onClick={handleChange} />
                <label htmlFor="sometimes">Sometimes</label><br></br>
            <input type="radio" id="always" name={question.name} value={4} index={index} onClick={handleChange} />
                <label htmlFor="always">Always</label><br></br>
        </ div>
    );
}
export default Question;