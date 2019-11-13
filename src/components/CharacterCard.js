import React from "react";
import styled from "styled-components";
import "../index.css";

// const Pulse = styled.div`
//   transition: transform 0.2s ease-in;
//   background: #cacfd2;
//   color: #4b7fad;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 20px;
//   cursor: pointer;
//   box-shadow: 0px 1px 6px -2px grey;

//   &:hover {
//     transform: translateY(-5px) scale(1.05);
//   }
// `;

const FlipCard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 380px;
  border: 3px solid #f1f1f1;
  perspective: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const FlipInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;
 const FlipCardSides = styled.div`
  background: #cacfd2;
  color: #4b7fad;
 `;

export default function CharacterCard(props) {
  const { name, status, species, gender, image } = props.character;
  return <FlipCard className="character-card">
          <FlipInner className="flipcard-inner">
            <FlipCardSides className="flipcard-front">
              <img className="character-image" alt="rick and morty character" src={image} />
              <h2>{name}</h2> 
            </FlipCardSides>
            <FlipCardSides className="flipcard-back">
              <h3>Status: {status}</h3>
              <h3>Species: {species}</h3>
              <h3>Gender: {gender}</h3>
            </FlipCardSides>
          </FlipInner>
        </FlipCard>;
}
