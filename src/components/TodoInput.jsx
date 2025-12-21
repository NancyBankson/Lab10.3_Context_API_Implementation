import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import { ThemeContext } from "../Context/ThemeContext";

export function TodoInput() {
    const { addTodo, clearAll } = useContext(TodoContext);
    const [todoTitle, setTodoTitle] = useState("");
    const { theme } = useContext(ThemeContext);

    const handleChange = (event) => {
        // Update state when the input changes
        setTodoTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(todoTitle);
    };

    return (
        <div className="todo-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Task title:</label>
                <input id="title-input" className={(theme === "Dark") ? 'dark-mode' : null} type="text" name="title" value={todoTitle} onChange={handleChange} placeholder="Enter title" required></input>
                <button className={(theme === "Dark") ? 'dark-mode' : null} type="submit">Submit</button>
            </form>      
            <button className={(theme === "Dark") ? 'dark-mode' : null} onClick={() => clearAll()}>Clear All</button>
        </div>
    )
}