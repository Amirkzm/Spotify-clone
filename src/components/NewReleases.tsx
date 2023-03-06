import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useGetAlbumTracksQuery, useGetNewReleasesQuery } from "../redux";
import { getAllArtists } from "../utils";
import ReleaseItem from "./ReleaseItem";

const NewReleasesTrack = () => {
  const { data, isLoading, isError } = useGetNewReleasesQuery({
    limit: 5,
  });

  if (isLoading) {
    return <p>loading New released songs</p>;
  }

  if (isError) {
    return <p>error happend while loading New released songs</p>;
  }

  // const albumIdList = data?.albums?.items.map((album: any) => album.id);
  // const firstTracksOfEachAlbum = albumIdList.map((albumId: string) => {
  //   const { data, isLoading, isError } = useGetAlbumTracksQuery(albumId);
  //   if (!isLoading && !isError) {
  //     return data.items;
  //   }
  // });

  return (
    <Stack sx={{}}>
      <Typography>New Releases</Typography>
      {data?.albums?.items.map((album: any) => (
        <ReleaseItem
          albumName={album?.name}
          artist={getAllArtists(album?.artists)}
          imageUrl={album?.images[1]?.url}
          key={album?.id}
        />
      ))}
    </Stack>
  );
};

export default NewReleasesTrack;
