import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Networking from '../assets/networking-05-svgrepo-com (1).svg'
import IT from "../assets/it-infrastructure-software-svgrepo-com.svg";
import TCP from "../assets/routing-svgrepo-com (1).svg";
import VM from "../assets/vmware-svgrepo-com.svg";
import Server from "../assets/servers-svgrepo-com.svg";
import Proxmox from '../assets/proxmox-svgrepo-com.svg'
import CICD from "../assets/ci-cd-svgrepo-com.svg";
import Backend from "../assets/database-svgrepo-com.svg";
import Drone from "../assets/drone-8-svgrepo-com (1).svg";
import SolidWorks from "../assets/solidworks-svgrepo-com.svg";
import Python from "../assets/python-svgrepo-com.svg";
import Vision from "../assets/view-eye-svgrepo-com.svg";
import VR from "../assets/vr-glasses-svgrepo-com.svg";
import Unity from "../assets/unity-svgrepo-com.svg";
import RasberryPI from "../assets/brand-raspberrypi-svgrepo-com (1).svg";
import Printing from "../assets/printbot-svgrepo-com.svg";
import OS1 from '../assets/os-svgrepo-com.svg'
import Linux from "../assets/linux-svgrepo-com.svg";



import DroneBlue from "../assets/drone blue.svg";
import SolidWorksBlue from "../assets/solidworks blue.svg";
import PythonBlue from "../assets/python blue.svg";
import VisionBlue from "../assets/view blue.svg";
import VRBlue from "../assets/vr blue.svg";
import UnityBlue from "../assets/unity blue.svg";
import OSBlue from '../assets/OS blue.svg'
import LinuxBlue from "../assets/linux blue.svg";
import RasberryPIBlue from "../assets/raspberrypi blue.svg";
import PrintingBlue from "../assets/printer blue.svg";
import NetworkingBlue from '../assets/networking blue.svg'
import ITBlue from "../assets/IT Blue.svg";
import TCPBlue from "../assets/routing blue.svg";
import VMBlue from "../assets/vmware blue.svg";
import ServerBlue from "../assets/servers blue.svg";
import ProxmoxBlue from '../assets/proxmox blue.svg'
import CICDBlue from "../assets/ci-cd blue.svg";
import BackendBlue from "../assets/database blue.svg";


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
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      if (document.body.classList.contains('dark-mode')) {
        setIsDarkTheme(true);
      } else {
        setIsDarkTheme(false);
      }
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

return (
  <StyledDevops>
    <div className="main_devops">
      <div className="skill_cards">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: false }}
          
        >
          {/* <div className="image_border">
           
          </div> */}
          {/* <img src={Networking} alt="" /> */}
          <img src={isDarkTheme ? Networking : NetworkingBlue} alt="OS" />

          <h4>Networking</h4>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: false }}
        >
          {/* <div className="image_border">
            
          </div> */}
          {/* <img src={IT} alt="" /> */}
          <img src={isDarkTheme ? IT : ITBlue} alt="OS" />

          <h4>IT</h4>
        </motion.div>
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: false }}
        >
          {/* <div className="image_border">
           
          </div> */}
          {/* <img src={TCP} alt="" /> */}
          <img src={isDarkTheme ? TCP : TCPBlue} alt="OS" />

          <h4>Routing</h4>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: false }}
        >
          {/* <div className="image_border">
           
          </div> */}
          {/* <img src={VM} alt="" /> */}
          <img src={isDarkTheme ? VM : VMBlue} alt="OS" />

          <h4>Virtualization</h4>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: false }}
        >
          {/* <div className="image_border">
           
          </div> */}
          {/* <img src={Server} alt="" /> */}
          <img src={isDarkTheme ? Server : ServerBlue} alt="OS" />

          <h4>Self hosted Servers </h4>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          viewport={{ once: false }}
        >
          {/* <div className="image_border">
           
          </div> */}
          {/* <img src={Proxmox} alt="" /> */}
          <img src={isDarkTheme ? Proxmox : ProxmoxBlue} alt="OS" />

          <h4>Proxmox </h4>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          viewport={{ once: false }}
        >
          {/* <div className="image_border">
            
          </div> */}
          {/* <img src={CICD} alt="" /> */}
          <img src={isDarkTheme ? CICD : CICDBlue} alt="OS" />

          <h4>CI/CD</h4>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          viewport={{ once: false }}
        >
          {/* <div className="image_border">
           
          </div> */}
          {/* <img src={Backend} alt="" /> */}
          <img src={isDarkTheme ? Backend : BackendBlue} alt="OS" />

          <h4>Backend</h4>
        </motion.div>
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
                color: "var(--background-color-dark)",
              },

              "& .MuiTab-root.Mui-selected": {
                backgroundColor: "var(--primary-color)",
                color: "white !important",
                borderRadius: "var(--l-radius)",
              },

             "body.light-mode &": {
                    "& .MuiTab-root": {
                      color: "black",
                    },
                    "& .MuiTab-root.Mui-selected": {
                      color: "white !important",
                     backgroundColor: "var(--light-blue-color)",
                    },
                    "& .MuiTabs-indicator": {
                      backgroundColor: "var(--light-blue-color)",
                    },
                  },

              "body.dark-mode &": {
                "& .MuiTab-root": {
                  color: "var(--background-color-light)",
                },
                "& .MuiTab-root.Mui-selected": {
                  color: "white !important",
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "var(--primary-color)",
                },
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
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      if (document.body.classList.contains('dark-mode')) {
        setIsDarkTheme(true);
      } else {
        setIsDarkTheme(false);
      }
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

    return (
      <StyledDevops>
        <div className="main_devops">
          <div className="skill_cards">
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: false }}
            >
              {/* <div className="image_border"></div> */}

              {/* <img src={OS1} alt="" /> */}
              <img src={isDarkTheme ? OS1 : OSBlue} alt="OS" />

              <h4>Robot OS </h4>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: false }}
            >
              {/* <div className="image_border"></div> */}
              {/* <img src={Linux} alt="" /> */}
              <img src={isDarkTheme ? Linux : LinuxBlue} alt="Linux" />
              <h4>Linux</h4>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: false }}
            >
              {/* <div className="image_border"></div> */}
              {/* <img src={Drone} alt="" /> */}
              <img src={isDarkTheme ? Drone : DroneBlue} alt="Linux" />

              <h4>Drone Firmwares</h4>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: false }}
            >
              {/* <div className="image_border">
                
              </div> */}
              {/* <img src={SolidWorks} alt="" /> */}
              <img src={isDarkTheme ? SolidWorks : SolidWorksBlue} alt="Linux" />

              <h4>Solidworks</h4>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: false }}
            >
              {/* <div className="image_border"></div> */}
              {/* <img src={Python} alt="" /> */}
              <img src={isDarkTheme ? Python : PythonBlue} alt="Linux" />

              <h4>Python</h4>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: false }}
            >
              {/* <div className="image_border">
                
              </div> */}
              {/* <img src={Vision} alt="" /> */}
              <img src={isDarkTheme ? Vision : VisionBlue} alt="Linux" />

              <h4>Computer Vision</h4>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: false }}
            >
              {/* <div className="image_border"></div> */}
              {/* <img src={VR} alt="" /> */}
              <img src={isDarkTheme ? VR : VRBlue} alt="Linux" />

              <h4>VR</h4>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              viewport={{ once: false }}
            >
              {/* <div className="image_border"></div> */}
              {/* <img src={Unity} alt="" /> */}
              <img src={isDarkTheme ? Unity : UnityBlue} alt="Linux" />

              <h4>Unity Game</h4>
            </motion.div>
          </div>
        </div>
      </StyledDevops>
    );
}


const Hardware = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      if (document.body.classList.contains('dark-mode')) {
        setIsDarkTheme(true);
      } else {
        setIsDarkTheme(false);
      }
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <StyledDevops>
        <div className="main_devops">
          <div className="skill_cards">
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: false }}
            >
              {/* <div className="image_border">
                
              </div> */}
              {/* <img src={RasberryPI} alt="" /> */}
              <img src={isDarkTheme ? RasberryPI : RasberryPIBlue} alt="Linux" />

              <h4>RaspberryPi</h4>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: false }}
            >
              {/* <div className="image_border"></div> */}
              {/* <img src={Printing} alt="" /> */}
              <img src={isDarkTheme ? Printing : PrintingBlue} alt="Linux" />

              <h4>3D Printing</h4>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: false }}
            >
              {/* <div className="image_border">
                
              </div> */}
              {/* <img src={Drone} alt="" /> */}
              <img src={isDarkTheme ? Drone : DroneBlue} alt="Linux" />

              <h4>Drone Firmwares</h4>
            </motion.div>
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
    margin-bottom: var(--heading-margin);
  }
  .main_skills {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1024px) {
  
      h1 {
        text-align: center;
      }
  }

  @media (max-width: 640px) {
    h1 {
      text-align: center;
    }

    .main_skills {
      margin: var(--section-margin) auto;
    }
  }

  
`;

const StyledDevops = styled.div`
  .skill_cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.2rem;
    margin-top: var(--section-margin);
    .card {
      width: 250px;
      height: 150px;
      /* background-color: var(--background-color-light); */
      background: #1E3A8A99;
box-shadow:  -20px -20px 60px #1a317580,
             20px 20px 60px white;
      border-radius: var(--m-radius);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex-direction: column;
      cursor: pointer;

      
      h4 {
        font-weight: 300;
      }
      .image_border {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        background-color: var(--primary-color);
        border-radius: var(--m-radius);
      }
      img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 28%;
        height: auto;
      }
    }
  }

  body.light-mode & {
    .skill_cards {
      .card {
        background-color: var(--light-gray-color);
        h4{
          color: black;
        }
      }
    }
  }

  body.dark-mode & {
    .skill_cards {
      .card {
        /* background-color: var(--background-color-light); */
        background: #FFFFFF08;
box-shadow:  -20px -20px 60px #ffffff02,
             20px 20px 60px #ffffff02;
      }
    }
  }
`;
