import { CardMedia, List, ListItemButton, Typography } from "@mui/material";
import { formatDuration } from "../utils";

interface TrackDetailsProps {
  trackItem: any;
}

const PopularTrackItem = ({ trackItem }: TrackDetailsProps) => {
  return (
    <List>
      <ListItemButton sx={{ display: "flex", justifyContent: "space-between" }}>
        <CardMedia
          component="img"
          height="60"
          image={trackItem?.album?.images[1]?.url}
          alt="album photo"
          sx={{
            objectFit: "contain",
            width: "60px",
          }}
        />
        <Typography variant="body2">{trackItem?.popularity}</Typography>
        <Typography variant="body2">
          {formatDuration(trackItem?.duration_ms)}
        </Typography>
      </ListItemButton>
    </List>
  );
};

export default PopularTrackItem;
