"use client";

import useAuthentication from "@/hooks/useAuthentication";
import CharacterItem from "./CharacterItem";

import { Box, Grid, Typography } from "@mui/material";

import { Character } from "@/types/fetchedData";

const FavoritePageContent = () => {
  const { isLogin } = useAuthentication();

  const characters: Character[] =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("favorites") as string);

  return (
    <Box
      sx={{
        width: 1,
        borderRadius: 6,
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        backgroundColor: "#2d2d30",
        padding: 2.5,
        marginBottom: 2,
      }}
    >
      {isLogin ? (
        <Grid container spacing={2}>
          {characters && characters.length !== 0 ? (
            characters.map((character) => (
              <Grid md={3} sm={6} xs={12} item key={character.id}>
                <CharacterItem
                  id={character.id}
                  name={character.name}
                  status={character.status}
                />
              </Grid>
            ))
          ) : (
            <Typography
              variant="h5"
              sx={{ width: 1, textAlign: "center", marginTop: 1 }}
            >
              The favorites list is empty.
            </Typography>
          )}
        </Grid>
      ) : (
        <Typography
          variant="h5"
          sx={{ width: 1, textAlign: "center", marginTop: 1 }}
        >
          You are not logged in
        </Typography>
      )}
    </Box>
  );
};

export default FavoritePageContent;
