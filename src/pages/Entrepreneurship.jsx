import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { entrepenurshipDetails } from "../Projects";
import { motion } from "framer-motion";

export default function Entrepreneurship() {
  return (
    <>
      <StyledEntrepreneurship>
        <motion.div
          className="main_entrepreneurship"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h1>Entrepreneurship, Coming Soon...</h1>

          {entrepenurshipDetails.map((company, companyIndex) => (
            <motion.div key={companyIndex} className="main_container" whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}>
              <h2>{company.companyName}</h2>
              <p>{company.role}</p>

              {company.projects.map((project, projectIndex) => (
                <motion.div key={projectIndex} className="main_content" whileInView={{ y: 0, opacity: 1 }}
                  initial={{ y: 50, opacity: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}>
                  {projectIndex % 2 === 0 ? (
                    <>
                      <div className="left_side">
                        <h3>{project.firstSubHeading}</h3>
                        <ul>
                          {project.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="right_side">
                        <img src={project.image} alt="Research" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="right_side">
                        <img src={project.image} alt="Research" />
                      </div>

                      <div className="left_side">
                        <h3>{project.firstSubHeading}</h3>
                        <ul>
                          {project.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </StyledEntrepreneurship>
      <Footer />
    </>
  );
}

const StyledEntrepreneurship = styled.div`
  width: 80%;
  margin: var(--section-margin) auto;
  height: max-content;
  .main_entrepreneurship {
    h1 {
      font-size: var(--xl-heading);
      margin-bottom: var(--heading-margin);
    }

    .main_container:nth-of-type(n + 2) {
      margin-top: var(--section-margin);
    }

    .main_container {
      h2,
      p {
        text-align: center;
      }

      .main_content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
        margin-top: var(--section-margin);

        .right_side,
        .left_side {
          flex-basis: 45%;
        }

        .right_side {
          img {
            width: 100%;
            height: auto;
            border-radius: var(--l-radius);
          }
        }

        .left_side {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-direction: column;
          h3 {
            margin-bottom: 20px;
          }
          ul {
            list-style: none;
            padding-left: 0;
          }

          ul li::before {
            content: "✔";
            margin-right: 10px;
            color: var(--secondary-color-light);
            font-size: 1.5em;
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .main_entrepreneurship {
      h1 {
        text-align: center;
      }
    }
  }

  @media (max-width: 640px) {
    .main_entrepreneurship {
      h1 {
        word-break: break-word;
        overflow-wrap: break-word;
      }
      .main_container {
        .main_content {
          .left_side {
            flex-basis: 100%;
            justify-content: center;
            align-items: center;
            text-align: start;
            h3 {
              text-align: center;
            }
            
          }

          .right_side {
            flex-basis: 100%;
            fl img {
              width: 100%;
              height: auto;
              border-radius: var(--l-radius);
            }
          }

          .left_side {
            order: 1;
          }

          .right_side {
            order: 2;
          }
        }
      }
    }
  }

  body.dark-mode & {
    .main_container {
      .main_content {
        .left_side {
          ul li::before {
            color: var(--primary-color-light);
          }
        }
      }
    }
  }
`;
