import { Box, CardMedia, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { ShowMore } from "../components";
import PopularTrackItem from "../components/PopularTrackItem";
import { useGetArtistTopTracksQuery } from "../redux";
import { extractItemProperties, formatDuration, theme } from "../utils";

import useImageColor from "../hooks/useImageColor";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const TrackDetails = () => {
  const trackItem = useSelector((state: RootState) => state.savedItem.item);
  const {
    imageUrl,
    artistId,
    releaseDate,
    songName,
    artistsName,
    trackDuration,
  } = extractItemProperties({
    item: trackItem,
    itemType: "track",
  });
  const {
    data: topTracksData,
    isLoading: topTracksLoading,
    isError: topTracksError,
  } = useGetArtistTopTracksQuery({ artistId: artistId });

  const heroBackground = useImageColor(imageUrl);

  if (topTracksLoading || topTracksError) {
    return <p>is loading or error happened</p>;
  }
  const releaseYear: string = releaseDate.split("-")[0];

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
          <Typography>Song</Typography>
          <Typography variant="h1" sx={{ fontSize: "clamp(48px,5vw,58px)" }}>
            {songName}
          </Typography>
          <Typography variant="caption">
            {artistsName}
            {"."}
            {releaseYear}
            {"."}
            {formatDuration(trackDuration)}
          </Typography>
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
            {topTracksData?.items.map((item: any) => (
              <PopularTrackItem key={item?.id} trackItem={item} />
            ))}
          </Box>
        </ShowMore>
      </Stack>
    </Stack>
  );
};

export default TrackDetails;
