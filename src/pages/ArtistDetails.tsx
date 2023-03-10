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
      <Stack sx={{ width: "100%" }} id="root stack artist">
        <Box
          sx={{
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed",
            minHeight: 640,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            p: 4,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              "&": { fontSize: "clamp(58px,5vw,68px)" },
              textStroke: "1px black",
              WebkitTextStroke: "1px black",
            }}
          >
            Artist
          </Typography>
          <Typography
            variant="h1"
            sx={{
              "&": { fontSize: "clamp(58px,5vw,68px)" },
              textStroke: "1px black",
              WebkitTextStroke: "1px black",
            }}
          >
            {artistsName}
          </Typography>
          <Typography
            variant="h2"
            fontWeight={"bold"}
            sx={{ textStroke: "1px black", WebkitTextStroke: "1px black" }}
          >
            {followers} follow {artistsName}
          </Typography>
        </Box>
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
            <Stack direction={"row"}>
              <PlayButton sx={{ fontSize: "68px" }} />
              <Typography variant="body1" sx={{ alignSelf: "center" }}>
                {artistGenres.join(", ")}
              </Typography>
            </Stack>
            <Typography variant="body1" sx={{ alignSelf: "center" }}>
              0-100 popularity:{artistPopularity}
            </Typography>
          </Stack>
          <Typography variant="h2" sx={{ pl: 4 }}>
            Top Tracks by {artistsName}
          </Typography>
          <Stack direction={"row"} justifyContent="space-around">
            <Typography variant="h3" sx={{ pl: 4 }}>
              Title
            </Typography>
            <Typography variant="h3" sx={{ position: "relative", left: "25%" }}>
              Release Date
            </Typography>
            <Typography variant="h3" sx={{ pr: 1 }}>
              Duration
            </Typography>
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
          <ShowMore minHeight={500}>
            <Box component="section">
              {topTracks?.tracks.map((item: any) => (
                <PopularTrackItem key={item?.id} trackItem={item} />
              ))}
            </Box>
          </ShowMore>
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

/*<Layout showRightSidebar>
      <Stack sx={{ width: "100%" }}>
        <Box
          sx={{
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed",
            minHeight: 640,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            p: 4,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              "&": { fontSize: "clamp(58px,5vw,68px)" },
              textStroke: "1px black",
              WebkitTextStroke: "1px black",
            }}
          >
            Artist
          </Typography>
          <Typography
            variant="h1"
            sx={{
              "&": { fontSize: "clamp(58px,5vw,68px)" },
              textStroke: "1px black",
              WebkitTextStroke: "1px black",
            }}
          >
            {artistsName}
          </Typography>
          <Typography
            variant="h2"
            fontWeight={"bold"}
            sx={{ textStroke: "1px black", WebkitTextStroke: "1px black" }}
          >
            {followers} follow {artistsName}
          </Typography>
        </Box>
        <Box
          sx={{
            background: `linear-gradient(to bottom,${backgroundColor},#243f68)`,
            width: "100%",
            flex: "1 1 auto",
          }}
          id="kosehendiekhar"
        >
          <Box>
            <Box>
              <PlayButton />
              <Typography variant="body1">{artistGenres.join(", ")}</Typography>
            </Box>
            <Typography variant="body1">
              0-100 popularity:{artistPopularity}
            </Typography>
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
          <Box sx={{ width: "95%" }}>
            <ShowMore minHeight={480}>
              {topTracks?.tracks.map((track: any) => (
                <PopularTrackItem trackItem={track} key={track?.id} />
              ))}
            </ShowMore>
          </Box>
          <Typography variant="h2">You may also like</Typography>
          <Stack
            direction={"row"}
            gap={1}
            sx={{ overflow: "scroll", width: "100%" }}
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
      </Stack>*/
