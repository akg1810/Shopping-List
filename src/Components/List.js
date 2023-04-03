import React from 'react'

const List = (props) => {
  return (
    <>
      <div className='list flex'>
          <li>{props.text}</li>
          <p onClick={()=>{props.onSelect(props.id);}}>❌</p>
      </div>
    </>
  )
}

export default List
