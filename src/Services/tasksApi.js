import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const tasksApi = createApi({
    reducerPath: "tasksApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/"}),
    tagTypes: ["Task"],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => "/tasks",
            providesTags: (result) =>
                result ? result.map(({id}) => ({type: "Task", id})) : [{ type: 'Task', id: 'LIST' }],
        }),
        deleteTask: builder.mutation({
            query: (id) => ({url: `/tasks/${id}`, method: "DELETE"}),
            invalidatesTags: (result, error, id) => [{type: "Task", id}],
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: `/tasks`,
                method: 'POST',
                body: task,
            }),
            invalidatesTags: ['Task'],
        }),
        changeTaskStatus: builder.mutation({
            query: (task) => ({
                url: `/tasks/${task.id}`,
                method: 'PUT',
                body: task,
            }),
            invalidatesTags: (result, error, task) => [{type: "Task", id: task.id}],
        })

    }),
});

export const {useGetTasksQuery, useDeleteTaskMutation, useAddTaskMutation, useChangeTaskStatusMutation} = tasksApi;