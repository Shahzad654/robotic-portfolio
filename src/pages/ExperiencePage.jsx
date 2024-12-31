import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import experienceDetails from "../Experience";
import { useNavigate } from "react-router-dom";

export default function ExperiencePage() {
  const navigate = useNavigate()

  const passHandler = (experience) => {
    navigate(`/experience/${experience.slug}`);
  };
  
  return (
    <>
      
      {/* <Navbar /> */}
      <StyledExperience
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="main_experience">
          <h1>
            4 YEARS OF <span>EXPERIENCE</span>
          </h1>

          <div className="experience_cards">
            {experienceDetails.map((experience, index) => (
              <motion.div
                key={index}
                className="card"
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
                transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => passHandler(experience)}
              >
                <div className="content">
                  <h3>{experience.title}</h3>
                  <h5>{experience.role}</h5>
                  {/* <p>{experience.description}</p> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </StyledExperience>
      <Footer />
    </>
  );
}

const StyledExperience = styled(motion.div)`
  width: 80%;
  margin: var(--section-margin) auto;


  .main_experience {
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

    .experience_cards {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      gap: 2rem;

      .card {
        width: 100%;
        height: 200px;
        border-radius: var(--m-radius);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 2rem;
        /* background-color: var(--background-color-light); */
        cursor: pointer;

        .content {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          gap: 1rem;
          padding-top: 5%;
          padding-left: 3%;
          padding-bottom: 5%;
        }

        .icon {
          width: 30px;
          height: 30px;
          color: var(--primary-color);
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
    .main_experience {
      h1 {
        span {
           color: var(--secondary-color-light)
        }
      }
    }
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
          h3,
          h5 {
            color: black;
          }
        }
      }
    }
  }

  body.dark-mode & {
    .experience_cards {
      .card {
        // box-shadow: 4px 4px 8px var(--shadow-color-dark),
        //   -4px -4px 8px var(--shadow-color-light);
        box-shadow: 2px 2px 24px var(--shadow-color-dark), -4px -4px 8px rgb(255 255 255 / 8%);
        .content {
          p {
            color: var(--text-light-color);
          }
        }
      }
    }
  }
`;
