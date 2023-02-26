import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1DB954",
    },
    background: {
      paper: "rgb(45, 45, 45)",
      default: "rgb(0,0,0)",
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: [
      "roboto",
      "Raleway",
      "Abril_Fatface",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

theme.typography.body1 = {
  ...theme.typography,
  fontSize: "clamp(14px,5vw,16px)",
  lineHeight: 1.3,
  [theme.breakpoints.up("md")]: { fontSize: "clamp(16px,5vw,18px)" },
};

theme.typography.h1 = {
  ...theme.typography,
  fontSize: "clamp(19px,5vw,21px)",
  fontWeight: "700",
  color: theme.palette.text.primary,
  [theme.breakpoints.up("md")]: { fontSize: "clamp(30px,5vw,34px)" },
};

theme.typography.h2 = {
  ...theme.typography,
  fontSize: "clamp(17px,5vw,19px)",
  fontWeight: "600",
  [theme.breakpoints.up("md")]: { fontSize: "clamp(26px,5vw,30px)" },
};

theme.typography.h3 = {
  ...theme.typography,
  fontSize: "clamp(16px,5vw,18px)",
  fontWeight: "400",
  [theme.breakpoints.up("md")]: { fontSize: "clamp(23px,5vw,26px)" },
};

export default theme;
