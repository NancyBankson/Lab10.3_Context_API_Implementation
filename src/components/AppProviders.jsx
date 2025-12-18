import { useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import { RetrieveSavedTasks } from "../utils/taskUtils";
import { RetrieveId } from "../utils/taskUtils";

export function AppProviders({children}) {
    const [tasks, setTasks] = useState(RetrieveSavedTasks);
    const [id, setId] = useState(RetrieveId);

    function addTodo() {

    }

    return (
        <TodoContext.Provider value={{tasks, addTodo}}>
            {children}
        </TodoContext.Provider>
    )
}