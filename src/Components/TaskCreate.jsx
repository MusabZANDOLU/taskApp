import { useState } from "react";

function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDescr, setTaskDescr] = useState(task ? task.taskDescr : "");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTaskChange = (e) => {
    setTaskDescr(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDescr);
    } else {
      onCreate(title, taskDescr);
    }
    setTitle(" ");
    setTaskDescr(" ");
  };

  return (
    <>
      {taskFormUpdate ? (
        <div className="compCoverTaskUpdate">
          <h3>Lütfen Taskı Düzenleyiniz</h3>
          <form className="formCoverTaskUpdate">
            <div>Lütfen Başlığı Düzenleyiniz</div>
            <input
              className="inputClass"
              onChange={handleChange}
              value={title}
            />
            <div>Lütdfen Task Giriniz</div>
            <textarea
              className="textAreaClass"
              onChange={handleTaskChange}
              value={taskDescr}
            />
            <button className="buttonClass updateButton" onClick={handleSubmit}>
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="compCoverTaskCreate">
          <h3>Lütfen Task Ekleyiniz</h3>
          <form className="formCoverTaskCreate">
            <div>Başlık</div>
            <input
              className="inputClass"
              onChange={handleChange}
              value={title}
            />
            <div>Task Giriniz</div>
            <textarea
              className="textAreaClass"
              onChange={handleTaskChange}
              value={taskDescr}
            />
            <button className="buttonClass" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default TaskCreate;
