import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Question = () => {
    return(
        <form className="questionBox">
            <h1>Question 1</h1>
            <input type="radio" id="never" name="answer" value="0" />
            <label for="never">Never</label><br></br>
            <input type="radio" id="sometimes" name="answer" value="2" />
            <label for="sometimes">Sometimes</label><br></br>
            <input type="radio" id="always" name="answer" value="4" />
            <label for="always">Always</label><br></br>
            <button>NEXT</button>
        </form>
    )
}

export default Question;