import {
  Box,
  Card,
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

  mockData.sort((a, b) => {
    return b.score - a.score;
  });
  return (
    <Box
      sx={{
        height: "85vh",
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
          height: "60vh",
          width: "60vw",
          border: "1px solid grey",
          overflowY: "scroll",
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
                <u>Ranking</u>
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                }}
              >
                <u>Name</u>
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                }}
              >
                <u>HighScore</u>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockData.map((user) => {
              return (
                <TableRow key={mockData.indexOf(user) + 1}>
                  <TableCell>{mockData.indexOf(user) + 1}</TableCell>
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
