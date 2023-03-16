import { Stack } from "@mui/material";
import SongCard from "./SongCard";
import { getAllArtists } from "../utils";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItme } from "../redux/feature/itemSlice";
import ArtistItem from "./ArtistItem";

interface albumsFeedProps {
  artists: any[];
}

const ArtistFeed = ({ artists }: albumsFeedProps) => {
  const dispatch = useDispatch();

  const artistClickHandler = (artist: any) => {
    dispatch(addItme(artist));
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
      {artists.map((artist: any, index: number) => {
        return (
          <Link
            to={`/artist/${artist.id}`}
            key={artist.id}
            onClick={() => artistClickHandler(artist)}
          >
            <ArtistItem
              size={200}
              artistId={artist?.id}
              shouldNavigate
              imageUrl={artist?.images[1]?.url}
            />
          </Link>
        );
      })}
    </Stack>
  );
};

export default ArtistFeed;
