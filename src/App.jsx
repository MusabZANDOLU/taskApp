import { useState } from 'react';
import './App.css';
import TaskCreate from './Components/TaskCreate';
import TaskList from './Components/TaskList';

function App() {
  const [tasks, setTasks] = useState([])
  const createTask = (title, taskDescr) => {
    const createdTasks = [
      ...tasks, {
        id: Math.round(Math.random() * 999999),
        title: title,
        taskDescr: taskDescr
      }
    ];
    setTasks(createdTasks)
  }
  return (
    <>
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
