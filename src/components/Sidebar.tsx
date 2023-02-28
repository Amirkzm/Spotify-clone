import {
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
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        minHeight: "100%",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img src={Logo} alt="logo" />
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <HomeOutlined />
        </ListItemIcon>
        <ListItemText primary="Discover" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SettingsOverscanOutlined />
        </ListItemIcon>
        <ListItemText primary="Around You" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <StarBorderPurple500Outlined />
        </ListItemIcon>
        <ListItemText primary="Top Artists" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <TagOutlined />
        </ListItemIcon>
        <ListItemText primary="Top Charts" />
      </ListItemButton>
    </List>
  );
};

export default Sidebar;
