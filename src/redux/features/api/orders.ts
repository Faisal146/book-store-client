import baseApi from "../../Api/baseApi";

const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
    }),

    getRevenue: builder.query({
      query: () => ({
        url: `/orders/revenue`,
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
        const { id, data } = args;
        return {
          url: `/products/${id}`,
          method: "PUT",
          body: data,
        };
      },
    }),
    removeOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetOrdersQuery, useRemoveOrderMutation, useGetRevenueQuery } =
  ordersApi;
