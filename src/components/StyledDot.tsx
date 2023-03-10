import { Box } from "@mui/material";
import React from "react";

const StyledDot = () => {
  return (
    <Box
      sx={{
        width: "5px",
        height: "5px",
        bgcolor: "white",
        borderRadius: "50%",
        display: "inline-block",
        mx: 1,
      }}
      component="span"
    ></Box>
  );
};

export default StyledDot;
