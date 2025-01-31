import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Snackbar from "@mui/material/Snackbar";
import CircularProgress from "@mui/material/CircularProgress";
// import { useForm, ValidationError } from '@formspree/react';
import Alert from "@mui/material/Alert";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const form = useRef();
  // const [state, handleSubmit] = useForm("xbljlbpv");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form submit")
    setLoading(true);
    emailjs
      .sendForm("service_bog0kzh", "template_9gw9m6j", form.current, {
        publicKey: "LdDFhi9drqdtgjKdd",
      })
      .then(() => {
        console.log("SUCCESS!");
      })
      .catch((error) => {
        console.log("FAILED...", error);
      })
      .finally(() => {
        setLoading(false);
      });
    setSnackbarMessage("Form submitted successfully");
    setSnackbarSeverity("success");
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
          LET&apos;S WORK <span>TOGETHER</span>
        </h1>

        <form ref={form} onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          {/* <ValidationError prefix="Name" field="name" errors={state.errors} /> */}
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          {/* <ValidationError prefix="Email" field="email" errors={state.errors} /> */}
          <br />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
          {/* <ValidationError prefix="Message" field="message" errors={state.errors} /> */}
          <br />
          <button type="submit" disabled={loading}>
            {loading ? (
              <CircularProgress size={18} style={{ color: "white" }} />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert severity={snackbarSeverity} onClose={handleSnackbarClose}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
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
          color: var(--secondary-color-light);
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
          border-color: var(--secondary-color-light);
          outline-color: var(--secondary-color-light);
        }

        button {
          background-color: var(--secondary-color-light);
          &:hover {
            background-color: var(--secondary-color-dark);
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
