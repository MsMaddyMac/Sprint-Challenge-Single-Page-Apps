import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    const getCharacters = () => {
      axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error('Oops, no data found here!', error);
      });
    }
    getCharacters();
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map() over your state here!</h2> */}
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  );
}
