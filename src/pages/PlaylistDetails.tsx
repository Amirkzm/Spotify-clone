import { Box, CardMedia, Stack, Typography } from "@mui/material";
import { ShowMore } from "../components";
import PopularTrackItem from "../components/PopularTrackItem";
import { extractItemProperties, formatDuration, theme } from "../utils";

import useImageColor from "../hooks/useImageColor";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const PlaylistDetails = () => {
  const playlistItem = useSelector((state: RootState) => state.savedItem.item);

  const { imageUrl, playlistName, playlistTracks } = extractItemProperties({
    item: playlistItem,
    itemType: "playlist",
  });
  const heroBackground = useImageColor(imageUrl);

  return (
    <Stack sx={{ minWidth: "100vh" }}>
      <Box
        component="section"
        sx={{
          display: "flex",
          background: `${heroBackground}`,
          minWidth: "500px",
        }}
      >
        <Box>
          <CardMedia
            component="img"
            height="240"
            image={imageUrl}
            alt="album photo"
            sx={{
              objectFit: "contain",
              mt: 3,
              width: "240px",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.8)",
            }}
          />
        </Box>
        <Box>
          <Typography>Album</Typography>
          <Typography variant="h1" sx={{ fontSize: "clamp(48px,5vw,58px)" }}>
            {playlistName}
          </Typography>
          <Typography variant="caption"></Typography>
        </Box>
      </Box>
      <Stack
        sx={{
          background: `linear-gradient(to left, #134c88,${heroBackground} )`,
        }}
      >
        <Stack direction={"row"}></Stack>
        <ShowMore minHeight={500}>
          <Box component="section">
            {playlistTracks.map((item: any) => (
              <PopularTrackItem key={item?.id} trackItem={item} />
            ))}
          </Box>
        </ShowMore>
      </Stack>
    </Stack>
  );
};

export default PlaylistDetails;
