import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayerSlice {
  track: any;
  trackQueue: any[];
  shouldPlay: boolean;
  nextTrack: any;
  previousTrack: any;
  showPlayer?: boolean;
}

const initialState: PlayerSlice = {
  track: null,
  trackQueue: [],
  shouldPlay: false,
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
      state.shouldPlay = action.payload.shouldPlay;
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
    updatePlayer: (
      state: PlayerSlice,
      action: PayloadAction<Partial<PlayerSlice>>
    ) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { addTrack, updateTrack, hidePlayer, updatePlayer } =
  playerSlice.actions;
export default playerSlice.reducer;
