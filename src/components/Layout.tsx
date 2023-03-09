import { Box, Grid, Stack } from "@mui/material";
import { ComponentType, ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopCharts from "./RightSidebar";
import RightSidebar from "./RightSidebar";

interface LayoutProps {
  children: ReactNode;
  showRightSidebar?: boolean;
}
const Layout = ({ children, showRightSidebar }: LayoutProps) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        position: "relative",
        flexWrap: "wrap",
        background: "linear-gradient(to bottom right, #001029, #134c88)",
      }}
      id="kir"
    >
      <Box sx={{ position: "fixed", maxWidth: "15%", minWidth: "200px" }}>
        <Sidebar />
      </Box>
      <Box
        sx={{
          ml: !showRightSidebar ? 40 : 25,
          mr: !showRightSidebar ? 40 : 0,
          maxWidth: !showRightSidebar ? "70%" : "1500px",
          minHeight: "100vh",
          flex: "1 1 auto",
          display: "flex",
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
    </Stack>
  );
};

export default Layout;
