import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(true);
  };

  const handleSubmit = (id, updatedTitle, updatedTaskDescr) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDescr);
  };

  return (
    <div className="coverTaskShow">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3>Göreviniz</h3>
          <p>{task.title}</p>
          <h3>Yapılacaklar</h3>
          <p>{task.taskDescr}</p>
          <div className="btnDiv">
            <button className="btnDelete" onClick={handleDeleleteClick}>
              Sil
            </button>
            <button className="btnUpdate" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
