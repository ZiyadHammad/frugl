import { apiSlice } from "./apiSlice";

const ITEMS_URL = '/api/items'

export const itemsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getItems: builder.mutation({
      query: (data) => ({
        url: `${ITEMS_URL}`,
        method: 'GET',
        body: data,
      }),
    }),
    createItem: builder.mutation({
      query: (data) => ({
        url: `${ITEMS_URL}/new`,
        method: 'POST',
        body: data
      }),
    }),
    getItemById: builder.mutation({
      query: (data) => ({
        url: `${ITEMS_URL}${id}`,
        method: 'GET',
        body: data
      }),
    }),
    updateItemById: builder.mutation({
      query: (data) => ({
        url: `${ITEMS_URL}${id}`,
        method: 'PUT',
        body: data
      }),
    }),
    deleteItemById: builder.mutation({
      query: (data) => ({
        url: `${ITEMS_URL}${id}`,
        method: 'DELETE',
        body: data
      }),
    }),
  })
})