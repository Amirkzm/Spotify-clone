import {
  createApi,
  fetchBaseQuery,
  BaseQueryApi,
} from "@reduxjs/toolkit/query/react";
import { UserAuthState } from "../feature/userAuth";

type AccessToken = string;

interface AuthState {
  accessToken: AccessToken | null;
  // ... other fields
}

interface SpotifyTrack {
  // ... track properties
}

interface SpotifyArtist {
  // ... artist properties
  name: string;
  items: any[];
}

interface SpotifyPlaylist {
  // ... playlist properties
}

interface SpotifySearchResult {
  // ... search result properties
}

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
    getTopArtists: builder.query<any, void>({
      query: () => "me/top/artists?time_range=long_term",
    }),
    getPlaylists: builder.query<SpotifyPlaylist[], void>({
      query: () => "me/playlists",
    }),
    getPlaylistTracks: builder.query<SpotifyTrack[], string>({
      query: (playlistId) => `playlists/${playlistId}/tracks`,
    }),
    getRecentlyPlayedTracks: builder.query<any, void>({
      query: () => "me/player/recently-played",
    }),
    getRecommendedTracks: builder.query<
      any,
      { seedType?: SeedType; seed?: string }
    >({
      query: ({ seedType = "seed_genres", seed = "pop,rock" }) =>
        `recommendations?limit=20&${seedType}=${seed}`,
    }),
    getNewReleases: builder.query<any, { limit?: number }>({
      query: ({ limit = 10 }) => `browse/new-releases?limit=5`,
    }),
    getAlbumTracks: builder.query<any, string>({
      query: (albumId) => `albums/${albumId}/tracks?limit=1`,
    }),
    search: builder.query<SpotifySearchResult, string>({
      query: (searchTerm) =>
        `search?type=track,artist&q=${encodeURIComponent(searchTerm)}`,
    }),
  }),
});

export const {
  useGetTopTracksQuery,
  useGetTopArtistsQuery,
  useGetPlaylistsQuery,
  useGetPlaylistTracksQuery,
  useSearchQuery,
  useGetRecentlyPlayedTracksQuery,
  useGetRecommendedTracksQuery,
  useGetNewReleasesQuery,
  useGetAlbumTracksQuery,
} = spotifyApi;
