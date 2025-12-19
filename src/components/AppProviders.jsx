import { useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import { RetrieveSavedTodos } from "../utils/taskUtils";
import { RetrieveId } from "../utils/taskUtils";

export function AppProviders({ children }) {
    const [todos, setTodos] = useState(RetrieveSavedTodos);
    const [id, setId] = useState(RetrieveId);

    function addTodo(todoTitle) {
        let todoObj = {
            id: id,
            title: todoTitle,
            completed: false
        }
        setTodos((prevTodos) => [...prevTodos, todoObj]);
        setId(id + 1);
        let newTodos = [...todos];
        newTodos.push(todoObj);
        try {
            localStorage.setItem("todos", JSON.stringify(newTodos));
            localStorage.setItem("id", id);
        } catch (error) {
            console.error("Error setting local storage", error);
        }
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo }}>
            {children}
        </TodoContext.Provider>
    )
}