import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserAuthState {
  token: string | null;
  accessGranted: boolean | null;
}

const initialState: UserAuthState = {
  token: null,
  accessGranted: null,
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    authenticateUser: (
      state: UserAuthState,
      action: PayloadAction<UserAuthState["token"]>
    ) => {
      state.token = action.payload;
      state.accessGranted = true;
    },
    denyAccess: (state: UserAuthState) => {
      state.token = null;
      state.accessGranted = false;
    },
  },
});

export const { authenticateUser, denyAccess } = userAuthSlice.actions;
export default userAuthSlice.reducer;
