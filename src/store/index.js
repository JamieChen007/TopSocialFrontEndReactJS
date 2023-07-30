import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import profileApi from "./profileApi";
import highlineApi from "./highlineApi";
import cardsApi from "./cardsApi";
import requestApi from "./requestApi";
import messageApi from "./messageApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
  reducer: {
    [profileApi.reducerPath]: profileApi.reducer,
    [highlineApi.reducerPath]: highlineApi.reducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
    [requestApi.reducerPath]: requestApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      profileApi.middleware,
      highlineApi.middleware,
      cardsApi.middleware,
      requestApi.middleware,
      messageApi.middleware
    ),
});

setupListeners(store.dispatch);

export default store;
