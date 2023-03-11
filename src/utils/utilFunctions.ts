export const getAllArtists = (data: any): string => {
  const artistList: any[] = data.map((artist: any) => artist?.name);
  const artistNames: string = artistList.join();
  return artistNames;
};

export function formatDuration(durationMs: number): string {
  const totalSeconds = Math.round(durationMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

interface ExtractItemPropertiesProps {
  item: any;
  itemType: "playlist" | "track" | "album" | "artist";
}

export const extractItemProperties = ({
  item,
  itemType,
}: ExtractItemPropertiesProps) => {
  let imageUrl,
    playlistId,
    artistId,
    albumId,
    trackID,
    songName,
    albumName,
    trackDuration,
    playlistName,
    artistsName,
    releaseDate,
    trakcsPopularity,
    AlbumTracks,
    playlistTracks,
    followers,
    artistGenres,
    artistPopularity;

  // console.log(item);

  switch (itemType) {
    case "album":
      imageUrl = item?.images[1]?.url;
      albumName = item?.name;
      albumId = item?.id;
      artistsName = getAllArtists(item?.artists);
      artistId = item?.artists[0]?.id;
      releaseDate = item?.release_date;
      AlbumTracks = item?.tracks?.items;
      break;
    case "track":
      songName = item?.name;
      imageUrl = item?.album?.images[1]?.url;
      trackID = item?.id;
      albumId = item?.album?.id;
      albumName = item?.album?.name;
      artistId = item?.artists[0]?.id;
      artistsName = getAllArtists(item?.artists);
      trackDuration = item?.duration_ms;
      trakcsPopularity = item?.popularity;
      releaseDate = item?.album?.release_date;
      break;
    case "playlist":
      playlistName = item?.name;
      playlistId = item?.id;
      imageUrl = item?.images[1]?.url ?? item?.images[0]?.url;
      playlistTracks = item?.tracks?.items;
      break;
    case "artist":
      artistsName = item?.name;
      artistGenres = item?.genres;
      imageUrl = item?.images[0]?.url;
      followers = item?.followers?.total;
      artistPopularity = item?.popularity;
      break;
    default:
      console.log("GG wp");
      break;
  }

  return {
    imageUrl,
    playlistId,
    artistId,
    albumId,
    trackID,
    songName,
    albumName,
    trackDuration,
    playlistName,
    artistsName,
    releaseDate,
    trakcsPopularity,
    AlbumTracks,
    playlistTracks,
    followers,
    artistGenres,
    artistPopularity,
  };
};
