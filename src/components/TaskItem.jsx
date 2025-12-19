import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import { RetrieveSavedTodos } from "../utils/taskUtils";

export function TaskItem({ todo }) {
    const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext);
    const [isVisible, setIsVisible] = useState(true);

    const handleTitleChange = (itemId, event) => {
        const newTitle = event.target.value;
        editTodo(itemId, newTitle)
    }

    const handleClick = () => {
        setIsVisible(false);
    }

    const handleSave = () => {
        setIsVisible(true);
    }

    return (
        <div key={todo.id} className="todo-container">
            <div className="title-row">
                {isVisible && (<h1>{todo.title}</h1>)}
                {!isVisible && (<input className="edit-input" type="text" name="title" placeholder={todo.title} onChange={(event) => handleTitleChange(todo.id, event)}></input>)}
                <button onClick={() => toggleTodo(todo.id)}>{(todo.completed) ? "Completed" : "Active"}</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                <button onClick={() => handleClick(todo.id)}>Edit</button>
                {!isVisible && (<button onClick={handleSave}>Save</button>)}
            </div>
        </div>
    )
}