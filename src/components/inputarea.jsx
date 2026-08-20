import React, { useState } from 'react'

const inputarea = (props) => {

    const [inputText, setinputText] = useState("");

    const handleChange = (e) => {
        setinputText(e.target.value);
    }

  return (
    <div className="form">
        <input
            type="text"
            value={inputText}
            onChange={handleChange}
        />
        <button onClick={() => {
            props.addItem(inputText);
            setinputText("");
        }}> 
            <span>Add</span>
        </button>

    </div>
  )  
}

export default inputarea