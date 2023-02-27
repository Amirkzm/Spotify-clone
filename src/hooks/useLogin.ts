import React, { useCallback, useState } from "react";
import queryString from "query-string";

const CLIENT_ID = "dbc067a0f1114d12bf3dd9e191610d9d";
const REDIRECT_URI = "http://localhost:5173/";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const SCOPE = "user-read-private user-read-email";

interface useLoginResult {
  token: string | null;
  oauthHandler: () => void;
  grantAccess: boolean | null;
}

const useLogin = (): useLoginResult => {
  const [token, setToken] = useState<string | null>(null);
  const [grantAccess, setGrantAccess] = useState<boolean | null>(null);

  const oauthHandler = useCallback(() => {
    const queryParams = queryString.stringify({
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      response_type: RESPONSE_TYPE,
      scope: SCOPE,
    });

    const authUrl = `${AUTH_ENDPOINT}?${queryParams}`;
    const width = 450;
    const height = 730;
    const left = window.screenX + window.outerWidth / 2 - width / 2;
    const top = window.screenY + window.outerHeight / 2 - height / 2;
    const popup = window.open(
      authUrl,
      "Spotify",
      `width=${width},height=${height},left=${left},top=${top}`
    );

    const checkPopup = setInterval(() => {
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(checkPopup);
      } else {
        const hash = popup.location.hash.substring(1);
        const token = hash.split("&")[0].split("=")[1];
        if (token) {
          setToken(token);
          clearInterval(checkPopup);
          console.log("token=", token);
          popup.close();
          setGrantAccess(true);
        } else {
          setGrantAccess(false);
        }
      }
    }, 1000);
  }, []);

  return { token, oauthHandler, grantAccess };
};

export default useLogin;
