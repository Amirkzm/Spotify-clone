import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayerSlice {
  track: any;
  trackQueue: any[];
  isPlaying: boolean;
  nextTrack: any;
  previousTrack: any;
  showPlayer?: boolean;
}

const initialState: PlayerSlice = {
  track: null,
  trackQueue: [],
  isPlaying: false,
  nextTrack: null,
  previousTrack: null,
  showPlayer: false,
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
      state.trackQueue = action.payload.trackQueue;
      state.showPlayer = true;
    },
    updateTrack: (
      state: PlayerSlice,
      action: PayloadAction<PlayerSlice["track"]>
    ) => {
      state.track = action.payload.track;
    },
    hidePlayer: (state: PlayerSlice) => {
      state.showPlayer = false;
    },
  },
});

export const { addTrack, updateTrack, hidePlayer } = playerSlice.actions;
export default playerSlice.reducer;
