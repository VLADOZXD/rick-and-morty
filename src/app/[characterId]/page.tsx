import { getCharacter } from "@/services/character";
import { getEpisodes } from "@/services/episodes";

import CharacterPageContent from "@/components/CharacterPageContent";

const CharacterPage = async ({
  params,
}: {
  params: { characterId: string };
}) => {
  const data = await getCharacter(params.characterId);

  const episodesList = data.episode
    .join("")
    .split("https://rickandmortyapi.com/api/episode/")
    .join();

  const episodes = await getEpisodes(episodesList);

  return <CharacterPageContent character={data} episodes={episodes} />;
};

export default CharacterPage;
