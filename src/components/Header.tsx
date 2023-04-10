import { AppBar, Box, Drawer, IconButton, Toolbar } from "@mui/material";
import { Menu } from "@mui/icons-material";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const accessGranted = useSelector(
    (state: RootState) => state.userAuth.accessGranted
  );
  return (
    <>
      {accessGranted && (
        <AppBar
          sx={{
            position: "fixed",
            top: 0,
            background: "hsla(0,0%,100%,.6)",
            height: "60px",
          }}
        >
          <Toolbar sx={{ gap: 1 }}>
            <Box sx={{ display: { md: "none" } }}>
              <IconButton
                edge="start"
                color="primary"
                aria-label="open drawer"
                onClick={() => setShowDrawer(true)}
                sx={{
                  mr: 2,
                }}
              >
                <Menu
                  sx={{
                    fontSize: "35px",
                    color: "white",
                    ":hover": { color: "#f74336" },
                  }}
                />
              </IconButton>
              <Drawer
                anchor={"left"}
                open={showDrawer}
                onClose={() => setShowDrawer(false)}
                sx={{
                  "& .MuiPaper-root": {
                    bgcolor: "common.black",
                    backgroundImage: "none",
                  },
                }}
              >
                <Box
                  onClick={() => setShowDrawer(false)}
                  onKeyDown={() => setShowDrawer(false)}
                >
                  <Sidebar />
                </Box>
              </Drawer>
            </Box>
            <BackButton />
            <ForwardButton />
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default Header;
