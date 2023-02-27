import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserAuthState {
  value: string | null;
}

const initialState: UserAuthState = {
  value: null,
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    saveToken: (state: UserAuthState, action: PayloadAction<UserAuthState>) => {
      state.value = action.payload.value;
    },
    deleteToken: (state: UserAuthState) => {
      state.value = null;
    },
  },
});

// export const { userAuthSliceActions } = userAuthSlice.actions;
export default userAuthSlice.reducer;
