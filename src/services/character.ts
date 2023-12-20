export const getCharacter = async (characterId?: string) => {
  const URL = `https://rickandmortyapi.com/api/character/${characterId}`;

  const res = await fetch(URL, { cache: "no-cache" });

  if (!res.ok) {
    throw new Error("Failed to fetch character");
  }

  const data = await res.json();

  return data;
};
