import React from 'react'
import styled from 'styled-components'
import { FiHome } from "react-icons/fi";
import { FaRegFolder } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FiTool } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";


export default function Navbar() {
  return (
    <>
      <StyledNavbar>
        <div className="main_navbar">
          <div className="icon_container">
            <Tooltip title="Home">
              <span>
                <FiHome className="icon" />
              </span>
            </Tooltip>
            <Tooltip title="Projects">
              <span>
                <FaRegFolder className="icon" />
              </span>
            </Tooltip>
            <Tooltip title="Experience">
              <span>
                <MdOutlineWorkOutline className="icon" />
              </span>
            </Tooltip>
            <Tooltip title="Tools">
              <span>
                {" "}
                <FiTool className="icon" />
              </span>
            </Tooltip>
          </div>
        </div>
      </StyledNavbar>
    </>
  );
}


const StyledNavbar = styled.div`
  min-height: 10vh;
  margin-top: 2%;
 

  .main_navbar {
    background-color: var(--background-color-light);
    border-radius: var(--l-radius);
    padding: 0 20px;

    width: max-content;
    height: 8vh;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon_container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      padding-left: 2%;
      padding-right: 2%;
      .icon {
        width: 20px;
        height: 20px;
        color: white;
        cursor: pointer;
      }
    }
  }
`;