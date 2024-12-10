import React from 'react'
import styled from 'styled-components'
import CloseIcon from "@mui/icons-material/Close";

export default function ExperienceModal({ backdropHandler, experience }) {
  if (!experience) return null;
  return (
    <StyledExperience>
      <div className="heading">
        <h4>{experience.title}</h4>
        <button className="icon" onClick={backdropHandler}>
          <CloseIcon htmlColor="var(--primary-color)" fontSize="large" className='close-icon' />
        </button>
      </div>

      <div className="experience_video">
        <h5>Description</h5>
        <ul>
          {experience.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        {experience.html && (
          <iframe
            width="100%"
            height="400vh"
            src={experience.html}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ borderRadius: "var(--l-radius)" }}
          ></iframe>
        )}
      </div>
    </StyledExperience>
  );
}

const StyledExperience = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
      color: var(--background-color-dark);
    }
  }

  .experience_video {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    ul {
      display: flex;
      justify-content: center;
      /* align-items: center; */
      flex-direction: column;
      padding-left: 3%;
      li {
        list-style: circle;
        text-align: start;
      }
    }
    h5 {
      align-self: flex-start;
      text-align: start;
      color: var(--background-color-dark);
    }
    p {
      text-align: center;
    }
  }

  body.dark-mode & {
  
    .experience_video {
       h5{
        color: white;
      }
      ul {
        li {
          color: white;
        }
      }
    }
  }

  body.light-mode & {
    .heading{
.close-icon{
color: var(--light-blue-color)
  }
  }
    .experience_video {
     
      ul {
        li {
          color: black;
        }
      }
    }
  }

`;
