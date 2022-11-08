import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react' 


export const apiSlice =  createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['payload'],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: '/users/login',
                method: 'POST',
                body : body
            })
        }),
        signup: builder.mutation({
            query: (payload) => ({
                url: '/users/signup',
                method: 'POST',
                body : payload  
            }),
        }),
        invalidatesTags: ['payload']
    })

})

export const {useLoginMutation, useSignupMutation} = apiSlice