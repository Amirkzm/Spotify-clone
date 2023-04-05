import { Stack, Typography } from "@mui/material";
import { Layout, PlaylistFeed } from "../components";
import Error from "../components/Error";
import LikedSongs from "../components/LikedSongs";
import Loader from "../components/Loader";
import { useGetPlaylistsQuery, useGetSavedTracksQuery } from "../redux";

const UserLibrary = () => {
  const {
    data: savedTracks,
    isLoading: savedTracksLoading,
    isError: savedTracksError,
  } = useGetSavedTracksQuery({ limit: 10 });
  const {
    data: playlistsData,
    isLoading: playlistsLoading,
    isError: playlistsError,
  } = useGetPlaylistsQuery();
  if (savedTracksLoading || playlistsLoading) {
    return <Loader />;
  }
  if (savedTracksError || playlistsError) {
    return <Error />;
  }
  return (
    <Layout showRightSidebar>
      <Stack sx={{ p: 3, minHeight: "100vh" }} gap={2}>
        <Typography variant="h1">Playlists</Typography>
        <LikedSongs tracks={savedTracks} />
        <PlaylistFeed playlists={playlistsData?.items} />
      </Stack>
    </Layout>
  );
};

export default UserLibrary;
