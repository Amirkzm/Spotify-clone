import { Box, Stack, Typography } from "@mui/material";
import { useGetTopArtistsQuery } from "../redux";
import ArtistItem from "./ArtistItem";

const TopArtists = () => {
  const { data, isLoading, isError } = useGetTopArtistsQuery();

  if (isLoading) {
    return <p>loading New released songs</p>;
  }

  if (isError) {
    return <p>error happend while loading New released songs</p>;
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography>Your Top artists</Typography>
      <Stack direction="row" gap={2} sx={{ flexWrap: "wrap" }}>
        {data?.items.map((artist: any) => {
          return <ArtistItem imageUrl={artist?.images[1].url} />;
        })}
      </Stack>
    </Box>
  );
};

export default TopArtists;
