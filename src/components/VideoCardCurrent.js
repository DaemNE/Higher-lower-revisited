import React, { useEffect, useState } from "react";
import { songData } from "../data/data";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export const VideoCardCurrent = () => {
  const [currentSong, setCurrentSong] = useState({});
  const [nextSong, setNextSong] = useState({});
  const [score, setScore] = useState(0);

  const getRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * songData.length);
    setCurrentSong(nextSong);
    if (nextSong !== songData[randomIndex]) {
      setNextSong(songData[randomIndex]);
    } else if (randomIndex > 0) {
      setNextSong(songData[randomIndex - 1]);
    } else {
      setNextSong(songData[randomIndex + 1]);
    }
  };

  const checkOutcome = () => {};

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * songData.length);
    const randomIndex2 = Math.floor(Math.random() * songData.length);

    setCurrentSong(songData[0]);

    if (randomIndex !== randomIndex2) {
      setNextSong(songData[randomIndex2]);
    } else if (randomIndex2 > 0) {
      setNextSong(songData[randomIndex2 - 1]);
    } else {
      setNextSong(songData[randomIndex2 + 1]);
    }
  }, []);

  console.log(songData);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "transparent",
        bgcolor: "#E3E3E3",
        zIndex: 0,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "0px",
          top: "0px",
          zIndex: 1,
          width: "50vw",
          height: "100vh",
          border: "1px solid black",
        }}
      ></Box>
      <Box></Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          marginRight: "10vh",
          marginTop: "10vh",
        }}
      >
        <Typography variant="h1">{score}</Typography>
      </Box>
      <Stack direction={"row"} spacing={4}>
        <Card
          variant="outlined"
          sx={{
            maxHeight: "200px",
            minWidth: "200px",
            maxWidth: "30vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            border: "1px solid black",
            zIndex: 2,
            backgroundImage: `url(../images/bg-1.png)`,
          }}
          key={currentSong.id}
        >
          <CardContent>
            <Typography variant="h6" component={"div"}>
              {currentSong.title}
            </Typography>
            <Typography>{currentSong.views}</Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="success">
              <ArrowUpwardIcon />
              Higher
            </Button>
            <Button variant="contained" color="error" onClick={getRandomSong}>
              Lower
              <ArrowDownwardIcon />
            </Button>
          </CardActions>
        </Card>
        <Card
          variant="outlined"
          sx={{
            maxHeight: "200px",
            minWidth: "200px",
            maxWidth: "30vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            border: "1px solid black",
            zIndex: 2,
          }}
          key={nextSong.id}
        >
          <CardContent>
            <Typography variant="h6" component={"div"}>
              {nextSong.title}
            </Typography>
            <Typography>{nextSong.views}</Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="success">
              <ArrowUpwardIcon />
              Higher
            </Button>
            <Button variant="contained" color="error" onClick={getRandomSong}>
              Lower
              <ArrowDownwardIcon />
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </Box>
  );
};
