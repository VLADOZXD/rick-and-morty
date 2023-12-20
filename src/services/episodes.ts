export const getEpisodes = async (episodesList?: string) => {
  const URL = `https://rickandmortyapi.com/api/episode/${episodesList}`;

  const res = await fetch(URL, { cache: "no-cache" });

  if (!res.ok) {
    throw new Error("Failed to fetch episodes");
  }

  const data = await res.json();

  return data;
};
