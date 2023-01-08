import { Box } from "@mui/material";
import React, { useState } from "react";

export const LoadingScreen = () => {
  const [text, setText] = useState("Fetching hiscores from database..");

  setTimeout(() => {
    setText("Loading of database failed, refresh page or try again later.");
  }, 6000);
  return (
    <Box
      component={"tr"}
      sx={{
        height: "40vh",
        width: "20vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: "40vw",
      }}
    >
      <td>{text}</td>
    </Box>
  );
};
