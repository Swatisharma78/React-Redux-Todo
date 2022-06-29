import axios from "axios";
import { addTodoFailure, addTodoRequest, addTodoSucess, getTodoFailure, getTodoRequest, getTodoSucess, todoAction } from "./action";
const initState = {
myloading:false,
todos:[],
error: false
}
const todosReducer = (state=initState,action)=>{
switch(action.type){
case todoAction.GET_TODO_REQUEST:{
return {
...state,
myloading:true,
error:false,
}
}
case todoAction.GET_TODO_SUCESS:{
return {
...state,
myloading:false,
todos:action.payload
}
}
case todoAction.GET_TODO_FAILURE:{
return state
}
case todoAction.ADD_TODO_REQUEST:{
return {
...state,
myloading:true,
error:false,
}
}
case todoAction.ADD_TODO_SUCESS:{
return {
...state,
myloading:false,
todos:action.payload
}
}
case todoAction.ADD_TODO_FAILURE:{
return state
}
default:{
 return {
myloading:false,
error:true
}
}
}
}
export const getTodo = (dispatch) =>{
const todoRequestAction = getTodoRequest();
dispatch(todoRequestAction);
return axios({
url:"http://localhost:3004/todo",
method:"GET"
})
.then(res=>{
console.log(res.data);
const todoSucessAction=getTodoSucess(res.data)
dispatch(todoSucessAction )
})
.catch(err=>{
const todoErrorAction = getTodoFailure();
dispatch(todoErrorAction)
})
}
export const addTodo = ({title,dispatch}) =>{
const todoRequestAction = addTodoRequest();
dispatch(todoRequestAction);
return axios({
url:"http://localhost:3004/todo",
method:"POST",
data:{
title,
status:false
}
})
.then(res=>{
console.log(res.data);
const todoSucessAction=addTodoSucess()
dispatch(todoSucessAction )
    })
    .catch(err=>{
      const todoErrorAction = addTodoFailure();
      dispatch(todoErrorAction)
    })
}
export default todosReducer