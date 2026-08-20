import React from 'react'

const todoitem = (props) => {
  return (
    <div>
        <li>
            {props.text}
            <button onClick={() => props.deleteItem(props.id)}>Delete</button>              
        </li>
    </div>
  )
}

export default todoitem