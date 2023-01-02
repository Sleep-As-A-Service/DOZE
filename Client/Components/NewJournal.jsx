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

        fetch('http://localhost:8080/journals', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: { 
                user: 'newuser',
                entry: formJSON.newEntry
            }
        })
        document.getElementById('addJournal').reset();
    }

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