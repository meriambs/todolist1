import React from 'react'
import Todo from './Todo'

const TodoList = ({todo,handelDelete}) => {
  console.log('todo',todo)
  return (
    <div>
      {

todo.map((el)=>  <Todo  todol={el}  handelDelete={handelDelete} /> )

}
     
    </div>
  )
}

export default TodoList