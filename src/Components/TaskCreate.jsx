import { useState } from "react";

function TaskCreate({ onCreate }) {
    const [title, setTitle] = useState('')
    const [taskDescr, setTaskDescr] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleTaskChange = (e) => {
        setTaskDescr(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(title, taskDescr);
        setTitle(' ');
        setTaskDescr(' ');
    }

    return (
        <div className="compCoverTaskCreate">
            <h3>Lütfern Task Ekleyiniz</h3>
            <form className="formCoverTaskCreate">
                <div>Başlık</div>
                <input className="inputClass" onChange={handleChange} value={title} />
                <div>Task Giriniz</div>
                <textarea className="textAreaClass" onChange={handleTaskChange} value={taskDescr} />
                <button className="buttonClass" onClick={handleSubmit}>Oluştur</button>
            </form>
        </div>
    );
}

export default TaskCreate;