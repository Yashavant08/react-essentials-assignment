import React from "react";
import { useTask } from "../context/TaskContext";
import TaskItem from "./TaskItem"

function TaskList() {
    const {state, dispatch} = useTask();

    return(
        <div>
            {state.tasks && state.tasks.map((task) => (
                <TaskItem key ={task.id} task={task} />
            ))}
        </div>
    )
}

export default TaskList;