import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProfileCard from "./ProfileCard";
import MainContent from "./MainContent";
import Skills from "./Skills";
import Services from "./Services";
import Reviews from "./Reviews";
import Contact from "./Contact";
import Footer from "../components/Footer";

export default function MainPage() {
  return (
    <>
      {/* <Navbar /> */}
      <StyledPage>
        <ProfileCard />
        <MainContent />
      </StyledPage>
      <Skills />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
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
    overflow-y: hidden;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > :first-child {
      position: relative;
      top: 5%;
      flex-basis: 100%;
    }

    & > :nth-child(2) {
      flex-basis: 100%;
      overflow-y: hidden;
      /* align-items: center; */
    }
  }
`;
