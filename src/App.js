import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {useSelector , useDispatch} from 'react-redux';
import {ADD_TODO} from './redux/actions'
function App() {


  const data = useSelector(state => state);
  console.log(data)
  const dispatch = useDispatch();
  

  const addTodo = (task) => {
    console.log(data)
  };
  


  return (
    <div className="text-center py-2">
      <TodoForm  />
      <TodoList  />
    </div>
  );
}

export default App;
