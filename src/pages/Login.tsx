import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  Input,
  Link,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import loginBackground from "../assets/images/login-bg.png";
import useLogin from "../hooks/useLogin";

const CLIENT_ID = "dbc067a0f1114d12bf3dd9e191610d9d";
const REDIRECT_URI = "http://localhost:5173/";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "playlist-read-private",
  "user-follow-read",
  "user-top-read",
  "user-read-recently-played",
  "user-modify-playback-state",
];

const LOGIN_LINK = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;

const Login = () => {
  // const [token, setToken] = useState<string>("");

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   let token = window.localStorage.getItem("token");
  //   if (!token && hash) {
  //     token = hash
  //       .substring(1)
  //       .split("&")
  //       .find((item) => item.startsWith("access_token"))!
  //       .split("=")[0];
  //     window.location.hash = "";
  //     window.localStorage.setItem("token", token);
  //   }

  //   setToken(token!);
  // }, []);

  const { token, oauthHandler } = useLogin();
  const kir = () => {};
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
