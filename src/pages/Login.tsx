import {
  Alert,
  Button,
  IconButton,
  Snackbar,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import loginBackground from "../assets/images/login-bg.png";
import useLogin from "../hooks/useLogin";
import { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Login = () => {
  console.log("running login");
  const { oauthHandler } = useLogin();
  const [open, setOpen] = useState<boolean>(true);
  const { accessToken, accessGranted } = useSelector(
    (state: RootState) => state.userAuth
  );

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
    <Stack
      sx={{ background: "linear-gradient(to bottom right, #001029, #134c88)" }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Box sx={{ mt: 2 }}>
          <img
            src={loginBackground}
            height={"700"}
            style={{ minHeight: "90vh", width: "100%", minWidth: "425px" }}
          />
        </Box>
        <Stack gap={5} justifyContent={"space-between"}>
          <Typography
            variant="h1"
            sx={{ maxWidth: "600px", minWidth: "180px" }}
          >
            Listen to song previews, discover new artists, and connect with your
            favorite tracks like never before.
          </Typography>
          <Typography
            sx={{
              textDecoration: "none",
              fontFamily: "Abril_Fatface",
              fontSize: "15px",
              fontWeight: "900",
              color: "white",
            }}
          >
            first, you need to login to your spotify account
          </Typography>
          <Button
            variant="contained"
            sx={{
              minHeight: "80px",
              maxWidth: "100px",
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
              Login
            </Typography>
          </Button>
        </Stack>
        {!accessGranted && accessGranted !== null && (
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Access not granted"
            action={action}
            sx={{ color: "error" }}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Access not granted!
            </Alert>
          </Snackbar>
        )}
      </Stack>
      <Box sx={{ width: "100%", height: "1px", bgcolor: "white" }}></Box>
      <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "cursive",
            fontSize: "25px !important",
            fontWeight: "800 !important",
          }}
        >
          Design and Created by Amir Kazemi
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Login;
