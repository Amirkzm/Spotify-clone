import { Box, CardMedia, duration, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Layout, ShowMore } from "../components";
import PopularTrackItem from "../components/PopularTrackItem";
import { useGetArtistTopTracksQuery, useGetTrackQuery } from "../redux";
import { extractItemProperties, formatDuration, theme } from "../utils";

import useImageColor from "../hooks/useImageColor";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import PlayButton from "../components/PlayButton";
import { useParams } from "react-router-dom";
import TracksList from "../components/TracksList";
import StyledDot from "../components/StyledDot";
import { addTrack } from "../redux/feature/playerSlice";

const TrackDetails = () => {
  const { trackId } = useParams();
  const dispatch = useDispatch();
  console.log("trackDetails running");
  const trackItem = useSelector((state: RootState) => state.itemToPlay.track);
  const {
    data: trackData,
    isLoading,
    isError,
  } = useGetTrackQuery(trackId as string);

  const {
    imageUrl = "",
    artistId = "",
    releaseDate = "",
    songName = "",
    artistsName = "",
    trackDuration = "",
  } = extractItemProperties({
    item: trackData || trackItem,
    itemType: "track",
  });
  const {
    data: topTracksData,
    isLoading: topTracksLoading,
    isError: topTracksError,
  } = useGetArtistTopTracksQuery({ artistId: artistId });

  useEffect(() => {
    if (topTracksData) {
      dispatch(
        addTrack({
          track: trackItem,
          isPlaying: false,
          nextTrack: null,
          previousTrack: null,
          trackQueue: topTracksData?.tracks,
        })
      );
    }
  }, [dispatch, topTracksData, trackItem]);

  const heroBackground = useImageColor(imageUrl);

  if (topTracksLoading || topTracksError) {
    return <p>is loading or error happened</p>;
  }
  const releaseYear: string = releaseDate.split("-")[0];

  const playTrackHandler = () => {
    if (topTracksData) {
      dispatch(
        addTrack({
          track: trackItem,
          isPlaying: false,
          nextTrack: null,
          previousTrack: null,
          trackQueue: topTracksData?.tracks,
        })
      );
    }
  };

  return (
    <Layout showRightSidebar>
      <Stack sx={{ width: "100%", height: "100%", pb: "200px" }}>
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
              <StyledDot />
              {releaseYear}
            </Typography>
            <Typography>{formatDuration(trackDuration)}</Typography>
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
          <Box sx={{ pl: 3, mb: 3, mt: -10 }} onClick={playTrackHandler}>
            <PlayButton sx={{ fontSize: "45px" }} />
          </Box>
          <Typography variant="h2" sx={{ p: 3 }}>
            Other Popular Tracks By {artistsName}
          </Typography>
          <TracksList tracks={topTracksData?.tracks} height={380} />
        </Stack>
      </Stack>
    </Layout>
  );
};

export default TrackDetails;
