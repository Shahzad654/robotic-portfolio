import React, { useState } from "react";
import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import BackdropWrapper from "../components/modals/BackdropWrapper";
import ExperienceModal from "../components/modals/ExperienceModal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import experienceDetails from "../Experience";

export default function ExperiencePage() {
  const [backdrop, setBackdrop] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const passHandler = (experience) => {
    setSelectedExperience(experience);
    setBackdrop((prev) => !prev);
  };
  return (
    <>
      <BackdropWrapper
        handleBackdrop={() => setBackdrop(false)}
        smallSize={true}
        element={
          <ExperienceModal
            backdropHandler={() => setBackdrop(false)}
            experience={selectedExperience}
          />
        }
        open={backdrop}
      />
      <Navbar />
      <StyledExperience
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
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
                initial={{ y: -20, opacity: 0 }}
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
          color: var(--light-gray-color);
        }
      }
    }
    .experience_cards {
      .card {
        /* background-color: var(--light-gray-color); */
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
        background: linear-gradient(
        to right,
        var(--background-color-light),
        #9e9fa0
      );
      box-shadow: 20px 20px 60px #a8aaac -20px -20px 60px #a8a5a5;
        .content {
          p {
            color: var(--text-light-color);
          }
        }
      }
    }
  }
`;
