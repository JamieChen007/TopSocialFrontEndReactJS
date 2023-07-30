import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const requestApi = createApi({
  reducerPath: "requestApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
  }),

  endpoints(build) {
    return {
      getRequest: build.query({
        query() {
          return "request";
        },
      }),
    };
  },
});

export const { useGetRequestQuery } = requestApi;

export default requestApi;
