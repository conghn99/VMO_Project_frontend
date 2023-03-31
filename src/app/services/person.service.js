import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const personApi = createApi({
    reducerPath: 'personApi',
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
      getActivePerson: builder.query({
        query: () => `person`,
      }),
      getNonActiveOrByApartmentIdPerson: builder.query({
        query: (id) => `person/nonactive/${id}`,
      }),
      getPersonById: builder.query({
        query: (id) => `person/${id}`,
      }),
      addPerson: builder.mutation({
        query: (data) => ({
            url : `person`,
            method: "POST",
            body: data
        })
      }),
      updatePerson: builder.mutation({
        query: ({id, ...data}) => ({
            url : `person/${id}`,
            method: "PUT",
            body: data
        })
      }),
    }),
})

export const { useGetActivePersonQuery, useGetNonActiveOrByApartmentIdPersonQuery, useGetPersonByIdQuery, useAddPersonMutation, useUpdatePersonMutation } = personApi