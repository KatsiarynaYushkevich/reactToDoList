import React, {use} from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./task_list.scss"
import {completeTask, deleteTask} from "../../store/slice/tasksSlice.js";


function TasksList() {
    const tasksList = useSelector((store) => {
        return store.tasksList
    });

    const dispatch = useDispatch();

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    const handleChangeTaskStatus = (taskId) => {
        dispatch(completeTask(taskId));
    }
    return (
        <div className='container tasks_wrapper'>
            <h2>All tasks:</h2>
            <ul className='tasks_list'>
                {tasksList.map(task => (
                    <li key={task.id}>
                        <div className='task_info'>
                            <input type='checkbox'
                                   checked={task.status === 'completed'}
                                   onChange={() => handleChangeTaskStatus(task.id)}/>
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