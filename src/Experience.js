import { generateSlug } from "./utils/slugify";

const experienceDetails = [
  {
    title: "ANA Avatar Xprize Team (AVATAR-HUBO)",
    role: "Lead Integration Engineer",
    description: [
      "Contributed to Team Avatar-Hubo’s success in a $10M global robotics competition (150+ teams, 10+ countries).",
      "Integrated novel Virtual Reality software and hardware interfaces to streamline intuitive humanoid teleoperation.",
      "Spearheaded the design and manufacturing of a new 2 Degree-of-Freedom robotic neck linkage.",
      "Developed a seamless low-latency audio/video pipeline for real-time bidirectional communication.",
      "Constructed a new overarching network architecture to facilitate wireless mobile manipulator control.",
      "Managed and instructed 5+ undergraduate engineering students to expedite robotic hardware and software development.",
    ],
    video:
      "https://www.youtube.com/embed/NKDnU7MWiGY?si=iJ2wq1CR3neFq37v",
    achivements: [
      "Contributed to Team Avatar-Hubo’s success in a $10M global robotics competition (150+ teams, 10+ countries).",
      "Managed and instructed 5+ undergraduate engineering students to expedite robotic hardware and software development.",
      ,
    ],
    companyName: "DASL",
    duration: "2 Years",
    slug: generateSlug("ANA Avatar Xprize Team (AVATAR-HUBO)"),
  },
  {
    title: "TSLA UNLV Independent Research Contract",
    role: "Researcher",
    description: [
      "Designed an Augmented Reality teleoperation system for Tesla’s famous robot quadruped SPOT.",
      "Implemented perceptive mobile manipulation with SPOT via Haddington Dynamics’ robotic manipulator Dexter.",
      "Produced a Virtual Reality-based robot simulator via the 3D Game Engine Unity.",
    ],
    video: "https://www.youtube.com/embed/HAEc6R5E4UM?si=EyOw2p76kZs3gtZD",
    achivements: [
      "Contributed to Team Avatar-Hubo’s success in a $10M global robotics competition (150+ teams, 10+ countries).",
      "Managed and instructed 5+ undergraduate engineering students to expedite robotic hardware and software development.",
      ,
    ],
    companyName: "TSLA/UNLV",
    duration: "6 Months",
    slug: generateSlug("TSLA UNLV Independent Research Contract"),
  },
  {
    title: "Drone and Autonomous Systems Lab (DASL)",
    role: "Researcher",
    description: [
      "Conducted system design and experimentation in over 5+ cutting-edge publications from a world-renowned robotics lab.",
      "Demonstrated key research skills over several projects in: Computer Vision; Virtual Reality; LiDAR integration; sensor signal processing; wireless networking; low-latency robot teleoperation; and robotic telepresence.",
      "Won the Geekpwn Robot Agent Challenge Finals international robotics competition in Shanghai, China.",
    ],
    achivements: [
      "Contributed to Team Avatar-Hubo’s success in a $10M global robotics competition (150+ teams, 10+ countries).",
      "Managed and instructed 5+ undergraduate engineering students to expedite robotic hardware and software development.",
      ,
    ],
    companyName: "DASL",
    duration: "3 Years",
    slug: generateSlug("Drone and Autonomous Systems Lab (DASL)"),
  },
  {
    title: "Industrial Automation Center",
    role: "Project manager",
    description: [
      "Lead 10+ people team for a fortune 500 company contract. Designed and Integrated systems to achieve dynamic pick and place using industrial manipulators.",
    ],
    achivements: [
      "Managed and Industrial Projects",
      ,
    ],
    companyName: "UoFL",
    duration: "1 Year",
    slug: generateSlug("Industrial Automation Center"),
  },

  {
    title: "PIRE Fellowship KAIST",
    role: "Researcher",
    description: [
      "Acquired a $5,000+ National Science Foundation (NSF) grant for international robotics research.",
      "Utilized computer vision to localize and classify several different objects.",
      "Performed successful pick-and-place experimentation with classified objects via the Rainbow Robotics RB5 robotic arm.",
    ],
    video: "https://www.youtube.com/embed/W4hQQvK_ncU?si=5WgVqoCTbVKkRA2n",
    achivements: [
      "Gained valuable experience collaborating with engineers from diverse cultures, which broadened my perspective on problem-solving and fostered innovative approaches to challenges.",
    ],
    companyName: "KAIST - South Korea",
    duration: "3 Months",
    slug: generateSlug("PIRE Fellowship KAIST"),
  },
];


export default experienceDetails;
