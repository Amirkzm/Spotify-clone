import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useGetAlbumTracksQuery, useGetNewReleasesQuery } from "../redux";
import { addItme } from "../redux/feature/itemSlice";
import { getAllArtists } from "../utils";
import ReleaseItem from "./ReleaseItem";

const NewReleasesTrack = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetNewReleasesQuery({
    limit: 5,
  });

  if (isLoading) {
    return <p>loading New released songs</p>;
  }

  if (isError) {
    return <p>error happend while loading New released songs</p>;
  }

  const releaseClickHandler = (album: any) => {
    dispatch(addItme(album));
  };

  return (
    <Stack sx={{}}>
      <Typography>New Releases</Typography>
      {data?.albums?.items.map((album: any) => (
        <Link
          to={`/album/${album?.id}`}
          key={album?.id}
          onClick={() => releaseClickHandler(album)}
        >
          <ReleaseItem
            albumName={album?.name}
            artist={getAllArtists(album?.artists)}
            imageUrl={album?.images[1]?.url}
            albumId={album?.id}
            key={album?.id}
          />
        </Link>
      ))}
    </Stack>
  );
};

export default NewReleasesTrack;
