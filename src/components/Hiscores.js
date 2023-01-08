import {
  Box,
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

export const Hiscores = () => {
  const mockData = [
    {
      name: "Nikolaas",
      score: "24",
    },
    {
      name: "Albert",
      score: "5",
    },
    {
      name: "Jesse",
      score: "8",
    },
    {
      name: "Fre",
      score: "100",
    },
    {
      name: "Alex",
      score: "6",
    },
  ];
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
    >
      <TableContainer
        component={Card}
        sx={{
          background: "transparent",
          width: "60vw",
          border: "1px solid grey",
        }}
      >
        <Table sx={{ minWidth: 650 }} size="small" aria-label="hi-scores table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "bold",
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                }}
              >
                HighScore
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockData.map((user) => {
              return (
                <TableRow key={user.name}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.score}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
