import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

interface PlayButtonProps {
  sx?: { [key: string]: any };
}

const PlayButton = ({ sx }: PlayButtonProps) => {
  const [play, setPlay] = useState<boolean>(true);
  return (
    <Box>
      <IconButton onClick={() => setPlay((prev) => !prev)}>
        {play ? <PlayCircleIcon sx={sx} /> : <PauseCircleIcon sx={sx} />}
      </IconButton>
    </Box>
  );
};

export default PlayButton;
