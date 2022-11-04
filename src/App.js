import React,{useState} from 'react'
import TodoList from './Components/TodoList'
const App = () => {



  const[todo,setTodo]=useState([
    { id:1,text:"todo list 1" , isDone:false   },
    {id:2,text:"todolist 2",isDone:false},
    {id:3,text:"todolist 3",isDone:false}
  ])

  const handelDelete=(ID)=>{
    setTodo(  todo.filter((el)=>  el.id  !== ID    )               )
  }



  return (
    <div>
<h1>TodoList</h1>

     <TodoList  todo={todo}  handelDelete={handelDelete}  />

    </div>



  )
}

export default App