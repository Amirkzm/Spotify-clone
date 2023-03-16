import { Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItme } from "../redux/feature/itemSlice";
import SongCard from "./SongCard";

interface PlaylistFeedProps {
  playlists: any;
}
const PlaylistFeed = ({ playlists }: PlaylistFeedProps) => {
  const dispatch = useDispatch();
  const playlistClickHandler = (playlist: any) => {
    dispatch(addItme(playlist));
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
    >
      {playlists.map((playlist: any, index: number) => (
        <Link
          to={`/playlist/${playlist?.id}`}
          key={playlist?.id + index}
          onClick={() => playlistClickHandler(playlist)}
        >
          <SongCard
            name={playlist?.name}
            artist={playlist?.owner?.display_name}
            imageUrl={playlist?.images[1]?.url ?? playlist?.images[0]?.url}
            key={playlist?.id}
          />
        </Link>
      ))}
    </Stack>
  );
};

export default PlaylistFeed;
