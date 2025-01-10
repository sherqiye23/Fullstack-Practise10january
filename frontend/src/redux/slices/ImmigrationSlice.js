import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const immigrationApi = createApi({
    reducerPath: 'immigrationApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3737/' }),
    endpoints: (builder) => ({
        getImmigration: builder.query({
            query: () => `immigration`,
        }),
        postImmigration: builder.mutation({
            query: (newCard) => ({
                method: "POST",
                url: "immigration",
                body: newCard,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }),
        deleteImmigration: builder.mutation({
            query: (id) => ({
                method: "DELETE",
                url: `immigration/${id}`,
            })
        }),
        getImmigrationById: builder.query({
            query: (id) => `immigration/${id}`
        })
    }),
})

export const { useGetImmigrationQuery, useDeleteImmigrationMutation, useGetImmigrationByIdQuery, usePostImmigrationMutation } = immigrationApi