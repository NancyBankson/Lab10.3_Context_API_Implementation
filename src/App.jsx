import { useState, useContext } from 'react'
import { TaskList } from './components/TaskList';
import './App.css'
import { TaskForm } from './components/TaskForm';
import { FitlerButtons } from './components/FilterButtons';


function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);


  return (
    <>

      <TaskForm />
      <FitlerButtons />
      <TaskList />
    </>
  )
}

export default App