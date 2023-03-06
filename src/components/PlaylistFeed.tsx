import { Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItme } from "../redux/feature/itemSlice";
import SongCard from "./SongCard";

interface PlaylistFeedProps {
  playlists: any;
  category?: string;
}
const AlbumFeed = ({ playlists, category = "track" }: PlaylistFeedProps) => {
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
      id="root playlist feed"
    >
      {playlists.map((playlist: any, index: number) => (
        <Link
          to={"sdalk"}
          key={playlist?.id}
          onClick={(playlist) => playlistClickHandler}
        >
          <SongCard
            name={playlist?.name}
            artist={playlist?.owner?.display_name}
            imageUrl={playlist?.images[1]?.url}
            key={playlist?.id}
          />
        </Link>
      ))}
    </Stack>
  );
};

export default AlbumFeed;
