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
    const [entries, setEntries] = useState(["mess"]);

    function clearList(e) {
        e.preventDefault();
        setEntries([]);
    }

    return (
        <>
            <Input list={entries} handleChange={setEntries} />
            {entries.map(function(entry){
                return <Entry content={entry} />
            })}
            <div className="center clearContainer"><button id="clearList" onClick={clearList}>Clear List</button></div>
        </>
    )
    


}


