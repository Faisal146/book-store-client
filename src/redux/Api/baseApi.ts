import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:5000/api/v1/",
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as RootState).auth.token;

//     if (token) {
//       headers.set("authorization", `${token}`);
//     }

//     return headers;
//   },
// });

// const baseQueryWithRefreshToken: BaseQueryFn<
//   FetchArgs,
//   BaseQueryApi,
//   DefinitionType
// > = async (args, api, extraOpitons): Promise<any> => {
//   let result = await baseQuery(args, api, extraOpitons);

//   console.log("result is", result);

//   if (result?.error?.status === 401) {
//     console.log("Sending refresh token");

//     const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
//       method: "POST",
//       credentials: "include",
//     });

//     const data = await res.json();

//     if (data?.data?.accessToken) {
//       const user = (api.getState() as RootState).auth.user;

//       api.dispatch(
//         setUser({
//           user,
//           token: data.data.accessToken,
//         })
//       );

//       result = await baseQuery(args, api, extraOpitons);
//     } else {
//       api.dispatch(logout());
//     }
//   }

//   return result;
// };

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-store-server-ashy.vercel.app/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["user", "order", "product"],

  endpoints: () => ({}),
});

export default baseApi;
