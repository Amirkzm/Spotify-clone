import { Button, Stack, Typography } from "@mui/material";

const Error = () => {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        minWidth: "100%",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom right, #001029, #134c88)",
      }}
    >
      <Typography variant="h1">
        An Error Happened while Fetching Data.
      </Typography>
      <Typography variant="h2">
        Check your internet connection or Try Again Later
      </Typography>
      <Button variant="contained" sx={{ width: "100px", height: "40px" }}>
        <Typography sx={{ fontSize: "25px" }}>home</Typography>
      </Button>
    </Stack>
  );
};

export default Error;
