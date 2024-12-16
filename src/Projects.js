import ProjectImg from "./assets/Project1.jpg";
import ProjectImg2 from "./assets/Project2.jpg";
import ProjectImg3 from "./assets/Project3.jpg";
import ProjectImg4 from "./assets/Project4.png";
import ProjectImg5 from "./assets/no cloud.png";
import ProjectImg6 from "./assets/swing sauce.png";
import {generateSlug} from './utils/slugify'

const projectDetails = [
  {
    title: "Hand Crafted Notes",
    role: "System Designer, Integrator and Technology lead",
    description: [
      "I had the privilege of collaborating with HandCraftedNotes, an innovative startup aiming to revolutionize the way businesses engage with their clients. ",
      "As the Lead Engineer, I was entrusted with designing the overall system architecture and spearheading the development of cutting-edge automated machines. ",
    ],
    features: [
      "Partnered with HandCraftedNotes, a forward-thinking startup focused on transforming client engagement for businesses.",
      "Served as the Lead Engineer, taking responsibility for the overarching system architecture and technical strategy.",
      "Designed and developed advanced automated machines tailored to streamline and enhance operational processes.",
      "Created robust, scalable, and efficient system frameworks to support innovative business solutions.",
    ],
    skill: "Leadership, Embedded System, Raspberry Pi, Python, Networking",
    members: "Hardware Support: Jason, Software Support: Prabhas ",
    image: ProjectImg,
    video: "https://www.youtube.com/embed/eGAg2fmg6bo?si=NbGxnl8nZ1iBa7Rd",
    clientName:'Temford',
    type:"Website",
    duration:"1 Month",
    slug: generateSlug("Hand Crafted Notes"),
    
  },
  {
    title: "Node-Cloud",
    role: "DevOps Engineer",
    description: [
      "I had the pleasure of working with NodeLeaf, a tech company dedicated to delivering affordable and secure collaborative tools to its clients.",
      "As a key contributor, I designed and implemented CI/CD pipelines that automated their AWS infrastructure, enabling seamless software integration with their domain and Nextcloud—an open-source, self-hosted file management solution. ",
    ],
    features: [
      "Partnered with HandCraftedNotes, a forward-thinking startup focused on transforming client engagement for businesses.",
      "Served as the Lead Engineer, taking responsibility for the overarching system architecture and technical strategy.",
      "Designed and developed advanced automated machines tailored to streamline and enhance operational processes.",
      "Created robust, scalable, and efficient system frameworks to support innovative business solutions.",
    ],
    skill: "AWS, NextCloud",
    image: ProjectImg5,
    clientName:'Temford',
    type:"Website",
    duration:"1 Month",
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
      "Partnered with HandCraftedNotes, a forward-thinking startup focused on transforming client engagement for businesses.",
      "Served as the Lead Engineer, taking responsibility for the overarching system architecture and technical strategy.",
      "Designed and developed advanced automated machines tailored to streamline and enhance operational processes.",
      "Created robust, scalable, and efficient system frameworks to support innovative business solutions.",
    ],
    skill: "Python, OpenCv, Machine learning, ffmpeg, Drone Development ",
    image: ProjectImg6,
    clientName:'Temford',
    type:"Website",
    duration:"1 Month",
    slug: generateSlug("SwingSauce"),
  },
];

const outletprojectDetails = [
  {
    title: "Drone Lifting Package",
    description:
      "An advanced autonomous drone system engineered to revolutionize package delivery by ensuring unparalleled efficiency, speed, and reliability. This innovative drone leverages cutting-edge technology, including precise navigation systems, real-time route optimization, and advanced obstacle detection, to facilitate seamless and timely delivery operations. Designed for various industries, it supports environmentally sustainable practices by reducing reliance on traditional transportation methods while maintaining high standards of safety and customer satisfaction.",
    image: ProjectImg2,
    features: [
      "Partnered with HandCraftedNotes, a forward-thinking startup focused on transforming client engagement for businesses.",
      "Served as the Lead Engineer, taking responsibility for the overarching system architecture and technical strategy.",
      "Designed and developed advanced automated machines tailored to streamline and enhance operational processes.",
      "Created robust, scalable, and efficient system frameworks to support innovative business solutions.",
    ],
    role: "System Designer, Lead Engineer, Integrator",
    skill: "Leadership, Embedded System, Raspberry Pi, Python, Networking",
    video: "https://www.youtube.com/embed/ak6DsEb4h6Q?si=2DcvGFcCXhqY_8U9",
    clientName:'Temford',
    type:"Website",
    duration:"1 Month",
    slug: generateSlug("Drone Lifting Package"),
  },
  {
    title: "Home Lab",
    description:
      "A compact and efficient home lab server rack designed to support advanced computing, networking, and storage needs. This rack includes high-performance servers, reliable networking hardware such as switches and routers, and meticulously organized cabling for optimal airflow and ease of maintenance. It is tailored for enthusiasts and professionals seeking a scalable solution for hosting virtual machines, testing development environments, managing data backups, or experimenting with advanced network setups. The rack’s design prioritizes space efficiency, noise reduction, and accessibility, making it an ideal choice for home or small office deployments.",
    role: "System Designer, Lead Engineer, Integrator",
    features: [
      "Partnered with HandCraftedNotes, a forward-thinking startup focused on transforming client engagement for businesses.",
      "Served as the Lead Engineer, taking responsibility for the overarching system architecture and technical strategy.",
      "Designed and developed advanced automated machines tailored to streamline and enhance operational processes.",
      "Created robust, scalable, and efficient system frameworks to support innovative business solutions.",
    ],
    skill: "Leadership, Embedded System, Raspberry Pi, Python, Networking",
    clientName:'Temford',
    type:"Website",
    duration:"1 Month",
    image: ProjectImg4,
    slug: generateSlug("Home Lab"),
  },
  {
    title: "Hexapod",
    description:
      "A highly adaptable hexapod robot engineered for exceptional stability and agility across a wide range of terrains. Featuring six independently articulated legs, this robot excels in navigating challenging environments, including rough, uneven, and unpredictable surfaces. Equipped with advanced sensors, precise motion control systems, and customizable movement patterns, it is ideal for applications in exploration, search and rescue, inspection, and research. The robot's robust design ensures durability, while its modular construction allows for easy upgrades and integration of additional tools or sensors, making it a versatile platform for diverse operational needs.",
    role: "System Designer, Lead Engineer, Integrator",
    features: [
      "Partnered with HandCraftedNotes, a forward-thinking startup focused on transforming client engagement for businesses.",
      "Served as the Lead Engineer, taking responsibility for the overarching system architecture and technical strategy.",
      "Designed and developed advanced automated machines tailored to streamline and enhance operational processes.",
      "Created robust, scalable, and efficient system frameworks to support innovative business solutions.",
    ],
    skill: "Leadership, Embedded System, Raspberry Pi, Python, Networking",
    image: ProjectImg3,
    clientName:'Temford',
    type:"Website",
    duration:"1 Month",
    slug: generateSlug("Hexapod"),
  },
];


// const entrepenurshipDetails = [
//   {
//     title: "PIRE Fellowship KAIST",
//     role: "Researcher",
//     description: [
//       "Acquired a $5,000+ National Science Foundation (NSF) grant for international robotics research.",
//       "Utilized computer vision to localize and classify several different objects.",
//       "Performed successful pick-and-place experimentation with classified objects via the Rainbow Robotics RB5 robotic arm.",
//     ],
//     achivements: [
//       "Contributed to Team Avatar-Hubo’s success in a $10M global robotics competition (150+ teams, 10+ countries).",
//       "Managed and instructed 5+ undergraduate engineering students to expedite robotic hardware and software development.",
//       ,
//     ],
//     companyName: "Devsigns",
//     duration: "1 Month",
//     slug: generateSlug("PIRE Fellowship KAIST"),
//   },
//   {
//     title: "PIRE Fellowship KAIST",
//     role: "Researcher",
//     description: [
//       "Acquired a $5,000+ National Science Foundation (NSF) grant for international robotics research.",
//       "Utilized computer vision to localize and classify several different objects.",
//       "Performed successful pick-and-place experimentation with classified objects via the Rainbow Robotics RB5 robotic arm.",
//     ],
//     achivements: [
//       "Contributed to Team Avatar-Hubo’s success in a $10M global robotics competition (150+ teams, 10+ countries).",
//       "Managed and instructed 5+ undergraduate engineering students to expedite robotic hardware and software development.",
//       ,
//     ],
//     companyName: "XYZ",
//     duration: "1 Month",
//     slug: generateSlug("PIRE Fellowship KAIST"),
//   },
// ];


const entrepenurshipDetails = [
  {
    companyName: "Devsigns",
    projects: [
      {
        title: "PIRE Fellowship KAIST",
        role: "xyz",
        description: [
          "Acquired a $5,000+ National Science Foundation (NSF) grant for international robotics research.",
          "Utilized computer vision to localize and classify several different objects.",
          "Performed successful pick-and-place experimentation with classified objects via the Rainbow Robotics RB5 robotic arm.",
        ],
        achievements: [
          "Contributed to Team Avatar-Hubo’s success in a $10M global robotics competition (150+ teams, 10+ countries).",
          "Managed and instructed 5+ undergraduate engineering students to expedite robotic hardware and software development.",
        ],
        duration: "1 Month",
        slug: generateSlug("PIRE Fellowship KAIST"),
      },
    ],
  },
  {
    companyName: "XYZ",
    projects: [
      {
        title: "Entrepenurship2",
        role: "Researcher",
        description: [
          "Acquired a $5,000+ National Science Foundation (NSF) grant for international robotics research.",
          "Utilized computer vision to localize and classify several different objects.",
          "Performed successful pick-and-place experimentation with classified objects via the Rainbow Robotics RB5 robotic arm.",
        ],
        achievements: [
          "Contributed to Team Avatar-Hubo’s success in a $10M global robotics competition (150+ teams, 10+ countries).",
          "Managed and instructed 5+ undergraduate engineering students to expedite robotic hardware and software development.",
        ],
        duration: "1 Month",
        slug: generateSlug("Entrepenurship2"),
      },
    ],
  },
];


export { projectDetails, outletprojectDetails, entrepenurshipDetails };
