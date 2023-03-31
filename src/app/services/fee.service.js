import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const feeApi = createApi({
    reducerPath: 'feeApi',
    baseQuery: fetchBaseQuery({ 
      baseUrl: 'http://localhost:8080/api/',
      prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
    
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
          headers.set('authorization', `Bearer ${token}`)
        }
    
        return headers
      }, }),
    endpoints: (builder) => ({
      getFees: builder.query({
        query: () => `fees`,
      }),
    }),
})

export const { useGetFeesQuery } = feeApi