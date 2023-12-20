"use server";
import { getCharacters } from "@/services/characters";

export const showMore = async (nextPage: string) => {
  const data = await getCharacters("", nextPage);

  return data;
};
