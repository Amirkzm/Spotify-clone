import {
  Box,
  Divider,
  ListItem,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { formatDuration, getAllArtists } from "../utils";
import ExplicitIcon from "./ExplicitIcon";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface TrackDetailsProps {
  trackItem: any;
}

const PopularTrackItem = ({ trackItem }: TrackDetailsProps) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        "&:hover": { bgcolor: "hsla(0,0%,100%,.2)" },
      }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Stack direction={"row"}>
        {show && (
          <ListItemIcon sx={{ position: "absolute", top: "25%", left: "0" }}>
            <PlayArrowIcon
              sx={{
                fontSize: "35px",
                "&:hover": { fill: "#f74336", cursor: "pointer" },
              }}
            />
          </ListItemIcon>
        )}
        <Box sx={{ ml: 3 }}>
          <Link to={`/track/${trackItem?.id}`}>
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
      <Typography variant="body1">
        {formatDuration(trackItem?.duration_ms)}
      </Typography>
    </ListItem>
  );
};

export default PopularTrackItem;
