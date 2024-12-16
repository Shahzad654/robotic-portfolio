import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from './Contact';
import Services from './Services';

export default function ContactPage() {
  return (
    <>
      {/* <Navbar/> */}
      <StyledContactPage>
        <Contact/>
        <Services className='service_section'/>
      </StyledContactPage>

      <Footer/>
    </>
  );
}

const StyledContactPage = styled.div`
/* width: 80%;
margin: var(--section-margin) auto; */
display: flex;
justify-content: space-between;
align-items: center;
gap: 1rem;
flex-direction: column;

.service_section{
    margin-top: var(--section-margin);
}
`;
