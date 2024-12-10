import React, { useState } from "react";
import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import BackdropWrapper from "../components/modals/BackdropWrapper";
import ExperienceModal from "../components/modals/ExperienceModal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
  {
    title: "Drone and Autonomous Systems Lab (DASL)",
    role: "Researcher",
    description: [
      "Conducted system design and experimentation in over 5+ cutting-edge publications from a world-renowned robotics lab.",
      "Demonstrated key research skills over several projects in: Computer Vision; Virtual Reality; LiDAR integration; sensor signal processing; wireless networking; low-latency robot teleoperation; and robotic telepresence.",
      "Won the Geekpwn Robot Agent Challenge Finals international robotics competition in Shanghai, China.",
    ],
  },
  {
    title: "Industrial Automation Center",
    role: "Project manager",
    description: [
      "Lead 10+ people team for a fortune 500 company contract. Designed and Integrated systems to achieve dynamic pick and place using industrial manipulators.",
    ],
  },

  {
    title: "PIRE Fellowship KAIST",
    role: "Researcher",
    description: [
      "Acquired a $5,000+ National Science Foundation (NSF) grant for international robotics research.",
      "Utilized computer vision to localize and classify several different objects.",
      "Performed successful pick-and-place experimentation with classified objects via the Rainbow Robotics RB5 robotic arm.",
    ],
  },
];

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
