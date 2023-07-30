import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const cardsApi = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
  }),

  endpoints(build) {
    return {
      getCards: build.query({
        query() {
          return "cards";
        },
      }),
    };
  },
});

export const { useGetCardsQuery } = cardsApi;

export default cardsApi;
