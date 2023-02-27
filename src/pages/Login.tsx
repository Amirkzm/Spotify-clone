import { Button, Container, Typography } from "@mui/material";
import loginBackground from "../assets/images/login-bg.png";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { token, oauthHandler } = useLogin();
  console.log(token);

  return (
    <Container
      sx={{
        minHeight: "100vh",
        width: "80vw",
        background: `url(${loginBackground}) no-repeat fixed center`,
        backgroundSize: { xs: "cover", lg: "contain" },
        display: "flex",
        flexDirection: "column",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="outlined"
        sx={{
          minHeight: "100px",
          minWidth: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "primary.main",
        }}
        onClick={oauthHandler}
      >
        <Typography
          sx={{
            textDecoration: "none",
            fontFamily: "Abril_Fatface",
            fontSize: "15px",
            fontWeight: "900",
            color: "white",
          }}
        >
          Login to your spotify
        </Typography>
      </Button>
    </Container>
  );
};

export default Login;
