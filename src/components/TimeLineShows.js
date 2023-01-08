import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

export const TimeLineShows = () => {
  return (
    <Box
      sx={{
        bgColor: "rgba(255, 255, 255, 0.4)",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <Typography
        variant="h4"
        component={"div"}
        sx={{
          padding: "2rem",
          color: "rgba(0, 0, 0, 0.4)",
        }}
      >
        Latest shows since summer 2022
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Stack direction={"row"} justifyContent={"right"}>
              <img
                src="https://www.festivalinfo.nl/img/artist/review_foto_artist_pic/108349_Zwangere_Guy_80134.jpg"
                style={{ width: "300px" }}
                alt={"Zwangere guy foto"}
              ></img>
              <Typography
                sx={{
                  paddingLeft: "25px",
                }}
              >
                05-14 AUG '22
              </Typography>
            </Stack>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <MusicNoteIcon
              fontSize="large"
              color="inherit"
              sx={{
                paddingTop: "5px",
                transform: "rotateZ(-15deg) rotateY(180deg)",
              }}
            />
            <TimelineConnector color="success" />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              Hi Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat, nemo quis. Atque soluta corporis nemo modi reiciendis
              quam eos deleniti illo aliquam at, possimus deserunt consequatur
              quod, aspernatur et voluptates.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Stack direction={"row"} justifyContent={"left"}>
              <Typography
                sx={{
                  paddingRight: "25px",
                }}
              >
                19-21 AUG '22
              </Typography>
              <img
                src="https://www.festivalinfo.nl/img/artist/review_foto_artist_pic/108349_Zwangere_Guy_35343.jpg"
                style={{ width: "300px" }}
                alt={"Zwangere guy foto"}
              ></img>
            </Stack>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <MusicNoteIcon
              fontSize="large"
              color="inherit"
              sx={{
                paddingTop: "5px",
                transform: "rotateZ(15deg)",
              }}
            />
            <TimelineConnector color="success" />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              Hi Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat, nemo quis. Atque soluta corporis nemo modi reiciendis
              quam eos deleniti illo aliquam at, possimus deserunt consequatur
              quod, aspernatur et voluptates.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Stack direction={"row"} justifyContent={"right"}>
              <img
                src="https://www.festivalinfo.nl/img/artist/review_foto_artist_pic/108349_Zwangere_Guy_80134.jpg"
                style={{ width: "300px" }}
                alt={"Zwangere guy foto"}
              ></img>
              <Typography
                sx={{
                  paddingLeft: "25px",
                }}
              >
                16 NOV '22
              </Typography>
            </Stack>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <MusicNoteIcon
              fontSize="large"
              color="inherit"
              sx={{
                paddingTop: "5px",
                transform: "rotateZ(-15deg) rotateY(180deg)",
              }}
            />
            <TimelineConnector color="success" />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              Hi Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat, nemo quis. Atque soluta corporis nemo modi reiciendis
              quam eos deleniti illo aliquam at, possimus deserunt consequatur
              quod, aspernatur et voluptates.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Stack direction={"row"} justifyContent={"left"}>
              <Typography
                sx={{
                  paddingRight: "25px",
                }}
              >
                25 NOV '22
              </Typography>
              <img
                src="https://www.festivalinfo.nl/img/artist/review_foto_artist_pic/108349_Zwangere_Guy_35343.jpg"
                style={{ width: "300px" }}
                alt={"Zwangere guy foto"}
              ></img>
            </Stack>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <MusicNoteIcon
              fontSize="large"
              color="inherit"
              sx={{
                paddingTop: "5px",
                transform: "rotateZ(15deg)",
              }}
            />
            <TimelineConnector color="success" />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              Hi Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat, nemo quis. Atque soluta corporis nemo modi reiciendis
              quam eos deleniti illo aliquam at, possimus deserunt consequatur
              quod, aspernatur et voluptates.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Stack direction={"row"} justifyContent={"right"}>
              <img
                src="https://www.festivalinfo.nl/img/artist/review_foto_artist_pic/108349_Zwangere_Guy_80134.jpg"
                style={{ width: "300px" }}
                alt={"Zwangere guy foto"}
              ></img>
              <Typography
                sx={{
                  paddingLeft: "25px",
                }}
              >
                02 DEC '22
              </Typography>
            </Stack>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <MusicNoteIcon
              fontSize="large"
              color="inherit"
              sx={{
                paddingTop: "5px",
                transform: "rotateZ(-15deg) rotateY(180deg)",
              }}
            />
            <TimelineConnector color="success" />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              Hi Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat, nemo quis. Atque soluta corporis nemo modi reiciendis
              quam eos deleniti illo aliquam at, possimus deserunt consequatur
              quod, aspernatur et voluptates.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Stack direction={"row"} justifyContent={"left"}>
              <Typography
                sx={{
                  paddingRight: "25px",
                }}
              >
                04 DEC '22
              </Typography>
              <img
                src="https://www.festivalinfo.nl/img/artist/review_foto_artist_pic/108349_Zwangere_Guy_35343.jpg"
                style={{ width: "300px" }}
                alt={"Zwangere guy foto"}
              ></img>
            </Stack>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <MusicNoteIcon
              fontSize="large"
              color="inherit"
              sx={{
                paddingTop: "5px",
                transform: "rotateZ(15deg)",
              }}
            />
            <TimelineConnector color="success" />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              Hi Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat, nemo quis. Atque soluta corporis nemo modi reiciendis
              quam eos deleniti illo aliquam at, possimus deserunt consequatur
              quod, aspernatur et voluptates.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Stack direction={"row"} justifyContent={"right"}>
              <img
                src="https://www.festivalinfo.nl/img/artist/review_foto_artist_pic/108349_Zwangere_Guy_80134.jpg"
                style={{ width: "300px" }}
                alt={"Zwangere guy foto"}
              ></img>
              <Typography
                sx={{
                  paddingLeft: "25px",
                }}
              >
                08 DEC '22
              </Typography>
            </Stack>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <MusicNoteIcon
              fontSize="large"
              color="inherit"
              sx={{
                paddingTop: "5px",
                transform: "rotateZ(-15deg) rotateY(180deg)",
              }}
            />
            <TimelineConnector color="success" />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              Hi Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat, nemo quis. Atque soluta corporis nemo modi reiciendis
              quam eos deleniti illo aliquam at, possimus deserunt consequatur
              quod, aspernatur et voluptates.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Stack direction={"row"} justifyContent={"left"}>
              <Typography
                sx={{
                  paddingRight: "25px",
                }}
              >
                09 DEC '22
              </Typography>
              <img
                src="https://www.festivalinfo.nl/img/artist/review_foto_artist_pic/108349_Zwangere_Guy_35343.jpg"
                style={{ width: "300px" }}
                alt={"Zwangere guy foto"}
              ></img>
            </Stack>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <MusicNoteIcon
              fontSize="large"
              color="inherit"
              sx={{
                paddingTop: "5px",
                transform: "rotateZ(15deg)",
              }}
            />
            <TimelineConnector color="success" />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              Hi Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat, nemo quis. Atque soluta corporis nemo modi reiciendis
              quam eos deleniti illo aliquam at, possimus deserunt consequatur
              quod, aspernatur et voluptates.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Stack direction={"row"} justifyContent={"right"}>
              <img
                src="https://www.festivalinfo.nl/img/artist/review_foto_artist_pic/108349_Zwangere_Guy_80134.jpg"
                style={{ width: "300px" }}
                alt={"Zwangere guy foto"}
              ></img>
              <Typography
                sx={{
                  paddingLeft: "25px",
                }}
              >
                13 DEC '22
              </Typography>
            </Stack>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <MusicNoteIcon
              fontSize="large"
              color="inherit"
              sx={{
                paddingTop: "5px",
                transform: "rotateZ(-15deg) rotateY(180deg)",
              }}
            />
            <TimelineConnector color="success" />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              Hi Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat, nemo quis. Atque soluta corporis nemo modi reiciendis
              quam eos deleniti illo aliquam at, possimus deserunt consequatur
              quod, aspernatur et voluptates.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Stack direction={"row"} justifyContent={"left"}>
              <Typography
                sx={{
                  paddingRight: "25px",
                }}
              >
                17 DEC '22
              </Typography>
              <img
                src="https://www.festivalinfo.nl/img/artist/review_foto_artist_pic/108349_Zwangere_Guy_35343.jpg"
                style={{ width: "300px" }}
                alt={"Zwangere guy foto"}
              ></img>
            </Stack>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <MusicNoteIcon
              fontSize="large"
              color="inherit"
              sx={{
                paddingTop: "5px",
                transform: "rotateZ(15deg)",
              }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              Hi Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat, nemo quis. Atque soluta corporis nemo modi reiciendis
              quam eos deleniti illo aliquam at, possimus deserunt consequatur
              quod, aspernatur et voluptates.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};
