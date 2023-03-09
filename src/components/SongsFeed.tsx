import { Stack } from "@mui/material";
import React from "react";
import SongCard from "./SongCard";
import { getAllArtists } from "../utils";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItme } from "../redux/feature/itemSlice";

interface SongsFeedProps {
  songs: any;
  category?: string;
}

interface SongType {
  name: string;
}

const SongsFeed = ({ songs, category = "track" }: SongsFeedProps) => {
  const dispatch = useDispatch();

  const trackClickHandler = (track: any) => {
    dispatch(addItme(track));
  };
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
      {songs.map((song: any, index: number) => (
        <Link
          to={`/track/${song?.id}`}
          key={song?.id}
          onClick={() => trackClickHandler(song)}
        >
          <SongCard
            name={song?.name}
            artist={getAllArtists(song?.artists)}
            imageUrl={song?.album?.images[1]?.url}
            key={index}
          />
        </Link>
      ))}
    </Stack>
  );
};

export default SongsFeed;
