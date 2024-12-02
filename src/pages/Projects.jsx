import React from 'react'
import styled from 'styled-components'
import ProjectImg1 from '../assets/Project1.jpg'
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <StyledProjects
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -50, opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="main_projects">
        <h1>
          RECENT <span>PROJECTS</span>
        </h1>

        <div className="project_cards">
          <div className="card">
            <img src={ProjectImg1} alt="" />
            <div className="content">
              <h3>Hand Crafted Notes</h3>
              <p>System Designer, Integrator and Technology lead</p>
            </div>
          </div>

          <div className="card">
            <img src={ProjectImg1} alt="" />
            <div className="content">
              <h3>AlphaCore Turbulence </h3>
              <p>System Designer and Integrator</p>
            </div>
          </div>

          <div className="card">
            <img src={ProjectImg1} alt="" />
            <div className="content">
              <h3>Node-Cloud</h3>
              <p>DevOps Engineer</p>
            </div>
          </div>

          <div className="card">
            <img src={ProjectImg1} alt="" />
            <div className="content">
              <h3>SwingSauce</h3>
              <p>BackEnd Programmer</p>
            </div>
          </div>
        </div>
      </div>
    </StyledProjects>
  );
}

const StyledProjects = styled(motion.div)`
  margin-top: var(--section-margin);
  .main_projects {
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

    .project_cards {
      width: 100%;
      margin-top: 4%;

      .card {
        width: 100%;
        height: 25vh;
        border-radius: var(--m-radius);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        padding-left: 2%;

        img {
          width: 20%;
          height: auto;
          object-fit: contain;
          border-radius: var(--m-radius);
        }

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
          h3 {
            color: white;
          }
          p {
            color: var(--heading-color);
          }
        }
      }
    }
  }
`;

