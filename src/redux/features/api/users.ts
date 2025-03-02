import baseApi from "../../Api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["cart"],
    }),
    getSingleUser: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
    getSingleUserEmail: builder.query({
      query: (id) => ({
        url: `/users/email/${id}`,
        method: "GET",
      }),
    }),
    addToCart: builder.mutation({
      query: (data) => ({
        url: `/users/cart`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cart"],
    }),
    removeFromCart: builder.mutation({
      query: (data) => ({
        url: `/users/cart/delete`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cart"],
    }),
    blockUser: builder.mutation({
      query: (id) => ({
        url: `/auth/${id}/block`,
        method: "PATCH",
      }),
    }),
    unblockUser: builder.mutation({
      query: (id) => ({
        url: `/auth/${id}/unblock`,
        method: "PATCH",
      }),
    }),

    updateUser: builder.mutation({
      query: (args) => ({
        url: `/users/${args.id}`,
        method: "PATCH",
        body: args.UpdatedData,
      }),
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
