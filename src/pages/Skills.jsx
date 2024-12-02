import React, {useState} from 'react'
import styled from 'styled-components'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Networking from '../assets/networking.svg'
import IT from "../assets/IT.svg";
import TCP from "../assets/tcp.svg";
import VM from "../assets/vmware.svg";
import Server from "../assets/servers.svg";
import Proxmox from '../assets/proxmox.svg'
import CICD from "../assets/CICD.svg";
import Backend from "../assets/backend.svg";
import OS from '../assets/os.svg'
import Linux from "../assets/linux.svg";
import Drone from "../assets/drone.svg";
import SolidWorks from "../assets/solidworks.svg";
import Python from "../assets/python.svg";
import Vision from "../assets/view.svg";
import VR from "../assets/vr.svg";
import Unity from "../assets/unity.svg";
import RasberryPI from "../assets/raspberrypi.svg";
import Printing from "../assets/printbot.svg";
import { motion } from "framer-motion";

export default function Skills() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
      <StyledSkils
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h1>Skills</h1>
        <div className="main_skills">
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
                  color: "var(--background-color-light)",
                },

                "& .MuiTab-root.Mui-selected": {
                  color: "white !important",
                },
              }}
            >
              <Tab label="Robotics" />
              <Tab label="DevOps" />
            </Tabs>
          </Box>
        </div>
        <div className="tab_content">
          {value === 0 && <Robotics />} {value === 1 && <Devops />}
        </div>
      </StyledSkils>
    </>
  );
}



const Devops = () => {
return (
  <StyledDevops>
    <div className="main_devops">
      <div className="skill_cards">
        <div className="card">
          <div className="image_border">
            <img src={Networking} alt="" />
          </div>

          <h4>Networking</h4>
        </div>

        <div className="card">
          <div className="image_border">
            <img src={IT} alt="" />
          </div>

          <h4>IT</h4>
        </div>
        <div className="card">
          <div className="image_border">
            <img src={TCP} alt="" />
          </div>

          <h4>Routing</h4>
        </div>

        <div className="card">
          <div className="image_border">
            <img src={VM} alt="" />
          </div>

          <h4>Virtualization</h4>
        </div>

        <div className="card">
          <div className="image_border">
            <img src={Server} alt="" />
          </div>

          <h4>Self hosted Servers </h4>
        </div>

        <div className="card">
          <div className="image_border">
            <img src={Proxmox} alt="" />
          </div>

          <h4>Proxmox </h4>
        </div>

        <div className="card">
          <div className="image_border">
            <img src={CICD} alt="" />
          </div>

          <h4>CI/CD</h4>
        </div>

        <div className="card">
          <div className="image_border">
            <img src={Backend} alt="" />
          </div>

          <h4>Backend</h4>
        </div>
      </div>
    </div>
  </StyledDevops>
);
}




const Robotics = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      <>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5%",
          }}
        >
          <Tabs
            onChange={handleChange}
            value={value}
            aria-label="Tabs where selection follows focus"
            selectionFollowsFocus
            sx={{
              "& .MuiTabs-indicator": {
                display: "none",
              },

              "& .MuiTab-root": {
                fontFamily: "Poppins, sans-serif",
                fontSize: "1.2rem",
                textTransform: "none",
                color: "var(--background-color-light)",

                // border:'2px solid var(--background-color-dark)'
                // position: "relative",
                // transition: "background-color 0.3s ease",
              },

              "& .MuiTab-root.Mui-selected": {
                backgroundColor: "var(--primary-color)",
                color: "white !important",
                borderRadius: "var(--l-radius)",
              },
            }}
          >
            <Tab label="Software" />
            <Tab label="Hardware" />
          </Tabs>
        </Box>

        <div className="tab_content">
          {value === 0 && <Software />} {value === 1 && <Hardware />}
        </div>
      </>
    );
}


const Software = () => {
    return (
      <StyledDevops>
        <div className="main_devops">
          <div className="skill_cards">
            <div className="card">
              <div className="image_border">
                <img src={OS} alt="" />
              </div>

              <h4>Robot OS </h4>
            </div>

            <div className="card">
              <div className="image_border">
                <img src={Linux} alt="" />
              </div>

              <h4>Linux</h4>
            </div>
            <div className="card">
              <div className="image_border">
                <img src={Drone} alt="" />
              </div>

              <h4>Drone Firmwares</h4>
            </div>

            <div className="card">
              <div className="image_border">
                <img src={SolidWorks} alt="" />
              </div>

              <h4>Solidworks</h4>
            </div>

            <div className="card">
              <div className="image_border">
                <img src={Python} alt="" />
              </div>

              <h4>Python</h4>
            </div>

            <div className="card">
              <div className="image_border">
                <img src={Vision} alt="" />
              </div>

              <h4>Computer Vision</h4>
            </div>

            <div className="card">
              <div className="image_border">
                <img src={VR} alt="" />
              </div>

              <h4>VR</h4>
            </div>

            <div className="card">
              <div className="image_border">
                <img src={Unity} alt="" />
              </div>

              <h4>Unity Game</h4>
            </div>
          </div>
        </div>
      </StyledDevops>
    );
}


const Hardware = () => {
  return (
    <>
      <StyledDevops>
        <div className="main_devops">
          <div className="skill_cards">
            <div className="card">
              <div className="image_border">
                <img src={RasberryPI} alt="" />
              </div>

              <h4>RaspberryPi</h4>
            </div>

            <div className="card">
              <div className="image_border">
                <img src={Printing} alt="" />
              </div>

              <h4>3D Printing</h4>
            </div>
            <div className="card">
              <div className="image_border">
                <img src={Drone} alt="" />
              </div>

              <h4>Drone Firmwares</h4>
            </div>
          </div>
        </div>
      </StyledDevops>
    </>
  );
};






const StyledSkils = styled(motion.div)`
  width: 80%;
  margin: var(--section-margin) auto;
  height: max-content;
  h1 {
    font-size: var(--xl-heading);
    color: white;
  }
  .main_skills {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledDevops = styled.div`
  .skill_cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 5%;
    .card {
      width: 250px;
      height: 150px;
      background-color: var(--background-color-light);
      border-radius: var(--m-radius);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex-direction: column;
      cursor: pointer;
      .image_border {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        background-color: var(--primary-color);
        border-radius: var(--m-radius);
        img {
          width: 80%;
          height: auto;
        }
      }

      h4 {
        color: white;
      }
    }
  }
`;
