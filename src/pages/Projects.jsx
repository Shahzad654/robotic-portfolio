import React, { useState } from "react";
import styled from "styled-components";
import ProjectImg1 from "../assets/Project1.jpg";
import ProjectImg4 from "../assets/Project4.png";
import { motion } from "framer-motion";
import ProjectModal from "../components/modals/ProjectModal";
import BackdropWrapper from "../components/modals/BackdropWrapper";

const projectDetails = [
  {
    title: "Hand Crafted Notes",
    role: "System Designer, Integrator and Technology lead",
    description: [
      "Led the system design and integration of a personalized note-taking platform.",
      "Oversaw technology decisions to ensure seamless performance and scalability.",
    ],
    members: "Aksahy, Sirah",
    image: ProjectImg1,
  },
  {
    title: "Home Lab",
    role: "System Designer, Integrator",
    description:
      "A compact home lab server rack with servers, networking hardware, and organized cabling, ideal for experimenting with virtualization, networking, and IT solutions.",
    image: ProjectImg4,
    members: "Aksahy, Sirah",
  },
  
];

export default function Projects() {
  const [backdrop, setBackdrop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const passHandler = (project) => {
    setSelectedProject(project);
    setBackdrop((prev) => !prev);
  };

  return (
    <>
      <BackdropWrapper
        handleBackdrop={() => setBackdrop(false)}
        smallSize={true}
        element={
          <ProjectModal
            backdropHandler={() => setBackdrop(false)}
            project={selectedProject}
          />
        }
        open={backdrop}
      />
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
            {projectDetails.map((project, index) => (
              <motion.div
                key={index}
                className="card"
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -20, opacity: 0 }}
                transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
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
        width: 100%;
        height: 160px;
         box-sizing: border-box;
        /* height: min-content; */
        border-radius: var(--m-radius);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        padding-left: 2%;
        background-color: var(--background-color-light);
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
    .main_projects{
      h1{
        span{
          color:var( --light-gray-color);
        }
      }
    }
    .project_cards {
      .card {
        background-color: var(--light-gray-color);

        .content {
          /* h3 {
            color: white;
            
          }
          p {
             color: white;
          } */
        }
      }
    }
  }

  /* body.dark-mode & {
    .project_cards {
      .card {
        &:hover {
          background-color: var(--background-color-light);
        }
      }
      .content {
        p {
          color: var(--text-light-color);
        }
      }
    }
  } */
`;
