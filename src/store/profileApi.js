import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
  }),

  endpoints(build) {
    return {
      getProfile: build.query({
        query() {
          return "profile";
        },
      }),
    };
  },
});

export const { useGetProfileQuery } = profileApi;

export default profileApi;
