import { Typography, Paper, ButtonGroup, IconButton, Box } from "@mui/material";
import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  RedditIcon,
  RedditShareButton,
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";

export const ModalLostGame = ({
  score,
  highScore,
  display,
  restartGame,
  shareResults,
}) => {
  const quote =
    "Hey, I just got " +
    score +
    " with a highscore of " +
    highScore +
    ". This game is awesome.";
  return (
    <Box
      sx={{
        display: display,
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "rgb(255,255,255,0.4)",
        zIndex: 1,
      }}
      className="smooth-anim-scale-in"
    >
      <Paper
        sx={{
          height: "50vh",
          width: "50vw",
          background: "#FFFFFF",
          zIndex: 1,
          display: "",
          bgcolor: "#E3E3E3",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "20px",
          backgroundImage: "linear-gradient(#65b566, #f44f44);",
        }}
      >
        <Typography variant="h1">You Lost!</Typography>
        <Typography>Your score: {score}</Typography>
        <Typography>Your highscore: {highScore}</Typography>
        <br />
        <IconButton
          size="large"
          onClick={restartGame}
          sx={{ "&hover": { backgroundColor: "transparent" } }}
        >
          Play again
        </IconButton>
        <ButtonGroup>
          <FacebookMessengerShareButton
            url="daemne.github.io/portfolio"
            title={quote}
            windowHeight={"10000"}
            windowWidth={"10000"}
          >
            <FacebookMessengerIcon size={32} round />
          </FacebookMessengerShareButton>
          <TwitterShareButton
            url="daemne.github.io/portfolio"
            title={quote}
            windowHeight={"10000"}
            windowWidth={"10000"}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <RedditShareButton
            url="daemne.github.io/portfolio"
            title={quote}
            windowHeight={"10000"}
            windowWidth={"10000"}
          >
            <RedditIcon size={32} round />
          </RedditShareButton>
          <WhatsappShareButton
            url="daemne.github.io/portfolio"
            title={quote}
            windowHeight={"10000"}
            windowWidth={"10000"}
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </ButtonGroup>
      </Paper>
    </Box>
  );
};
