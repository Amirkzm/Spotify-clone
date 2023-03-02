import { Box, Stack } from "@mui/material";
import NewReleasesTrack from "./NewReleases";
import TopArtists from "./TopArtists";

const RightSidebar = () => {
  return (
    <Box>
      <Stack sx={{ overflow: "hidden", height: "100vh" }} id="rightSidebarRoot">
        <NewReleasesTrack />
        <Box sx={{ width: "100%", overflow: "scroll" }}>
          <TopArtists />
        </Box>
      </Stack>
    </Box>
  );
};

export default RightSidebar;
