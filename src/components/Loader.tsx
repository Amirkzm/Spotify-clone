import { Stack } from "@mui/material";
import { ReactComponent as LoaderIcon } from "../assets/loader.svg";

interface LoaderProps {
  sx?: any;
}

const Loader = ({ sx }: LoaderProps) => {
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
      <LoaderIcon />
    </Stack>
  );
};

export default Loader;
