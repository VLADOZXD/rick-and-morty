export const getCharacters = async (searchInput?: string, nextURL?: string) => {
  const URL = nextURL
    ? nextURL
    : `https://rickandmortyapi.com/api/character/?page=1&name=${searchInput}`;

  const res = await fetch(URL, { cache: "no-cache" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = res.json();

  return data;
};
