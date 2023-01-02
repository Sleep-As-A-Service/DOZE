import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Entry({ entry, date, handleDelete, handleUpdate }) {

    return (
        <div className="journal-entry">
            <p>{entry}</p>
            <p>{date}</p> 
            <button onClick={handleDelete}> DELETE </button>
            <button onClick={handleUpdate}> UPDATE </button>
        </div>
    )
}

export default Entry;