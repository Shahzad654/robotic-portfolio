import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Home() {
  
  return (
    <StyledHome
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="main_home">
        <h1>
          MECHANICAL <span>ENGINEER</span>
        </h1>

        <p>
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>

        <div className="stats">
          <div className="experience">
            {/* <h1>+4</h1> */}
            <h1>
              +<CountUp start={0} end={4} duration={2} delay={0.3} className="count-up" />
            </h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>

          <div className="projects">
            <h1>
              +<CountUp start={0} end={46} duration={2} delay={0.3} className="count-up" />
            </h1>
            <p>PROJECTS COMPLETED</p>
          </div>

          <div className="experience">
            <h1>
              +<CountUp start={0} end={20} duration={2} delay={0.3} className="count-up" />
            </h1>
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
      /* color: white; */
      font-size: var(--xl-heading);
      /* font-weight: bolder; */
      margin-bottom: var(--heading-margin);

      span {
        display: block;
        /* color: var(--heading-color); */
        color: var(--background-color-light);
        font-size: var(--xl-heading);
        font-weight: 600;
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
        margin-bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        .count-up{
          font-size: var(--ml-heading);
          color: black;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .main_home {
     
      /* justify-content: space-between; */
      align-items: center;
      h1{
        text-align: center;
      }
    }
  }

  @media (max-width: 640px) {
    .main_home {
      align-items: center;

      p {
        text-align: center;
      }
      .stats {
        align-items: center;
        flex-direction: column;
      }
    }
  }

  body.light-mode & {
    .main_home {
       h1{
        span{
          color:var( --light-gray-color);
        }
      }
      p {
        color: var(--text-light-color);
      }
    }
  }

  body.dark-mode & {
    .main_home {
      p {
        color: var(--text-light-color);
      }

       .stats {
        h1{
          .count-up{
            color: white;
          }
        }
       }
    }
  }
`;
