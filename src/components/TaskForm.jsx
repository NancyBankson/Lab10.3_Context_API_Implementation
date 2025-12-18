import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";

export function TaskForm() {
    const {addTodo} = useContext(TodoContext);
    const [todo, setTodo] = useState("");

    const handleChange = (event) => {
        // Update state when the input changes
        setTodo(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(todo);
    };

    return (
        <div className="task-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Task title:</label>
                <input id="title-input" type="text" name="title" value={todo} onChange={handleChange} placeholder="Enter title" required></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}