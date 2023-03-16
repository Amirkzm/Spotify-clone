import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Layout, ShowMore } from "../components";
import ArtistItem from "../components/ArtistItem";
import Error from "../components/Error";
import Loader from "../components/Loader";
import PlayButton from "../components/PlayButton";
import TracksList from "../components/TracksList";
import useImageColor from "../hooks/useImageColor";
import {
  useGetArtistQuery,
  useGetArtistTopTracksQuery,
  useGetRelatedArtistsQuery,
} from "../redux";
import { addTrack, updatePlayer } from "../redux/feature/playerSlice";
import { RootState } from "../redux/store";
import { extractItemProperties, theme } from "../utils";

const ArtistDetails = () => {
  const { artistId } = useParams();
  const dispatch = useDispatch();
  const {
    data: artist,
    isLoading: artistLoading,
    isError: artistError,
  } = useGetArtistQuery(artistId as string);
  const { artistsName, artistPopularity, artistGenres, followers, imageUrl } =
    extractItemProperties({
      item: artist,
      itemType: "artist",
    });
  const backgroundColor = useImageColor(imageUrl) || theme.palette.primary.dark;
  const {
    data: topTracks,
    isLoading,
    isError,
  } = useGetArtistTopTracksQuery({ artistId: artistId });

  const {
    data: recommendedArtists,
    isLoading: recomLoading,
    isError: recomError,
  } = useGetRelatedArtistsQuery(artistId as string);

  if (isLoading || recomLoading || artistLoading) {
    return <Loader />;
  }

  if (recomError || isError || artistError) {
    return <Error />;
  }

  const playButtonHandler = () => {
    if (topTracks) {
      dispatch(
        updatePlayer({
          track: topTracks?.tracks[0],
          shouldPlay: true,
          nextTrack: null,
          previousTrack: null,
          trackQueue: topTracks?.tracks,
          showPlayer: true,
        })
      );
    }
  };

  return (
    <Layout showRightSidebar>
      <Stack sx={{ width: "100%", minHeight: "100vh" }} id="root stack artist">
        <Stack
          direction={"row"}
          sx={{
            background: `linear-gradient(to right,${backgroundColor},#243f68)`,
          }}
        >
          <Box sx={{ alignSelf: "center" }}>
            <ArtistItem imageUrl={imageUrl} size={400} shouldNavigate={false} />
          </Box>
          <Box
            sx={{
              minHeight: 400,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              gap: 2,
              p: 4,
            }}
          >
            <Box>
              <Typography
                variant="body1"
                sx={{
                  "&": { fontSize: "clamp(38px,5vw,48px)" },
                }}
              >
                Artist
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  "&": { fontSize: "clamp(68px,5vw,78px)" },
                }}
              >
                {artistsName}
              </Typography>
            </Box>
            <Typography variant="h2" fontWeight={"bold"}>
              {followers} follow {artistsName}
            </Typography>
          </Box>
        </Stack>
        <Stack
          sx={{
            background: `linear-gradient(to bottom, ${backgroundColor},#134c88 )`,
            width: "100%",
            flex: "1 1 auto",
            pt: 10,
          }}
        >
          <Stack
            direction={"row"}
            sx={{ p: 3, justifyContent: "space-between" }}
          >
            <Stack direction={"row"} onClick={playButtonHandler}>
              <PlayButton sx={{ fontSize: "68px" }} />
            </Stack>
            <Typography variant="body1" sx={{ alignSelf: "center" }}>
              {artistGenres.join(", ")}
            </Typography>
            <Typography variant="body1" sx={{ alignSelf: "center" }}>
              0-100 popularity:{artistPopularity}
            </Typography>
          </Stack>
          <Typography variant="h2" sx={{ pl: 4 }}>
            Top Tracks by {artistsName}
          </Typography>
          <TracksList tracks={topTracks?.tracks} height={500} />
          <Typography variant="h2">You may also like</Typography>
          <Stack
            direction={"row"}
            gap={1}
            sx={{ overflow: "scroll", maxWidth: "100%" }}
          >
            {recommendedArtists?.artists.map((artist: any) => (
              <ArtistItem
                imageUrl={artist?.images[1]?.url}
                artistId={artist?.id}
                size={200}
                key={artist?.id}
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default ArtistDetails;
