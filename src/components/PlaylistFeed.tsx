import { Stack } from "@mui/material";
import SongCard from "./SongCard";

interface PlaylistFeedProps {
  playlists: any;
  category?: string;
}

const AlbumFeed = ({ playlists, category = "track" }: PlaylistFeedProps) => {
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
      {playlists.map((playlist: any, index: number) => {
        return (
          <SongCard
            name={playlist?.name}
            artist={playlist?.owner?.display_name}
            imageUrl={playlist?.images[1]?.url}
            key={playlist?.id}
          />
        );
      })}
    </Stack>
  );
};

export default AlbumFeed;
