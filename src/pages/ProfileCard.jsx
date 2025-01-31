import React from "react";
import styled from "styled-components";
import ProfileImg from "../assets/profile.jpeg";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IoMail } from "react-icons/io5";

export default function ProfileCard() {
  return (
    <>
      <StyledProfile
        // initial={{ y: -50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="main_profile">
          <img src={ProfileImg} alt="" />

          <h2>Akshay Dave</h2>
          <p>
            A Mechanical Engineer who has developed countless innovative
            solutions.
          </p>

          <div className="icon_container">
            <a>
              <BsTwitterX className="icon" />
            </a>
            <a>
              <FaLinkedin className="icon" />
            </a>
            <a target="_blank" href="https://www.youtube.com/@DavesEngineeringGarage">
              <FaYoutube className="icon" />
            </a>
            <a>
              <IoMail className="icon" />
            </a>
          </div>
        </div>
      </StyledProfile>
    </>
  );
}

const StyledProfile = styled(motion.div)`
  height: max-content;
  width: 32%;
  border-radius: var(--l-radius);
  background-color: white;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  .main_profile {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-direction: column;
    padding-top: 5%;
    padding-bottom: 5%;

    img {
      width: 70%;
      height: auto;
      margin: auto;
      border-radius: var(--l-radius);
    }
    h2 {
      color: var(--background-color-dark);
      text-align: center;
      font-weight: bold;
    }
    p {
      color: var(--background-color-dark);
      text-align: center;
      font-weight: 600;
      padding: 0 4% 0 4%;
    }

    .icon_container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      .icon {
        color: var(--primary-color-light);
        width: 22px;
        height: 22px;
        cursor: pointer;
      }
    }
  }

  body.dark-mode & {
    background-color: white;

    .main_profile {
      /* h2 {
        color: white;
      }
      p {
        color: white;
      } */

      .icon_container {
        .icon {
          &:hover {
            color: var(--primary-color-dark);
          }
        }
      }
    }
  }

  body.light-mode & {
    background-color: var(--background-color-light-mode);
    box-shadow: 20px 20px 60px #c1c9d2, -20px -20px 60px #ffffff;

    .icon_container {
      .icon {
        color: var(--secondary-color-light);

        &:hover {
          color: var(--blue-color-dark);
        }
      }
    }
  }
  @media (max-width: 1024px) {
    width: 100%;
    margin: var(--section-margin) auto;
    .main_profile {
      /* max-height: 80vh; */
      img {
        width: 50%;
      }
      h2 {
        color: var(--background-color-dark);
        text-align: center;
        font-weight: bold;
      }
      p {
        color: var(--background-color-dark);
        text-align: center;
        font-weight: 600;
      }
    }
  }
`;
