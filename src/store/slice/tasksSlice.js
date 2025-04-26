import {createSlice} from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        setTasks: (state, action) => {
            return action.payload;
        },
        addTask: (state, action) => {
            state.push(action.payload);
        },
        deleteTask: (state, action) => {
            const taskId = action.payload;
            return state.filter((task) => task.id !== taskId);
        },
        completeTask: (state, action) => {
            const taskId = action.payload;
            return state.map((task) =>
                task.id === taskId
                    ? {
                        ...task,
                        status: task.status === 'completed' ? 'started' : 'completed',
                    }
                    : task
            );
        },
    }
})

export const {setTasks, addTask, deleteTask, completeTask} = tasksSlice.actions;
export default tasksSlice.reducer;