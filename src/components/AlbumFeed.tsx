import { Stack } from "@mui/material";
import React from "react";
import SongCard from "./SongCard";
import { getAllArtists } from "../utils";

interface albumsFeedProps {
  albums: any;
  category?: string;
}

const AlbumFeed = ({ albums, category = "track" }: albumsFeedProps) => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        gap: 2,
        flexWrap: "wrap",
        justifyContent: "start",
        pt: 10,
      }}
      id="root albums feed"
    >
      {albums.map((album: any, index: number) => {
        return (
          <SongCard
            name={album?.name}
            artist={getAllArtists(album?.artists)}
            imageUrl={album?.images[1]?.url}
            key={album?.id}
          />
        );
      })}
    </Stack>
  );
};

export default AlbumFeed;
