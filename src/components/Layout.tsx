import { Box, Grid, Stack } from "@mui/material";
import { ComponentType, ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopCharts from "./RightSidebar";
import RightSidebar from "./RightSidebar";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
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
      <Box sx={{ position: "fixed", width: "15%", minWidth: "200px" }}>
        <Sidebar />
      </Box>
      <Box sx={{ px: 40, maxWidth: "70%", minHeight: "100vh" }} id="gheng">
        {children}
      </Box>

      <Box
        sx={{
          position: "fixed",
          right: 0,
          width: "20%",
          minWidth: "300px",
          boxSizing: "border-box",
        }}
      >
        <RightSidebar />
      </Box>
    </Stack>
  );
};

export default Layout;
