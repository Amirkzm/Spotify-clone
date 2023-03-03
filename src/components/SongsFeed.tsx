import { Stack } from "@mui/material";
import React from "react";
import SongCard from "./SongCard";
import { getAllArtists } from "../utils";

interface SongsFeedProps {
  songs: any;
  category?: string;
}

interface SongType {
  name: string;
}

const SongsFeed = ({ songs, category = "track" }: SongsFeedProps) => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        gap: 2,
        flexWrap: "wrap",
        justifyContent: "start",
        pt: 10,
      }}
      id="root songs feed"
    >
      {songs.map((song: any, index: number) => {
        return (
          <SongCard
            name={song?.name}
            artist={getAllArtists(song?.artists)}
            imageUrl={song?.album?.images[1]?.url}
            key={index}
          />
        );
      })}
    </Stack>
  );
};

export default SongsFeed;
