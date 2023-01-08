import { Stack } from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const navLinkStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "none" : "underline",
  };
};

export const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "5vh",
      }}
      color={"transparent"}
    >
      <Toolbar>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100vw",
          }}
        >
          <NavLink style={navLinkStyles} to={"/"}>
            About
          </NavLink>
          <NavLink style={navLinkStyles} to={"/higher-lower"}>
            Higher Lower
          </NavLink>
          <NavLink style={navLinkStyles} to={"/hiscores"}>
            Hiscores
          </NavLink>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
