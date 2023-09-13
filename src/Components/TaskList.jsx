import TaskShow from "./TaskShow";

function TaskList({ tasks }) {
    return (
        <div className="coverTaskList">
            {tasks.map((task, index) => {
                return (
                    <TaskShow key={index} task={task} />
                )
            })}
        </div>
    );
}

export default TaskList;