import React from "react";
import Header from "./components/Header.js";
import { Route, NavLink } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import styled from "styled-components";

const NavBar = styled.nav`
  margin: 0;
  padding: 0;
  height: 64px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #97d8d7;
`;

const Main = styled.div`
  width: 100%;
  max-width: 850px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;


export default function App() {
  return (
    <Main>
      <NavBar className="navbar">
        <NavLink to="/" class="nav-links">Home</NavLink>
        <NavLink to="/characters" class="nav-links">Characters</NavLink>
      </NavBar>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
    </Main>
  );
}
