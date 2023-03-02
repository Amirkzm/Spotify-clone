export const getAllArtists = (data: any) => {
  const artistList = data.map((artist: any) => artist?.name);
  const artistNames: string = artistList.join();
  return artistNames;
};
