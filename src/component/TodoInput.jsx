import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addTodo, getTodo} from "../redux/reducer"
function TodoInput() {
const [data,setdata] = useState("");
const dispatch = useDispatch();
const handelAddTodo = () =>{
addTodo({
title:data,
dispatch
}).then(()=>{
getTodo(dispatch)
setdata("");
})
}
return (
<div>
<input value={data} onChange={(e)=>{setdata(e.target.value)}} placeholder="enter todo"></input>
<button onClick={handelAddTodo}>Add</button>
</div>
)
}
export default TodoInput