import cardform from "../assets/cardForm.png";
import calc from "../assets/calc.png";
import todoapp from "../assets/todoapp.png";
import portfolio from "../assets/port.jpg";
import sup from "../assets/sup.jpg";
import ip from "../assets/ip.jpg";

//skill-level
const tech = {
    "JavaScript": 80,
    "React": 60,
    "Node.js": 60,
    "R3F.js": 20,
    "Express.js": 50,
    "MongoDB": 30,
    "PostgreSQL": 30,
    "sass": 60,
    "tailwind": 60,
    "Git": 80,
    "Vite": 80
};

const projects = [
    {
        "title": "Portfolio",
        "tags": "React, Tailwind, Vite,R3F,Git ",
        "link": "/",
        "preview": portfolio
    },
    {
        "title": "Card Form",
        "tags": "React, HTML, CSS,Git",
        "link": "https://interactive-card-io.vercel.app/",
        "preview": cardform
    },
    {
        "title": "Bill Splitte",
        "tags": "React, HTML, CSS,Git",
        "link": "https://bill-splitter-two.vercel.app/",
        "preview": calc
    },
    {
        "title": "Bill Splitte",
        "tags": "React, HTML, SCSS,Vite,Git",
        "link": "https://todo-p6w6k72nt-tyubit.vercel.app/",
        "preview": todoapp
    },
    {
        "title": "ip finder",
        "tags": "React, HTML, SCSS,Vite,Git",
        "link": "https://ip-tracker-seven-rho.vercel.app/",
        "preview": ip
    },
    {
        "title": "Sup chat app",
        "tags": "React,Node.js,Express.js,HTML, SCSS,Vite,Git",
        "link": "https://sup-chat.onrender.com/",
        "preview": sup
    }
]

const experiences = [
    {
    title: "React.js Developer",
    company_name: "Starbucks",
    date: "March 2020 - April 2021",
    points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
]

const credentials = {
    gitHub: "https://github.com/Tyubit",
    gitLab: "https://gitlab.com/Tuybit",
    linkedIn: "https://www.linkedin.com/in/elisha-kovalev/",
}

export { tech, projects, credentials };
