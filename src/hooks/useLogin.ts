import React, { useCallback, useState } from "react";
import queryString from "query-string";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { authenticateUser, denyAccess } from "../feature/userAuth";

const CLIENT_ID = "dbc067a0f1114d12bf3dd9e191610d9d";
const REDIRECT_URI = "http://localhost:5173/home";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const SCOPE = "user-read-private user-read-email";

interface useLoginResult {
  oauthHandler: () => void;
}

const useLogin = (): useLoginResult => {
  const token = useSelector((state: RootState) => state.userAuth.token);
  const dispatch = useDispatch();

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
          dispatch(authenticateUser(token));
          clearInterval(checkPopup);
          console.log("token=", token);
          popup.close();
        } else {
          dispatch(denyAccess());
        }
      }
    }, 1000);
  }, []);

  return { oauthHandler };
};

export default useLogin;
