import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projectDetails } from "../Projects";

export default function Projects() {
  const navigate = useNavigate();

  const passHandler = (project) => {
    navigate(`/projects/${project.slug}`);
  };

  return (
    <>
      <StyledProjects
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="main_projects">
          <h1>
            RECENT <span>PROJECTS</span>
          </h1>

          <div className="project_cards">
            {projectDetails.slice(0, 2).map((project, index) => (
              <motion.div
                key={index}
                className="card"
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => passHandler(project)}
              >
                <div className="image_container">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="content">
                  <h3>{project.title}</h3>
                  <p>{project.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </StyledProjects>
    </>
  );
}

const StyledProjects = styled(motion.div)`
  margin-top: var(--section-margin);
  .main_projects {
    h1 {
      font-size: var(--xl-heading);
      margin-bottom: var(--heading-margin);

      span {
        display: block;
        font-size: var(--xl-heading);
        font-weight: 600;
        line-height: 1;
        color: var(--background-color-light);
      }
    }

    .project_cards {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      gap: 2rem;

      .card {
        width: 90%;
        height: 160px;
        box-sizing: border-box;
        /* height: min-content; */
        border-radius: var(--m-radius);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        padding-left: 2%;
        /* background-color: var(--background-color-light); */

        cursor: pointer;

        .image_container {
          img {
            display: block;
            object-position: center center;
            /* width: 100%;
            height: 100%; */
            /* width: 150px;
          height: 150px; */
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: var(--m-radius);
          }
        }
        /* 
        &:hover {
          background-color: var(--background-color-light);
          cursor: pointer;
        } */

        .content {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          gap: 1rem;
          h3 {
            /* color: white; */
            /* text-align: center; */
          }
          p {
            /* text-align: center; */
            /* color: var(--heading-color); */
          }
        }
      }
    }
  }

  @media (max-width: 400px) {
    .main_projects {
      .project_cards {

        .card {
          height: 200px;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .main_projects {
      h1 {
        text-align: center;
      }
    }
  }
  /* 
  @media (max-width: 640px) {
    .main_projects {
      h1 {
        text-align: center;
      }

     
    }
  } */

  body.light-mode & {
    .main_projects {
      h1 {
        span {
          color: var(--secondary-color-light);
        }
      }
      .project_cards {
        .card {
          background: linear-gradient(
            to right,
            var(--background-color-light-mode),
            #fdfeff
          );
          box-shadow: 20px 20px 60px #c1c9d2 -20px -20px 60px #ffffff;
        }
      }
    }
  }

  body.dark-mode & {
    .project_cards {
      .card {
        // box-shadow: 4px 4px 8px var(--shadow-color-dark),
        //   -4px -4px 8px var(--shadow-color-light);
        box-shadow: 2px 2px 24px var(--shadow-color-dark),
          -4px -4px 8px rgb(255 255 255 / 8%);
        /* &:hover {
          background-color: var(--background-color-light);
        } */
      }
      /* .content {
        p {
          color: var(--text-light-color);
        }
      } */
    }
  }
`;
