import React, { useState } from 'react'
import InputArea from './components/inputarea'
import './style.css'

const App = () => {

  const [items, setitems] = useState([])

  const addItem = (inputText) => {
    setitems((prevItems) => {
      return [...prevItems, inputText]
    })
  }

  const deleteItem = (id) => {
    setitems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    }   )
  } 

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea addItem={addItem} />

      <div>
        <ul>
          {
          items.map((item, index) => {
            return <li key={index}>{item} 
            <button onClick={() => deleteItem(index)}>  x</button>
            </li>
          })
          }
        </ul>
      </div> 
    </div>
    
  )
}

export default App