import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addTask: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/add_task",
        body: data,
      }),
    }),
    getTask: builder.query({
      query: () => ({
        url: "/get_task",
      }),
    }),
    getTaskById: builder.query({
      query: (id) => ({
        url: `/get_task/${id}`,
      }),
    }),
  }),
});

export const { useAddTaskMutation, useGetTaskQuery, useGetTaskByIdQuery } =
  authApi;
