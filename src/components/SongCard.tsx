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
  name: string;
  artist: string;
  imageUrl: string;
}

const SongCard = (props: SongCardProps) => {
  const { name, artist, imageUrl } = props;
  return (
    <Stack
      sx={{
        width: "clamp(20rem,3vw,25rem)",
        height: "30rem",
        pt: 0,
        flex: "0 1 auto",
        position: "relative",
        borderRadius: "5%",
        bgcolor: "transparent",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={imageUrl}
        alt="album photo"
        sx={{ objectFit: "contain", mt: 3 }}
      />
      <CardContent>
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
          {name}
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
