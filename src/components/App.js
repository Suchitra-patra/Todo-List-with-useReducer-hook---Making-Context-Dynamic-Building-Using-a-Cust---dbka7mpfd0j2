import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../reducers/todo';
import '../styles/App.css';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';
const App = () => {
  const [state,dispatch] = useReducer(todoReducer,{todos:[]})
  
  console.log(state);
  return (
    <div id="main">
      <AddTodo dispatch={dispatch} />
      {state.todos.map(todo=><Todo dispatch={dispatch} title={todo.title} key={todo.id} id={todo.id}/>)}
    </div>
  )
}


export default App;