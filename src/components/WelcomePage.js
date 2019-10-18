import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
color: #d78a78;
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
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </Head>
    </section>
  );
}
