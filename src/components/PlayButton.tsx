import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

interface PlayButtonProps {
  sx?: { [key: string]: any };
  isPlaying?: boolean;
}

const PlayButton = ({ sx, isPlaying }: PlayButtonProps) => {
  return (
    <Box>
      <Box
        sx={{
          "&:hover": { cursor: "pointer " },
        }}
      >
        {isPlaying ? <PauseCircleIcon sx={sx} /> : <PlayCircleIcon sx={sx} />}
      </Box>
    </Box>
  );
};

export default PlayButton;
