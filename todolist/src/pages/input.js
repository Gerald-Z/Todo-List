import React from 'react';

const Input = (props) => {
    const inputRef = React.useRef(null);
    let string;

    function localHandleChange(e) {
        e.preventDefault();
       if (typeof string === 'undefined') {
       } else {
            props.handleChange([...props.list, string]);
       }
        inputRef.current.value = '';
    }

    function handleChange(e) {
        string = e.target.value;
    }

    return (
        <form>
            <div className="center inputContainer">
                <input id="inputText" type="text" ref={inputRef} onChange={handleChange} required />
                <input id="inputSubmit" type="submit" onClick={localHandleChange} />
            </div>
        </form>
    )
} 

export default Input;
