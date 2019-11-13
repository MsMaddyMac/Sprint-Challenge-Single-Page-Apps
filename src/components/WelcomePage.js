import React from "react";
import styled from "styled-components";
import "../index.css";

const H1 = styled.h1`
color:  #e9b953;
`;

const Image = styled.img`
  border: 2px solid #ddd;
  border-radius: 4px;
  padding: 7px;
`;

const Head = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Head>
        <H1>Welcome to the ultimate fan site!</H1>
        <Image
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </Head>
    </section>
  );
}
