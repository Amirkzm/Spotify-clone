import { Box, CardMedia, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrack, hidePlayer } from "../../redux/feature/playerSlice";
import { RootState } from "../../redux/store";
import { extractItemProperties } from "../../utils";
import PlayButton from "../PlayButton";
import AudioPlayer from "./AudioPlayer";
import CloseIcon from "@mui/icons-material/Close";

const Player = () => {
  console.log("running player");
  const dispatch = useDispatch();
  const showPlayer = useSelector(
    (state: RootState) => state.itemToPlay.showPlayer
  );
  const { track } = useSelector((state: RootState) => state.itemToPlay);

  const { songName, artistsName, imageUrl } = extractItemProperties({
    item: track,
    itemType: "track",
  });

  useEffect(() => {
    console.log("inside player useEffect ---------------");
  }, []);

  return (
    <Stack
      direction={"row"}
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "100px",
        bgcolor: "primary.main",
        display: showPlayer ? "flex" : "none",
      }}
    >
      <Stack direction={"row"} gap={1} sx={{ ml: 3 }}>
        <CardMedia
          component="img"
          height="60"
          image={imageUrl}
          alt="album photo"
          sx={{ objectFit: "contain", mt: 3, width: "60px" }}
        />
        <Box sx={{ alignSelf: "center" }}>
          <Typography>{songName}</Typography>
          <Typography variant="body2">{artistsName}</Typography>
        </Box>
      </Stack>
      <Box
        sx={{
          position: "absolute",
          left: "0%",
          top: "10%",
          width: "100%",
        }}
      >
        <AudioPlayer />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 5,
          right: 5,
          "&:hover": { cursor: "pointer" },
        }}
        onClick={() => dispatch(hidePlayer())}
      >
        <CloseIcon sx={{ fontSize: "24px" }} />
      </Box>
    </Stack>
  );
};

export default Player;
