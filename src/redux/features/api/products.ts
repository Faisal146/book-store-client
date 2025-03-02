import baseApi from "../../Api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (args) => {
        console.log(args);

        const params = new URLSearchParams();

        if (args) {
          //  append categories
          if (args?.category) {
            args?.category.map((item) => {
              params.append("category", item);
            });
          }

          //  append sort
          if (args?.sort) {
            params.append("sort", args.price);
          }

          // append search

          if (args?.searchTerm) {
            params.append("searchTerm", args.searchTerm);
          }
          if (args?.page) {
            params.append("page", args.page);
          }
          if (args?.limit) {
            params.append("limit", args.limit);
          }
        }

        return {
          url: "/products",
          method: "GET",
          params: params,
        };
      },
      //  providesTags: ["task"],
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
