import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

export default function ProjectModal({ backdropHandler, project }) {
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
        <div className="card">
          {/* <img src={project.image} alt={project.title} /> */}
          <div className="content">
            <h5>Description</h5>
            <p>{project.description}</p>
            
            {project.skill &&
            (
              <><h5>Skills</h5>
            <p>{project.skill}</p></>
            

            )}

{project.members && (<><h5>Credits</h5>
            <p>{project.members}</p></>)}
            


{project.video && (
 <iframe
              width="100%"
              height="400vh"
              src={project.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              style={{ borderRadius: "var(--l-radius)" }}
            ></iframe>
)}
           
          </div>
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

    .card {
      border-radius: var(--m-radius);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      padding-left: 2%;
      /* background-color: ${(props) =>
        props.theme === "light" ? "#fff" : "#333"};  */
      /* transition: background-color 0.3s ease; */

      img {
        width: 20%;
        height: auto;
        object-fit: contain;
        border-radius: var(--m-radius);
      }

      .content {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;
        h3 {
          color: var(--background-color-dark);
        }
        h5 {
          color: var(--background-color-dark);
        }
        p {
          color: var(--background-color-dark);
        }
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

  body.dark-mode & {
    .project_cards {
      .card {
        .content {
          h3 {
            color: white;
          }
          h5 {
            color: white;
          }
          p {
            color: white;
          }
        }
      }
    }
  }
`;
