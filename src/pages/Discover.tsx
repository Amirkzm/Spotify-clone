import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Layout, SongsFeed } from "../components";
import { useGetRecommendedTracksQuery } from "../redux";
import { genresType } from "../utils";
import { genres } from "../utils";

const Discover = () => {
  const [genre, setGenre] = useState<string>("pop");
  const { data, isLoading, isError } = useGetRecommendedTracksQuery({
    seed: genre,
  });

  const handleChange = (event: SelectChangeEvent) => {
    setGenre(event.target.value as string);
  };

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (isError) {
    return <p>Error happened while connecting to server</p>;
  }

  return (
    <Layout>
      <Stack>
        <Stack direction="row" justifyContent="space-between" sx={{ p: 4 }}>
          <Typography
            variant="h2"
            sx={{ alignSelf: "end", position: "relative", top: 80, left: -28 }}
          >
            Discover by genre {genre}
          </Typography>
          <FormControl sx={{ width: "fit-content" }}>
            <InputLabel id="demo-simple-select-label">Genre</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={genre}
              defaultValue={genre}
              label="Genre"
              onChange={handleChange}
            >
              {genres.map((item: genresType, index: number) => (
                <MenuItem key={index} value={item.value}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <SongsFeed songs={data?.tracks} />
      </Stack>
    </Layout>
  );
};

export default Discover;
