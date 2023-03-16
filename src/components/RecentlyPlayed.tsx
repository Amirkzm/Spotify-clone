import { Stack, Typography } from "@mui/material";
import React from "react";
import { useGetRecentlyPlayedTracksQuery } from "../redux";
import { removeDuplicates } from "../utils";
import Error from "./Error";
import SongsFeed from "./SongsFeed";

const RecentlyPlayed = () => {
  console.log("Recently played");
  const {
    data: recentSongs,
    isLoading,
    isError,
  } = useGetRecentlyPlayedTracksQuery();

  if (isError) {
    return <Error />;
  }
  const listOfSongs =
    recentSongs && recentSongs?.items.map((item: any) => item?.track);
  const modifiedList = recentSongs && removeDuplicates(listOfSongs);

  return (
    <>
      {!isLoading && (
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
