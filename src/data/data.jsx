import { FaPhoneVolume, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import {
    FaCode,
    FaMobileAlt,
    FaDatabase,
    FaLaptopCode,
    FaPalette,
    FaPlug,
    FaJava,
    FaPython,
    FaHtml5,
    FaJsSquare,
    FaReact,
    FaNodeJs,
} from "react-icons/fa";

export const servicesData = [
    {
        icon: <FaCode size={30} />,
        title: "Frontend Development",
        description:
            "Building responsive and dynamic user interfaces using React, HTML, and CSS.",
    },
    {
        icon: <FaMobileAlt size={30} />,
        title: "Mobile Optimization",
        description:
            "Creating mobile-first designs and ensuring cross-device compatibility.",
    },
    {
        icon: <FaDatabase size={30} />,
        title: "Backend & Databases",
        description:
            "RESTful APIs and databases using Node.js, Express, and MongoDB.",
    },
    {
        icon: <FaLaptopCode size={30} />,
        title: "Full-Stack Projects",
        description:
            "Combining frontend and backend to deliver complete web solutions.",
    },
    {
        icon: <FaPalette size={30} />,
        title: "UI/UX Design",
        description:
            "Designing intuitive interfaces and user journeys using Figma and modern trends.",
    },
    {
        icon: <FaPlug size={30} />,
        title: "API Integration",
        description:
            "Connecting to third-party APIs like Google Maps, OpenAI, and more.",
    },
];

export const projectData = [
    {
        id: 1,
        title: "Tic-Tac-Toe",
        description: "Practice DOM manipulation and game logic.",
        languages: ["HTML", "CSS", "JavaScript"],
        gitHub: "#",
        liveDemo: "#",
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "Showcase your projects and skills with a personal website.",
        languages: ["HTML", "CSS", "JavaScript"],
        gitHub: "#",
        liveDemo: "https://sadikportfolio.netlify.app/",
    },
    {
        id: 3,
        title: "EmojiGame",
        description: "Learn array manipulation and dynamic rendering.",
        languages: ["HTML", "CSS", "JavaScript"],
        gitHub: "#",
        liveDemo: "#",
    },
    {
        id: 4,
        title: "Job Search",
        description: "Build a responsive layout mimicking real-world apps.",
        languages: ["HTML", "CSS", "JavaScript"],
        gitHub: "#",
        liveDemo: "#",
    },
    {
        id: 5,
        title: "Todolist",
        description: "Understand data persistence and user interaction.",
        languages: ["HTML", "CSS", "JavaScript"],
        gitHub: "#",
        liveDemo: "#",
    },
];

export const skills = [
    {
        title: "Java",
        icon: <FaJava size={30} />,
        description:
            "Strong OOP concepts, data structures, and backend development using Java.",
    },
    {
        title: "Python",
        icon: <FaPython size={30} />,
        description:
            "Experienced in scripting, automation, and data handling with Python.",
    },
    {
        title: "JavaScript",
        icon: <FaJsSquare size={30} />,
        description:
            "Dynamic frontend interactivity and logic using modern JavaScript ES6+.",
    },
    {
        title: "SQL",
        icon: <FaDatabase size={30} />,
        description:
            "Proficient in writing queries, joins, and database management with SQL.",
    },
    {
        title: "HTML & CSS",
        icon: <FaHtml5 size={30} />,
        description:
            "Building structured, semantic web pages and responsive UIs with custom styling.",
    },
    {
        title: "React",
        icon: <FaReact size={30} />,
        description:
            "Component-based development with hooks, routing, state management.",
    },
    {
        title: "Node.js",
        icon: <FaNodeJs size={30} />,
        description:
            "Server-side programming, RESTful APIs, and backend services using Node.js.",
    },
    {
        title: "Spring Boot",
        icon: <FaJava size={30} />,
        description:
            "Robust backend development using Spring Boot for creating scalable RESTful APIs.",
    },
];

export const educationData = [
    {
        id: 1,
        degree: "B.com Computers Applications",
        institution: "XYZ University, Chennai",
        year: "2021 - 2023",
    },
    {
        id: 2,
        degree: "Higher Secondary (HSC)",
        institution: "ABC Matriculation School",
        year: "2019 - 2021",
    },
    {
        id: 3,
        degree: "Secondary School (SSLC)",
        institution: "ABC Matriculation School",
        year: "2017 - 2018",
    },
];

export const socialData = [
    {
        id: 1,
        icon: <FaInstagram size={30} />,
        color: "#e50909ff",
        name: "Instagram",
    },
    {
        id: 2,
        icon: <FaGithub size={30} />,
        color: "#393333c4",
        name: "Github",
    },
    {
        id: 3,
        icon: <FaLinkedin size={30} />,
        color: "#0A66C2",
        name: "Linkedin",
    },
    {
        id: 4,
        icon: <FaWhatsapp size={30} />,
        color: "#0ac216",
        name: "Whatsapp",
    },
];

export const contactDetails = [
    {
        id: 1,
        icon: <FaPhoneVolume size={30} />,
        name: "Phone",
        value: "+91 1234567890",
    },
    {
        id: 2,
        icon: <FaEnvelope size={30} />,
        name: "Email",
        value: "sadik@gmail.com",
    },
    {
        id: 3,
        icon: <FaLinkedin size={30} />,
        name: "Linkedin",
        value: "https://www.linkedin.com/in/sadik/",
    },
    {
        id: 4,
        icon: <FaInstagram size={30} />,
        name: "Instagram",
        value: "https://www.instagram.com/sadik/",
    },
    {
        id: 5,
        icon: <FaMapMarkerAlt size={30} />,
        name: "Address",
        value: "123 Main Street, City, Country",
    },
]