import { TaskItem } from "./TaskItem";
import { TodoContext } from "../Context/TodoContext";

export function TaskList() {
    const {tasks} = useContext(TodoContext);

    return (
        <>   
            <div className="task-list">
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                  
                    />
                ))}
            </div>
        </>

    )
}