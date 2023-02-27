import { configureStore } from "@reduxjs/toolkit";
import { userAuthSlice } from "../feature";

const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
export default store;
