import { Stack } from "@mui/material";
import React from "react";
import SongCard from "./SongCard";

interface SongsFeedProps {
  songs: any;
  category?: string;
}

interface SongType {
  name: string;
}

const SongsFeed = ({ songs, category }: SongsFeedProps) => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        gap: 2,
        flexWrap: "wrap",
        justifyContent: "center",
        pt: 10,
      }}
      id="root songs feed"
    >
      {songs.map((song: any, index: number) => {
        return (
          <SongCard
            songName={song?.name}
            artist={listOfArtists(song?.artists)}
            imageUrl={song?.album.images[1]?.url}
            key={song?.id}
          />
        );
      })}
    </Stack>
  );
};

const listOfArtists = (data: any) => {
  const artistList = data.map((artist: any) => artist?.name);
  const artistNames: string = artistList.join();
  return artistNames;
};

export default SongsFeed;
