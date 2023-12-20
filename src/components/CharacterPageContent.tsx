"use client";
import { Box, Stack, Typography } from "@mui/material";

import { Character, Episode } from "@/types/fetchedData";

interface CharacterCardProps {
  character: Character;
  episodes: Episode[];
}

const CharacterPageContent = ({ character, episodes }: CharacterCardProps) => {
  const createdDate = new Date(character.created);

  return (
    <Box
      sx={{
        width: 1,
        borderRadius: 6,
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        backgroundColor: "#2d2d30",
        padding: 3,
        margin: "auto 0",
      }}
    >
      <Stack
        spacing={{ xs: 1, sm: 6 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        <img
          className="character-img"
          src={character.image}
          alt="Character Image"
          width={400}
          height={400}
        ></img>
        <Box>
          <Typography variant="h6">{`Name: ${character.name}`}</Typography>
          <Typography variant="h6">{``}</Typography>
          <Typography variant="h6">{`Species: ${character.species}`}</Typography>
          <Typography variant="h6">{`Location: ${character.location.name}`}</Typography>
          <Typography variant="h6">{`Status: ${character.status}`}</Typography>
          <Typography variant="h6">{`Created: ${createdDate.toLocaleDateString(
            "en-US",
            {
              day: "numeric",
              month: "long",
              year: "numeric",
            }
          )}`}</Typography>
        </Box>
        <Box>
          {episodes.map((episode) => (
            <Typography
              key={episode.id}
              fontSize={18}
              sx={{ marginBottom: 1 }}
            >{`(${episode.air_date}) ${episode.episode}: ${episode.name}`}</Typography>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default CharacterPageContent;
