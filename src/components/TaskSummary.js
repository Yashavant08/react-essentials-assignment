import React from "react";
import { useTask } from "../context/TaskContext";


function TaskSummary() {
    const { state } = useTask();

    const total = state.tasks.length;
    const completed = state.tasks.filter(task => task.completed).length;
    const pending = total - completed;

    return(
        <div className="task-summary">
            <span>Total: {total}</span>
            <span>completed: {completed}</span>
            <span>pending: {pending}</span>
        </div>
    )
}
export default TaskSummary;