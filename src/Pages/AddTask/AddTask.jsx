import React, {useState} from 'react';
import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {addTask, setTasks} from "../../store/slice/tasksSlice.js";
import "./add_task.scss"

function AddTask() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        status: 'started'
    });
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasksList);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.name.trim()) {
            setErrorMessage('Введите название задачи!');
            return;
        }

        const newTask = {
            id: tasks.length + 1,
            name: formData.name,
            description: formData.description.trim() ? formData.description : 'User left no description for this task',
            status: formData.status,
        };
        dispatch(addTask(newTask));

        setFormData({
            name: '',
            description: '',
            status: 'started'
        });
        setErrorMessage('');
    };
    return (
        <div className='container'>
            <div className='add_task_wrapper'>
                <form className='tasks_form' onSubmit={handleSubmit}>
                    <h2>New task</h2>
                    {errorMessage && <p className="error_message">{errorMessage}</p>}
                    <div className='form_item'>
                        <span>Name:</span>
                        <input type='text' placeholder='Task name'
                               value={formData.name}
                               onChange={(event) => setFormData({...formData, name: event.target.value})}/>
                    </div>
                    <div className='form_item'>
                        <span>Description:</span>
                        <input type='text' placeholder='Short description'
                               value={formData.description}
                               onChange={(event) => setFormData({...formData, description: event.target.value})}/>
                    </div>
                    <div className='form_item'>
                        <span>Status:</span>
                        <select defaultValue="started"
                                onChange={(event) => setFormData({...formData, status: event.target.value})}>
                            <option value="started">Started</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <button type='submit'>Add</button>
                </form>
            </div>
        </div>
    );
}

export default AddTask;