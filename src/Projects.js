import ProjectImg from "./assets/HandCraftedNote.png";
import ProjectImg2 from "./assets/Project2.jpg";
import ProjectImg3 from "./assets/Project3.jpg";
import ProjectImg4 from "./assets/Project4.png";
import ProjectImg5 from "./assets/no cloud.png";
import ProjectImg6 from "./assets/swing sauce.png";
import ResearchImg from './assets/research.jpg'
import TravelImg from "./assets/travel.jpg";
import {generateSlug} from './utils/slugify'

const projectDetails = [
  {
    title: "HandCraftedNote",
    role: "System Designer, Integrator and Technology lead",
    description: [
      "I had the privilege of collaborating with HandCraftedNote, an innovative startup aiming to revolutionize the way businesses engage with their clients. ",
      "As the Lead Engineer, I was entrusted with designing the overall system architecture and spearheading the development of cutting-edge automated machines. ",
      "My role involved bridging the gap between conceptual ideas and practical implementation, ensuring the solutions aligned with the company’s vision of transforming client engagement. ",
      "In addition to technical development, I collaborated closely with cross-functional teams to integrate advanced technologies and streamline production workflows. ",
      "This experience not only deepened my expertise in automation and system design but also reinforced the importance of innovation and adaptability in driving meaningful change. ",
    ],
    features: [
      "Partnered with HandCraftedNotes, a forward-thinking startup focused on transforming client engagement for businesses.",
      "Designed and built a custom frame using aluminum extrusion, ensuring durability, precision, and adaptability to project requirements.",
      "Developed a tailored 3D printer firmware from scratch to optimize performance, enhance functionality, and align with the unique specifications of the system.",
    ],
    skill: "Leadership, Embedded System, Raspberry Pi, Python, Networking",
    members: "Software Support: Prabhas, Hardware Support: Son",
    image: ProjectImg,
    video: "https://www.youtube.com/embed/wzJ6UgECdek?si=mgB2FqLQm13j09rr",
    clientName:'David Voigt',
    type:"Website",
    duration:"10 Months",
    slug: generateSlug("Hand Crafted Note"),
    
  },
  {
    title: "Node-Cloud",
    role: "DevOps Engineer",
    description: [
      "I had the pleasure of working with Node-Cloud, a tech company dedicated to delivering affordable and secure collaborative tools to its clients.",
      "As a key contributor, I designed and implemented robust CI/CD pipelines that automated their AWS infrastructure, streamlining deployments and improving operational efficiency.",
      "The pipelines were optimized to enable seamless software integration with their domain and Nextcloud—an open-source, self-hosted file management solution—ensuring reliability, scalability, and enhanced user experience.",
    ],
    features: [
      "Set up AWS infrastructure to host on-demand Nextcloud instances. Using EC2 instances and Docker, users can deploy Nextcloud with a single click, achieving fully functional solutions in just a few minutes.",
      "The automation was meticulously designed to be cost-effective for AWS hosting while ensuring robust data preservation and scalability.",

    ],
    skill: "AWS, NextCloud, Dockers, EC2, Server Side Designing",
    image: ProjectImg5,
    clientName:'Houcine b',
    type:"AWS System Architecture",
    duration:"6 Month",
    slug: generateSlug("Node-Cloud"),
  },
  {
    title: "SwingSauce",
    role: "BackEnd Programmer",
    description: [
      "I was hired by SwingSauce to optimize their novel software and explore various methods to deliver high-quality reviews to their clients.",
      "In this role, I focused on enhancing the efficiency and effectiveness of their video processing systems, ensuring timely and personalized delivery of content. ",
    ],
    features: [
      "An automated algorithm was developed to detect users' golf swings and seamlessly stitch videos from multiple perspectives. The algorithm was optimized to run on a GPU, ensuring high-speed processing and superior performance.",
      "A drone prototype was also created to test the feasibility of capturing video from various angles, adding a dynamic element to the video analysis process.",
    ],
    skill: "Python, OpenCv, Machine learning, ffmpeg, Drone Development ",
    image: ProjectImg6,
    clientName:'Patrick',
    type:"BackEnd",
    duration:"3 Month",
    slug: generateSlug("SwingSauce"),
  },
];

const outletprojectDetails = [
  {
    title: "Drone Lifting Package",
    description:[
      "An advanced autonomous drone system was engineered to lift and deliver packages, ensuring stability, speed, and reliability throughout its operations.",
      "This prototype drone was developed as an undergraduate project to explore and integrate various technologies, including LiDAR sensors, flight controllers, visual SLAM, and navigation in GPS-denied environments.",
    ],
    image: ProjectImg2,
    role: "System Designer, Integrator",
    skill: "Embedded System, Raspberry Pi, Python, Drone, Pixhawk, ROS, Visual SLAM",
    video: "https://www.youtube.com/embed/jRZx4EFU2PA?si=u2OQqsA0PQ9zdaiN",
    clientName:'Self',
    type:"Drone",
    duration:"3 Months",
    slug: generateSlug("Drone Lifting Package"),
  },
  {
    title: "Home Lab",
    description:[
      "I built a self-hosted server using second-hand Dell servers to create a cost-effective and efficient infrastructure for my projects. By leveraging Proxmox as the virtualization platform, I established a robust system capable of hosting my own websites and various microservices. This setup not only provides complete control over my data and applications but also demonstrates the versatility of repurposed hardware to deliver high-performance results in a personalized environment. The system is optimized for scalability and reliability, ensuring it meets both current and future demands.",
    ],
    role: "Self Hosting, System Designer",
    skill: "Server Build, Docker, Proxmox, VPN, SelfHosted",
    clientName:'Self',
    type:"Server",
    duration:"Everlasting",
    image: ProjectImg4,
    slug: generateSlug("Home Lab"),
  },
  {
    title: "Hexapod",
    description:
      "A highly dexterous hexapod robot was engineered to navigate rough terrain and pick up objects with precision. The system was equipped with a camera for first-person view (FPV) operation, enabling remote control and enhanced situational awareness.",
    role: "System Designer, Lead Engineer, Integrator",
    skill: "Arduino, Dynamixels, Radio Control",
    image: ProjectImg3,
    clientName:'Self',
    type:"Hardware",
    duration:"3 Month",
    slug: generateSlug("Hexapod"),
  },
];

 const entrepenurshipDetails = [
  
//   {
//     companyName: "Coming Soon....",
//     role: "Co-Founder",
//     projects: [
//       {
//         firstSubHeading: "Research Experience",
//         description: [
//           "I have three research paper and 4 years of research experience.",
//           "My work focused on Teleoperation of robots",
//           "I also worked with AR/VR.",
//         ],
//         image: ResearchImg,
//       },

//       {
//         firstSubHeading: "Travel",
//         description: [
//           "I have three research paper and 4 years of research experience.",
//           "My work focused on Teleoperation of robots",
//           "I also worked with AR/VR.",
//         ],
//         image: TravelImg,
//       },
//     ],
//   },

//   {
//     companyName: "Devsigns",
//     role: "Researcher",
//     projects: [
//       {
//         firstSubHeading: "Research Experience",
//         description: [
//           "I have three research paper and 4 years of research experience.",
//           "My work focused on Teleoperation of robots",
//           "I also worked with AR/VR.",
//         ],
//         image: ResearchImg,
//       },

//       {
//         firstSubHeading: "Research Experience2",
//         description: [
//           "I have three research paper and 4 years of research experience.",
//           "My work focused on Teleoperation of robots",
//           "I also worked with AR/VR.",
//         ],
//         image: TravelImg,
//       },
//     ],
//   },
 ];


export { projectDetails, outletprojectDetails, entrepenurshipDetails };
