import React, { useState, useEffect } from "react";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios
    .get('')
    const results = characters.filter(character =>
      character.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResult(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 
  return (
    <section className="search-form">
     
    </section>
  );
}
