import { Box, Container } from "@mui/material";
import loginBackground from "../assets/images/login-bg.png";

const Login = () => {
  console.log("logins");
  return (
    <Container
      sx={{
        minHeight: "100vh",
        width: "80vw",
        backgroundImage: `url(${loginBackground})`,
        backgroundRepeat: "no-repeat",
        transform: "translateX(50px)",
      }}
    >
      alfbl
    </Container>
  );
};

export default Login;
