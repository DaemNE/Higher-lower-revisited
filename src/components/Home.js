import { Box } from "@mui/material";
import React from "react";
import { HowTheGameWorks } from "./HowTheGameWorks";
import { TimeLineShows } from "./TimeLineShows";
import { WikipediaEntry } from "./WikipediaEntry";

export const Home = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HowTheGameWorks />
        <WikipediaEntry />
        <TimeLineShows />
      </Box>
    </>
  );
};
