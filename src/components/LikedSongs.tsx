import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePlayer } from "../redux/feature/playerSlice";
import { getAllArtists } from "../utils";
import PlayButton from "./PlayButton";
import StyledDot from "./StyledDot";

interface LikedSongsProps {
  tracks: any;
}

const LikedSongs = ({ tracks }: LikedSongsProps) => {
  const [showPlay, setShowPlay] = useState<boolean>(false);
  const dispatch = useDispatch();

  const likedSongPlayHandler = () => {
    dispatch(
      updatePlayer({
        track: tracks?.items[0]?.track,
        shouldPlay: true,
        nextTrack: null,
        previousTrack: null,
        trackQueue: tracks?.items.map((item: any) => item?.track),
        showPlayer: true,
      })
    );
  };

  const cardsongsDetails = (
    <Box sx={{ height: "100%" }}>
      {tracks?.items?.map((track: any, index: number) => (
        <Box component={"span"} key={track?.track?.id + index}>
          <Typography component={"span"} fontWeight="bold" variant="body1">
            {" "}
            {getAllArtists(track?.track?.artists)}{" "}
          </Typography>
          <Typography component="span">{track?.track?.name}</Typography>
          <StyledDot />
        </Box>
      ))}
      {showPlay && (
        <Box
          sx={{
            transform: "translateY(-50px)",
            transition: "all 1s",
            position: "absolute",
            top: "95%",
            right: "5%",
          }}
          onClick={likedSongPlayHandler}
        >
          <PlayButton sx={{ fontSize: "48px" }} />
        </Box>
      )}
    </Box>
  );
  return (
    <Stack
      sx={{
        maxWidth: "425px",
        height: "278px",
        background: "linear-gradient(to bottom right, #001029, #134c88)",
        borderRadius: "10px",
        p: 5,
        position: "relative",
      }}
      onMouseEnter={() => setShowPlay(true)}
      onMouseLeave={() => setShowPlay(false)}
    >
      {cardsongsDetails}
      <Typography variant="h1" sx={{ fontSize: "clamp(48px,5vw+1rem,53px)" }}>
        Liked songs
      </Typography>
      <Typography>{tracks?.items?.length} Liked songs</Typography>
    </Stack>
  );
};

export default LikedSongs;
