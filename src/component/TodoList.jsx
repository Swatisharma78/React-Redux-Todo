import React from 'react'
import { useSelector } from 'react-redux'

function TodoList() {
    const todos = useSelector(state=>state.todos);
    const myloading = useSelector(state=>state.myloading);
  return (
    <div>
        <h3>Todo</h3>
        {(myloading && <div>myloading....</div>)}
         {
             todos?.map((item)=>{
                return <div key={item.id} >{item.title}</div>
             })
         }
    </div>
  )
}

export default TodoList