import React, { useState } from "react";
import { songData } from "../data/data";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Icon,
  IconButton,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export const VideoCardCurrent = () => {
  const [currentSong, setCurrentSong] = useState({});
  const [nextSong, setNextSong] = useState({});
  const [score, setScore] = useState(0);

  const getRandomSong = (songs) => {};

  console.log(songData);
  return (
    <div>
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
            <IconButton>
              <ArrowUpwardIcon />
            </IconButton>
            Higher
          </Button>
          <Button variant="contained" color="error">
            Lower
            <IconButton>
              <ArrowDownwardIcon />
            </IconButton>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
