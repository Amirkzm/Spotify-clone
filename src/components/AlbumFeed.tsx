import { Stack } from "@mui/material";
import SongCard from "./SongCard";
import { getAllArtists } from "../utils";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItme } from "../redux/feature/itemSlice";

interface albumsFeedProps {
  albums: any;
  category?: string;
}

const AlbumFeed = ({ albums, category = "track" }: albumsFeedProps) => {
  const dispatch = useDispatch();

  const albumClickHandler = (album: any) => {
    dispatch(addItme(album));
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
      id="root albums feed"
    >
      {albums.map((album: any, index: number) => {
        return (
          <Link
            to={`/album/${album.id}`}
            key={album.id}
            onClick={() => albumClickHandler(album)}
          >
            <SongCard
              name={album?.name}
              artist={getAllArtists(album?.artists)}
              imageUrl={album?.images[1]?.url}
            />
          </Link>
        );
      })}
    </Stack>
  );
};

export default AlbumFeed;
