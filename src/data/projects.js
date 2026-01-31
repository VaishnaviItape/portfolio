import smartVillage from '../assets/smart_village.png';
import visionIndia from '../assets/Vision India.png';
import skillParadise from '../assets/SkillParsdise.png';
import qfreemart from '../assets/Qfreemart.png';
import salesBooster from '../assets/SalesBooster.png';
import sareeStore from '../assets/Saree.png';
import rentDashboard from '../assets/Rent Dasboard.png';
import zillaVelly from '../assets/ZillaVelly.png';
import floortech from '../assets/floortech.png';
import rentMobile from '../assets/RentAppMobile.png';
import jewelleryErp from '../assets/Jewllery ERP.png';
import tmkComputers from '../assets/Tmk computers.png';
import devopsAdmin from '../assets/Devops Admin.png';

export const projects = [
    {
        id: 0,
        title: "Smart Village Management",
        category: "Final Year",
        description: "My major project: A comprehensive digital ecosystem for rural development. Features a robust REST API backend (Node.js/Express), a dynamic Admin Panel (React) for officials to manage resources, and a dedicated Mobile App for villagers to access services.",
        techStack: ["React", "Node.js", "Express", "MongoDB", "Mobile App"],
        image: smartVillage
    },
    {
        id: 1,
        title: "Vision India Project",
        category: "Admin Panel",
        description: "Professional admin dashboard developed at Vision India company. A centralized system for managing skill development, student tracking, and resources. Built to handle complex data and search operations.",
        techStack: ["Angular", "TypeScript", "Node.js"],
        image: visionIndia
    },
    {
        id: 2,
        title: "Skillparadise",
        category: "Website",
        description: "An educational platform offering courses in SAP, Data Analytics, and more. Features a responsive course catalog, student enrollment system, and instructor portals.",
        techStack: ["React", "Tailwind", "Firebase"],
        image: skillParadise
    },
    {
        id: 3,
        title: "Qfreemart Market",
        category: "Website",
        description: "A hyperlocal e-commerce platform connecting local sellers with customers. Includes features for online ordering, appointment booking, and real-time inventory updates.",
        techStack: ["React", "Node.js", "MongoDB"],
        image: qfreemart
    },
    {
        id: 4,
        title: "Sales Booster Admin",
        category: "Admin Panel",
        description: "A high-performance admin dashboard for tracking sales metrics, team performance, and generating automated reports. Visualizes complex data for better decision making.",
        techStack: ["React", "Material UI", "Chart.js"],
        image: salesBooster
    },
    {
        id: 5,
        title: "Saree Ethnic Store",
        category: "Website",
        description: "A niche e-commerce store for ethnic wear. Implements a custom gallery, filtering system, and a secure checkout process powered by Stripe.",
        techStack: ["React", "Stripe", "CSS Modules"],
        image: sareeStore
    },
    {
        id: 6,
        title: "Rent App Dashboard",
        category: "Admin Panel",
        description: "Centralized management console for a property rental service. Allows admins to manage tenants, properties, payments, and maintenance requests efficiently.",
        techStack: ["React", "Redux Toolkit", "Ant Design"],
        image: rentDashboard
    },
    {
        id: 7,
        title: "Zillavalelly Admin",
        category: "Admin Panel",
        description: "Administrative interface for the Zillavalelly platform. Provides tools for content management, user oversight, and system configuration.",
        techStack: ["React", "Context API", "SASS"],
        image: zillaVelly
    },
    {
        id: 8,
        title: "Floortech Corporate",
        category: "Website",
        description: "A modern corporate website for a flooring company. Showcases product patterns, installation services, and a portfolio of past work with a sleek design.",
        techStack: ["React", "Framer Motion", "Styled Components"],
        image: floortech
    },
    {
        id: 9,
        title: "Rent App Mobile",
        category: "Mobile App",
        description: "A native experience for tenants to browse rentals, book viewings, and pay rent. Built with React Native to ensuring a smooth cross-platform experience.",
        techStack: ["React Native", "Expo", "Reanimated"],
        image: rentMobile
    },
    {
        id: 10,
        title: "Jewellery ERP",
        category: "Admin Panel",
        description: "Enterprise software for jewellery management. Tracks inventory, gold rates in real-time, supplier ledgers, and barcode generation.",
        techStack: ["React", "Node.js", "PostgreSQL"],
        image: jewelleryErp
    },
    {
        id: 11,
        title: "School ERP System",
        category: "Admin Panel",
        description: "A complete school management solution covering admissions, attendance, timetables, and fee processing. Designed for scalability and ease of use.",
        techStack: ["React", "Firebase", "Bootstrap"],
        image: devopsAdmin
    },
    {
        id: 12,
        title: "TMK Computers",
        category: "Website",
        description: "IT services portfolio website. Highlights services like hardware repair, software installation, and network setup with SEO-optimized pages.",
        techStack: ["React", "Next.js", "Tailwind"],
        image: tmkComputers
    }
];
