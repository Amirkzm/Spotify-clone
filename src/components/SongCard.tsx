import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

interface SongCardProps {
  songName: string;
  artist: string;
  imageUrl: string;
}

const SongCard = (props: SongCardProps) => {
  const { songName, artist, imageUrl } = props;
  return (
    <Stack
      sx={{
        width: "clamp(20rem,3vw,25rem)",
        height: "30rem",
        pt: 0,
        flex: "0 1 auto",
        position: "relative",
        bgcolor: "blue",
        borderRadius: "5%",
      }}
    >
      {/* <CardActionArea> */}
      <CardMedia
        component="img"
        height="180"
        image={imageUrl}
        alt="album photo"
        sx={{ objectFit: "contain", mt: 3 }}
      />
      <CardContent
        sx={
          {
            // whiteSpace: "nowrap",
            // overflow: "hidden",
            // textOverflow: "ellipsis",
            // display: "-webkit-box",
            // WebkitLineClamp: "9",
            // // WebkitBoxOrient: "vertical",
            // maxWidth: "65%",
          }
        }
        id="kirekhar"
      >
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          fontWeight={600}
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {songName}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {artist}
        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
    </Stack>
  );
};

export default SongCard;
