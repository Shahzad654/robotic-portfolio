import React, {useEffect} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {useNavigate} from 'react-router-dom'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projectDetails } from "../Projects";


export default function FreelanceProjects() {
  const navigate = useNavigate()

  const passHandler = (project) => {
    navigate(`/projects/${project.slug}`);
  };



  return (
    <>
      {/* <Navbar /> */}
      <StyledProjects
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="main_projects">
          <h1>
            FREELANCE <span>PROJECTS</span>
          </h1>

          <div className="project_cards">
            {projectDetails.map((project, index) => (
              <motion.div
                key={index}
                className="card"
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
                transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => passHandler(project)}
              >
                <img src={project.image} alt={project.title} />
                <div className="content">
                  <h4>{project.title}</h4>
                  <p>{project.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </StyledProjects>

      <Footer />
    </>
  );
}

const StyledProjects = styled(motion.div)`
  width: 80%;
  margin: var(--section-margin) auto;
  height: max-content;
  /* height: 100vh; */
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
      flex-wrap: wrap;
      gap: 2rem;

      .card {
        width: 300px;
        height: 350px;
        margin: auto;
        border-radius: var(--m-radius);
        display: flex;
        /* justify-content: center;
        align-items: center; */

        flex-direction: column;
        gap: 1rem;
        /* background-color: var(--background-color-light); */
        cursor: pointer;

        img {
          width: 100%;
          height: 200px;
          /* width: 100%;
          height: 100%; */
          object-fit: cover;
          border-radius: var(--m-radius);
          overflow: hidden;
        }

        .content {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 1rem;

          h5 {
            color: var(--background-color-dark);
          }

          h4 {
            text-align: center;
            font-weight: 600;
          }

          p {
            text-align: center;
          }
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

  @media (max-width: 640px) {
    .main_projects {
      h1 {
        text-align: center;
      }
    }
  }

  body.dark-mode & {
    .main_projects{
      .project_cards{
        .card{
        //  box-shadow: 4px 4px 8px var(--shadow-color-dark),
        //   -4px -4px 8px var(--shadow-color-light);
        box-shadow: 2px 2px 24px var(--shadow-color-dark), -4px -4px 8px rgb(255 255 255 / 8%);
        }
      }
    }
  }

  body.light-mode & {
    .main_projects {
      h1 {
        span {
          color: var(--secondary-color-light)
        }
      }
    }
    .project_cards {
      .card {
        /* background-color: var(--secondary-color-dark); */
        background: #e3edf7;
        box-shadow: 20px 20px 60px #c1c9d2, -20px -20px 60px #ffffff;
        .content {
          h4,
          p {
            color: black;
          }
        }
      }
    }
  }

`;
