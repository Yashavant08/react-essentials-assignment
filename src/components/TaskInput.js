import React from "react";
import { useTask } from "../context/TaskContext";
import { useState } from "react"; 

function TaskInput() {
    const { dispatch } = useTask();
    const [taskName, setTaskName] = useState(""); 

    function handleAdd() {
        if (taskName === "") return;

        dispatch({
            type: "ADD_TASK",
            payload: {
                id: Date.now(),
                title: taskName,
                completed: false,
            }
        });

        setTaskName("");
    }

    return (
        <div className="task-input">
            <input
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Task likho..."
            />
            <button onClick={handleAdd}>ADD TASK</button>
        </div>
    );
}

export default TaskInput;