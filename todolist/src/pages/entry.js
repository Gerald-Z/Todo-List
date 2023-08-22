import React from 'react';


export default class Entry extends React.Component {

    constructor(props) {
        super(props);
    }
    
    
    render () {
        return (
            <div className='center'> <h1 className="entryText"> {this.props.content} </h1> <button className="remove">Remove</button></div>
        )
    }
}

