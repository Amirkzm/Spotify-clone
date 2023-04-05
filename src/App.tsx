import { Alert, Box } from "@mui/material";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Header from "./components/Header";
import Player from "./components/player/Player";
import ProtectedRoute from "./components/ProtectedRoute";
import {
  ArtistDetails,
  Discover,
  Home,
  Login,
  PlaylistDetails,
  Search,
  TrackDetails,
  UserLibrary,
} from "./pages";
import AlbumDetails from "./pages/AlbumDetails";
import NotFound from "./pages/NotFound";
import { RootState } from "./redux/store";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  const isUserAuthenticated = useSelector(
    (state: RootState) => state.userAuth.accessGranted
  );
  const showPlayer = useSelector(
    (state: RootState) => state.itemToPlay.showPlayer
  );

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "common.black" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/search/" element={<Search />} />
            <Route path="/album/:albumId" element={<AlbumDetails />} />
            <Route path="/track/:trackId" element={<TrackDetails />} />
            <Route path="/playlist/:playlistId" element={<PlaylistDetails />} />
            <Route path="/artist/:artistId" element={<ArtistDetails />} />
            <Route path="/library" element={<UserLibrary />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>

        {isUserAuthenticated && showPlayer && <Player />}
      </Box>
    </BrowserRouter>
  );
}

export default App;
