import React, {useState} from 'react'
import "./App.css"
import List from "./Components/List"

const App = () => {
  const [inputList,setInputList] = useState("");
  const [items,setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value); 
  };

  const listOfItems = () => {
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    })
    setInputList("");
  }

  const deleteItem = (id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index!==id; 
      })
    })
  }

  return (
    <>
      <div className='background'>
        <h1>Shopping List</h1>
        <div className='box flex'>
          <h1>Items to buy</h1>
          <div className='input flex'>
            <input placeholder='Add a new item' onChange={itemEvent} value={inputList} className='input-box'></input>
            <div className='btn' onClick={listOfItems}>Add</div>
          </div>
          <ol>
          {(items.length===0)? <p>No items found!</p> : items.map((itemval, index)=>{
          return <List key={index} id={index} text={itemval} onSelect={deleteItem}/>;
          })}
        </ol>
        </div>
      </div>
    </>
  )
}

export default App
