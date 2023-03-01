import { Stack, Typography } from "@mui/material";
import React from "react";
import { useGetRecentlyPlayedTracksQuery } from "../redux";
import SongsFeed from "./SongsFeed";

const RecentlyPlayed = () => {
  const {
    data: recentSongs,
    isLoading,
    isError,
  } = useGetRecentlyPlayedTracksQuery();
  if (recentSongs) {
    console.log(recentSongs);
    const listOfSongs = recentSongs?.items.map((item: any) => item?.track);
    console.log(listOfSongs);
  }
  const listOfSongs = recentSongs?.items.map((item: any) => item?.track);

  if (isLoading) {
    return <p>loading recently played songs</p>;
  }

  if (isError) {
    return <p>error happend while loading recently played songs</p>;
  }

  return (
    <Stack>
      <Typography variant="h2" sx={{ alignSelf: "center", mt: 5 }}>
        Recently Played songs
      </Typography>
      <SongsFeed songs={listOfSongs} />
    </Stack>
  );
};

export default RecentlyPlayed;
