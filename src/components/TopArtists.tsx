import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { MouseEventHandler, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGetTopArtistsQuery } from "../redux";
import ArtistItem from "./ArtistItem";
import Error from "./Error";
import Loader from "./Loader";

const TopArtists = () => {
  const { data, isLoading, isError } = useGetTopArtistsQuery();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState<number | null>(null);
  const [isDraggingImage, setIsDraggingImage] = useState<boolean>(false);
  const [shouldCancelLink, setShouldCancelLink] = useState<boolean>(false);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setShouldCancelLink(false);
    if (containerRef.current) {
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsDraggingImage(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && !isDraggingImage) return;
    e.preventDefault();
    if (isDragging) {
      if (containerRef.current) {
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = x - startX!;
        containerRef.current.scrollLeft = scrollLeft! - walk;
      }
    } else {
      containerRef.current?.scrollBy({
        left: -e.movementX,
        behavior: "smooth",
      });
    }
    if (isDraggingImage) {
      setShouldCancelLink(true);
    }
  };

  const artistItemClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    shouldCancelLink && e.preventDefault();
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -5, y: -5 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h1">Your Top artists</Typography>
      <Stack
        direction="row"
        gap={2}
        ref={containerRef}
        component={motion.div}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        sx={{
          flexWrap: "nowrap",
          maxWidth: "100%",
          overflow: "scroll",
          cursor: "grab",
          height: "300px",
        }}
      >
        {data?.items.map((artist: any, index: number) => (
          <Box
            component={motion.div}
            key={artist?.id}
            initial="hidden"
            variants={cardVariants}
            onMouseDown={() => setIsDraggingImage(true)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileTap={{ scale: 0.95 }}
            whileInView={cardVariants.visible}
            viewport={{ once: true }}
          >
            <Link to={`/artist/${artist?.id}`} onClick={artistItemClickHandler}>
              <ArtistItem
                key={artist?.id}
                imageUrl={artist?.images[1].url}
                size={200}
              />
            </Link>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default TopArtists;
