export interface genresType {
  title: string;
  value: string;
}

export const genres: genresType[] = [
  { value: "pop", title: "POP" },
  { value: "hip-Hop", title: "HIP_HOP_RAP" },
  { value: "dance", title: "DANCE" },
  { value: "electronic", title: "ELECTRONIC" },
  { value: "soul", title: "SOUL_RNB" },
  { value: "alternative", title: "ALTERNATIVE" },
  { value: "rock", title: "ROCK" },
  { value: "latin", title: "LATIN" },
  { value: "film", title: "FILM_TV" },
  { value: "country", title: "COUNTRY" },
  { value: "worldwide", title: "WORLDWIDE" },
  { value: "reggae", title: "REGGAE_DANCE_HALL" },
  { value: "house", title: "HOUSE" },
  { value: "k-Pop", title: "K_POP" },
];

export interface colorType {
  name: string;
  value: string;
}
export const colors: colorType[] = [
  { name: "gold", value: "#ffa42b" },
  { name: "blue", value: "#1b66fa" },
  { name: "red", value: "#e91429" },
  { name: "green", value: "#1ed760" },
  { name: "gray", value: "#727272" },
  { name: "pink", value: "#d71e6c" },
  { name: "purple", value: "#d71ecb" },
  { name: "orange", value: "#d75b1e" },
  { name: "aquamarine", value: "#56bb95" },
];
