import { CardMedia } from "@mui/material";

interface ArtistItemProps {
  imageUrl: string;
}

const ArtistItem = (props: ArtistItemProps) => {
  const { imageUrl } = props;
  console.log(imageUrl);

  return (
    <CardMedia
      component="img"
      height="100px"
      image={imageUrl}
      alt="album photo"
      sx={{ objectFit: "contain", mt: 3, width: "100px", borderRadius: "50%" }}
      id="kireasbeabi"
    />
  );
};

export default ArtistItem;
