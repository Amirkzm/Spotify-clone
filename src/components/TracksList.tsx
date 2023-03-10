import { Box, List, Stack, Typography } from "@mui/material";
import PopularTrackItem from "./PopularTrackItem";
import ShowMore from "./ShowMore";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface TrackListProps {
  tracks: any;
  height: number;
  type?: "album" | "artist" | "playlist" | "track";
}

const TracksList = ({ tracks, height, type = "artist" }: TrackListProps) => {
  let showReleaseDate = true;
  if (type === "album") {
    showReleaseDate = false;
  }
  return (
    <Stack>
      <Stack direction={"row"} justifyContent="space-between">
        <Typography variant="h3" sx={{ pl: 4 }}>
          Title
        </Typography>
        {showReleaseDate && (
          <Typography variant="h3" sx={{ position: "relative", left: "23%" }}>
            Release Date
          </Typography>
        )}
        <AccessTimeIcon sx={{ alignSelf: "center", fontSize: "26px", mr: 3 }} />
      </Stack>
      <Box
        sx={{
          width: "95%",
          height: "1px",
          bgcolor: "rgba(255,255,255,0.2)",
          alignSelf: "center",
          ml: 3,
        }}
      ></Box>
      <ShowMore minHeight={380}>
        <List component="ol" sx={{ width: "100%" }}>
          {tracks?.map((item: any) => (
            <PopularTrackItem key={item?.id} trackItem={item} />
          ))}
        </List>
      </ShowMore>
    </Stack>
  );
};

export default TracksList;
