import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayerSlice {
  track: any;
  isPlaying: boolean;
  nextTrack: any;
  previousTrack: any;
}

const initialState: PlayerSlice = {
  track: null,
  isPlaying: false,
  nextTrack: null,
  previousTrack: null,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    addTrack: (state: PlayerSlice, action: PayloadAction<PlayerSlice>) => {
      state.track = action.payload.track;
      state.isPlaying = action.payload.isPlaying;
      state.nextTrack = action.payload.nextTrack;
      state.previousTrack = action.payload.previousTrack;
    },
  },
});

export const { addTrack } = playerSlice.actions;
export default playerSlice.reducer;
