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
      console.log("playerSlice add track");
      state.track = action.payload.track;
      state.shouldPlay = action.payload.shouldPlay;
      state.nextTrack = action.payload.nextTrack;
      state.previousTrack = action.payload.previousTrack;
      state.trackQueue = action.payload.trackQueue;
      state.showPlayer = true;
    },
    hidePlayer: (state: PlayerSlice) => {
      console.log("playerSlice hidePlayer");
      state.showPlayer = false;
    },
    updatePlayer: (
      state: PlayerSlice,
      action: PayloadAction<Partial<PlayerSlice>>
    ) => {
      console.log("playerSlice updatePlayer");
      Object.assign(state, action.payload);
    },
  },
});

export const { addTrack, hidePlayer, updatePlayer } = playerSlice.actions;
export default playerSlice.reducer;
