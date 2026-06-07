import React,{createContext, useReducer, useContext } from "react";
import { initialState, taskReducer } from "../reducer/taskReducer";

const TaskContext = createContext();

export function TaskProvider({children}){
    const [state , dispatch ] =useReducer(taskReducer, initialState);

return(
    <TaskContext.Provider value={{ state, dispatch}}>{children}</TaskContext.Provider>
    )
}
export function useTask() {
    return useContext(TaskContext)
}

export default TaskContext;