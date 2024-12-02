import React from "react";
import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <StyledExperience
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -50, opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="main_experience">
        <h1>
          12 YEARS OF <span>EXPERIENCE</span>
        </h1>

        <div className="experience_cards">
          <div className="card">
            <div className="content">
              <h3>ANA Avatar Xprize Team (AVATAR-HUBO)</h3>
              <h5>Lean Integration Engineer</h5>
              <p>System Designer, Integrator and Technology lead</p>
            </div>
            <a
              href="https://youtu.be/E9DXL_hvtdI?feature=shared"
              target="_blank"
            >
              <FiExternalLink className="icon" />
            </a>{" "}
          </div>

          <div className="card">
            <div className="content">
              <h3>TSLA/UNLV Independent Research Contract</h3>
              <h5>Researcher</h5>
              <p>System Designer, Integrator and Technology lead</p>
            </div>
            <a
              href="https://youtu.be/2z80TuAxnKA?feature=shared"
              target="_blank"
            >
              {" "}
              <FiExternalLink className="icon" />
            </a>{" "}
          </div>

          <div className="card">
            <div className="content">
              <h3>Drone and Autonomous Systems Lab (DASL)</h3>
              <h5>Researcher</h5>
              <p>System Designer, Integrator and Technology lead</p>
            </div>
            <FiExternalLink className="icon" />
          </div>

          <div className="card">
            <div className="content">
              <h3>Industrial Automation Center</h3>
              <h5>Project manager</h5>
              <p>
                Lead 10+ people team for a fortune 500 company contract.
                Designed and Integrated systems to achieve dynamic pick and
                place using industrial manipulators.{" "}
              </p>
            </div>
            <FiExternalLink className="icon" />
          </div>
        </div>
      </div>
    </StyledExperience>
  );
}

const StyledExperience = styled( motion.div)`
  margin-top: var(--section-margin);

  .main_experience {
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

    .experience_cards {
      width: 100%;
      margin-top: 4%;

      .card {
        width: 100%;
        height: 30vh;
        border-radius: var(--m-radius);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 2rem;
        padding-left: 2%;
        padding-right: 2%;
        margin-bottom: 10%;

        &:hover {
          background-color: var(--background-color-light);
          cursor: pointer;
        }

        .content {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          gap: 1rem;
          padding-top: 5%;
          padding-bottom: 5%;

          h3,
          h5 {
            color: white;
          }
          p {
            color: var(--heading-color);
          }
        }

        .icon{
            width: 30px;
            height: 30px;
            color: var(--primary-color);  

        }
      }
    }
  }
`;
