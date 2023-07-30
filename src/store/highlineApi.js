import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const highlineApi = createApi({
  reducerPath: "highlineApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
  }),

  endpoints(build) {
    return {
      getHighline: build.query({
        query() {
          return "highline";
        },
      }),
    };
  },
});

export const { useGetHighlineQuery } = highlineApi;

export default highlineApi;
