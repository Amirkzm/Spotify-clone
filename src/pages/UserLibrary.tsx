import { Stack, Typography } from "@mui/material";
import { Layout, PlaylistFeed } from "../components";
import LikedSongs from "../components/LikedSongs";
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
  if (
    savedTracksError ||
    savedTracksLoading ||
    playlistsError ||
    playlistsLoading
  ) {
    return <p>loading or error</p>;
  }
  return (
    <Layout showRightSidebar>
      <Stack sx={{ p: 3 }} gap={2}>
        <Typography variant="h1">Playlists</Typography>
        <LikedSongs tracks={savedTracks} />
        <PlaylistFeed playlists={playlistsData?.items} />
      </Stack>
    </Layout>
  );
};

export default UserLibrary;
