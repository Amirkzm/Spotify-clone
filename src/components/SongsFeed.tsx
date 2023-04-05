import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import SongCard from "./SongCard";
import { getAllArtists } from "../utils";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItme } from "../redux/feature/itemSlice";
import { addTrack, updatePlayer } from "../redux/feature/playerSlice";

interface SongsFeedProps {
  songs: any;
}

interface SongType {
  name: string;
}

const SongsFeed = ({ songs }: SongsFeedProps) => {
  const dispatch = useDispatch();

  const trackClickHandler = (track: any) => {
    console.log("track clicked");
    dispatch(addItme(track));
    dispatch(
      updatePlayer({
        track: track,
        shouldPlay: false,
      })
    );
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -5, y: -5 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <Stack
      sx={{
        flexDirection: "row",
        gap: 2,
        flexWrap: "wrap",
        justifyContent: "center",
        pt: 5,
      }}
    >
      {songs.map((song: any, index: number) => (
        <Link
          to={`/track/${song?.id}`}
          key={song?.id}
          onClick={() => trackClickHandler(song)}
        >
          <Box
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            sx={{
              "&:hover": {
                transform: "scale(1.05) !important",
              },
            }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileTap={{ scale: 0.95 }}
            whileInView={cardVariants.visible}
          >
            <SongCard
              name={song?.name}
              artist={getAllArtists(song?.artists)}
              imageUrl={song?.album?.images[1]?.url}
              key={index}
            />
          </Box>
        </Link>
      ))}
    </Stack>
  );
};

export default SongsFeed;
