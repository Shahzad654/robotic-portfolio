import React, {useState} from "react";
import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import {useNavigate} from 'react-router-dom'
import BackdropWrapper from "../components/modals/BackdropWrapper";
import ExperienceModal from "../components/modals/ExperienceModal";
import { FaArrowRight } from "react-icons/fa6";


const experienceDetails = [
  {
    title: "ANA Avatar Xprize Team (AVATAR-HUBO)",
    role: "Lean Integration Engineer",
    description: [
      "Contributed to Team Avatar-Hubo’s success in a $10M global robotics competition (150+ teams, 10+ countries).",
      "Integrated novel Virtual Reality software and hardware interfaces to streamline intuitive humanoid teleoperation.",
      "Spearheaded the design and manufacturing of a new 2 Degree-of-Freedom robotic neck linkage.",
      "Developed a seamless low-latency audio/video pipeline for real-time bidirectional communication.",
      "Constructed a new overarching network architecture to facilitate wireless mobile manipulator control.",
      "Managed and instructed 5+ undergraduate engineering students to expedite robotic hardware and software development.",
    ],
    html: "https://www.youtube.com/embed/E9DXL_hvtdI?si=lY8NhJ4sf7Jwfnnl&amp;start=1",
  },
  {
    title: "TSLA/UNLV Independent Research Contract",
    role: "Researcher",
    description: [
      "Designed an Augmented Reality teleoperation system for Tesla’s famous robot quadruped SPOT.",
      "Implemented perceptive mobile manipulation with SPOT via Haddington Dynamics’ robotic manipulator Dexter.",
      "Produced a Virtual Reality-based robot simulator via the 3D Game Engine Unity.",
    ],
    html: "https://www.youtube.com/embed/2z80TuAxnKA?si=qeMpS9_PRrLezNmD",
  },
];

export default function Experience() {
  const [backdrop, setBackdrop] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const navigate = useNavigate()

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
               transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                onClick={() => passHandler(experience)}
              >
                <div className="content">
                  <h3>{experience.title}</h3>
                  <h5>{experience.role}</h5>
                </div>
              </motion.div>
            ))}

            <motion.button
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -20, opacity: 0 }}
                transition={{ duration: 1, delay: 0.2 + 0.4 }}
                viewport={{ once: true }}
              onClick={() => {
                navigate("/experience");
              }}
            >
              View More{" "}
              <FaArrowRight style={{ width: "13px", height: "13px" }} />
            </motion.button>
          </div>
        </div>
      </StyledExperience>
    </>
  );
}

const StyledExperience = styled(motion.div)`
  margin-top: var(--section-margin);

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
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 2rem;

      .card {
        width: 100%;
        /* height: min-content; */
        height: 150px;
        border-radius: var(--m-radius);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        /* padding-left: 2%;
        padding-right: 2%;
        margin-bottom: 10%; */
        background-color: var(--background-color-light);
        cursor: pointer;

        .content {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 1rem;
          /* padding-top: 5%;
          padding-left: 1%;
          padding-bottom: 5%; */

          h3,
          h5 {
            text-align: center;
          }
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
      .experience_cards {
        align-items: center;
      }
    }
  }

  @media (max-width: 640px) {
    .main_experience {
      h1 {
        text-align: center;
      }
      .experience_cards {
        align-items: center;
        .cards {
          .content {
          }
        }
      }
    }
  }

  body.light-mode & {
    .main_experience{
      h1{
        span{
          color:var( --light-gray-color);
        }
      }
    }
    .experience_cards {
      .card {
        background-color: var(--light-gray-color);
        .content {
          /* h3,
          h5 {
            color: white;
          } */
           
        }
      }
      button{
     background-color: var(--light-blue-color);
     /* &:hover{
       background-color: var(--light-gray-color);
     } */
    }
    }
  }

  body.dark-mode & {
    .experience_cards {
      .card {
        /* &:hover {
          background-color: var(--background-color-light);
        } */
        .content {
          p {
            color: var(--text-light-color);
          }
        }
      }
    }
  }
`;
