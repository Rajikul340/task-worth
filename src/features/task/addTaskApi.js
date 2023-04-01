import apiSlice from "../api/apiSlice"



const authApi = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        
     addTask: builder.mutation({
        query: (data)=>({
            method: "POST",
            url: "/add_task",
            body: data
        })
     })
    })
})


export const {useAddTaskMutation} = authApi