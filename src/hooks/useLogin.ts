import React, { useEffect, useState } from "react";

const CLIENT_ID = "dbc067a0f1114d12bf3dd9e191610d9d";
const REDIRECT_URI = "http://localhost:5173/";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const LOGIN_LINK = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;

interface useLoginResult {
  token: string | null;
  oauthHandler: () => void;
}

const useLogin = (): useLoginResult => {
  const [externalPopup, setExternalPopup] = useState<Window | null>(null);
  const [token, setToken] = useState<string | null>(null);

  console.log(externalPopup);
  useEffect(() => {
    if (externalPopup) {
      const hash = externalPopup.location.hash;
      let token = window.localStorage.getItem("token");
      console.log("storageToken=", token);
      console.log("externalHash=", hash);
      if (!token && hash) {
        token = extractToken(hash);
      }
      window.location.hash = "";
      token && window.localStorage.setItem("token", token);
      setToken(token);
      console.log("newtoken = ", token);
    }
    return () => window.localStorage.removeItem("token");
  }, [externalPopup?.location.href]);

  const oauthHandler = () => {
    const width: number = 500;
    const height: number = 600;
    const left = window.screenX;
    const top = window.screenY;
    const title = `Authentication`;
    const popup = window.open(
      LOGIN_LINK,
      title,
      `width=${width},height=${height},left=${left},top=${top}`
    );
    console.log("kirekhar", popup);
    setExternalPopup(popup);
  };

  const extractToken = (hash: string): string | null => {
    let token = null;
    const authResult = hash
      .substring(1)
      .split("&")
      .find((item) => item.startsWith("access_token"));
    if (authResult) {
      token = hash
        .substring(1)
        .split("&")
        .find((item) => item.startsWith("access_token"))!
        .split("=")[1];
    }
    return token;
  };

  return { token, oauthHandler };
};

export default useLogin;
