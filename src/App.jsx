import { useEffect, useState } from "react";
import "./App.css";
import TaskCreate from "./Components/TaskCreate";
import TaskList from "./Components/TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchtask();
  }, []);

  const fetchtask = async () => {
    const response = await axios.get("http://localhost:3004/tasks");
    setTasks(response.data);
  };

  const createTask = async (title, taskDescr) => {
    const response = await axios.post("http://localhost:3004/tasks", {
      title: title,
      taskDescr: taskDescr,
    });
    const createdTasks = [...tasks, response.data];
    setTasks(createdTasks);
  };

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3004/tasks/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };

  const editTaskById = async (id, updatedTitle, updatedTaskDescr) => {
    await axios.put(`http://localhost:3004/tasks/${id}`, {
      title: updatedTitle,
      taskDescr: updatedTaskDescr,
    });

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id: id,
          title: updatedTitle,
          taskDescr: updatedTaskDescr,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="appCover">
      <TaskCreate onCreate={createTask} />
      {tasks.length > 0 ? <h1>Görevler</h1> : <></>}
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
