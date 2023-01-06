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
  Icon,
  ImageListItem,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CloseIcon from "@mui/icons-material/Close";
import { Check, Image } from "@mui/icons-material";
import album1 from "../images/Zwangerschapsverlofv3.jpeg";
import album2 from "../images/WieIsGuy.jpeg";
import album3 from "../images/Brutaal.jpeg";
import album4 from "../images/Brutxxl.webp";
import album5 from "../images/SuaveG.jpg";
import album6 from "../images/BABAGUY.jpeg";
import album7 from "../images/180Remix.webp";
import album8 from "../images/NietVoorDeViews.jpeg";
import album9 from "../images/pourriture-noble.jpg";
import title from "../images/Title.webp";
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
  const [displayTwo, setDisplayTwo] = useState("flex");
  const [displayViewsRight, setDisplayViewsRight] = useState("none");
  const [displayButtons, setDisplayButtons] = useState("inline-flex");
  const [avatarDisplay, setAvatarDisplay] = useState("main");

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

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const restartGame = () => {
    setDisplay("none");
    setDisplayTwo("flex");
    setScore(0);
    getRandomSong();
  };

  const checkOutcomeHigher = () => {
    if (parseInt(nextSong.views) >= parseInt(currentSong.views)) {
      setDisplayButtons("none");
      setDisplayViewsRight("");
      setAvatarDisplay("win");
      setTimeout(() => {
        setScore(score + 1);
        setDisplayButtons("inline-flex");
        getRandomSong();
        changeSongBackground(currentSong, nextSong);
        setDisplayViewsRight("none");
        setAvatarDisplay("main");
      }, 1999);
    } else {
      /* Losing animation */

      setDisplayButtons("none");
      setDisplayViewsRight("");
      setAvatarDisplay("fail");

      setTimeout(() => {
        setDisplay("flex");
        setDisplayButtons("inline-flex");
        setDisplayTwo("none");
        setDisplayViewsRight("none");
        setAvatarDisplay("main");

        if (score > highScore) {
          setHighScore(score);
        }
      }, 1999);
    }
  };

  const checkOutcomeLower = () => {
    if (parseInt(currentSong.views) >= parseInt(nextSong.views)) {
      /* Winning Animation */
      setDisplayButtons("none");
      setDisplayViewsRight("");
      setAvatarDisplay("win");

      setTimeout(() => {
        setScore(score + 1);
        getRandomSong();
        setDisplayButtons("inline-flex");
        changeSongBackground(currentSong, nextSong);
        setDisplayViewsRight("none");
        setAvatarDisplay("main");
      }, 1999);
    } else {
      /* Losing animation */

      setDisplayButtons("none");
      setDisplayViewsRight("");
      setAvatarDisplay("fail");

      setTimeout(() => {
        setDisplay("flex");
        setDisplayTwo("none");
        setDisplayButtons("inline-flex");
        setDisplayViewsRight("none");
        setAvatarDisplay("main");

        if (score > highScore) {
          setHighScore(score);
        }
      }, 1999);
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
  }, [currentSong, nextSong]);

  return (
    <Box
      key={score}
      className="smooth-anim-left-in"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "95vh",
        zIndex: 0,
        textShadow: "2px 2px 4px #000000",
      }}
    >
      <Box
        key={score + 1}
        sx={{
          position: "absolute",
          left: "0px",
          top: "0px",
          zIndex: 1,
          width: "50vw",
          height: "95vh",
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
              <u>
                <b>"{currentSong.title}"</b>
              </u>
            </Typography>
            <Typography>has</Typography>
            <Typography variant="h1" color={"warning.light"}>
              {numberWithCommas(currentSong.views)}
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
          display: displayTwo,
        }}
        id="avatar"
        key={Math.random()}
      >
        {avatarDisplay === "win" ? (
          <Check
            className={"smooth-anim-fill-success"}
            color="success"
            fontSize="large"
            sx={{ height: "100px", width: "100px" }}
          />
        ) : avatarDisplay === "fail" ? (
          <CloseIcon
            className={"smooth-anim-fill-fail"}
            color="error"
            fontSize="large"
            sx={{ height: "100px", width: "100px" }}
          />
        ) : (
          <CompareArrowsIcon
            className={"smooth-anim-fill-main"}
            color="primary"
            fontSize="large"
            sx={{ height: "100px", width: "100px", zIndex: 5 }}
          ></CompareArrowsIcon>
        )}
      </Avatar>
      <Box
        key={score + 2}
        className="smooth-anim-scale-in"
        sx={{
          position: "absolute",
          left: "50vw",
          top: "0px",
          zIndex: 1,
          width: "50vw",
          height: "95vh",
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
              <u>
                <b>"{nextSong.title}"</b>
              </u>
            </Typography>
            <Typography variant="h5">has</Typography>
            <Box
              sx={{
                display: displayViewsRight,
              }}
              className="smooth-anim-scale-in"
              key={Math.random()}
            >
              <Typography variant="h1" color={"warning.light"}>
                {numberWithCommas(nextSong.views)}
              </Typography>
            </Box>
            <Box
              sx={{
                display: displayButtons,
              }}
            >
              <CardActions
                key={Math.random()}
                sx={{
                  display: displayButtons,
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Button
                  key={Math.random()}
                  variant="contained"
                  onClick={() => checkOutcomeHigher()}
                  color={"warning"}
                  sx={{
                    display: displayButtons,
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
                  key={Math.random()}
                  variant="contained"
                  color="secondary"
                  onClick={() => checkOutcomeLower()}
                  sx={{
                    display: displayButtons,
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
            </Box>
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
      <ModalLostGame
        score={score}
        highScore={highScore}
        display={display}
        restartGame={restartGame}
      />
    </Box>
  );
};
