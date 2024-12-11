import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { outletprojectDetails } from "../Projects";

export default function OutletProjects() {
  const navigate = useNavigate()

  const passHandler = (project) => {
    navigate(`/projects/${project.title}`, { state: project });
  };

  return (
    <>

      <Navbar />
      <StyledProjects
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="main_projects">
          <h1>
            Outlet <span>PROJECTS</span>
          </h1>

          <div className="project_cards">
            {outletprojectDetails.map((project, index) => (
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
        height: 400px;
        
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
          /* width: 150px;
          height: 150px; */
          width: 100%;
          height: 250px;
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
            padding: 0 2% 0 2%;
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

  body.light-mode & {
    .main_projects {
      h1 {
        span {
          color: var(--light-blue-color);
        }
      }
    }
    .project_cards {
      .card {
        /* background-color: var(--light-gray-color); */
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


  body.dark-mode & {
     .main_projects{
      .project_cards{
        .card{
          /* background: linear-gradient(
        to left,
        var(--background-color-light),
        #9e9fa0
      );
      box-shadow: 20px 20px 60px #a8aaac -20px -20px 60px #a8a5a5; */
      background-color: var(--background-color-light);
        }
      }
    }
  }
`;
