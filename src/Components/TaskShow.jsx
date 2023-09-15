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
        <>
          <div className="taskShowTitle">Göreviniz</div>
          <div>{task.title}</div>
          <div className="taskShowTitle">Yapılacaklar</div>
          <div>{task.taskDescr}</div>
          <div className="btnDiv">
            <button className="btnDelete" onClick={handleDeleleteClick}>
              Sil
            </button>
            <button className="btnUpdate" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskShow;
