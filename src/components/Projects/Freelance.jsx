import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import { motion } from 'framer-motion'
import TagUserBlue from "../../assets/tag-user-blue.svg";
import TagUserRed from "../../assets/tag-user-red.svg";
import Footer from "../Footer";
import { useParams } from 'react-router-dom';
import { projectDetails } from "../../Projects";
import ProjectNotFound from '../../pages/ProjectNotFound'


export default function Freelance() {
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

  const { slug } = useParams();
  const project = projectDetails.find((p) => p.slug === slug);

  if (!project) {
    return <ProjectNotFound />
  }



  return (
    <>
      {/* <Navbar /> */}
      <StyledProjects>
        <motion.div className="main_projects"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}>

          <motion.div className="header_content" whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}>
            <h1>{project.title}</h1>
            <p>
              {project.role}
            </p>
          </motion.div>

          <motion.div className="info_cards"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}>
            <div className="card">
              <div className="card_header">
                <img
                  src={isDarkTheme ? TagUserRed : TagUserBlue}
                  alt="tag-user"
                />
                <h4>Client Name</h4>
              </div>
              <p>{project.clientName}</p>
            </div>
            <div className="card">
              <div className="card_header">
                <img
                  src={isDarkTheme ? TagUserRed : TagUserBlue}
                  alt="tag-user"
                />
                <h4>Project Type</h4>
              </div>
              <p>{project.type}</p>
            </div>
            <div className="card">
              <div className="card_header">
                <img
                  src={isDarkTheme ? TagUserRed : TagUserBlue}
                  alt="tag-user"
                />
                <h4>Project Duration</h4>
              </div>
              <p>{project.duration}</p>
            </div>
          </motion.div>

          <motion.div className="image_contianer" whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}>
            <img src={project.image} alt="" />
          </motion.div>


          <div className="project_details" >
            <motion.div whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}>
              <h2>Project Overview</h2>
              <p>{project.description}</p>
            </motion.div>

            <motion.div whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}>
              <h2>Skills</h2>
              <p>{project.skill}</p>
            </motion.div>


            {project.video && (
              <>
                <motion.div className="video" whileInView={{ y: 0, opacity: 1 }}
                  initial={{ y: 50, opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}>
                  <div>
                    <h2>Working</h2>
                  </div>
                  <iframe
                    width="100%"
                    height="100%"
                    src={project.video}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    style={{ borderRadius: "var(--l-radius)" }}
                  ></iframe>
                </motion.div>
              </>
            )}

            <motion.div className="features" whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}>
              <h2>Key Features</h2>
              <ul>
                {project.features.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>

            {project.members && (<>
              <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}>
                <h2>Credits</h2>
                <p>{project.members}</p>
              </motion.div>
            </>)}



          </div>
        </motion.div>
      </StyledProjects>

      <Footer />
    </>
  );
}

const StyledProjects = styled.div`
  width: 80%;
  margin: var(--section-margin) auto;

  .main_projects {
    .header_content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      h1{
        text-align: center;
      }
      p{
        text-align: center;
        max-width: 50ch;
      }
    }

    .info_cards {
      margin-top: 60px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      width: 100%;

      .card {
        
        /* background-color: var(--background-color-light); */
        border-radius: var(--m-radius);
        padding: 20px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        cursor: pointer;

        .card_header {
          display: flex;
          align-items: center;
          gap: 1rem;

          img {
            width: 30px;
            height: 30px;
          }

          h4 {
            
            margin: 0;
          }
        }

        p {
          
          margin: 0;
        }
      }
    }

    .image_contianer {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 100px;

      img {
        width: 100%;
        height: auto;
        object-fit: contain;
        border-radius: var(--l-radius);
      }
    }

    .project_details {
      margin-top: var(--section-margin);
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 2rem;

      div {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;
      }

      .video {
        width: 100%;
        height: 80vh;
      }

      .features{
         display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;
        ul{
          padding-left: 2%;
        li{
            list-style-type: circle;
            color: black;
        }
      }
      }
    }
  }


  body.light-mode & {
    .main_projects{
      .info_cards{
        .card{
        background: #e3edf7;
      box-shadow: 20px 20px 60px #c1c9d2, -20px -20px 60px #ffffff;
        }
      }
    }
  }

  
  body.dark-mode & {
  .main_projects {
    .info_cards {
      .card {
        box-shadow: 4px 4px 8px var(--shadow-color-dark),
          -4px -4px 8px var(--shadow-color-light);
        p{
          color: white;
        }
      }
    }
    .project_details {
      .features {
        ul {
          li {
            color: white;
          }
        }
      }
    }
  }
}

`;

