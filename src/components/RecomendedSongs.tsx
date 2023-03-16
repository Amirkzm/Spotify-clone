import { Stack, Typography } from "@mui/material";
import { useGetRecommendationQuery, useGetTopArtistsQuery } from "../redux";
import Error from "./Error";
import Loader from "./Loader";
import SongsFeed from "./SongsFeed";

const RecomendedSongs = () => {
  const {
    data,
    isLoading: artistLoading,
    isError: artistError,
  } = useGetTopArtistsQuery();

  const {
    data: RecomendedSongs,
    isLoading,
    isError,
  } = useGetRecommendationQuery({ seed: data?.items[0]?.id });

  if (isLoading || artistLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }
  return (
    <Stack>
      <Typography variant="h2" sx={{ alignSelf: "start", mt: 5 }}>
        Recommended For You
      </Typography>
      <SongsFeed songs={RecomendedSongs?.tracks} />;
    </Stack>
  );
};

export default RecomendedSongs;
