// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const partsApi = createApi({
  reducerPath: "partsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
    prepareHeaders: (headers, { getState }) => {
      const tokenSt = getState().auth.token;
      if (!tokenSt) {
        return;
      }
      headers.set("Authorization", `Bearer ${tokenSt}`);
      return headers;
    },
  }),
  tagTypes: ["Parts"],
  endpoints: (builder) => ({
    getParts: builder.query({
      query: () => "/parts",
      // providesTags: ["Parts"],
    }),
    getModel: builder.query({
      query: (model) => `/model/${model}`,
      providesTags: ["Parts"],
    }),
    getPartById: builder.query({
      query: (id) => `/parts/${id}`,
    }),
    changePart: builder.mutation({
      query: (data) => ({
        url: `/parts/${data._id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Parts"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPartByIdQuery,
  useChangePartMutation,
  useGetPartsQuery,
  useGetModelQuery,
} = partsApi;
