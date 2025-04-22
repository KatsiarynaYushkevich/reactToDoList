import {configureStore} from "@reduxjs/toolkit";
import tasksSlice from "./slice/tasksSlice.js";

export const store = configureStore({
    reducer:{
        tasksList: tasksSlice,
    }
});

