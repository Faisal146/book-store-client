import baseApi from "../../Api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["task"],
    }),
    getSigleBook: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    addBook: builder.mutation({
      query: (data) => {
        return {
          url: `/products`,
          method: "POST",
          body: data,
        };
      },
    }),
    updateBook: builder.mutation({
      query: (args) => {
        const { id, UpdatedData } = args;
        return {
          url: `/products/${id}`,
          method: "PUT",
          body: UpdatedData,
        };
      },
    }),
    removeBook: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useRemoveBookMutation,
  useAddBookMutation,
  useGetSigleBookQuery,
  useUpdateBookMutation,
} = authApi;
