import { Box, ListItem, ListItemIcon, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { formatDuration, getAllArtists } from "../utils";
import ExplicitIcon from "./ExplicitIcon";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useDispatch, useSelector } from "react-redux";
import { updateTrack } from "../redux/feature/playerSlice";
import { RootState } from "../redux/store";

interface TrackDetailsProps {
  trackItem: any;
}

const PopularTrackItem = ({ trackItem }: TrackDetailsProps) => {
  const [show, setShow] = useState<boolean>(false);
  const dispatch = useDispatch();
  const currentPlayingTrack = useSelector(
    (state: RootState) => state.itemToPlay.track
  );

  const addTrackToStore = () => {
    dispatch(
      updateTrack({
        track: trackItem,
      })
    );
  };

  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        bgcolor:
          currentPlayingTrack?.id === trackItem?.id ? "hsla(0,0%,100%,.2)" : "",
        "&:hover": { bgcolor: "hsla(0,0%,100%,.2)" },
      }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Stack direction={"row"}>
        {show && (
          <ListItemIcon
            sx={{ position: "absolute", top: "5%", left: "-1%" }}
            onClick={addTrackToStore}
          >
            <PlayArrowIcon
              sx={{
                fontSize: "48px",
                "&:hover": { fill: "#f74336", cursor: "pointer" },
              }}
            />
          </ListItemIcon>
        )}
        <Box sx={{ ml: 3 }}>
          <Link to={`/track/${trackItem?.id}`} onClick={addTrackToStore}>
            <Typography>{trackItem?.name}</Typography>
          </Link>
          <Box sx={{ display: "flex", alignItems: "end", gap: 1 }}>
            {trackItem?.explicit && <ExplicitIcon />}
            <Typography component={"span"}>
              {getAllArtists(trackItem?.artists)}
            </Typography>
          </Box>
        </Box>
      </Stack>
      <Typography variant="body1" sx={{ position: "absolute", left: "70%" }}>
        {trackItem?.album?.release_date}
      </Typography>
      <Typography variant="body1">
        {formatDuration(trackItem?.duration_ms)}
      </Typography>
    </ListItem>
  );
};

export default PopularTrackItem;
