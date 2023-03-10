import { Box, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

interface ArtistItemProps {
  imageUrl: string;
  size?: number;
  artistId?: string;
  shouldNavigate?: boolean;
}

const ArtistItem = (props: ArtistItemProps) => {
  const { imageUrl, size, artistId, shouldNavigate = true } = props;

  const handleClick = () => {
    console.log("item clicked");
  };

  return (
    <Box>
      {shouldNavigate ? (
        <Link to={`/artist/${artistId}`} onClick={() => handleClick()}>
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
        </Link>
      ) : (
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
      )}
    </Box>
  );
};

export default ArtistItem;
