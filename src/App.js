import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import { getTodo } from "./redux/reducer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getTodo(dispatch);
  }, []);

  return (
    <div className="App">
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
