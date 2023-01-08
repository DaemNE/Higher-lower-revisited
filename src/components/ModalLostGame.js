import { Typography, Paper, IconButton, Box, Stack } from "@mui/material";
import React from "react";
import {
  TwitterIcon,
  RedditIcon,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";

export const ModalLostGame = ({ score, highScore, display, restartGame }) => {
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
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}
      className="smooth-anim-bounce-in"
    >
      <Paper
        sx={{
          height: "50vh",
          width: "50vw",
          background: "#FFFFFF",
          zIndex: 1,
          bgcolor: "#E3E3E3",
          color: "white",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "20px",
          backgroundImage: "linear-gradient(#65b566, #f44f44);",
        }}
      >
        <Typography variant="h2">Better luck next time..</Typography>
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

        <Typography variant="h5">Share your score on</Typography>
        <br />
        <Stack spacing={4} direction={"row"}>
          <Stack
            sx={{
              "&:hover": { transform: "scale(1.3)", transition: "all 1s" },
            }}
          >
            <FacebookMessengerShareButton
              url="daemne.github.io/portfolio"
              title={quote}
              windowHeight={"10000"}
              windowWidth={"10000"}
            >
              <FacebookMessengerIcon size={32} round />
            </FacebookMessengerShareButton>
            <Typography>Facebook</Typography>
          </Stack>
          <Stack
            sx={{
              "&:hover": { transform: "scale(1.3)", transition: "all 1s" },
            }}
          >
            <TwitterShareButton
              url="daemne.github.io/portfolio"
              title={quote}
              windowHeight={"10000"}
              windowWidth={"10000"}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <Typography>Twitter</Typography>
          </Stack>
          <Stack
            sx={{
              "&:hover": { transform: "scale(1.3)", transition: "all 1s" },
            }}
          >
            <RedditShareButton
              url="daemne.github.io/portfolio"
              title={quote}
              windowHeight={"10000"}
              windowWidth={"10000"}
            >
              <RedditIcon size={32} round />
            </RedditShareButton>
            <Typography>Reddit</Typography>
          </Stack>
          <Stack
            sx={{
              "&:hover": { transform: "scale(1.3)", transition: "all 1s" },
            }}
          >
            <WhatsappShareButton
              url="daemne.github.io/portfolio"
              title={quote}
              windowHeight={"10000"}
              windowWidth={"10000"}
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <Typography>Whatsapp</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};
