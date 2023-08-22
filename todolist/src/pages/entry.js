import React from 'react';


export default class Entry extends React.Component {
    constructor(props) {
        super(props);
        this.TextRef = React.createRef();
        this.EditRef = React.createRef();
        this.EditSubmitRef = React.createRef();
        this.EditKeyRef = React.createRef();
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }
    
    handleRemove() {
        this.props.remove(this.TextRef.current.innerText);
    }

    handleEdit() {
        this.EditRef.current.style = "z-index: 1";
        this.EditSubmitRef.current.style = "z-index: 1";
        this.EditRef.current.value=this.TextRef.current.innerText;
    }

    handleEditSubmit(e) {
        e.preventDefault();
        this.EditRef.current.style = "z-index: -1";
        this.EditSubmitRef.current.style = "z-index: -1";
        this.props.modify(this.EditRef.current.value, this.TextRef.current.innerText);
        this.TextRef.current.innerText=this.EditRef.current.value;
    }


    render () {
        return (
            <div className='center'> 
                <h1 className="entryText" ref={this.TextRef}> {this.props.content} </h1> 
                <button className="edit" ref={this.EditKeyRef} onClick={this.handleEdit}>Edit</button>
                <button className="remove" onClick={this.handleRemove}>Remove</button>
                <input className="editText" type="text" ref={this.EditRef} />
                <button className="editSubmit"  ref={this.EditSubmitRef} onClick={this.handleEditSubmit}>Submit</button>
            </div>
        )
    }
}

