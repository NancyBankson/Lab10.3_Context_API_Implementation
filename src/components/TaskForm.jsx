import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";

export function TaskForm() {
    const {addTodo} = useContext(TodoContext);
    const [todoTitle, setTodoTitle] = useState("");

    const handleChange = (event) => {
        // Update state when the input changes
        setTodoTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(todoTitle);
    };

    return (
        <div className="task-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Task title:</label>
                <input id="title-input" type="text" name="title" value={todoTitle} onChange={handleChange} placeholder="Enter title" required></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}