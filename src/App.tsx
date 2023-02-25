import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

const CLIENT_ID = "dbc067a0f1114d12bf3dd9e191610d9d";
const REDIRECT_URI = "http://localhost:5173/";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "playlist-read-private",
  "user-follow-read",
  "user-top-read",
  "user-read-recently-played",
  "user-modify-playback-state",
];

const kir =
  "http://localhost:5173/#access_token=BQD2qecMepDGlJw84fdGv6_v0oAmY9tREZ49oAg4VYLX0KQjFz7Y6ti-ztbBMm_MH12_ly43ivPnwYHhV93uM4TOfvlFZfOB3m8ouaPIEiv9zKq6lmMhD3DS3HVH9DQQy5H7Z-Scd1j9vhHb4mUXjcjQJJvjlM0Js9aa-CrGBec_y2PZqrNgYIVFtLrQp_WZAFNG&token_type=Bearer&expires_in=3600";

function App() {
  // const [token, setToken] = useState<string>("");

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   let token = window.localStorage.getItem("token");
  //   if (!token && hash) {
  //     token = hash
  //       .substring(1)
  //       .split("&")
  //       .find((item) => item.startsWith("access_token"))!
  //       .split("=")[0];
  //     window.location.hash = "";
  //     window.localStorage.setItem("token", token);
  //   }

  //   setToken(token!);
  // }, []);

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "common.black" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/video/:id" element={<VideoDetails />} />
            <Route path="/channel/:id" element={<ChannelDetails />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} /> */}
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;

/* <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Login to Spotify
      </a> */
