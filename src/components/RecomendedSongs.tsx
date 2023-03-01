import { Stack, Typography } from "@mui/material";
import { useGetRecommendedTracksQuery } from "../redux";
import SongsFeed from "./SongsFeed";

const RecomendedSongs = () => {
  const {
    data: RecomendedSongs,
    isLoading,
    isError,
  } = useGetRecommendedTracksQuery({});

  if (isLoading) {
    return <p>loading Recomended Songs for you</p>;
  }

  if (isError) {
    return <p>error happend while loading Recomended Songs for you</p>;
  }
  return (
    <Stack>
      <Typography variant="h2" sx={{ alignSelf: "center", mt: 5 }}>
        Recommended For You
      </Typography>
      <SongsFeed songs={RecomendedSongs?.tracks} />;
    </Stack>
  );
};

export default RecomendedSongs;
