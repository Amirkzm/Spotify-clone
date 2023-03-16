import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

function BackButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <IconButton onClick={handleClick}>
      <ArrowBack sx={{ fontSize: "25px" }} />
    </IconButton>
  );
}

export default BackButton;
