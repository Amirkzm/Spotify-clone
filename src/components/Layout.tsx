import { Box, Grid, Stack } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import Player from "./player/Player";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface LayoutProps {
  children: ReactNode;
  showRightSidebar?: boolean;
}
const Layout = ({ children, showRightSidebar }: LayoutProps) => {
  console.log("running layout");
  const showPlayer = useSelector(
    (state: RootState) => state.itemToPlay.showPlayer
  );
  return (
    <Box
      sx={{ background: "linear-gradient(to bottom right, #001029, #134c88)" }}
    >
      <Box sx={{ position: "fixed", width: "20vw", minWidth: "15vw" }}>
        <Sidebar />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `20vw ${
            !showRightSidebar ? "50vw" : "80vw"
          } minmax(25vw,30vw)`,
          gridAutoFlow: "dense",
          pb: showPlayer ? "105px" : "0",
        }}
      >
        <Box
          sx={{
            gridColumnStart: "2",
            gridColumnEnd: "3",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // pb: showPlayer ? "200px" : "",
          }}
        >
          {children}
        </Box>
      </Box>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "30vw",
          display: !showRightSidebar ? "block" : "none",
          pb: showPlayer ? "105px" : "0",
        }}
      >
        <RightSidebar />
      </Box>
    </Box>
  );
};

export default Layout;
