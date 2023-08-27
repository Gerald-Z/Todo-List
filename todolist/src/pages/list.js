import Entry from './entry.js'

import React from 'react';
import { useState } from 'react';
import Input from './input.js';
import './list.css'

export default function List() {
    const [entries, setEntries] = useState([]);

    function clearList(e) {
        e.preventDefault();
        setEntries([]);
    }

    function removeEntry(string) {
        let count = 0;
        setEntries(entries.filter(function(entry) {
            if (entry === string) {
                if (count === 0) {
                    count = 1;
                    return false;
                }
            }
            return true;
        }))
    }

    function modifyEntry(newText, oldText) {
        let count = 0;
        let lst = [];
        for(let i = 0; i < entries.length; i++) {
            if (entries[i] === oldText) {
                if (count === 0) {
                    lst.push(newText);
                    count++;
                } else {
                    lst.push(entries[i]);
                }
            } else {
                lst.push(entries[i]);
            }
        }
        setEntries(lst);
    }

    return (
        <div className="container">
            <div className="space"></div>
            <h1 className="description">To Do List</h1>
            <Input list={entries} handleChange={setEntries} />
            {entries.map(function(entry){
                return <Entry content={entry} remove={removeEntry} modify={modifyEntry}/>
            })}
            <div className="center clearContainer"><button id="clearList" onClick={clearList}>Clear List</button></div>
            <div className="space"></div>
        </div>
    )
}

