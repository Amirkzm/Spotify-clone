import { ArrowForward } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

function ForwardButton() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick() {
    navigate(1);
  }

  // Disable the button if there's nothing to navigate forward to
  //   const disabled = location.state && location.state?.from === "back";

  return (
    <IconButton onClick={handleClick}>
      <ArrowForward sx={{ fontSize: "25px" }} />
    </IconButton>
  );
}

export default ForwardButton;
