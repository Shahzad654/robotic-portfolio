import React from "react";
import styled from "styled-components";
import Home from "./Home";
import Projects from "./Projects";
import Experience from "./Experience";
import Publications from "./Publications";

export default function MainContent() {
  return (
    <MainPageStyled>
      <Home />
      <Projects />
      <Experience/>
      <Publications/>
    </MainPageStyled>
  );
}

const MainPageStyled = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: flex-start; */
  gap: 2rem;
  flex-direction: column;
  overflow: hidden;
`;
