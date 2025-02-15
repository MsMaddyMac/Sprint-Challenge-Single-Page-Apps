import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import axios from "axios";
import styled from "styled-components";

const Cards = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 50px;
    margin-left: 10px;
    margin-right: 10px;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    const getCharacters = () => {
      axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data.results);
        const name = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
          );
        setCharacters(name);
      })
      .catch(error => {
        console.error('Oops, no data found here!', error);
      });
    }
    getCharacters();
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <>
    <SearchForm handleInputChange={handleInputChange} query={query}/>
    <Cards className="character-list">   
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Cards>
    </>
  );
}
