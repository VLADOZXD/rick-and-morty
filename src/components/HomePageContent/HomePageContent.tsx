"use client";
import { useState } from "react";

import CharactersList from "@/components/HomePageContent/CharactersList";
import SearchInput from "@/components//HomePageContent/SearchInput";

import { FetchedData } from "@/types/fetchedData";

interface HomePageContentProps {
  data: FetchedData;
}

const HomePageContent = ({ data }: HomePageContentProps) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <SearchInput onSearchInput={setSearchInput} />
      <CharactersList data={data} searchInput={searchInput} />
    </>
  );
};

export default HomePageContent;
