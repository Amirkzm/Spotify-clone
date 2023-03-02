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
  StarBorderPurple500Outlined,
  TagOutlined,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "primary.dark",
          minHeight: "100vh",
          // position: "fixed",
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
          <ListItemButton sx={{ display: "flex", alignItems: "center" }}>
            <ListItemIcon>
              <HomeOutlined sx={{ fontSize: "26px" }} />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              sx={{ transform: "translateY(3px)" }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <SettingsOverscanOutlined sx={{ fontSize: "26px" }} />
            </ListItemIcon>
            <ListItemText
              primary="Discover"
              sx={{ transform: "translateY(3px)" }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <StarBorderPurple500Outlined sx={{ fontSize: "26px" }} />
            </ListItemIcon>
            <ListItemText
              primary="Search"
              sx={{ transform: "translateY(3px)" }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <TagOutlined sx={{ fontSize: "26px" }} />
            </ListItemIcon>
            <ListItemText
              primary="Top Charts"
              sx={{ transform: "translateY(3px)" }}
            />
          </ListItemButton>
        </Stack>
      </List>
    </Box>
  );
};

export default Sidebar;
