import { Stack, Typography } from "@mui/material";
import { ReactComponent as ErrorIcon } from "../assets/error.svg";

interface ErrorProps {
  sx?: any;
}

const Error = ({ sx }: ErrorProps) => {
  return (
    <Stack
      sx={{
        height: "100vh",
        background: "linear-gradient(to bottom right, #001029, #134c88)",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
    >
      <Typography variant="h1">Something Went Wrong!</Typography>
      <ErrorIcon />
    </Stack>
  );
};

export default Error;
