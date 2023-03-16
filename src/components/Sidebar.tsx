import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
} from "@mui/material";
import { Logo } from "../assets";
import {
  HomeOutlined,
  SettingsOverscanOutlined,
  LibraryMusicOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleChangeNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Box>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "primary.dark",
          minHeight: "100vh",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 20,
              pt: 5,
              bgcolor: "primary.dark",
            }}
          >
            <img src={Logo} alt="logo" style={{ borderRadius: "50%" }} />
          </ListSubheader>
        }
      >
        <Stack sx={{ "&>*:hover *": { color: "#7a9cd2" }, gap: 3 }}>
          <ListItemButton
            sx={{ display: "flex", alignItems: "center" }}
            onClick={() => handleChangeNavigation("/home")}
          >
            <ListItemIcon>
              <HomeOutlined sx={{ fontSize: "26px" }} />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              sx={{ transform: "translateY(3px)" }}
            />
          </ListItemButton>
          <ListItemButton onClick={() => handleChangeNavigation("/discover")}>
            <ListItemIcon>
              <SettingsOverscanOutlined sx={{ fontSize: "26px" }} />
            </ListItemIcon>
            <ListItemText
              primary="Discover"
              sx={{ transform: "translateY(3px)" }}
            />
          </ListItemButton>
          <ListItemButton onClick={() => handleChangeNavigation("/search")}>
            <ListItemIcon>
              <SearchOutlined sx={{ fontSize: "26px" }} />
            </ListItemIcon>
            <ListItemText
              primary="Search"
              sx={{ transform: "translateY(3px)" }}
            />
          </ListItemButton>
          <ListItemButton onClick={() => handleChangeNavigation("/library")}>
            <ListItemIcon>
              <LibraryMusicOutlined sx={{ fontSize: "26px" }} />
            </ListItemIcon>
            <ListItemText
              primary="User Library"
              sx={{ transform: "translateY(3px)" }}
            />
          </ListItemButton>
        </Stack>
      </List>
    </Box>
  );
};

export default Sidebar;
