import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NewJournal from "../Components/NewJournal.jsx";
import Entry from "../Components/Entry.jsx";

function JournalContainer() {
    const [entries, setEntries] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3000/journals?' + new URLSearchParams({
            user: '63b3234df79c9575703ac220'
        }))
        .then((response) => response.json())
        .then(data => {
            setEntries(data);
        })
    }, [entries, setEntries])

    function handleDelete() {
        fetch('/http://localhost:3000/journals', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {

            }
        })
    }

    function handleUpdate() {
        fetch('/http://localhost:3000/journals', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                
            }
        })
    }

    const journalEntries = entries.map((entry) => {
        return (
            <Entry 
                key={entry.id}
                entry={entry.entry} 
                date={entry.createdAt} 
                handleDelete={handleDelete} 
                handleUpdate={handleUpdate} 
            />
        )
    })

    return (
        <div className="journal-container">
            <NewJournal />
            {/* <Entry id={'63b335c2282b3680d473ef26'} entry={'entry string here'} date={'2023-01-02T19:51:30.092Z'} /> */}
            {/* {console.log('component', entries)} */}
            {journalEntries}
        </div>
    )
}

export default JournalContainer;