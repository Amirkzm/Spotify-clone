import { Box, CardMedia, List, Stack, Typography } from "@mui/material";
import { Layout, ShowMore } from "../components";
import PopularTrackItem from "../components/PopularTrackItem";
import { extractItemProperties, formatDuration, theme } from "../utils";

import useImageColor from "../hooks/useImageColor";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useGetAlbumQuery, useGetAlbumTracksQuery } from "../redux";
import PlayButton from "../components/PlayButton";

const AlbumDetails = () => {
  const { albumId } = useParams();
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

  return (
    <Layout showRightSidebar>
      <Stack sx={{ flex: "1 1 auto" }} id="topstackkos">
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

          <ShowMore minHeight={380}>
            <List component="ol" sx={{ minWidth: "100%" }} id="kirehendi">
              {albumTracks?.items.map((item: any) => (
                <PopularTrackItem key={item?.id} trackItem={item} />
              ))}
            </List>
          </ShowMore>
        </Stack>
        <Box></Box>
      </Stack>
    </Layout>
  );
};

export default AlbumDetails;
