import React from 'react';


export default class Entry extends React.Component {

    constructor(props) {
        super(props);
    }
    
    
    render () {
        return (
            <div className='center'> <h1> {this.props.content} </h1> </div>
        )
    }
}

