"use server";

import { getCharacters } from "@/services/characters";

import HomePageContent from "@/components/HomePageContent/HomePageContent";

const HomePage = async () => {
  const data = await getCharacters("");

  return <>{data && <HomePageContent data={data} />}</>;
};

export default HomePage;
