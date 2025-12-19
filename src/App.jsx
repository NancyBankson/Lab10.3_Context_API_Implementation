import { useState, useContext } from 'react'
import { TaskList } from './components/TaskList';
import './App.css'
import { TaskForm } from './components/TaskForm';


function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);


  return (
    <>

      <TaskForm />
 
      <TaskList
        // tasks={filteredTasks}
        // onTitleChange={newTasks.onTitleChange}
        // onStatusChange={newTasks.onStatusChange}
        // onDelete={newTasks.onDelete}
        // onAlphaChange={newTasks.onAlphaChange}
        // onClick={newTasks.onClick}
      />
    </>
  )
}

export default App