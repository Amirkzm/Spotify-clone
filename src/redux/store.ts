import { configureStore } from "@reduxjs/toolkit";
import { userAuthSlice } from "./feature";
import { spotifyApi } from "./services/spotifyCore";

const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
    [spotifyApi.reducerPath]: spotifyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spotifyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
export default store;
