import { configureStore } from "@reduxjs/toolkit";
import { playerSlice, userAuthSlice } from "./feature";
import itemSlice from "./feature/itemSlice";
import { spotifyApi } from "./services/spotifyCore";

const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
    savedItem: itemSlice,
    itemToPlay: playerSlice,
    [spotifyApi.reducerPath]: spotifyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spotifyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
export default store;
