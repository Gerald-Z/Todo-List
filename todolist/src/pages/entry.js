import React from 'react';


export default class Entry extends React.Component {

    constructor(props) {
        super(props);
        this.TextRef = React.createRef();
        this.handleRemove = this.handleRemove.bind(this);
    }
    
    handleRemove() {
        this.props.remove(this.TextRef.current.innerText);
    }

    render () {
        return (
            <div className='center'> <h1 className="entryText" ref={this.TextRef}> {this.props.content} </h1> <button className="remove" onClick={this.handleRemove}>Remove</button></div>
        )
    }
}

