import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export const HowTheGameWorks = () => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      justifyContent={"center"}
      alignItems="center"
      gap={"5px"}
    >
      <Typography
        variant="h4"
        component={"div"}
        sx={{
          padding: "2rem",
          color: "rgba(0, 0, 0, 0.4)",
        }}
      >
        How to play?
      </Typography>
      <Typography>
        On the left side of the screen you will see your first song and it's
        views.
      </Typography>
      <Typography>
        On the right song you will see a second song and 2 buttons.
      </Typography>

      <Button
        key={Math.random()}
        variant="contained"
        color={"warning"}
        sx={{
          width: "15vw",
          borderRadius: "20px",
          color: "white",
          border: "1px solid white",
        }}
      >
        <ArrowUpwardIcon />
        Higher
      </Button>
      <Button
        variant="contained"
        color="secondary"
        sx={{
          width: "15vw",
          borderRadius: "20px",
          color: "white",
          border: "1px solid white",
        }}
      >
        Lower
        <ArrowDownwardIcon />
      </Button>
      <Typography>
        Click the higher button if you think the song on the right has{" "}
        <b>MORE</b> streams.
      </Typography>
      <Typography>
        Click the lower button if you think the song on the right has{" "}
        <b>LESS</b> streams.
      </Typography>
      <Typography variant="h5" color={"black"}>
        Navigate to the Higher-Lower page <a href="/higher-lower">here</a> or at
        the top.
      </Typography>
      <Typography variant="h5" sx={{ paddingBottom: "10px" }}>
        Can you beat the <a href="/hiscores">highest scores</a>?
      </Typography>
    </Box>
  );
};
