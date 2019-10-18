import React, { useState, useEffect } from "react";
import axios from "axios";


export default function SearchForm() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      const characters = response.data.results.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      setData(characters);
    });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };
 
  return (
    <section className="search-form">
     <form>
       <label htmlFor="name">Search by name: </label>
       <input
        type="text"
        onChange={handleInputChange}
        value={query}
        name="name"
        tabIndex="0"
        className="prompt search-name"
        placeholder="Search by name"
        autoComplete="off"
        />
     </form>
     <div className="character">
       {data.map(data => {
         return (
           <div className="character-list" key ={data.id}>
              <span>{data.name}</span>
          </div>
         );
       })}
     </div>
    </section>
  );
};
