import { Stack, Typography } from "@mui/material";
import React from "react";
import { useGetRecentlyPlayedTracksQuery } from "../redux";
import { removeDuplicates } from "../utils";
import SongsFeed from "./SongsFeed";

const RecentlyPlayed = () => {
  const {
    data: recentSongs,
    isLoading,
    isError,
  } = useGetRecentlyPlayedTracksQuery();
  if (recentSongs) {
    // console.log(recentSongs);
    const listOfSongs = recentSongs?.items.map((item: any) => item?.track);
    // console.log(listOfSongs);
  }

  // if (isLoading) {
  //   return <p>loading recently played songs</p>;
  // }

  // if (isError) {
  //   return <p>error happend while loading recently played songs</p>;
  // }
  const listOfSongs =
    recentSongs && recentSongs?.items.map((item: any) => item?.track);
  const modifiedList = recentSongs && removeDuplicates(listOfSongs);

  return (
    <>
      {!isLoading && !isError && (
        <Stack>
          <Typography variant="h2" sx={{ alignSelf: "start", mt: 5 }}>
            Recently Played songs
          </Typography>
          <SongsFeed songs={modifiedList} />
        </Stack>
      )}
    </>
  );
};

export default RecentlyPlayed;
