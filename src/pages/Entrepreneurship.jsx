import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Footer from "../components/Footer";
import { entrepenurshipDetails } from "../Projects";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Entrepreneurship() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <>
      {/* <Navbar /> */}
      <StyledEntrepreneurship>
        <div className="main_entrepreneurship">
          <h1>Entrepreneurship</h1>

          <div className="entrepreneurship_tabs">
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Tabs
                onChange={handleChange}
                value={value}
                aria-label="Tabs where selection follows focus"
                selectionFollowsFocus
                sx={{
                  "& .MuiTabs-indicator": {
                    top: 0,
                    bottom: "auto",
                    backgroundColor: "var(--primary-color)",
                  },

                  "& .MuiTab-root": {
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "2rem",
                    textTransform: "none",
                    color: "var(--background-color-dark)",
                  },

                  "& .MuiTab-root.Mui-selected": {
                    color: "var(--primary-color) !important",
                  },

                  //  body: {
                  "body.light-mode &": {
                    "& .MuiTab-root": {
                      color: "black",
                    },
                    "& .MuiTab-root.Mui-selected": {
                      color: "var(--light-blue-color) !important",
                    },
                    "& .MuiTabs-indicator": {
                      backgroundColor: "var(--light-blue-color)",
                    },
                  },
                  // },

                  "body.dark-mode &": {
                    "& .MuiTab-root": {
                      color: "var(--background-color-light)",
                    },
                    "& .MuiTab-root.Mui-selected": {
                      color: "var(--primary-color) !important",
                    },
                    "& .MuiTabs-indicator": {
                      backgroundColor: "var(--primary-color)",
                    },
                  },
                }}
              >
                {/* <Tab label="XYZ1" />
                <Tab label="XYZ2" /> */}
                {entrepenurshipDetails.map((company, index) => (
                  <Tab label={company.companyName} key={index} />
                ))}
              </Tabs>
            </Box>
          </div>
        </div>
        <div className="tab_content">
          {/* {value === 0 && <Company1 />} {value === 1 && <Company2 />} */}
          {entrepenurshipDetails.map((company, index) => (
            value === index && <CompanyDetails key={index} company={company} />
          ))}
        </div>
      </StyledEntrepreneurship>
      <Footer />
    </>
  );
}


const CompanyDetails = ({ company }) => {
  const navigate = useNavigate();

  const passHandler = (project) => {
    navigate(`/entrepreneurship/${project.slug}`);
  };

  return (
    <StyledCompany1
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 50, opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="company1_container">
        <div className="main_experience">
          <div className="experience_cards">
            {company.projects.map((project, index) => (
              <motion.div
                key={index}
                className="card"
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
                transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => passHandler(project)}
              >
                <div className="content">
                  <h3>{project.title}</h3>
                  <h5>{project.role}</h5>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </StyledCompany1>
  );
};


const StyledCompany1 = styled.div`
  margin-top: var(--section-margin);

  .company1_container {
    ul {
      display: flex;
      justify-content: start;
      align-items: flex-start;
      li {
        list-style: circle;
        max-width: 80ch;
      }
    }

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
  }

  @media (max-width: 640px) {
    .company1_container {
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  body.light-mode & {
    .main_experience {
      h1 {
        span {
           color: var(--light-blue-color)
        }
      }
    }
    .experience_cards {
      .card {
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
        box-shadow: 4px 4px 8px var(--shadow-color-dark),
          -4px -4px 8px var(--shadow-color-light);
        .content {
          p {
            color: var(--text-light-color);
          }
        }
      }
    }
  }
`;

const StyledEntrepreneurship = styled.div`
  width: 80%;
  margin: var(--section-margin) auto;
  height: max-content;
  .main_entrepreneurship {
    h1 {
      font-size: var(--xl-heading);
      margin-bottom: var(--heading-margin);
    }

    .entrepreneurship_tabs {
      margin-top: var(--section-margin);
    }
  }

  @media (max-width: 1024px) {
    .main_entrepreneurship {
      h1 {
        text-align: center;
      }
    }
  }

  @media (max-width: 640px) {
    .main_entrepreneurship {
      h1 {
        word-break: break-word;
        overflow-wrap: break-word;
      }
    }
  }
`;
