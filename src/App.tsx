import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
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
