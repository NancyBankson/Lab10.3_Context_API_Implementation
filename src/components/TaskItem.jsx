import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import { RetrieveSavedTodos } from "../utils/taskUtils";

export function TaskItem({todo}) {
    const {toggleTodo, deleteTodo} = useContext(TodoContext);

    return (
         <div key={todo.id} className="todo-container">
            <div className="title-row">
                <h1>{todo.title}</h1>
                <button onClick={() => toggleTodo(todo.id)}>{(todo.completed) ? "Completed" : "Active"}</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>            
        </div>
    )}