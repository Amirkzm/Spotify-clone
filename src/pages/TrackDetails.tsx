import { Box, CardMedia, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Layout, ShowMore } from "../components";
import PopularTrackItem from "../components/PopularTrackItem";
import { useGetArtistTopTracksQuery } from "../redux";
import { extractItemProperties, formatDuration, theme } from "../utils";

import useImageColor from "../hooks/useImageColor";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import PlayButton from "../components/PlayButton";
import { useParams } from "react-router-dom";

const TrackDetails = () => {
  const { trackId } = useParams();
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
    <Layout showRightSidebar>
      <Stack sx={{ flex: "1 1 auto" }}>
        <Box
          component="section"
          sx={{
            display: "flex",
            alignItems: "center",
            background: `${heroBackground}`,
            p: 2,
            gap: 2,
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
          <Stack sx={{ gap: 1 }}>
            <Typography>Track</Typography>
            <Typography
              variant="h1"
              sx={{ "&": { fontSize: "clamp(38px,5vw,45px)" } }}
            >
              {songName}
            </Typography>
            <Typography variant="body1">
              {artistsName}
              {"."}
              {releaseYear}
              {"."}
              {formatDuration(trackDuration)}
            </Typography>
          </Stack>
        </Box>
        <Stack
          sx={{
            background: `linear-gradient(to bottom, ${heroBackground},#134c88 )`,
            width: "100%",
            flex: "1 1 auto",
            pt: 10,
          }}
        >
          <Box sx={{ pl: 3, mb: 3, mt: -10 }}>
            <PlayButton sx={{ fontSize: "45px" }} />
          </Box>
          <Typography variant="h3" sx={{ pl: 4 }}>
            Title
          </Typography>
          <Box
            sx={{
              width: "95%",
              height: "1px",
              bgcolor: "rgba(255,255,255,0.2)",
              alignSelf: "center",
              ml: 3,
            }}
          ></Box>
          <ShowMore minHeight={500}>
            <Box component="section">
              {topTracksData?.tracks.map((item: any) => (
                <PopularTrackItem key={item?.id} trackItem={item} />
              ))}
            </Box>
          </ShowMore>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default TrackDetails;
