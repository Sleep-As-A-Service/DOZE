import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

// entry space? text area 
// submit button 
// component header (add journal + icon)

function NewJournal() {

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const formJSON = Object.fromEntries(formData.entries())
        //console.log(Object.fromEntries(formData.entries()))
        //console.log('submitted')
        console.log('entry', formJSON.newEntry)

        fetch('http://localhost:3000/journals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            mode: 'cors',
            body: JSON.stringify({ 
                user: '63b3234df79c9575703ac220',
                entry: formJSON.newEntry
            })
        })
        .then((response) => response.json())
        // .then((data) => console.log('data', data));
        document.getElementById('addJournal').reset();
    }
    
    // need to access the entry and createdAt properties and save them to state
    return (
        <div>
            <div>Add a journal entry</div>
            <form id="addJournal" onSubmit={handleSubmit}>
                <textarea type="text" name="newEntry" placeholder="Add your thoughts..."></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}





export default NewJournal;