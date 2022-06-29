import {legacy_createStore as createStore} from "redux"
import  todosReducer  from "./reducer"
const store = createStore(todosReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;