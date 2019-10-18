import React from "react";
import styled from "styled-components";

const Pulse = styled.div`
  transition: transform 0.2s ease-in;
  background: #cacfd2;
  color: #4b7fad;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 0px 1px 6px -2px grey;

  &:hover {
    transform: translateY(-5px) scale(1.05);
  }
`;

export default function CharacterCard(props) {
  const { name, status, species, gender, image } = props.character;
  return <Pulse className="character-card">
          <img className="character-image" alt="rick and morty character" src={image} />
          <h2>{name}</h2> 
          <h3>Status: {status}</h3>
          <h3>Species: {species}</h3>
          <h3>Gender: {gender}</h3>
        </Pulse>;
}
