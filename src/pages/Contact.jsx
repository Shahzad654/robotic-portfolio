import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import Snackbar from "@mui/material/Snackbar";
import CircularProgress from "@mui/material/CircularProgress";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true); 

    emailjs
      .sendForm('service_yn86py9', 'template_asp7dxm', form.current, {
        publicKey: 'CPJO2-PkW9nfq3rAV',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          form.current.reset();
          setSnackbarMessage("Email sent successfully!");
          setSnackbarSeverity("success");
          setSnackbarOpen(true); 
        },
        (error) => {
          console.error('FAILED...', error);
          setSnackbarMessage("Failed to send email. Please try again.");
          setSnackbarSeverity("error");
          setSnackbarOpen(true); 
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <StyledContact
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 50, opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="main_contact">
        <h1>
          LET'S WORK <span>TOGETHER</span>
        </h1>

        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input type="text" name="user_name" placeholder="Name" required />
          <br />
          <label htmlFor="email">Email</label>
          <input type="email" name="user_email" placeholder="Email" required />
          <br />
          <label htmlFor="message">Message</label>
          <textarea name="message" placeholder="Message" required></textarea>
          <br />
          <button type="submit" disabled={loading}>
            {loading ? <CircularProgress size={24} style={{color:'white'}}/> : "Submit"}
          </button>
        </form>
      </div>

     
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        severity={snackbarSeverity}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      />
    </StyledContact>
  );
}

const StyledContact = styled(motion.div)`
  width: 80%;
  margin: var(--section-margin) auto;
  height: 100vh;

  .main_contact {
    h1 {
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
      input,
      textarea {
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
          color: var(--light-blue-color);
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
          outline-color: var(--light-blue-color);
        }

        button {
          background-color: var(--light-blue-color);
          &:hover {
            background-color: var(--light-gray-color);
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
