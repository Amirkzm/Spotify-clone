import { Stack, Typography } from "@mui/material";
import { useGetTopTracksQuery } from "../redux";
import SongsFeed from "./SongsFeed";

const UserTopSongs = () => {
  const {
    data: topSongs,
    isLoading,
    isError,
  } = useGetTopTracksQuery({ limit: 10 });

  if (isLoading) {
    return <p>loading user&apos;s top songs</p>;
  }

  if (isError) {
    return <p>error happend while loading user&apos;s tops songs</p>;
  }
  return (
    <Stack>
      <Typography variant="h2" sx={{ alignSelf: "start", mt: 5 }}>
        Most Played Songs
      </Typography>
      <SongsFeed songs={topSongs?.items} />
    </Stack>
  );
};

export default UserTopSongs;
