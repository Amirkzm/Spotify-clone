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
    return <p>loading user's top songs</p>;
  }

  if (isError) {
    return <p>error happend while loading user's tops songs</p>;
  }
  return (
    <Stack>
      <Typography variant="h2" sx={{ alignSelf: "center", mt: 5 }}>
        Most Played Songs
      </Typography>
      <SongsFeed songs={topSongs?.items} />
    </Stack>
  );
};

export default UserTopSongs;
