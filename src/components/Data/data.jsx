import project1 from '../../assets/images/project1.png'
import project2 from '../../assets/images/project2.png'
import project3 from '../../assets/images/project3.png'
import project4 from '../../assets/images/project4.webp'
import project5 from '../../assets/images/project5.webp'
import project6 from '../../assets/images/project6.webp'
import { SiCss3 } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { ImHtmlFive } from "react-icons/im";
import { SiReactquery } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SiMui } from "react-icons/si";




export const Icons = [
    
    {
        name: "HTML",
        icon: ImHtmlFive,
    },
    {
        name: "CSS",
        icon: SiCss3,
    }, 
    {
        name: "JavaScript",
        icon: IoLogoJavascript,
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
    },
    {
        name: "Tailwind",
        icon: RiTailwindCssFill,
    },
    {
        name: "Framer Motion",
        icon: SiFramer,
    },
    {
        name: "meterial UI",
        icon: SiMui,
    },
  
    {
        name: "React",
        icon: FaReact ,
    },
    {
        name: "ReactQuery",
        icon: SiReactquery,
    },
    {
        name: "Redux",
        icon: SiRedux ,
    },
    {
        name: "Figma",
        icon: FaFigma,
    },
    {
        name: "GitHub",
        icon: FaGithub ,
    },
    {
        name: "Firebase",
        icon: SiFirebase,
    },
   
  
];
  
  
const webApps = [

     {
        id: 1,
        title:"ERP Construction System",
        img:project1,
        link: "https://makramallah.org/",
        description: `Enterprise Resource Planning system tailored for construction industry with Laravel backend and JavaScript frontend.

`,
    },
    {
        id: 2,
        title:"Elmasry Motors",
        img: project2,
        link: "https://elmasry-motors.com/",
        description: `Automotive trading platform with Laravel backend, Livewire for interactivity, and Metronic UI.
    `,
    
    },
   
    {
        id: 3,
        title:"Octobios B2B",
        img: project3,
        link:"https://octopios.masool.net/",
        description:`Comprehensive B2B E-commerce platform connecting traders with vendors, with product management and analytics.`,
    },
    
]

export default webApps;



export const mobileApps = [

    {
        id: 4,
        title:"Healthcare App",
        img: project4,
        link:"https://play.google.com/store/apps/details?id=com.promina.drgermeen&pli=1",
        description: `Digital platform for patient care services including records management, appointments, and e-prescriptions.
`
    },
    {
        id: 5,
        title:"Eghsley Budget Tracker",
        img: project5,
        link:"https://play.google.com/store/apps/details?id=com.puresoft.e3sely&pli=1",
     description: `Comprehensive budget management app for tracking expenses, income, debts, and financial planning.
`
    },
    {
        id: 6,
        title:"Manasik Apps",
        img: project6,
        link:"https://play.google.com/store/apps/details?id=com.puresoft.manasik",
        description: `Comprehensive guides for Hajj and Umrah pilgrims with step-by-step instructions and prayers.
`
    },
  
]


export const experience = [
  {
    company: "Tadbeer",
    role: "Software Engineer",
    Date: "Jan 2025-Present",
    text: [
      "Led back-end development using Laravel and modern PHP practices.",
      "Deployed and managed applications on cloud infrastructure.",
      "Performed system performance tuning and bug fixing.",
      "Worked closely with cross-functional teams to deliver enterprise-level projects."
    ]
  },
  {
    company: "Amit",
    role: "Back End Developer",
    Date: "Jul 2023-Dec 2024",
    text: [
      "Designed scalable system architecture and database structures.",
      "Implemented authentication and role-based access control (RBAC).",
      "Integrated REST API services with external applications.",
      "Enhanced application security and performance monitoring."
    ]
  },
  {
    company: "Puresoft",
    role: "Back End Developer (Laravel)",
    Date: "Jan 2022-Jun 2023",
    text: [
      "Built and maintained web applications using Laravel, PHP, and MySQL.",
      "Developed RESTful APIs for seamless integration with front-end systems.",
      "Optimized database queries and improved application performance.",
      "Collaborated with front-end teams to deliver complete solutions."
    ]
  }
];





export const skills = ['PHP', 'Laravel', 'MySQL','API Development', 'CodeIgniter', 'Docker', 'HTML', 'CSS','JavaScript', 'Jira', 'Git','CI/CD']