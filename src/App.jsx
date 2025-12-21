import { useState, useContext } from 'react'
import { TodoInput } from './components/TodoInput';
import './App.css'
import { TodoList } from './components/TodoList';
import { FitlerButtons } from './components/FilterButtons';


function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);


  return (
    
    <div id="main-div">
       <TodoInput />
      <FitlerButtons />
      <TodoList />
    
    </div>

     
  )
}

export default App