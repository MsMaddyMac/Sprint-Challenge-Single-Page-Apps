import React, { useState, useEffect } from "react";
import axios from "axios";


export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      const name = response.data.results.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResult(name); 
    })
    .catch(error => {
      console.log("No data found.", error);
    });
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 
  return (
    <section className="search-form">
     <form>
       <label htmlFor="name">Search by name:</label>
       <input
        id="name"
        type="text"
        name="textfield"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        />
     </form>
    </section>
  );
};
