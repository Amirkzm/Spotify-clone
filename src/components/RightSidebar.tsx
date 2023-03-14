import { Box, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import NewReleasesTrack from "./NewReleases";
import TopArtists from "./TopArtists";

const RightSidebar = () => {
  const showPlayer = useSelector(
    (state: RootState) => state.itemToPlay.showPlayer
  );
  return (
    <Box sx={{ pb: showPlayer ? "205px" : "0" }}>
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
