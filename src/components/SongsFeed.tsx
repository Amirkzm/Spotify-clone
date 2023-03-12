import { Stack } from "@mui/material";
import SongCard from "./SongCard";
import { getAllArtists } from "../utils";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItme } from "../redux/feature/itemSlice";
import { addTrack } from "../redux/feature/playerSlice";

interface SongsFeedProps {
  songs: any;
}

interface SongType {
  name: string;
}

const SongsFeed = ({ songs }: SongsFeedProps) => {
  const dispatch = useDispatch();

  const trackClickHandler = (track: any) => {
    dispatch(addItme(track));
    dispatch(
      addTrack({
        track: track,
        isPlaying: true,
        nextTrack: null,
        previousTrack: null,
        trackQueue: [],
      })
    );
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
