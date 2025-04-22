import React, {use} from 'react';
import {useSelector} from "react-redux";
import "./task_list.scss"


function TasksList() {
    const tasksList = useSelector((store) => {
        return store.tasksList
    });

    return (
        <div className='container tasks_wrapper'>
            <h2>All tasks:</h2>
            <ul className='tasks_list'>
                {tasksList.map(task => (
                    <li key={task.id}>
                        <p><span>Name:</span> {task.name}</p>
                        <p><span>Description:</span> {task.description}</p>
                        <p><span>Status:</span> {task.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default TasksList;