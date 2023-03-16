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
  const divRef = useRef<HTMLDivElement>(null);

  const measureRef = useCallback((node: HTMLDivElement) => {
    if (node) {
      const height = node.getBoundingClientRect().height;
      setChildrenHeight(height);
    }
  }, []);

  useEffect(() => {
    if (childrenHeight !== 0 && childrenHeight < 1) {
      setShowCollapse(false);
      console.log("inside useeffect and children height=", childrenHeight);
    }
  }, [childrenHeight, minHeight]);

  return (
    <Stack id="showMore">
      {showCollapse && (
        <>
          <Collapse in={showMore} collapsedSize={minHeight}>
            <div ref={measureRef}>{children}</div>
          </Collapse>
          <Button
            onClick={() => setShowMore((prev) => !prev)}
            sx={{
              alignSelf: "start",
              ml: 4,
              color: "primary.dark",
              fontSize: "14px",
            }}
          >
            {showMore ? "Show less" : "Show more"}
          </Button>
        </>
      )}
      {!showCollapse && <Box>{children}</Box>}
    </Stack>
  );
};

export default ShowMore;
