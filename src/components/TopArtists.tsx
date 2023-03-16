import { Box, Stack, Typography } from "@mui/material";
import { useGetTopArtistsQuery } from "../redux";
import ArtistItem from "./ArtistItem";
import Error from "./Error";
import Loader from "./Loader";

const TopArtists = () => {
  const { data, isLoading, isError } = useGetTopArtistsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography>Your Top artists</Typography>
      <Stack direction="row" gap={2} sx={{ flexWrap: "wrap" }}>
        {data?.items.map((artist: any) => {
          return (
            <ArtistItem
              key={artist?.id}
              imageUrl={artist?.images[1].url}
              artistId={artist?.id}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default TopArtists;
