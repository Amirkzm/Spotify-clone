import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Discover, Home, Library, Login, Search, TrackDetails } from "./pages";
import AlbumDetails from "./pages/AlbumDetails";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "common.black" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/search/" element={<Search />} />
          <Route path="/library/" element={<Library />} />
          <Route path="search/album/:albumId" element={<AlbumDetails />} />
          <Route path="/album/:trackId" element={<TrackDetails />} />
          <Route path="/album/:playlistId" element={<AlbumDetails />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
