import { Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useGetAlbumTracksQuery, useGetNewReleasesQuery } from "../redux";
import { addItme } from "../redux/feature/itemSlice";
import { getAllArtists } from "../utils";
import Error from "./Error";
import Loader from "./Loader";
import ReleaseItem from "./ReleaseItem";

const NewReleasesTrack = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetNewReleasesQuery({
    limit: 4,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  const releaseClickHandler = (album: any) => {
    dispatch(addItme(album));
  };

  return (
    <Stack sx={{ pt: 10, gap: 1 }}>
      <Typography variant="h2" sx={{ transform: "translateX(20px)" }}>
        New Releases
      </Typography>
      {data?.albums?.items.map((album: any) => (
        <Link
          to={`/album/${album?.id}`}
          key={album?.id}
          onClick={() => releaseClickHandler(album)}
        >
          <ReleaseItem
            albumName={album?.name}
            artist={getAllArtists(album?.artists)}
            imageUrl={album?.images[1]?.url}
            albumId={album?.id}
            key={album?.id}
          />
        </Link>
      ))}
    </Stack>
  );
};

export default NewReleasesTrack;
