import React from "react";
import { useTask } from "../context/TaskContext";

function TaskItem({ task }) {
    const { dispatch } = useTask();
    
    return (
        <div className="task-item">
            <span>{task.title}</span>
            <button className = "togggle-btn" onClick={() => dispatch({ 
                
                type: "TOGGLE_TASK", 
                payload: task.id 
            })}>
                {task.completed ? "✅" : "❌"}
            </button>
            <button className = "delete-btn" onClick={() => dispatch({ 
                
                type: "DELETE_TASK", 
                payload: task.id 
            })}>
                Delete
            </button>
        </div>
    )
}

export default TaskItem;