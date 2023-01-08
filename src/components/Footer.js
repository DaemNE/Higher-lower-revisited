import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import { NavLink } from "react-router-dom";
import { Person } from "@mui/icons-material";

const navLinkStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "none" : "underline",
    color: "black",
  };
};

export const Footer = () => {
  return (
    <Box
      sx={{
        minHeight: "20vh",
        color: "white",
        padding: "1rem",
        bgcolor: "rgba(226, 226, 226, 0.1)",
      }}
    >
      <Stack direction={"row"} sx={{ height: "15vh" }} spacing={3}>
        <Stack
          sx={{
            minWidth: "30vw",
          }}
        >
          <Typography
            variant="h4"
            component={"div"}
            sx={{
              color: "rgba(255,255,255, 0.5)",
              paddingBottom: "10px",
              textDecoration: "underline",
            }}
          >
            Go to
          </Typography>
          <Stack component={"nav"} direction={"row"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                paddingLeft: "2rem",
              }}
            >
              <IconButton>
                <Person />
              </IconButton>
              <Typography>
                <NavLink
                  style={navLinkStyles}
                  to={"/"}
                  onClick={() => {
                    if (window.location.href === "http://localhost:3000/") {
                      window.scrollTo(0, 0);
                    }
                  }}
                >
                  Home
                </NavLink>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                paddingLeft: "2rem",
                fontSize: "",
              }}
            >
              <IconButton>
                <SportsEsportsIcon />
              </IconButton>
              <Typography>
                <NavLink
                  style={navLinkStyles}
                  to={"/higher-lower"}
                  onClick={() => {
                    if (
                      window.location.href ===
                      "http://localhost:3000/higher-lower"
                    ) {
                      window.scrollTo(0, 0);
                    }
                  }}
                >
                  Higher / Lower
                </NavLink>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                paddingLeft: "2rem",
              }}
            >
              <IconButton>
                <ScoreboardIcon />
              </IconButton>
              <Typography>
                <NavLink
                  style={navLinkStyles}
                  to={"/hiscores"}
                  onClick={() => {
                    if (
                      window.location.href === "http://localhost:3000/hiscores"
                    ) {
                      window.scrollTo(0, 0);
                    }
                  }}
                >
                  Hiscores
                </NavLink>
              </Typography>
            </Box>
          </Stack>
        </Stack>
        <Stack sx={{ width: "40vw" }}>
          <Typography
            variant="h4"
            component={"div"}
            sx={{
              color: "rgba(255,255,255, 0.5)",
              paddingBottom: "10px",
              textDecoration: "underline",
            }}
          >
            About me
          </Typography>
          <Typography
            variant="body1"
            component={"div"}
            sx={{
              color: "rgba(255, 255, 255 ,0.7)",
            }}
          >
            Hello! My name is Nikolaas Daem, I'm a front-end developer that
            likes listening to Zwangere Guy. Play my game and leave feedback
            using the links to the right.
          </Typography>
        </Stack>
        <Stack sx={{ width: "30vw" }}>
          <Typography
            variant="h4"
            component={"div"}
            sx={{
              color: "rgba(255,255,255, 0.5)",
              paddingBottom: "10px",
              textDecoration: "underline",
            }}
          >
            Social Media / Connect
          </Typography>
          <Stack direction={"row"}>
            <Stack>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                  paddingLeft: "2rem",
                }}
              >
                <IconButton
                  href={"https://www.github.com/daemne"}
                  target="_blank"
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  component={"a"}
                  href={"https://www.github.com/daemne"}
                  target="_blank"
                >
                  Github
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                  paddingLeft: "2rem",
                }}
              >
                <IconButton
                  href={"https://www.linkedin.com/in/nikolaas-daem-834185123/"}
                  target="_blank"
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  component={"a"}
                  href={"https://www.linkedin.com/in/nikolaas-daem-834185123/"}
                  target="_blank"
                >
                  LinkedIn
                </Typography>
              </Box>
            </Stack>
            <Stack>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                  paddingLeft: "2rem",
                }}
              >
                <IconButton
                  href={"https://www.twitter.com/zwangereguy"}
                  target="_blank"
                >
                  <TwitterIcon fontSize="large" />
                </IconButton>
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  component={"a"}
                  href={"https://www.twitter.com/zwangereguy"}
                  target="_blank"
                >
                  Twitter
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                  paddingLeft: "2rem",
                }}
              >
                <IconButton
                  href={"https://www.facebook.com/zwangereguy"}
                  target="_blank"
                >
                  <FacebookIcon fontSize="large" />
                </IconButton>
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  component={"a"}
                  href={"https://www.facebook.com/zwangereguy"}
                  target="_blank"
                >
                  Facebook
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
