import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserAuthState {
  accessToken: string | null;
  accessGranted: boolean | null;
}

const initialState: UserAuthState = {
  accessToken: null,
  accessGranted: null,
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    authenticateUser: (
      state: UserAuthState,
      action: PayloadAction<UserAuthState["accessToken"]>
    ) => {
      state.accessToken = action.payload;
      state.accessGranted = true;
    },
    denyAccess: (state: UserAuthState) => {
      state.accessToken = null;
      state.accessGranted = false;
    },
  },
});

export const { authenticateUser, denyAccess } = userAuthSlice.actions;
export default userAuthSlice.reducer;
