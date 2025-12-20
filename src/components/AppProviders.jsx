import { useState, useEffect } from "react";
import { TodoContext } from "../Context/TodoContext";
import { FilterContext } from "../Context/FilterContext";
import { RetrieveSavedTodos } from "../utils/taskUtils";
import { RetrieveId } from "../utils/taskUtils";
import { ThemeContext } from "../Context/ThemeContext";

export function AppProviders({ children }) {
  const [todos, setTodos] = useState(RetrieveSavedTodos);
  const [filteredTodos, setFilteredTodos] = useState(RetrieveSavedTodos);
  const [id, setId] = useState(RetrieveId);
  const [theme, setTheme] = useState("Light");

  useEffect(() => {
      if (theme === "Dark") {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    }, [theme]);

  function addTodo(todoTitle) {
    let todoObj = {
      id: id,
      title: todoTitle,
      completed: false
    }
    setTodos((prevTodos) => [...prevTodos, todoObj]);
    setFilteredTodos((prevFilteredTodos) => [...prevFilteredTodos, todoObj]);

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
        return { ...todo, completed: newStatus };
      }
      return todo;
    });
    let newTodos = [...updatedTodos];
    localStorage.setItem("todoArray", JSON.stringify(newTodos));
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  }

  function deleteTodo(todoId) {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);

    let newTodos = [...updatedTodos];
    localStorage.setItem("todoArray", JSON.stringify(newTodos));
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
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
    setFilteredTodos(updatedTodos);
  }

  function clearAll() {
    setTodos([]);
    setId(1);
    localStorage.removeItem("todoArray");
    localStorage.removeItem("savedId");
  }

  function setFilter(filter) {
    const filterTodos = todos.filter(todo => {
      if (filter === "All") {
        return todo;
      } else if ((todo.completed === true) && (filter === "Completed")) {
        return todo;
      } else if ((todo.completed === false) && (filter === "Active")) {
        return todo;
      }
    })
    setFilteredTodos(filterTodos);
  }

  function toggleTheme() {
    setTheme(prevTheme => (prevTheme === "Light" ? "Dark" : "Light"));   
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, editTodo, clearAll, setFilter }}>
      <FilterContext.Provider value={{ filteredTodos, setFilter }}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      </FilterContext.Provider>
    </TodoContext.Provider>
  )
}