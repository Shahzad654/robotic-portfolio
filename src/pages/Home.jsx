import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <StyledHome
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="main_home">
        <h1>
          SOFTWARE <span>ENGINEER</span>
        </h1>

        <p>
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>

        <div className="stats">
          <div className="experience">
            <h1>+12</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>

          <div className="projects">
            <h1>+46</h1>
            <p>PROJECTS COMPLETED</p>
          </div>

          <div className="experience">
            <h1>+20</h1>
            <p>WORLDWIDE CLIENTS</p>
          </div>
        </div>
      </div>
    </StyledHome>
  );
}

const StyledHome = styled(motion.div)`
  .main_home {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;

    h1 {
      color: white;
      font-size: var(--xl-heading);
      font-weight: bolder;

      span {
        display: block;
        color: var(--heading-color);
        font-size: var(--xl-heading);
        font-weight: bolder;
        line-height: 1;
      }
    }

    p {
      max-width: 45ch;
    }

    .stats {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 2rem;
      h1 {
        font-size: var(--ml-heading);
      }
    }
  }
`;
