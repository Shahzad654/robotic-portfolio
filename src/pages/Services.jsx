import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Services() {
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
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
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
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
        >
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
  }

  .services_cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    .cards {
      width: 300px;
      height: 400px;
      background-color: var(--background-color-light);
      border-radius: var(--l-radius);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex-direction: column;

      h4,
      h2 {
        color: white;
        word-wrap: break-word;
        text-align: center;
      }
      ul {
        li {
          list-style-type: circle;
          color: white;
          text-align: start;
        }
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
    background-color: var(--background-color-light);
    border-radius: var(--l-radius);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    overflow: hidden;

    h4,
    h2 {
      color: white;
      word-wrap: break-word;
      text-align: center;
    }
    ul {
      li {
        list-style-type: circle;
        color: white;
        text-align: start;
      }
    }
    button {
      &:hover {
        background-color: var(--primary-color-dark);
      }
    }
  }
`;
