import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface LayoutProps {
  children: ReactNode;
  showRightSidebar?: boolean;
}
const Layout = ({ children, showRightSidebar }: LayoutProps) => {
  const showPlayer = useSelector(
    (state: RootState) => state.itemToPlay.showPlayer
  );
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      direction={"row"}
      sx={{
        background: "linear-gradient(to bottom right, #001029, #134c88)",
        pt: 6,
      }}
    >
      <Box
        sx={{
          position: "fixed",
          width: "20vw",
          minWidth: "15vw",
          display: { xs: "none", md: "block" },
        }}
      >
        <Sidebar />
      </Box>
      <Stack
        sx={{
          pb: showPlayer ? "105px" : "0",
          ml: { md: "20vw" },
          flex: "1 1 auto",
        }}
      >
        <Box
          sx={{
            display: !showRightSidebar ? (isTablet ? "block" : "none") : "none",
          }}
        >
          <RightSidebar />
        </Box>
        {children}
      </Stack>
      <Box
        sx={{
          display: !showRightSidebar ? { xs: "none", lg: "block" } : "none",
          pb: showPlayer ? "105px" : "0",
          maxWidth: "30vw",
        }}
      >
        <RightSidebar />
      </Box>
    </Stack>
  );
};

export default Layout;
