import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Player from "./components/player/Player";
import {
  ArtistDetails,
  Discover,
  Home,
  Library,
  Login,
  PlaylistDetails,
  Search,
  TrackDetails,
  UserLibrary,
} from "./pages";
import AlbumDetails from "./pages/AlbumDetails";
import { RootState } from "./redux/store";

function App() {
  console.log("running app");
  const showPlayer = useSelector(
    (state: RootState) => state.itemToPlay.showPlayer
  );
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "common.black" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/search/" element={<Search />} />
          <Route path="/album/:albumId" element={<AlbumDetails />} />
          <Route path="/track/:trackId" element={<TrackDetails />} />
          <Route path="/playlist/:playlistId" element={<PlaylistDetails />} />
          <Route path="/artist/:artistId" element={<ArtistDetails />} />
          <Route path="/library" element={<UserLibrary />} />
        </Routes>
        <Player />
      </Box>
    </BrowserRouter>
  );
}

export default App;
