import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

export default function OutletProjectModal({ backdropHandler, project }) {
  if (!project) return null;

  return (
    <StyledProject>
      <div className="heading">
        <h4>{project.title}</h4>
        <button className="icon" onClick={backdropHandler}>
          <CloseIcon htmlColor="var(--primary-color)" fontSize="large" className='close-icon'/>
        </button>
      </div>

      <div className="project_cards">
        <div className="content">
          <p>{project.description}</p>

          {project.video && (
            <iframe
              width="100%"
              height="400vh"
              src={project.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ borderRadius: "var(--l-radius)" }}
            ></iframe>
          )}
        </div>
      </div>
    </StyledProject>
  );
}

const StyledProject = styled.section`
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
      color: var(--background-color-dark);
    }
  }

  .project_cards {
    width: 100%;
    margin-top: 4%;

    /* img {
        width: 20%;
        height: auto;
        object-fit: contain;
        border-radius: var(--m-radius);
      }

      &:hover {
        background-color: var(--background-color-light);
        cursor: pointer;
      } */

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      h3 {
        /* color: white; */
      }
      p {
        text-align: center;
        color: var(--background-color-dark);
      }
    }
  }

  body.light-mode &{
  .heading{
.close-icon{
color: var(--light-blue-color)
  }
  }
}
`;
