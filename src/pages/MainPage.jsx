import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import ProfileCard from './ProfileCard'
import MainContent from './MainContent'
import Skills from './Skills'
import Services from './Services'
import Contact from './Contact'

export default function MainPage() {
  return (
    <>
      <Navbar />
      <StyledPage>
        <ProfileCard />
        <MainContent />
      </StyledPage>
      <Skills/>
      <Services/>
      <Contact/>
    </>
  );
}

const StyledPage = styled.div`
  width: 80%;
  margin: var(--section-margin) auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;

  & > * {
    flex-grow: 0;
    flex-shrink: 0;
  }

  & > :first-child {
    position: sticky;
    top: 5%;
    flex-basis: 33%;
  }

  & > :nth-child(2) {
    flex-basis: 66%;
    overflow-y: auto;
  }
`;

