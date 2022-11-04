import React from 'react'

const Todo = ({todol,handelDelete}) => {
  console.log('todol',todol)
  
  return (
    <div>
      <ul>
        <li>
          {todol.text}
        </li>
        <button  onClick={()=>handelDelete(todol.id)}  >remove</button>
        <button>Not Done</button>
      </ul>
    </div>
  )
}

export default Todo