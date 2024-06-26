import { apiSlice } from "./apiSlice";

const PRODUCTS_URL = '/api/products'

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}`,
        method: 'GET'
      }),
    }),
    createProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/new`,
        method: 'POST',
        body: data
      }),
    }),
    getProductById: builder.mutation({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`,
        method: 'GET'
      }),
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: (id) => `${PRODUCTS_URL}/${id}`,
        method: 'PUT',
        body: data
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`,
        method: 'DELETE'
      }),
    }),
  })
})

export const {
  useGetProductsMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductByIdMutation,
  useCreateProductMutation
} = productsApiSlice;