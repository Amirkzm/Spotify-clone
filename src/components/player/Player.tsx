import { Box, CardMedia, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTrack, hidePlayer } from "../../redux/feature/playerSlice";
import { RootState } from "../../redux/store";
import { extractItemProperties } from "../../utils";
import AudioPlayer from "./AudioPlayer";
import CloseIcon from "@mui/icons-material/Close";

const Player = () => {
  console.log("running player");
  // const dispatch = useDispatch();

  const { track, showPlayer } = useSelector(
    (state: RootState) => state.itemToPlay
  );

  const album = useSelector((state: RootState) => state.savedItem.item);

  if (!track) {
    return null;
  }

  const { songName, artistsName } = extractItemProperties({
    item: track,
    itemType: "track",
  });
  const { imageUrl } = extractItemProperties({
    item: album,
    itemType: "album",
  });
  console.log("_*_*_*_*_*", imageUrl);

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
      >
        <CloseIcon sx={{ fontSize: "24px" }} />
      </Box>
    </Stack>
  );
};

export default Player;
