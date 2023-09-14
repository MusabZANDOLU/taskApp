import { useState } from "react";
import "./App.css";
import TaskCreate from "./Components/TaskCreate";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDescr) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title: title,
        taskDescr: taskDescr,
      },
    ];
    setTasks(createdTasks);
  };

  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };

  const editTaskById = (id, updatedTitle, updatedTaskDescr) => {
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
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
