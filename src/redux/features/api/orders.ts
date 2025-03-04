import baseApi from "../../Api/baseApi";

const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
      providesTags: ["order"],
    }),

    getUserOrders: builder.query({
      query: () => ({
        url: "/orders/my-orders",
        method: "GET",
      }),
      providesTags: ["order"],
    }),
    getSingleOrder: builder.query({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "GET",
      }),
      providesTags: ["order"],
    }),
    addOrder: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["order"],
    }),

    updateOrder: builder.mutation({
      query: (args) => ({
        url: `/orders/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["order"],
    }),

    getRevenue: builder.query({
      query: () => ({
        url: `/orders/revenue/totalrevenue`,
        method: "GET",
      }),
    }),

    removeOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useRemoveOrderMutation,
  useGetRevenueQuery,
  useAddOrderMutation,
  useGetSingleOrderQuery,
  useGetUserOrdersQuery,
  useUpdateOrderMutation,
} = ordersApi;
