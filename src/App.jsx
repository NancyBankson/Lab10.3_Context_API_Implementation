import { useState } from 'react'
import { TaskList } from './components/TaskList';
import './App.css'
import { TaskForm } from './components/TaskForm';


function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);


  return (
    <>

      <TaskForm />
 
      {/* <TaskList
        tasks={filteredTasks}
        onTitleChange={newTasks.onTitleChange}
        onStatusChange={newTasks.onStatusChange}
        onDelete={newTasks.onDelete}
        onAlphaChange={newTasks.onAlphaChange}
        onClick={newTasks.onClick}
      /> */}
    </>
  )
}

export default App