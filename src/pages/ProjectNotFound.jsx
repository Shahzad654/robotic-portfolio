import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import NotFoundRed from '../assets/NotFoundRed.png'
import NotFoundBlue from '../assets/NotFoundBlue.png'

export default function ProjectNotFound() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const checkTheme = () => {
            if (document.body.classList.contains("dark-mode")) {
                setIsDarkTheme(true);
            } else {
                setIsDarkTheme(false);
            }
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);
  return (
    <>
     <Navbar/> 

     <StyledNotFound>
        <div className="main_container">
                  <img src={isDarkTheme ? NotFoundRed : NotFoundBlue} alt="not-found" />
        </div>
     </StyledNotFound>

    </>
  )
}

const StyledNotFound = styled.div`
width: 80%;
margin: var(--section-margin) auto;

.main_container{
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 50%;
        height: auto;

    }
}
`
