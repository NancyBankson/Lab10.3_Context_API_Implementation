import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import { RetrieveSavedTodos } from "../utils/taskUtils";

export function TaskItem({todo}) {
  

    return (
         <div key={todo.id} className="todo-container">
            <div className="title-row">
                <h1>{todo.title}</h1>
            </div>
        </div>
    )}