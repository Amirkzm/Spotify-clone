import { Box, CardMedia, Stack, Typography } from "@mui/material";
import { Layout } from "../components";
import { extractItemProperties } from "../utils";
import useImageColor from "../hooks/useImageColor";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useGetAlbumTracksQuery } from "../redux";
import PlayButton from "../components/PlayButton";
import TracksList from "../components/TracksList";
import { addTrack } from "../redux/feature/playerSlice";

const AlbumDetails = () => {
  const { albumId } = useParams();
  const dispatch = useDispatch();
  const album = useSelector((state: RootState) => state.savedItem.item);
  const {
    data: albumTracks,
    isLoading,
    isError,
  } = useGetAlbumTracksQuery(albumId);

  let { imageUrl, albumName, releaseDate, artistsName } = extractItemProperties(
    {
      item: album,
      itemType: "album",
    }
  );

  const heroBackground = useImageColor(imageUrl);
  const releaseYear: string = releaseDate.split("-")[0];

  const playAlbumHandler = () => {
    if (albumTracks) {
      dispatch(
        addTrack({
          track: albumTracks?.items[0],
          shouldPlay: true,
          nextTrack: null,
          previousTrack: null,
          trackQueue: albumTracks?.items,
        })
      );
    }
  };

  return (
    <Layout showRightSidebar>
      <Stack sx={{ width: "100%", minHeight: "100vh" }}>
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
            <Typography>Album</Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: "clamp(48px,5vw+1rem,58px)" }}
            >
              {albumName}
            </Typography>
            <Typography variant="body2">
              {artistsName}
              {"."}
              {releaseYear}
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
          <Box sx={{ pl: 3, mb: 3, mt: -10 }} onClick={playAlbumHandler}>
            <PlayButton sx={{ fontSize: "45px" }} />
          </Box>

          <TracksList tracks={albumTracks?.items} height={380} type="album" />
        </Stack>
        <Box></Box>
      </Stack>
    </Layout>
  );
};

export default AlbumDetails;
