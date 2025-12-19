import { useContext } from "react";
import { TaskItem } from "./TaskItem";
import { TodoContext } from "../Context/TodoContext";

export function TaskList() {
    const {todos} = useContext(TodoContext);

    return (
        <>   
            <div className="todo-list">
                {todos.map((todo) => (
                    <TaskItem
                        key={todo.id}
                        todo={todo}                  
                    />
                ))}
            </div>
        </>

    )
}