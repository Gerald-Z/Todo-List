import Entry from './entry.js'

import React from 'react';
import { useState } from 'react';
import Input from './input.js';
import './list.css'


export default function List() {
   /* constructor(props) {
        super(props);
        this.state = {
            entries: ["mess"],
            occurrence: 0
        }
        this.addEntry = this.addEntry.bind(this); 
    }

    */
    const [entries, setEntries] = useState([]);

    function clearList(e) {
        e.preventDefault();
        setEntries([]);
    }

    function removeEntry(string) {
        let count = 0;
        setEntries(entries.filter(function(entry) {
            if (entry === string) {
                if (count == 0) {
                    count = 1;
                    return false;
                }
            }
            return true;
        }))
    }



    return (
        <>
            <Input list={entries} handleChange={setEntries} />
            {entries.map(function(entry){
                return <Entry content={entry} remove={removeEntry} />
            })}
            <div className="center clearContainer"><button id="clearList" onClick={clearList}>Clear List</button></div>
        </>
    )
    


}


