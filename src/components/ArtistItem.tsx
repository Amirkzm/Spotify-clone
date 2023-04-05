import { Box, CardMedia } from "@mui/material";

interface ArtistItemProps {
  imageUrl: string;
  size?: number;
  // artistId?: string;
  // shouldNavigate?: boolean;
}

const ArtistItem = (props: ArtistItemProps) => {
  const { imageUrl, size } = props;

  return (
    <Box>
      <CardMedia
        component="img"
        height={size ?? "100px"}
        image={imageUrl}
        alt="album photo"
        sx={{
          objectFit: "cover",
          mt: 3,
          width: size ?? "100px",
          borderRadius: "50%",
        }}
      />
    </Box>
  );
};

export default ArtistItem;
