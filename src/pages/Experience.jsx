import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import experienceDetails from "../Experience";


export default function Experience() {
  const navigate = useNavigate()

  const passHandler = (experience) => {
    navigate(`/experience/${experience.title}`, { state: experience });
  };
  
  return (
    <>
      
      <StyledExperience
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="main_experience">
          <h1>
            4 YEARS OF <span>EXPERIENCE</span>
          </h1>

          <div className="experience_cards">
            {experienceDetails.slice(0, 2).map((experience, index) => ( 
              <motion.div
                key={index}
                className="card"
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
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
              initial={{ y: 20, opacity: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
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
        justify-content: flex-start;
        align-items: center;
        gap: 2rem;
        padding-left: 2%;
       
        background-color: var(--background-color-light);
        /* background: linear-gradient(
          to right,
          var(--background-color-light),
          #9e9fa0
        );
        box-shadow: 20px 20px 60px #a8aaac -20px -20px 60px #a8a5a5; */
        cursor: pointer;

        .content {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          gap: 1rem;
          /* padding-top: 5%;
          padding-left: 1%;
          padding-bottom: 5%; */

          h3,
          h5 {
            /* text-align: center; */
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
      
    }
  }

  @media (max-width: 640px) {
    .main_experience {
      h1 {
        text-align: center;
      }
      .experience_cards {
        align-items: center;
        .card {
          justify-content: center;
           padding-left: 0;
          .content{
            align-items: center;
             h3,
          h5 {
            text-align: center;
          }
          }
        }
      }
    }
  }

  body.light-mode & {
    .main_experience{
      h1{
        span{
         color:var( --light-blue-color);
        }
      }
    }
    .experience_cards {
      .card {
        /* background-color: var(--light-gray-color); */
         background:
                  linear-gradient(to right, var(--background-color-light-mode), #fdfeff);
                box-shadow: 20px 20px 60px #c1c9d2 -20px -20px 60px #ffffff;
        .content {
          /* h3,
          h5 {
            color: white;
          } */
           
        }

      }
      button{
     background-color: var(--light-blue-color);
     &:hover{
       background-color: var(--blue-color-dark);
     }
    }
    }
  }

  body.dark-mode & {
    .experience_cards {
      .card {
        /* &:hover {
          background-color: var(--primary-color-dark);
        } */
        .content {
          p {
            color: var(--text-light-color);
          }
        }
      }
       button{
     &:hover{
       background-color: var(--primary-color-dark);
     }
    }
    }
  }
`;
