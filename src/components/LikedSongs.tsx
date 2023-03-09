import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { getAllArtists } from "../utils";
import PlayButton from "./PlayButton";

interface LikedSongsProps {
  tracks: any;
}

const LikedSongs = ({ tracks }: LikedSongsProps) => {
  const [showPlay, setShowPlay] = useState<boolean>(false);
  console.log(tracks);

  const cardsongsDetails = (
    <Box>
      {tracks?.items?.map((track: any, index: number) => {
        return (
          <Box component={"span"} key={track?.track?.id + index}>
            <Typography component={"span"} fontWeight="bold" variant="body1">
              {" "}
              {getAllArtists(track?.track?.artists)}{" "}
            </Typography>
            <Typography component="span">{track?.track?.name}</Typography>
            <Typography
              component={"span"}
              sx={{ fontSize: "88px", fontWeight: "800" }}
            >
              .
            </Typography>
          </Box>
        );
      })}
      {showPlay && (
        <Box
          sx={{
            transform: "translateY(-50px)",
            transition: "all 1s",
            position: "absolute",
            top: "95%",
            right: "5%",
          }}
        >
          <PlayButton sx={{ fontSize: "48px" }} />
        </Box>
      )}
    </Box>
  );
  return (
    <Stack
      gap={3}
      sx={{
        maxWidth: "425px",
        maxHeight: "278px",
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
