import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import { FilterContext } from "../Context/FilterContext";
import { TodoItem } from "./TodoItem";

export function TodoList() {
    const {todos} = useContext(TodoContext);
    const { filteredTodos } = useContext(FilterContext);

    return (
        <>   
            <div className="todo-list">
                {filteredTodos.map((filteredTodo) => (
                    <TodoItem
                        key={filteredTodo.id}
                        todo={filteredTodo}                  
                    />
                ))}
            </div>
        </>

    )
}