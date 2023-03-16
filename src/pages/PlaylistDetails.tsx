import { Box, CardMedia, List, Stack, Typography } from "@mui/material";
import { Layout, ShowMore } from "../components";
import PopularTrackItem from "../components/PopularTrackItem";
import { extractItemProperties, formatDuration, theme } from "../utils";

import useImageColor from "../hooks/useImageColor";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import PlayButton from "../components/PlayButton";
import { useParams } from "react-router-dom";
import { useGetPlaylistTracksQuery } from "../redux";
import TracksList from "../components/TracksList";
import { addTrack, updatePlayer } from "../redux/feature/playerSlice";
import Loader from "../components/Loader";
import Error from "../components/Error";

const PlaylistDetails = () => {
  console.log("playlistdetails");
  const { playlistId } = useParams();
  const dispatch = useDispatch();
  const playlistItem = useSelector((state: RootState) => state.savedItem.item);

  const {
    data: playlistTracks,
    isLoading,
    isError,
  } = useGetPlaylistTracksQuery(playlistId);

  const { imageUrl, playlistName } = extractItemProperties({
    item: playlistItem,
    itemType: "playlist",
  });
  console.log("imageurl is = ", imageUrl);
  const heroBackground = useImageColor(imageUrl);
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  const listOfTracks = playlistTracks?.items.map((item: any) => item?.track);

  const playlistPlayHandler = () => {
    dispatch(
      updatePlayer({
        track: listOfTracks[0],
        shouldPlay: true,
        nextTrack: null,
        previousTrack: null,
        trackQueue: listOfTracks,
      })
    );
  };

  return (
    <Layout showRightSidebar>
      <Stack sx={{ width: "100%", minHeight: "100vh" }} id="topstackkos">
        <Box
          component="section"
          sx={{
            display: "flex",
            alignItems: "center",
            background: `${heroBackground}`,
            p: 2,
          }}
        >
          <CardMedia
            component="img"
            height="240"
            image={imageUrl}
            alt="album photo"
            sx={{
              objectFit: "contain",
              m: 3,
              width: "240px",
              boxShadow: "0px 4px 50px rgba(0,0,0,0.9)",
            }}
          />
          <Stack>
            <Typography>Playlist</Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: "clamp(48px,5vw+1rem,58px)" }}
            >
              {playlistName}
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
          id="bottom part container"
        >
          <Box sx={{ pl: 3, mb: 3, mt: -10 }} onClick={playlistPlayHandler}>
            <PlayButton sx={{ fontSize: "45px" }} />
          </Box>
          <TracksList tracks={listOfTracks} height={500} />
        </Stack>
      </Stack>
    </Layout>
  );
};

export default PlaylistDetails;
