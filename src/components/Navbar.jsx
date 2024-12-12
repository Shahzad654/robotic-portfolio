import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Drawer,
} from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const toggleProjectsDropdown = (e) => {
    e.stopPropagation();
    setProjectsOpen((prevState) => !prevState);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {/* Home */}
        <ListItem disablePadding>
          <ListItemButton>
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <ListItemText
                primary="Home"
                sx={{
                  "& .MuiTypography-root": {
                    color: "var(--background-color-dark)",
                    fontFamily: "Poppins, sans-serif",
                  },
                }}
              />
            </Link>
          </ListItemButton>
        </ListItem>

        {/* Projects Dropdown */}
        <ListItem disablePadding>
          <ListItemButton onClick={toggleProjectsDropdown}>
            <ListItemText
              primary="Projects"
              sx={{
                "& .MuiTypography-root": {
                  color: "var(--background-color-dark)",
                  fontFamily: "Poppins, sans-serif",
                },
              }}
            />
            <FiChevronDown />
          </ListItemButton>
        </ListItem>
        {projectsOpen && (
          <Box ml={2}>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link to="/freelance-projects">
                    <ListItemText
                      primary="Freelance"
                      sx={{
                        "& .MuiTypography-root": {
                          color: "var(--background-color-dark)",
                          fontFamily: "Poppins, sans-serif",
                        },
                      }}
                    />
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link to="/outlet-projects">
                    <ListItemText
                      primary="Outlet"
                      sx={{
                        "& .MuiTypography-root": {
                          color: "var(--background-color-dark)",
                          fontFamily: "Poppins, sans-serif",
                        },
                      }}
                    />
                  </Link>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <Link to="/entrepreneurship">
                    <ListItemText
                      primary="Entrepreneurship"
                      sx={{
                        "& .MuiTypography-root": {
                          color: "var(--background-color-dark)",
                          fontFamily: "Poppins, sans-serif",
                        },
                      }}
                    />
                  </Link>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        )}

        {/* Experience */}
        <ListItem disablePadding>
          <ListItemButton>
            <Link
              to="/experience"
              style={{
                textDecoration: "none",
              }}
            >
              <ListItemText
                primary="Experience"
                sx={{
                  "& .MuiTypography-root": {
                    color: "var(--background-color-dark)",
                    fontFamily: "Poppins, sans-serif",
                  },
                }}
              />
            </Link>
          </ListItemButton>
        </ListItem>

        {/* Contact */}
        <ListItem disablePadding>
          <ListItemButton>
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
              }}
            >
              <ListItemText
                primary="Contact"
                sx={{
                  "& .MuiTypography-root": {
                    color: "var(--background-color-dark)",
                    fontFamily: "Poppins, sans-serif",
                  },
                }}
              />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <StyledNavbar>
        <div className="main_navbar">
          {/* <div className="icon_container">
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
          </div> */}

          <div className="navbar_container">
            <Link to="/" className="links">
              Home
            </Link>

            <div class="dropdown">
              <a class="dropbtn">Projects</a>
              <div class="dropdown-content">
                <Link to="/freelance-projects">Freelancing</Link>
                <Link to="/outlet-projects">Outlet</Link>
                <Link to="/Entrepreneurship">Entrepreneurship</Link>
              </div>
            </div>

            <Link to="/experience" className="links">
              Experience
            </Link>
            <Link to="/contact" className="links">
              Contact
            </Link>
          </div>
        </div>

        <div className="mobile_menu">
          <GiHamburgerMenu
            onClick={toggleDrawer(true)}
            style={{ width: "30px", height: "30px", cursor: "pointer" }}
          />
          <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
            {DrawerList}
          </Drawer>
        </div>
      </StyledNavbar>
    </>
  );
}

const StyledNavbar = styled.div`
  /* max-height: 10vh; */
  /* margin-top: 2%; */

  .main_navbar {
    /* background-color: var(--background-color-light); */
    border-radius: var(--l-radius);
    padding: 0 20px;

    width: max-content;
    height: 50px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .navbar_container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      padding-left: 2%;
      padding-right: 2%;

      .dropbtn {
        /* background-color: #4caf50; */
        color: white;
        padding: 16px;
        /* font-size: 16px; */
        border: none;
        cursor: pointer;

        &:hover {
          color: var(--primary-color-light);
        }
      }

      .links {
        &:hover {
          color: var(--primary-color-light);
        }
      }

      .dropdown {
        position: relative;
        display: inline-block;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        /* background-color: #f9f9f9; */
        background-color: var(--background-color-light);
        min-width: 160px;
        margin-left: -30px;
        margin-top: 16px;
        border-radius: var(--m-radius);
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
      }

      .dropdown-content a {
        color: white;
        padding: 12px 16px;
        text-decoration: none;
        border-radius: var(--s-radius);
        display: block;
      }

      .dropdown-content a:hover {
        background-color: var(--background-color-light);
      }

      .dropdown:hover .dropdown-content {
        display: block;
      }

      a {
        color: var(--text-white-color);
      }
    }

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

  .mobile_menu {
    display: none;
  }

  @media (max-width: 640px) {
    .main_navbar {
      display: none;
      .navbar_container {
        display: none;
      }
    }
    .mobile_menu {
      display: flex;
      justify-content: end;
      padding-right: 6%;
    }
  }

  body.light-mode & {
    .main_navbar {
      /* background-color: var(--light-gray-color); */
      background: #e3edf7;
      box-shadow: 20px 20px 60px #c1c9d2, -20px -20px 60px #ffffff;
      a {
        color: black;
      }
      .dropbtn {
        color: black;
        &:hover {
          color: var(--light-blue-color);
        }
      }

      .links {
        &:hover {
          color: var(--light-blue-color);
        }
      }

      .dropdown-content {
        /* background-color: var(--light-gray-color); */
        background: #e3edf7;
        box-shadow: 20px 20px 60px #c1c9d2, -20px -20px 60px #ffffff;
        /* box-shadow: 0 20px 60px #c1c9d2, 0 -20px 60px #ffffff; */
      }
      .dropdown-content a {
        color: black;
      }

      .dropdown-content a:hover {
        background-color: var(--light-blue-color);
        color: white;
      }
    }
  }

  body.dark-mode & {
    .main_navbar {
      box-shadow: 4px 4px 8px var(--shadow-color-dark),
          -4px -4px 8px var(--shadow-color-light);
      .dropdown-content {
        /* background-color: var(--background-color-light); */
        background-color: white;
      }
      .dropdown-content a{
        color: black;
      }
      .dropdown-content a:hover {
        background-color: var(--primary-color-light);
        color: white;
      }
    }
  }
`;
