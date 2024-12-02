import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <StyledContact
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -50, opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="main_contact">
        <h1>
          LET'S WORK <span>TOGETHER</span>
        </h1>

        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Name" />
          <br />
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Email" />
          <br />
          <label htmlFor="">Message</label>
          <textarea name="" id="" placeholder="Message"></textarea>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </StyledContact>
  );
}

const StyledContact = styled(motion.div)`
  width: 80%;
  margin: var(--section-margin) auto;
  height: 100vh;

  .main_contact {
    h1 {
      color: white;
      font-size: var(--xl-heading);
      font-weight: bolder;
      margin-bottom: var(--heading-margin);

      span {
        display: block;
        color: var(--heading-color);
        font-size: var(--xl-heading);
        font-weight: bolder;
        line-height: 1;
      }
    }

    form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      label {
        align-self: flex-start;
        width: 50%;
        margin: 0.5rem auto;
      }
      input {
        width: 50%;
        margin: auto;
      }
      textarea {
        border-radius: var(--s-radius);
        height: 150px;
      }
      button {
        width: 50%;
        margin: auto;
        &:hover {
          background-color: var(--primary-color-dark);
        }
      }
    }
  }
`;
