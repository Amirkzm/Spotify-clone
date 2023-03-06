import { Stack, Typography } from "@mui/material";
import React from "react";
import { AlbumFeed, Layout, SongsFeed } from "../components";
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
    return <p>error happened</p>;
  }

  if (albumLoading || tracksLoading) {
    return <p>loading items</p>;
  }

  const albums = albumData?.items.map((item: any) => item?.album);
  const tracks = tracksData?.items.map((item: any) => item?.track);
  console.log(albums);
  console.log(tracks);
  return (
    <Layout>
      <Stack gap={3}>
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
