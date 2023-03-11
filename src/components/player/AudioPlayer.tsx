import { useRef } from "react";
import { Box } from "@mui/material";
import PlayButton from "../PlayButton";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const AudioPlayer = ({ preview_url }: { preview_url: string }) => {
  const { track, isPlaying, nextTrack, previousTrack } = useSelector(
    (state: RootState) => state.itemToPlay
  );
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleTimeUpdate = () => {
    const progressBarFilled = document.querySelector(
      ".progress-bar-filled"
    ) as HTMLDivElement;
    if (audioRef.current && progressBarFilled) {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      progressBarFilled.style.width = `${progress}%`;
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "50px",
        marginBottom: "20px",
        "& audio": {
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          "&::-webkit-media-controls": {
            display: "none",
          },
          "&::-moz-media-controls": {
            display: "none",
          },
          "&:focus": {
            outline: "none",
          },
        },
        "& .play-button": {
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "#333",
          position: "absolute",
          top: "20px",
          left: "5px",
          zIndex: 2,
          cursor: "pointer",
        },
        "& .progress-bar": {
          height: "10px",
          backgroundColor: "#ddd",
          borderRadius: "5px",
        },
        "& .progress-bar-filled": {
          height: "10px",
          backgroundColor: "#333",
          borderRadius: "5px",
        },
      }}
    >
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}>
        <source src={track?.preview_url} type="audio/mpeg" />
      </audio>
      <div className="play-button" onClick={handlePlay}>
        <PlayButton />
      </div>
      {/* <div
        className="play-button"
        style={{ left: "30px", backgroundColor: "blue" }}
        onClick={handlePause}
      >
        pause
      </div> */}
      <div className="progress-bar">
        <div className="progress-bar-filled"></div>
      </div>
    </Box>
  );
};

export default AudioPlayer;
