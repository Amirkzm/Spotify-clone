import { useEffect, useRef, useState } from "react";
import { Box, Slider, Stack, Typography } from "@mui/material";
import PlayButton from "../PlayButton";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  SkipNext,
  SkipPrevious,
  VolumeUp,
  VolumeMute,
  VolumeDown,
} from "@mui/icons-material";
import { addTrack } from "../../redux/feature/playerSlice";

const AudioPlayer = () => {
  const dispatch = useDispatch();
  const { track, nextTrack, previousTrack, trackQueue } = useSelector(
    (state: RootState) => state.itemToPlay
  );
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volumeValue, setVolumeValue] = useState<number>(50);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarFilled = useRef<HTMLDivElement>(null);
  const previousVolumeValue = useRef<number>(50);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    }
  }, [track]);

  const play = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const next = () => {
    const currentTrackIndex = trackQueue.findIndex(
      (itemTrack: any) => itemTrack?.id === track?.id
    );
    if (currentTrackIndex > -1) {
      dispatch(
        addTrack({
          track:
            currentTrackIndex < trackQueue.length - 1
              ? trackQueue[currentTrackIndex + 1]
              : trackQueue[0],
          isPlaying: false,
          nextTrack: null,
          previousTrack: null,
          trackQueue: trackQueue,
        })
      );
    }
  };

  const previous = () => {
    const currentTrackIndex = trackQueue.findIndex(
      (itemTrack: any) => itemTrack?.id === track?.id
    );
    if (currentTrackIndex > -1) {
      dispatch(
        addTrack({
          track:
            currentTrackIndex > 0
              ? trackQueue[currentTrackIndex - 1]
              : trackQueue[0],
          isPlaying: false,
          nextTrack: null,
          previousTrack: null,
          trackQueue: trackQueue,
        })
      );
    }
  };

  const handleVolumeChange = (event: Event, newValue: number | number[]) => {
    console.log(newValue);
    const clampedValue = (newValue as number) / 100;
    setVolumeValue(clampedValue * 100);
    if (audioRef.current) {
      audioRef.current.volume = clampedValue;
    }
    console.log(audioRef.current?.volume);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && progressBarFilled.current) {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      progressBarFilled.current.style.width = `${progress}%`;
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current.currentTime === audioRef.current.duration) {
        setIsPlaying(false);
      }
    }
  };

  const clickOnVolumeIconHandler = () => {
    if (volumeValue === 0) {
      setVolumeValue(previousVolumeValue.current);
    } else {
      previousVolumeValue.current = volumeValue;
      setVolumeValue(0);
    }
  };

  const controlButtonsStyle = {
    fontSize: "42px",
    "&:hover": { cursor: "pointer" },
  };

  const volumeIconStyle = { fontSize: "26px" };
  const volumeIcon =
    volumeValue < 70 ? (
      volumeValue === 0 ? (
        <VolumeMute sx={volumeIconStyle} />
      ) : (
        <VolumeDown sx={volumeIconStyle} />
      )
    ) : (
      <VolumeUp sx={volumeIconStyle} />
    );
  return (
    <Stack
      sx={{
        position: "relative",
        height: "100%",
        marginBottom: "20px",
        width: "40%",
        left: "50%",
        top: "20%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        key={track?.id || ""}
      >
        <source src={track?.preview_url} type="audio/mpeg" />
      </audio>
      <Box sx={{ display: "flex", gap: 2, transform: "translateX(35%)" }}>
        <Box onClick={previous}>
          <SkipPrevious sx={controlButtonsStyle} />
        </Box>
        <Box onClick={play}>
          <PlayButton sx={controlButtonsStyle} isPlaying={isPlaying} />
        </Box>
        <Box onClick={next}>
          <SkipNext sx={controlButtonsStyle} />
        </Box>
      </Box>
      <Stack
        direction={"row"}
        sx={{ width: "100%", alignItems: "center", gap: 2 }}
      >
        <Box
          sx={{ "&:hover": { cursor: "pointer" } }}
          onClick={clickOnVolumeIconHandler}
        >
          {volumeIcon}
        </Box>
        <Slider
          value={volumeValue}
          onChange={handleVolumeChange}
          aria-label="Volume"
          min={0}
          max={100}
          sx={{
            color: "#ddd",
            width: "20%",
          }}
        />
        <Typography variant="body2">00:{Math.ceil(currentTime)}</Typography>
        <Box
          sx={{
            height: "8px",
            bgcolor: "gray",
            borderRadius: "5px",
            width: "100%",
          }}
        >
          <Box
            sx={{ height: "100%", bgcolor: "#ddd", borderRadius: "5px" }}
            ref={progressBarFilled}
          ></Box>
        </Box>
        <Typography variant="body2">
          00:{Math.ceil(audioRef.current?.duration ?? 0)}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AudioPlayer;
