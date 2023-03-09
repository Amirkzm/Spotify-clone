import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  console.log("running app");
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "common.black" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/search/" element={<Search />} />
          {/* <Route path="/library/" element={<Library />} /> */}
          <Route path="/album/:albumId" element={<AlbumDetails />} />
          <Route path="/track/:trackId" element={<TrackDetails />} />
          <Route path="/playlist/:playlistId" element={<PlaylistDetails />} />
          <Route path="/artist/:artistId" element={<ArtistDetails />} />
          <Route path="/library" element={<UserLibrary />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
