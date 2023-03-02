import { Box, CardMedia, IconButton, Stack, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import React from "react";

interface ReleaseItemProps {
  albumName: string;
  artist: string;
  imageUrl: string;
}
const ReleaseItem = (props: ReleaseItemProps) => {
  const { albumName, artist, imageUrl } = props;
  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      sx={{
        p: 3,
        pb: 0,
        position: "relative",
      }}
    >
      <Stack
        direction="row"
        justifyContent={"start"}
        gap={2}
        sx={{ width: "100%" }}
      >
        <CardMedia
          component="img"
          height="70"
          image={imageUrl}
          alt="album photo"
          sx={{
            objectFit: "contain",
            mt: 3,
            width: "70px",
            alignSelf: "start",
          }}
        />
        <Stack
          justifyContent={"center"}
          alignItems=""
          sx={{
            overflow: "hidden",
            maxWidth: "50%",
            flex: "0 1 auto",
            alignSelf: "center",
            transform: "translateY(25%)",
          }}
        >
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            fontWeight={800}
            sx={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontSize: "16px",
            }}
          >
            {albumName}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontSize: "14px",
            }}
          >
            {artist}
          </Typography>
        </Stack>
      </Stack>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: 3,
          zIndex: "1000",
          //   transform: "Scale(2)",
        }}
      >
        <PlayCircleIcon sx={{ fontSize: 48 }} />
      </IconButton>
    </Stack>
  );
};

export default ReleaseItem;
