import {
  createApi,
  fetchBaseQuery,
  BaseQueryApi,
} from "@reduxjs/toolkit/query/react";
import { UserAuthState } from "../feature/userAuth";

type SeedType = "seed_artists" | "seed_genres" | "seed_tracks";

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1/",
    prepareHeaders: (headers, { getState }) => {
      console.log(getState());
      const { accessToken } = (getState() as { userAuth: UserAuthState })
        .userAuth;
      const storageToken = localStorage.getItem("accessToken");
      if (accessToken || storageToken) {
        headers.set("Authorization", `Bearer ${storageToken ?? accessToken}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopTracks: builder.query<any, { limit?: number }>({
      query: ({ limit = 100 }) =>
        `me/top/tracks?time_range=long_term&limit=${limit}`,
    }),
    getArtistTopTracks: builder.query<
      any,
      { artistId: string | undefined; limit?: number }
    >({
      query: ({ artistId }) => `artists/${artistId}/top-tracks?market=ES`,
    }),
    getArtist: builder.query<any, string>({
      query: (artistId) => `artists/${artistId}`,
    }),
    getTopArtists: builder.query<any, void>({
      query: () => "me/top/artists?time_range=long_term",
    }),
    getPlaylists: builder.query<any, void>({
      query: () => "me/playlists",
    }),
    getPlaylistTracks: builder.query<any, string | undefined>({
      query: (playlistId) => `playlists/${playlistId}/tracks`,
    }),
    getRecentlyPlayedTracks: builder.query<any, void>({
      query: () => "me/player/recently-played",
    }),
    getRecommendation: builder.query<
      any,
      { seedType?: SeedType; seed?: string; limit?: number }
    >({
      query: ({
        seedType = "seed_genres",
        seed = "pop,rock,hip-hop,dance",
        limit = 12,
      }) => `recommendations?limit=${limit}&${seedType}=${seed}`,
    }),
    getRelatedArtists: builder.query<any, string>({
      query: (artistId) => `artists/${artistId}/related-artists`,
    }),
    getNewReleases: builder.query<any, { limit?: number }>({
      query: ({ limit = 5 }) => `browse/new-releases?limit=${limit}`,
    }),
    getAlbumTracks: builder.query<any, string | undefined>({
      query: (albumId) => `albums/${albumId}/tracks`,
    }),
    getAlbum: builder.query<any, string | undefined>({
      query: (albumId) => `albums/${albumId}`,
    }),
    search: builder.query<any, string>({
      query: (searchTerm) => {
        if (searchTerm === "") {
          return "";
        }
        return `search?type=track,album,playlist&limit=10&q=${encodeURIComponent(
          searchTerm
        )}`;
      },
    }),
    getSavedTracks: builder.query<any, { limit?: number }>({
      query: ({ limit = 10 }) => `me/tracks?limit=${limit}`,
    }),
    getSavedAlbums: builder.query<any, { limit?: number }>({
      query: ({ limit = 10 }) => `me/albums?limit=${limit}`,
    }),
  }),
});

export const {
  useGetTopTracksQuery,
  useGetArtistTopTracksQuery,
  useGetTopArtistsQuery,
  useGetPlaylistsQuery,
  useGetPlaylistTracksQuery,
  useSearchQuery,
  useGetRecentlyPlayedTracksQuery,
  useGetRecommendationQuery,
  useGetRelatedArtistsQuery,
  useGetNewReleasesQuery,
  useGetAlbumTracksQuery,
  useGetSavedTracksQuery,
  useGetSavedAlbumsQuery,
  useGetAlbumQuery,
  useGetArtistQuery,
} = spotifyApi;
