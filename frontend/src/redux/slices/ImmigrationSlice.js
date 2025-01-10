import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const immigrationApi = createApi({
  reducerPath: 'immigrationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3737/' }),
  endpoints: (builder) => ({
    geImmigration: builder.query({
      query: () => `immigration`,
    }),
    postImmigration: builder.mutation({
        query: () => `immigration`
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGeImmigrationQuery } = immigrationApi