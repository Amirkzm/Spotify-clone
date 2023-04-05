import { Stack, Typography } from "@mui/material";
import { AlbumFeed, Layout, SongsFeed } from "../components";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { useGetSavedAlbumsQuery, useGetSavedTracksQuery } from "../redux";

const Library = () => {
  const {
    data: albumData,
    isLoading: albumLoading,
    isError: albumError,
  } = useGetSavedAlbumsQuery({});
  const {
    data: tracksData,
    isLoading: tracksLoading,
    isError: tracksError,
  } = useGetSavedTracksQuery({});

  if (albumError || tracksError) {
    return <Error />;
  }

  if (albumLoading || tracksLoading) {
    return <Loader />;
  }

  const albums = albumData?.items.map((item: any) => item?.album);
  const tracks = tracksData?.items.map((item: any) => item?.track);

  return (
    <Layout>
      <Stack gap={3} sx={{ minHeight: "100vh" }} id="kirehendiekhar">
        <Stack>
          <Typography variant="h1" sx={{ position: "relative", top: 50 }}>
            Saved Albums
          </Typography>
          <AlbumFeed albums={albums} />
        </Stack>
        <Stack>
          <Typography variant="h1" sx={{ position: "relative", top: 50 }}>
            Saved Tracks
          </Typography>
          <SongsFeed songs={tracks} />
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Library;
