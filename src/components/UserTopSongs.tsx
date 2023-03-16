import { Stack, Typography } from "@mui/material";
import { useGetTopTracksQuery } from "../redux";
import Error from "./Error";
import Loader from "./Loader";
import SongsFeed from "./SongsFeed";

const UserTopSongs = () => {
  const {
    data: topSongs,
    isLoading,
    isError,
  } = useGetTopTracksQuery({ limit: 10 });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }
  return (
    <>
      {!isError && (
        <Stack sx={{ pt: 5 }}>
          <Typography variant="h2" sx={{ alignSelf: "start", mt: 5 }}>
            Most Played Songs
          </Typography>
          <SongsFeed songs={topSongs?.items} />
        </Stack>
      )}
    </>
  );
};

export default UserTopSongs;
