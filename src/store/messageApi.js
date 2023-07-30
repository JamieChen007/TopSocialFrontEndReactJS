import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
  }),

  endpoints(build) {
    return {
      getMessage: build.query({
        query() {
          return "message";
        },
      }),
    };
  },
});

export const { useGetMessageQuery } = messageApi;

export default messageApi;
