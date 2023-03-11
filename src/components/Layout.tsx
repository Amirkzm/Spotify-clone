import { Box, Grid, Stack } from "@mui/material";
import { ComponentType, ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopCharts from "./RightSidebar";
import RightSidebar from "./RightSidebar";
import Player from "./player/Player";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface LayoutProps {
  children: ReactNode;
  showRightSidebar?: boolean;
}
const Layout = ({ children, showRightSidebar }: LayoutProps) => {
  const track = useSelector((state: RootState) => state.itemToPlay.track);
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
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            gridColumnStart: "2",
            gridColumnEnd: "3",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
        }}
      >
        <RightSidebar />
      </Box>
      {track && <Player />}
    </Box>
  );
};

export default Layout;

/*<Stack
      direction={"row"}
      sx={{
        position: "relative",
        flexWrap: "wrap",
        background: "linear-gradient(to bottom right, #001029, #134c88)",
        overFlowX: "hidden",
      }}
      id="kir"
    >
      <Box
        sx={{
          position: "fixed",
          maxWidth: "10vw",
          minWidth: "200px",
          zIndex: 20,
        }}
      >
        <Sidebar />
      </Box>
      <Box
        sx={{
          pl: !showRightSidebar ? 40 : 25,
          mr: !showRightSidebar ? 40 : 0,
          width: !showRightSidebar ? "70%" : "91vw",
          minHeight: "100vh",
          flex: "0 1 auto",
          display: "flex",
          overFlowX: "hidden",
        }}
        id="main layout section"
      >
        {children}
      </Box>

      <Box
        sx={{
          position: "fixed",
          right: 0,
          width: "20%",
          minWidth: "300px",
          boxSizing: "border-box",
          display: !showRightSidebar ? "block" : "none",
        }}
      >
        <RightSidebar />
      </Box>
    </Stack> */
