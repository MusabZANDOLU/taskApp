function TaskShow({ task }) {
    return (
        <div className="coverTaskShow">
           <h3>Göreviniz</h3>
           <p>{task.title}</p>
           <h3>Yapılacaklar</h3>
           <p>{task.taskDescr}</p>
           <div className="btnDiv">
            <button className="btnDelete">Sil</button>
            <button className="btnUpdate">Güncelle</button>
           </div>
        </div>
    );
}

export default TaskShow;