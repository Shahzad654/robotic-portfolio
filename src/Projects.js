import ProjectImg from "./assets/Project1.jpg";
import ProjectImg2 from "./assets/Project2.jpg";
import ProjectImg3 from "./assets/Project3.jpg";
import ProjectImg4 from "./assets/Project4.png";
import ProjectImg5 from "./assets/no cloud.png";
import ProjectImg6 from "./assets/swing sauce.png";

const projectDetails = [
  {
    title: "Hand Crafted Notes",
    role: "System Designer, Integrator and Technology lead",
    description: [
      "Led the system design and integration of a personalized note-taking platform.",
      "Oversaw technology decisions to ensure seamless performance and scalability.",
    ],
    skill:"Leadership, Embedded System, Raspberry Pi, Python, Networking",
    members: "Hardware Support: Jason, Software Support: Prabhas ",
    image: ProjectImg,
    video:"https://www.youtube.com/embed/eGAg2fmg6bo?si=NbGxnl8nZ1iBa7Rd",
  },
  {
    title: "AlphaCore Turbulence",
    role: "System Designer and Integrator",
    description: [
      "Designed core systems and architectures to support the project's complex requirements.",
      "Integrated various components to ensure high performance and reliability.",
    ],
    members: "Aksahy, Sirah",
    image: ProjectImg,
  },
  {
    title: "Node-Cloud",
    role: "DevOps Engineer",
    description: [
      "Managed DevOps processes to streamline application deployment and maintenance.",
      "Ensured cloud infrastructure was scalable and optimized for performance.",
    ],
     skill:"AWS, NextCloud",
    image: ProjectImg5,
  },
  {
    title: "SwingSauce",
    role: "BackEnd Programmer",
    description: [
      "Developed and maintained backend systems to power the platform's core functionality.",
      "Ensured smooth data processing and efficient service delivery.",
    ],
    skill:"Python, OpenCv, Machine learning, ffmpeg, Drone Development ",
    image: ProjectImg6,
  },
];

const outletprojectDetails = [
  {
    title: "Drone lifting package",
    description:
      "An autonomous drone designed for efficient, fast, and reliable package delivery.",
    image: ProjectImg2,
    video: "https://www.youtube.com/embed/ak6DsEb4h6Q?si=2DcvGFcCXhqY_8U9",
  },
  {
    title: "Home Lab",
    description:
      "A compact home lab server rack with servers, networking hardware, and organized cabling.",
    image: ProjectImg4,
  },
  {
    title: "Hexapod",
    description:
      "A versatile hexapod robot designed for stable and agile movement across diverse terrains.",
    image: ProjectImg3,
  },
];

export { projectDetails, outletprojectDetails };
