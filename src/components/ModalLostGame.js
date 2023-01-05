import {
  Card,
  Typography,
  Button,
  Paper,
  ButtonGroup,
  IconButton,
} from "@mui/material";
import React from "react";

export const ModalLostGame = ({ score, highScore, display }) => {
  return (
    <Paper
      sx={{
        height: "50vh",
        width: "50vw",
        background: "#FFFFFF",
        zIndex: 1,
        display: "",
        bgcolor: "#E3E3E3",
        display: { display },
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography>Your score: {score}</Typography>
      <Typography>Your highscore: {highScore}</Typography>
      <br />
      <ButtonGroup>
        <IconButton size="small">Play again</IconButton>
        <IconButton size="small">Share</IconButton>
      </ButtonGroup>
    </Paper>
  );
};
