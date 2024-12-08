import { style } from '@mui/system'
import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <StyledFooter>
      <p>&#169; 2024 Akshy. All rights reserved.</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  margin: 150px auto auto auto;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: white;
  }

  body.light-mode & {
     background-color: var( --light-gray-color);
    p {
      color: black;
    }
  }

  body.dark-mode & {
    p {
      color: white;
    }
  }
`;
