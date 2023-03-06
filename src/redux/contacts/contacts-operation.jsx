import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
export const contactApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery,
  tagTypes: ['Contacts'],
  endpoints: build => ({
    getContacts: build.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
      keepUnusedDataFor: 1,
    }),

    addContacts: build.mutation({
      query: contact => ({
        url: `contacts/`,
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    updateContactbyId: build.mutation({
      query: contact => ({
        url: `contacts/${contact.id}`,
        method: 'PUT',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    deleteContacts: build.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
} = contactApi;
