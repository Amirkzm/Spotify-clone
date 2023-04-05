import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components";
// import { ReactComponent as NotFoundIcon } from "../assets/NotFound.svg";

interface NotFoundProps {
  sx?: any;
}

const NotFound = ({ sx }: NotFoundProps) => {
  const navigate = useNavigate();
  const homeHandler = () => {
    navigate("/home");
  };
  return (
    <Layout showRightSidebar>
      <Stack
        sx={{
          height: "100vh",
          width: "100%",
          background: "linear-gradient(to bottom right, #001029, #134c88)",
          justifyContent: "center",
          alignItems: "center",
          ...sx,
        }}
      >
        <Typography variant="h1">Something Went Wrong!</Typography>
        <Typography
          variant="h1"
          sx={{ "&": { fontSize: "clamp(85px,5vw,96px)" }, color: "white" }}
        >
          404
        </Typography>
        <Typography
          variant="h1"
          sx={{ "&": { fontSize: "clamp(85px,5vw,96px)" }, color: "white" }}
        >
          Not Found
        </Typography>
        <Button
          onClick={homeHandler}
          variant="outlined"
          sx={{ color: "white" }}
        >
          Get back to home
        </Button>
      </Stack>
    </Layout>
  );
};

export default NotFound;
