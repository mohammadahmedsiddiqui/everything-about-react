import { useState } from 'react'

import './App.css'
import Todoinput from './component/todoinput'

function App() {
 


  const [todo, settodo] = useState("")
const [todos, settodos] = useState([{
todo:"book reading",
id:Date.now(),
completed:false
}])


const handleaddtodo = ()=>{
  const todosarr =[...todos,{
    todo,
    id:Date.now(),
    completed:false
  }]
  settodos([...todosarr])
  settodo("")
  console.log(todosarr)
}



  return (
  <>
  <h1 className='text-5xl text-blue-900 text-center '> todo app</h1>
  <Todoinput 
  value={todo}
 onchange={(e)=>settodo(e.target.value)}
onclick={handleaddtodo}

  />

  {
    todos.map((todo,idx)=>{
    return(
      <div className=' py-10 flex gap-40 justify-center' key={todo.id}>
           <h3 className='text-gray-950 font-bold flex-left'>{todo.todo}</h3>
<button className='bg px-4 py-2.5 font-bold bg-blue-950 text-white ' >delete todo</button>
      </div>
    )
    })
  }
  </>
  )
}

export default App
