import { useColor } from "color-thief-react";
import React from "react";
import { theme } from "../utils";

const useImageColor = (imageUrl: string): string | undefined => {
  const {
    data: heroBackgroundColor,
    loading: imageIsLoading,
    error: imageIsError,
  } = useColor(imageUrl, "hex", { crossOrigin: "anonymous" });

  if (imageIsLoading) {
    console.log("image is loading");
  }
  if (imageIsError) {
    console.log("an error with image happened");
  }
  if (heroBackgroundColor) {
    console.log("backgeround color = ", heroBackgroundColor);
  }

  const heroBackground =
    imageIsLoading || imageIsError
      ? theme.palette.primary.main
      : heroBackgroundColor;

  return heroBackground;
};

export default useImageColor;
