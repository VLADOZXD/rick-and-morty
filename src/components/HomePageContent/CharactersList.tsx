"use client";
import { useEffect, useState } from "react";
import { showMore } from "./actions";
import { getCharacters } from "@/services/characters";

import CharacterItem from "../CharacterItem";

import { Box, Button, Grid, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

import { FetchedData, Character, Info } from "@/types/fetchedData";

interface CharactersListProps {
  data: FetchedData;
  searchInput: string;
}

const CharactersList = ({ data, searchInput }: CharactersListProps) => {
  const [characters, setCharacters] = useState<Character[]>(data.results);
  const [info, setInfo] = useState<Info>(data.info);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (searchInput) {
      const timeoutId = setTimeout(() => {
        getCharacters(searchInput)
          .then(({ info, results }) => {
            setError(false);
            setCharacters(results);
            setInfo(info);
          })
          .catch(() => setError(true));
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [searchInput]);

  const onShowMoreClickHandler = () => {
    setLoading(true);

    let nextPage;

    if (info.next) {
      nextPage = info.next;
    } else {
      return;
    }

    showMore(nextPage).then(({ info, results }) => {
      setCharacters((prevState) => [...prevState, ...results]);
      setInfo(info);
      setLoading(false);
    });
  };

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
      {!isError ? (
        <Grid container spacing={2}>
          {characters.map((character) => (
            <Grid md={3} sm={6} xs={12} item key={character.id}>
              <CharacterItem
                id={character.id}
                name={character.name}
                status={character.status}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography
          variant="h5"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          A character not found
        </Typography>
      )}
      {info.next && !isError && (
        <Button
          startIcon={<DownloadIcon />}
          variant="contained"
          sx={{
            display: "flex",
            margin: "0 auto",
            marginTop: 2,
            backgroundColor: "#3e3e42",
          }}
          onClick={onShowMoreClickHandler}
          disabled={isLoading}
        >
          SHOW MORE
        </Button>
      )}
    </Box>
  );
};

export default CharactersList;
