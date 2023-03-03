import { Stack } from "@mui/material";
import { Layout, RecentlyPlayed, UserTopSongs } from "../components";
import RecomendedSongs from "../components/RecomendedSongs";

const Home = () => {
  const mainSection = (
    <Stack id="root home stack">
      <RecentlyPlayed />
      <UserTopSongs />
      <RecomendedSongs />
    </Stack>
  );
  return <Layout>{mainSection}</Layout>;
};

export default Home;
