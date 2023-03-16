import { Stack } from "@mui/material";
import { Layout, RecentlyPlayed, UserTopSongs } from "../components";

const Home = () => {
  const mainSection = (
    <Stack>
      <UserTopSongs />
      <RecentlyPlayed />
    </Stack>
  );
  return <Layout>{mainSection}</Layout>;
};

export default Home;
