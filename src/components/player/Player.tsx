import { Box, CardMedia, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrack } from "../../redux/feature/playerSlice";
import { RootState } from "../../redux/store";
import { extractItemProperties } from "../../utils";
import PlayButton from "../PlayButton";
import AudioPlayer from "./AudioPlayer";

// interface PlayerProps {}

const Player = () => {
  const { track, isPlaying, nextTrack, previousTrack } = useSelector(
    (state: RootState) => state.itemToPlay
  );

  console.log(track?.name);
  const [audio, setAudio] = useState<HTMLAudioElement>(
    new Audio(track?.preview_url)
  );
  const { songName, albumName, artistsName, trackDuration, imageUrl } =
    extractItemProperties({ item: track, itemType: "track" });

  const dispatch = useDispatch();

  // const audio = new Audio(track?.preview_url);

  useEffect(() => {}, []);

  const playHandler = () => {
    console.log("isplaying = ", isPlaying);
    if (isPlaying) {
      console.log("is playing . now pausing");
      audio.pause();
    } else {
      console.log("paused . now playing");

      audio.play();
    }
    dispatch(
      addTrack({
        track: track,
        isPlaying: !isPlaying,
        nextTrack: null,
        previousTrack: null,
      })
    );
  };

  return (
    <Stack
      direction={"row"}
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "100px",
        bgcolor: "primary.main",
      }}
    >
      {/* <Stack direction={"row"}>
        <CardMedia
          component="img"
          height="80"
          image={imageUrl}
          alt="track photo"
          sx={{ objectFit: "contain" }}
        />
        <Typography>{songName}</Typography>
        <Typography>{artistsName}</Typography>
        <Box component={"audio"} src={track?.preview_url} controls></Box>
      </Stack>
      <Box onClick={playHandler}>
        <PlayButton sx={{ fontSize: "35px" }} />
      </Box>
      <Box component={"audio"} src={track?.preview_url}></Box> */}
      <AudioPlayer preview_url={track?.preview_url} />
    </Stack>
  );
};

export default Player;
