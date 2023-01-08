import { Box, Typography } from "@mui/material";
import React from "react";

export const WikipediaEntry = () => {
  return (
    <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
      <Typography
        variant="h4"
        component={"div"}
        sx={{
          padding: "2rem",
          color: "rgba(0, 0, 0, 0.4)",
        }}
      >
        Wikipedia Levensloop
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          paddingBottom: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            width: "50%",
          }}
        >
          <Typography variant="body2">
            Van Oudheusden brak zijn schoolopleiding af op 14-jarige leeftijd en
            had daarna verschillende baantjes. Onder de naam "Omar G" rapt hij
            bij de hiphop-formatie Stikstof.
          </Typography>
          <Typography variant="body2">
            In 2016 bracht hij zijn eerste solo-singles uit. Zijn debuutalbum
            'Zwangerschapsverlof Vol.3' verscheen een jaar later.
          </Typography>
          <Typography variant="body2">
            In 2017 trad Zwangere Guy met Stikstof op tijdens Pukkelpop, solo
            trad hij op tijdens het Dour Festival en Leffingeleuren.
          </Typography>
          <Typography variant="body2">
            Op 1 maart 2019 verscheen zijn album Wie is Guy?, dat uit 19 liedjes
            bestaat. Het album kwam meteen op de eerste plaats binnen in de
            Ultratop 200 albumlijst. De rapper stond vervolgens op verschillende
            festivals als Rock Werchter, Lokerse Feesten, Dranouter Festival,
            Dour, Lowlands en Down the Rabbit Hole.
          </Typography>
          <Typography variant="body2">
            9 maanden later, op 6 december 2019, volgde een tweede album,
            genaamd BRUTAAL, waarvan de eerste single Niemand uitkwam in
            november 2019.
          </Typography>
        </Box>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Zwangere_guy-1590406109.jpg"
          alt="Zwangere guy foto"
          height={"300px"}
        />
      </Box>
    </Box>
  );
};
