import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Discover, Home, Login, Search } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "common.black" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/search/" element={<Search />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
