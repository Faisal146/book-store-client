import baseApi from "../../Api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          //  append categories
          if (args?.category) {
            args?.category.map((item: string) => {
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
          url: "/users",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["user"],
    }),
    getSingleUser: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
        providesTags: ["user"],
      }),
    }),
    getSingleUserEmail: builder.query({
      query: (id) => ({
        url: `/users/email/${id}`,
        method: "GET",
        providesTags: ["user"],
      }),
    }),
    addToCart: builder.mutation({
      query: (data) => ({
        url: `/users/cart`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    removeFromCart: builder.mutation({
      query: (data) => ({
        url: `/users/cart/delete`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    blockUser: builder.mutation({
      query: (id) => ({
        url: `/auth/${id}/block`,
        method: "PATCH",
      }),
      invalidatesTags: ["user"],
    }),
    unblockUser: builder.mutation({
      query: (id) => ({
        url: `/auth/${id}/unblock`,
        method: "PATCH",
      }),
      invalidatesTags: ["user"],
    }),

    updateUser: builder.mutation({
      query: (args) => ({
        url: `/users/${args.id}`,
        method: "PATCH",
        body: args.UpdatedData,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useBlockUserMutation,
  useUnblockUserMutation,
  useGetSingleUserQuery,
  useUpdateUserMutation,
  useGetSingleUserEmailQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
} = authApi;
