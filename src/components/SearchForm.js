import React from "react";



export default function SearchForm({ handleInputChange, query }) {

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
    </section>
  );
};
