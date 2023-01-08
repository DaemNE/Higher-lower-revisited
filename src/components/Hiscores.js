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
import axios from "axios";
import React, { useEffect, useState } from "react";
import { LoadingScreen } from "./LoadingScreen";

export const Hiscores = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:4001/userData").then((res) => {
      res.data.sort((a, b) => b.score - a.score);
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

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
                Ranking
              </TableCell>
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
                Highscore
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <LoadingScreen />
            ) : (
              data.map((user) => {
                return (
                  <TableRow key={data.indexOf(user) + 1}>
                    <TableCell>{data.indexOf(user) + 1}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.score}</TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
