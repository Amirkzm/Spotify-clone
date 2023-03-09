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
      <Box
        onClick={() => setPlay((prev) => !prev)}
        sx={{
          "&:hover": { cursor: "pointer " },
        }}
      >
        {play ? <PlayCircleIcon sx={sx} /> : <PauseCircleIcon sx={sx} />}
      </Box>
    </Box>
  );
};

export default PlayButton;
