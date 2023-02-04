import React, { useEffect, useState } from "react";

function NewJournal() {

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const formJSON = Object.fromEntries(formData.entries())
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
        document.getElementById('add-journal').reset();
    }
    
    // need to access the entry and createdAt properties and save them to state
    return (
        <div className="new-journal-container">
            <h3>Add a journal entry</h3>
            <form id="add-journal" onSubmit={handleSubmit}>
                <textarea type="text" name="newEntry" placeholder="Add your thoughts..."></textarea>
                <input className="submit-button" type="submit" value="Submit" />
            </form>
        </div>

    )
}

export default NewJournal;
