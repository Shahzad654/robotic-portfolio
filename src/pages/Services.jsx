import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import IdeaRed from "../assets/idea red.svg";
import IdeaBlue from "../assets/idea blue.svg";
import ConsultRed from "../assets/consultred.svg";
import ConsultBlue from "../assets/consultblue.svg";
import MentorRed from "../assets/mentorred.svg";
import MentorBlue from "../assets/mentorblue.svg";

export default function Services() {
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
    <StyledService
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -50, opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <h1>Services</h1>
      <div className="services_cards">
        <motion.div
          className="cards"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img src={isDarkTheme ? IdeaRed : IdeaBlue} alt="Idea" />
          <h2>$199</h2>
          <h4>Bring your Idea to reality</h4>
          <ul>
            <li>Idea to Innovation</li>
            <li>Blueprint to Build</li>
            <li>Vision to Execution</li>
          </ul>
          <button>Buy Now</button>
        </motion.div>

        <motion.div
          className="cards_center"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={isDarkTheme ? ConsultRed : ConsultBlue} alt="Idea" />
          <h2>$399</h2>
          <h4>One hour Introductory Consulting</h4>
          <ul>
            <li>Customized Solutions</li>
            <li>Workflow Strategies</li>
            <li>Actionable Next Steps</li>
          </ul>
          <button>Buy Now</button>
        </motion.div>

        <motion.div
          className="cards"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <img src={isDarkTheme ? MentorRed : MentorBlue} alt="Idea" />
          <h2>$299</h2>
          <h4>Mentorship</h4>
          <ul>
            <li>Guidance for Growth</li>
            <li>Unlock Your Potential</li>
            <li>Learn and Evolve</li>
          </ul>
          <button>Buy Now</button>
        </motion.div>
      </div>
    </StyledService>
  );
}

const StyledService = styled(motion.div)`
  width: 80%;
  margin: var(--section-margin) auto;
  height: max-content;
  h1 {
    font-size: var(--xl-heading);
    color: white;
    margin-bottom: var(--heading-margin);
  }

  .services_cards {
    display: flex;
    /* justify-content: center; */
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    .cards {
      width: 300px;
      height: 400px;
      /* background-color: var(--background-color-light); */
      /* background: #1e3a8a99;
      box-shadow: -20px -20px 60px #1a317580, 20px 20px 60px white; */
      /* background: #e3edf7;
      box-shadow: 20px 20px 60px #c1c9d2, -20px -20px 60px #ffffff; */

      border-radius: var(--l-radius);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex-direction: column;
      img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 28%;
        height: auto;
      }

      h4,
      h2 {
        /* color: white; */
        word-wrap: break-word;
        text-align: center;
      }
      /* ul {
        list-style: none;
        li::marker {
          content: "✓"; 
         margin-right: 55px;
         text-align: start;
        }
      } */
      ul {
        list-style: none;
      }

      ul li {
        position: relative;
        padding-left: 20px;
      }

      ul li::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: var(--light-blue-color);
        font-weight: bold;
      }
      button {
        &:hover {
          background-color: var(--primary-color-dark);
        }
      }
    }
  }

  .cards_center {
    width: 300px;
    height: 450px;
    /* background-color: var(--background-color-light); */
    /* background: #1e3a8a99;
    box-shadow: -20px -20px 60px #1a317580, 20px 20px 60px white; */
    /* background: #e3edf7;
    box-shadow: 20px 20px 60px #c1c9d2, -20px -20px 60px #ffffff; */

    border-radius: var(--l-radius);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    overflow: hidden;

    img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 28%;
      height: auto;
    }

    h4,
    h2 {
      /* color: white; */
      word-wrap: break-word;
      text-align: center;
    }
    ul {
        list-style: none;
      }

      ul li {
        position: relative;
        padding-left: 20px;
      }

      ul li::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: var(--light-blue-color);
        font-weight: bold;
      }
    button {
      &:hover {
        background-color: var(--primary-color-dark);
      }
    }
  }

  @media (max-width: 1024px) {
    h1 {
      text-align: center;
    }
  }

  @media (max-width: 640px) {
    h1 {
      text-align: center;
    }

    .services_cards {
      .cards_center {
        height: 400px;
      }
    }
  }

  @media (max-width: 1200px) {
    .services_cards {
      justify-content: center;
      .cards_center {
        height: 400px;
      }
    }
  }

  body.light-mode & {
    .services_cards {
      .cards {
        /* background-color: var(--light-gray-color); */
        background: #e3edf7;
        box-shadow: 20px 20px 60px #c1c9d2, -20px -20px 60px #ffffff;
        h4,
        h2 {
          color: black;
        }
        ul {
          li {
            color: black;
          }
        }
        button {
          background-color: var(--light-blue-color);
          &:hover {
            background-color: var(--blue-color-dark);
          }
        }
      }
      .cards_center {
        /* background-color: var(--light-gray-color); */
        background: #e3edf7;
        box-shadow: 20px 20px 60px #c1c9d2, -20px -20px 60px #ffffff;
        h4,
        h2 {
          color: black;
        }
        ul {
          li {
            color: black;
          }
        }
        button {
          background-color: var(--light-blue-color);
          &:hover {
            background-color: var(--blue-color-dark);
          }
        }
      }
    }
  }

  body.dark-mode & {
    .cards {
      /* background-color: var(--background-color-light); */
      /* background: #ffffff08;
      box-shadow: -20px -20px 60px #ffffff02, 20px 20px 60px #ffffff02; */
      background: linear-gradient(
        to right,
        var(--background-color-light),
        #9e9fa0
      );
      box-shadow: 20px 20px 60px #a8aaac -20px -20px 60px #a8a5a5;
      
      ul li {
        color: white;
      }

      ul li::before {
        color: var(--primary-color);
      }
    }
    .cards_center {
      /* background-color: var(--background-color-light); */
      /* background: #ffffff08;
      box-shadow: -20px -20px 60px #ffffff02, 20px 20px 60px #ffffff02; */
      background: linear-gradient(
        to right,
        var(--background-color-light),
        #9e9fa0
      );
      box-shadow: 20px 20px 60px #a8aaac -20px -20px 60px #a8a5a5;
       ul li {
        color: white;
      }

      ul li::before {
        color: var(--primary-color);
      }
    }
  }
`;
