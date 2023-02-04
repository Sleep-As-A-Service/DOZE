import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Entry({ entry, key, date, handleDelete, handleUpdate }) {

    const newDate = new Date(date);
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        // timeZoneName: 'short'
      };
      
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const formattedDate = formatter.format(newDate);

    return (
        <div className="journal-entry">
            <p className="journal-date">{formattedDate}</p> 
            <p className="journal-text">{entry}</p>
            <div className="button-container">
                <button className="delete-button" key={key} onClick={handleDelete}> DELETE </button>
                <button className="update-button" onClick={handleUpdate}> UPDATE </button>
            </div>

        </div>
    )
}

export default Entry;