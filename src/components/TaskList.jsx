import { useContext } from "react";
import { TaskItem } from "./TaskItem";
import { TodoContext } from "../Context/TodoContext";
import { FilterContext } from "../Context/FilterContext";

export function TaskList() {
    const {todos} = useContext(TodoContext);
    const { filteredTodos } = useContext(FilterContext);

    return (
        <>   
            <div className="todo-list">
                {filteredTodos.map((filteredTodo) => (
                    <TaskItem
                        key={filteredTodo.id}
                        todo={filteredTodo}                  
                    />
                ))}
            </div>
        </>

    )
}