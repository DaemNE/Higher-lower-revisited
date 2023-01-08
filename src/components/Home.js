import { Box } from "@mui/material";
import React from "react";
import { TimeLineShows } from "./TimeLineShows";

export const Home = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "90vh",
        }}
      >
        <TimeLineShows />
      </Box>
    </>
  );
};
