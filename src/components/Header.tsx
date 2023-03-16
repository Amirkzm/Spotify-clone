import { AppBar, Toolbar } from "@mui/material";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";

const Header = () => {
  return (
    <AppBar
      sx={{
        position: "fixed",
        top: 0,
        background: "hsla(0,0%,100%,.2)",
        height: "50px",
      }}
    >
      <Toolbar sx={{ gap: 1 }}>
        <BackButton />
        <ForwardButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
