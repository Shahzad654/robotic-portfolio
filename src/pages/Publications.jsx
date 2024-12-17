import React from "react";
import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Publications() {
  return (
    <>
      <StyledPublications
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="main_experience">
          <h1>PUBLICATIONS</h1>

          <div className="experience_cards">
            <motion.div
              className="card"
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 20, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="content">
                {/* <h3>ANA Avatar Xprize Team (AVATAR-HUBO)</h3>
              <h5>Lean Integration Engineer</h5>
              <p>System Designer, Integrator and Technology lead</p> */}
                <ul>
                  <li>
                    J. C. Vaz, A. Dave, N. Kassai, N. Kosanovic and P. Y. Oh
                  </li>

                  <li>
                    Immersive Auditory-Visual Real-Time Avatar System of ANA
                    Avatar XPRIZE Finalist Avatar-Hubo
                  </li>

                  <li>
                    2022 IEEE International Conference on Advanced Robotics and
                    Its Social Impacts (ARSO), Long Beach, CA, USA
                  </li>
                </ul>
                <a
                  href="https://ieeexplore.ieee.org/document/9802964"
                  target="_blank"
                >
                  <FiExternalLink className="icon" />
                </a>{" "}
              </div>
            </motion.div>

            <motion.div
              className="card"
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 20, opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="content">
                <ul>
                  <li>
                    A. Dave, J.C. Vaz, J. Kim, N. Kosanovic, N. Kassai, P.Y. Oh
                  </li>

                  <li>
                    Avatar-Darwin a Social Humanoid with Telepresence Abilities
                    Aimed at Embodied Avatar Systems
                  </li>

                  <li>
                    IEEE International Conference on Humanoid Robots
                    (Humanoids), Okinawa, Japan, 2022
                  </li>
                </ul>
                <a
                  href="https://ieeexplore.ieee.org/document/10000176"
                  target="_blank"
                >
                  {" "}
                  <FiExternalLink className="icon" />
                </a>{" "}
              </div>
            </motion.div>

            <motion.div
              className="card"
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 20, opacity: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="content">
                <ul>
                  <li>A. Dave, M. Kang, J. Hwang, M. Lorenzo and P. Oh</li>

                  <li>
                    Towards Smart Classroom: Affordable and Simple Approach to
                    Dynamic Projection Mapping for Education
                  </li>

                  <li>
                    2020 10th Annual Computing and Communication Workshop and
                    Conference (CCWC), Las Vegas, NV, USA, 2020
                  </li>
                </ul>
                <a
                  href="https://ieeexplore.ieee.org/document/9031145"
                  target="_blank"
                >
                  <FiExternalLink className="icon" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </StyledPublications>
    </>
  );
}

const StyledPublications = styled(motion.div)`
  margin-top: var(--section-margin);

  .main_experience {
    h1 {
      /* color: white; */
      font-size: var(--xl-heading);
      margin-bottom: var(--heading-margin);
    }

    .experience_cards {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      gap: 2rem;

      .card {
        width: 100%;
        height: min-content;
        /* height: 200px; */
        border-radius: var(--m-radius);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 2rem;
        padding-left: 2%;
        padding-right: 2%;
        /* background-color: var(--background-color-light); */
        

        .content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          padding-top: 5%;
          padding-bottom: 5%;
        }

        .icon {
          width: 30px;
          height: 30px;
          color: var(--primary-color-light);
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .main_experience {
      h1 {
        text-align: center;
      }
    }
  }

  @media (max-width: 640px) {
    .main_experience {
      h1 {
        text-align: center;
      }
    }
  }

  body.light-mode & {
    .experience_cards {
      .card {
        /* background-color: var(--secondary-color-dark); */
        background: linear-gradient(
          to right,
          var(--background-color-light-mode),
          #fdfeff
        );
        box-shadow: 20px 20px 60px #c1c9d2 -20px -20px 60px #ffffff;
        .content {
          ul {
            li {
              color: black;
            }
          }
        }
        .icon {
          color: var(--secondary-color-light);
        }
      }
    }
  }

  body.dark-mode & {
    .experience_cards {
      .card {
        box-shadow: 4px 4px 8px var(--shadow-color-dark),
          -4px -4px 8px var(--shadow-color-light);
        .content {
          p {
            color: var(--text-light-color);
          }
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
