import React from "react";

export default function CharacterCard(props) {
  const { name, status, species, gender } = props.character;
  return <span className="character-card">
          <h2>{name}</h2> 
          <h3>{status}</h3>
          <h3>{species}</h3>
          <h3>{gender}</h3>

        </span>;
}
