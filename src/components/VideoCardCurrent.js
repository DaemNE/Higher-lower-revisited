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
  Avatar,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import album1 from "../images/Zwangerschapsverlofv3.jpeg";
import album2 from "../images/WieIsGuy.jpeg";
import album3 from "../images/Brutaal.jpeg";
import album4 from "../images/Brutxxl.webp";
import album5 from "../images/SuaveG.jpg";
import album6 from "../images/BABAGUY.jpeg";
import album7 from "../images/180Remix.webp";
import album8 from "../images/NietVoorDeViews.jpeg";
import album9 from "../images/pourriture-noble.jpg";
import { ModalLostGame } from "./ModalLostGame";

export const VideoCardCurrent = () => {
  const [currentSong, setCurrentSong] = useState(
    songData[Math.floor(Math.random() * songData.length - 1)]
  );
  const [nextSong, setNextSong] = useState(
    songData[Math.floor(Math.random() * songData.length - 1)]
  );
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [currentSongBackground, setCurrentSongBackground] = useState("");
  const [nextSongBackground, setNextSongBackground] = useState("");
  const [display, setDisplay] = useState("none");
  const [displayTwo, setDisplayTwo] = useState("block");

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
  const checkOutcomeHigher = () => {
    if (parseInt(nextSong.views) >= parseInt(currentSong.views)) {
      setScore(score + 1);
      getRandomSong();
      changeSongBackground(currentSong, nextSong);
    } else {
      /* Losing animation */

      setDisplay("flex");
      setDisplayTwo("none");
      if (score > highScore) {
        setHighScore(score);
        setScore(0);
      }
      setScore(0);
    }
  };

  const checkOutcomeLower = () => {
    console.log(parseFloat(currentSong.views));
    console.log(parseFloat(nextSong.views));
    if (parseInt(currentSong.views) >= parseInt(nextSong.views)) {
      /* Winning Animation */

      setScore(score + 1);
      getRandomSong();
      changeSongBackground(currentSong, nextSong);
    } else {
      /* Losing animation */

      setDisplay("flex");
      setDisplayTwo("none");
      if (score > highScore) {
        setHighScore(score);
        setScore(0);
      }
      setScore(0);
    }
  };

  const changeSongBackground = (current, next) => {
    switch (current.thumbnail) {
      case "1":
        setCurrentSongBackground(album1);
        break;
      case "2":
        setCurrentSongBackground(album2);
        break;
      case "3":
        setCurrentSongBackground(album3);
        break;
      case "4":
        setCurrentSongBackground(album4);
        break;
      case "5":
        setCurrentSongBackground(album5);
        break;
      case "6":
        setCurrentSongBackground(album6);
        break;
      case "7":
        setCurrentSongBackground(album7);
        break;
      case "8":
        setCurrentSongBackground(album8);
        break;
      case "9":
        setCurrentSongBackground(album9);
        break;
      default:
        setCurrentSongBackground("");
    }
    switch (next.thumbnail) {
      case "1":
        setNextSongBackground(album1);
        break;
      case "2":
        setNextSongBackground(album2);
        break;
      case "3":
        setNextSongBackground(album3);
        break;
      case "4":
        setNextSongBackground(album4);
        break;
      case "5":
        setNextSongBackground(album5);
        break;
      case "6":
        setNextSongBackground(album6);
        break;
      case "7":
        setNextSongBackground(album7);
        break;
      case "8":
        setNextSongBackground(album8);
        break;
      case "9":
        setNextSongBackground(album9);
        break;
      default:
        setNextSongBackground("");
    }
  };

  useEffect(() => {
    changeSongBackground(currentSong, nextSong);
  }, [currentSong, nextSong, display]);

  return (
    <Box
      key={Math.random()}
      className="smooth-anim-left-in"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        zIndex: 0,
        textShadow: "2px 2px 4px #000000",
      }}
    >
      <Box
        key={Math.random()}
        sx={{
          position: "absolute",
          left: "0px",
          top: "0px",
          zIndex: 1,
          width: "50vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${currentSongBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Card
          className="smooth-anim-fade-in"
          variant="outlined"
          sx={{
            height: "50vh",
            minWidth: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "transparent",
            border: "none",
            zIndex: 2,
            color: "white",
          }}
          key={currentSong.id}
        >
          <CardContent>
            <Typography variant="h3" component={"div"}>
              "{currentSong.title}"
            </Typography>
            <Typography>has</Typography>
            <Typography variant="h1" color={"warning.light"}>
              {currentSong.views}
            </Typography>
            <Typography>total streams</Typography>
          </CardContent>
        </Card>
      </Box>
      <Avatar
        sx={{
          zIndex: 5,
          height: "100px",
          width: "100px",
          display: { displayTwo },
        }}
        id="avatar"
        key={Math.random()}
      >
        <CompareArrowsIcon
          color="success"
          fontSize="large"
          sx={{ height: "75px", width: "75px" }}
        />
      </Avatar>
      <Box
        key={Math.random()}
        className="smooth-anim-scale-in"
        sx={{
          position: "absolute",
          left: "50vw",
          top: "0px",
          zIndex: 1,
          width: "50vw",
          height: "100vh",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${nextSongBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Card
          className="smooth-anim-fade-in"
          variant="outlined"
          sx={{
            height: "50vh",
            minWidth: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "transparent",
            border: "none",
            zIndex: 2,
            color: "white",
          }}
          key={nextSong.id}
        >
          <CardContent>
            <Typography variant="h3" component={"div"}>
              "{nextSong.title}"
            </Typography>
            <Typography variant="h5">has</Typography>
            <CardActions
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Button
                variant="outlined"
                onClick={() => checkOutcomeHigher()}
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
                variant="outlined"
                onClick={() => checkOutcomeLower()}
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
            </CardActions>
            <Typography
              sx={{
                textShadow: "2px 2px 4px #000000",
              }}
            >
              streams than "<i>{currentSong.title}"</i>
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Stack
        direction={"row"}
        sx={{
          position: "absolute",
          bottom: 0,
          width: "94vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          left: 0,
          textAlign: "left",
          zIndex: 4,
          color: "white",
          padding: "3rem",
          textShadow: "2px 2px 4px #000000",
        }}
      >
        <Typography variant="h4">Score: {score}</Typography>
        <Typography variant="h4">Highscore: {highScore}</Typography>
      </Stack>
      <ModalLostGame score={score} highScore={highScore} display={display} />
    </Box>
  );
};
