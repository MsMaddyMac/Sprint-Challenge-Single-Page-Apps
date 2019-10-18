import React from "react";

export default function CharacterCard(props) {
  const { name, status, species, gender, image } = props.character;
  return <span className="character-card">
          <img className="character-image" alt="rick and morty character" src={image} />
          <h2>{name}</h2> 
          <h3>Status: {status}</h3>
          <h3>Species: {species}</h3>
          <h3>Gender: {gender}</h3>
        </span>;
}
