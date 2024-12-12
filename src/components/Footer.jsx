import { style } from '@mui/system'
import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <StyledFooter>
      <p>&#169; 2024 Akshy Dave. All rights reserved.</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  margin: 150px auto auto auto;
  background-color: var(--primary-color-light);
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: white;
  }

  body.light-mode & {
     background-color: var(--light-blue-color);
    p {
      color: white;
    }
  }

  body.dark-mode & {
    p {
      color: white;
    }
  }
`;
