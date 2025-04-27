import React from 'react';
import {useGetTasksQuery, useDeleteTaskMutation, useChangeTaskStatusMutation} from "../../Services/tasksApi.js"
import "./task_list.scss"

function TasksList() {
    const {data: tasks = []} = useGetTasksQuery();
    const [deleteTask] = useDeleteTaskMutation();
    const [changeTaskStatus] = useChangeTaskStatusMutation();
    const handleDeleteTask = (taskId) => deleteTask(taskId);

    const handleChangeTaskStatus = (taskId) => {
        const task = tasks.find((task) => task.id === taskId);

        const updatedTask = {
            ...task,
            status: task.status === 'completed' ? 'started' : 'completed'
        };
        changeTaskStatus(updatedTask);
    };
    return (
        <div className='container tasks_wrapper'>
            <h2>All tasks:</h2>
            <ul className='tasks_list'>
                {tasks.map(task => (
                    <li key={task.id}>
                        <div className='task_info'>
                            <input type='checkbox'
                                   checked={task.status === 'completed'}
                                   onChange={() => handleChangeTaskStatus(task.id)}
                                   />
                            <div>
                                <p><span>Name:</span> {task.name}</p>
                                <p><span>Description:</span> {task.description}</p>
                                <p><span>Status:</span> {task.status}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => handleDeleteTask(task.id)}></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default TasksList;