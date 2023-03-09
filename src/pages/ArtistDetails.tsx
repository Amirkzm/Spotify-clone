import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useParams } from "react-router-dom";
import { Layout, ShowMore } from "../components";
import ArtistItem from "../components/ArtistItem";
import PlayButton from "../components/PlayButton";
import PopularTrackItem from "../components/PopularTrackItem";
import useImageColor from "../hooks/useImageColor";
import {
  useGetArtistQuery,
  useGetArtistTopTracksQuery,
  useGetRelatedArtistsQuery,
} from "../redux";
import { extractItemProperties, theme } from "../utils";

const ArtistDetails = () => {
  const { artistId } = useParams();
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
  if (
    isError ||
    isLoading ||
    recomLoading ||
    recomError ||
    artistLoading ||
    artistError
  ) {
    return <p>is loading or error</p>;
  }

  return (
    <Layout showRightSidebar>
      <Stack
        sx={{
          background: `linear-gradient(to bottom,${backgroundColor},primary.light)`,
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed",
            width: "100%",
            minHeight: 500,
          }}
        >
          <Typography variant="body1">Artist</Typography>
          <Typography variant="h1">{artistsName}</Typography>
          <Typography variant="body1">
            {followers} follow {artistsName}
          </Typography>
        </Box>
        <Stack direction={"row"} gap={2}>
          <Box>
            <PlayButton />
            <Typography variant="body1">{artistGenres.join(", ")}</Typography>
          </Box>
          <Typography variant="body1">
            0-100 popularity:{artistPopularity}
          </Typography>
        </Stack>
        <ShowMore minHeight={480}>
          {topTracks?.tracks.map((track: any) => (
            <PopularTrackItem trackItem={track} key={track?.id} />
          ))}
        </ShowMore>
        <Typography variant="h2">You may also like</Typography>
        <Box sx={{ maxWidth: "100%" }}>
          <Stack
            direction={"row"}
            gap={1}
            sx={{ overflow: "scroll", flexWrap: "nowrap" }}
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
        </Box>
      </Stack>
    </Layout>
  );
};

export default ArtistDetails;
