import {
  Alert,
  Button,
  Container,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import loginBackground from "../assets/images/login-bg.png";
import useLogin from "../hooks/useLogin";
import { useState, Fragment } from "react";

const Login = () => {
  const { token, oauthHandler, grantAccess } = useLogin();
  const [open, setOpen] = useState<boolean>(true);
  console.log(token);

  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </Fragment>
  );

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
          Login To Your Spotify ACcount
        </Typography>
      </Button>
      {!grantAccess && grantAccess !== null && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Access not granted"
          action={action}
          sx={{ color: "error" }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Access not granted!
          </Alert>
        </Snackbar>
      )}
    </Container>
  );
};

export default Login;
