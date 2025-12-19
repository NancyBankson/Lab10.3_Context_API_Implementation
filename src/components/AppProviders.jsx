import { useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import { RetrieveSavedTodos } from "../utils/taskUtils";
import { RetrieveId } from "../utils/taskUtils";

export function AppProviders({ children }) {
    const [todos, setTodos] = useState(RetrieveSavedTodos);
    const [id, setId] = useState(RetrieveId);
    

    function addTodo(todoTitle) {
        console.log(id);
        let todoObj = {
            id: id,
            title: todoTitle,
            completed: false
        }
        setTodos((prevTodos) => [...prevTodos, todoObj]);
        
        let newId = todoObj.id;
        let newTodos = [...todos];
        newTodos.push(todoObj);
        try {
            localStorage.setItem("todoArray", JSON.stringify(newTodos));
            localStorage.setItem("savedId", newId);
        } catch (error) {
            console.error("Error setting local storage", error);
        }
        setId(id + 1);
    }

    function toggleTodo(todoId) {
        const updatedTodos = todos.map(todo => {
        if (todo.id === todoId) {
            const newStatus = (todo.completed) ? false : true;
          return { ...todo, completed: newStatus};
        }
        return todo;
      });
      let newTodos = [...updatedTodos];
      localStorage.setItem("todoArray", JSON.stringify(newTodos));
      setTodos(updatedTodos);
      // setFilteredTasks(updatedTasks);
    }

    function deleteTodo(todoId) {
         const updatedTodos = todos.filter((todo) => todo.id !== todoId);

      let newTodos = [...updatedTodos];
      localStorage.setItem("todoArray", JSON.stringify(newTodos));
      setTodos(updatedTodos);
      // setFilteredTasks(updatedTasks);
    }

    function editTodo(todoId, newTitle) {
        const updatedTodos = todos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, title: newTitle };
        }
        return todo;
      });
      let newTodos = [...updatedTodos];
      try {
         localStorage.setItem("todoArray", JSON.stringify(newTodos));
      } catch (error) {
        console.error("Error setting local storage", error);
      }     
      setTodos(updatedTodos);
      // setFilteredTasks(updatedTasks);
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, editTodo }}>
            {children}
        </TodoContext.Provider>
    )
}