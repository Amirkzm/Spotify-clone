import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ItemSlice {
  item: any;
}

const initialState: ItemSlice = {
  item: null,
};

const itemSlice = createSlice({
  name: "saveItem",
  initialState,
  reducers: {
    addItme: (state: ItemSlice, action: PayloadAction<any>) => {
      state.item = action.payload;
    },
  },
});

export const { addItme } = itemSlice.actions;
export default itemSlice.reducer;
