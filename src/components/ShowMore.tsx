import { Box, Button, Collapse, Stack } from "@mui/material";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

interface ShowMoreProps {
  children: ReactNode;
  minHeight: number;
}

const ShowMore = (props: ShowMoreProps) => {
  const { children, minHeight } = props;
  const [showMore, setShowMore] = useState<boolean>(false);
  const [showCollapse, setShowCollapse] = useState<boolean>(true);
  const [childrenHeight, setChildrenHeight] = useState<number>(0);

  const measureRef = useCallback((node: HTMLDivElement) => {
    if (node) {
      const height = node.getBoundingClientRect().height;
      setChildrenHeight(height);
    }
  }, []);
  //Second-approach
  // useEffect(() => {
  //   if (divRef.current) {
  //     const height = divRef.current.getBoundingClientRect().height;
  //     if (useCase === "description" && height !== 0 && height < 54) {
  //       setShowCollapse(false);
  //     }
  //     if (useCase === "comment" && height < 80) {
  //       setShowCollapse(false);
  //     }
  //   }
  // }, [useCase]);

  useEffect(() => {
    if (childrenHeight !== 0 && childrenHeight < minHeight) {
      setShowCollapse(false);
    }
  }, [childrenHeight, minHeight]);

  return (
    <Stack
      sx={{
        alignItems: "flex-start",
      }}
    >
      {showCollapse && (
        <>
          <Collapse in={showMore} collapsedSize={minHeight}>
            <div ref={measureRef}>{children}</div>
          </Collapse>
          <Button onClick={() => setShowMore((prev) => !prev)}>
            {showMore ? "Show less" : "Show more"}
          </Button>
        </>
      )}
      {!showCollapse && <Box>{children}</Box>}
    </Stack>
  );
};

export default ShowMore;
