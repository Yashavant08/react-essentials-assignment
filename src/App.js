import { TaskProvider } from "./context/TaskContext";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import './App.css'
import TaskSummary from "./components/TaskSummary";

function App(){
    return(
        <TaskProvider>
            <div className="app">
                <h1>Task Manager</h1>
                <TaskSummary/>
                <TaskInput/>
                <TaskList/>
            </div>
        </TaskProvider>
    )
}

export default App;