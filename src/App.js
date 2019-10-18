import React from "react";
import Header from "./components/Header.js";
import { Route, NavLink } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import styled from "styled-components";

const NavBar = styled.nav`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 64px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #97d8d7;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export default function App() {
  return (
    <Main>
      <NavBar className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
      </NavBar>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
    </Main>
  );
}
