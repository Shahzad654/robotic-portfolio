import React from 'react'
import styled from 'styled-components'
import ProfileImg from '../assets/profile.jpeg'
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <>
      <StyledProfile
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="main_profile">
          <img src={ProfileImg} alt="" />
          <h2>Akshay</h2>
          <p>
            A Software Engineer who has developed countless innovative
            solutions.
          </p>

          <div className="icon_container">
            <BsTwitterX className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
            <MdOutlineMailOutline className="icon" />
          </div>
        </div>
      </StyledProfile>
    </>
  );
}

const StyledProfile = styled(motion.div)`
  height: 90vh;
  width: 32%;
  background-color: white;
  border-radius: var(--l-radius);

  .main_profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-direction: column;
    padding-top: 5%;
    img {
      width: 70%;
      height: auto;
      margin: auto;
      border-radius: var(--l-radius);
    }
    h2 {
      text-align: center;
      font-weight: bold;
    }
    p {
      text-align: center;
      font-weight: 600;
    }

    .icon_container{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        padding-bottom: 30%;
        .icon{
            color: var(--primary-color);
            width: 22px;
            height: 22px;
            cursor: pointer;
        }

    }
  }
`;
