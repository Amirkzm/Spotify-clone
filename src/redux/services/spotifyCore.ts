import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
}

interface SpotifyPlaylist {
  // ... playlist properties
}

interface SpotifySearchResult {
  // ... search result properties
}

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1/",
    prepareHeaders: (headers, { getState }) => {
      const { accessToken } = (getState() as { auth: AuthState }).auth;

      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopTracks: builder.query<SpotifyTrack[], void>({
      query: () => "me/top/tracks",
    }),
    getTopArtists: builder.query<SpotifyArtist[], void>({
      query: () => "me/top/artists",
    }),
    getPlaylists: builder.query<SpotifyPlaylist[], void>({
      query: () => "me/playlists",
    }),
    getPlaylistTracks: builder.query<SpotifyTrack[], string>({
      query: (playlistId) => `playlists/${playlistId}/tracks`,
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
} = spotifyApi;
