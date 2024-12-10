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
      /* color: white; */
      font-size: var(--xl-heading);
      margin-bottom: var(--heading-margin);

      span {
        display: block;
        color: var(--background-color-light);
        font-size: var(--xl-heading);
        font-weight: 600;
        line-height: 1;
      }
    }

    form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      margin: var(--section-margin) auto;
      label {
        align-self: flex-start;
        width: 50%;
        margin: 0.5rem auto;
      }
      input {
        width: 50%;
        margin: auto;
        background-color: var(--background-color-light);
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

  @media (max-width: 1024px) {
    .main_contact {
      h1 {
        text-align: center;
      }
    }
  }

  @media (max-width: 640px) {
    .main_contact {
      h1 {
        text-align: center;
      }

      form {
        label,
        input,
        textarea,
        button {
          width: 70%;
        }
      }
    }
  }

  body.light-mode & {
    .main_contact {
      h1 {
        span {
          color: var(--light-gray-color);
        }
      }

      form {
        input,
        textarea {
          color: black;
        }

        input:placeholder {
          color: black;
        }

        input:focus,
        textarea:focus {
          border-color: var(--light-blue-color);
        }

        button {
          background-color: var(--light-blue-color);
          &:hover {
          background-color: var(--blue-color-dark);
        }
        }
      }
    }

    body.dark-mode & {
      .main_contact {
        form {
          input,
          textarea {
            background-color: var(--background-color-light);
          }
        }
      }
    }
  }
`;
