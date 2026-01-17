import profileImg from '../assets/profile.jpg';

export const profile = {
    name: "Vaishnavi Vishnu Itape",
    role: "Frontend Developer",
    company: "TMK Computers",
    experience: "1.5 Years",
    location: "Sangli, Maharashtra",
    email: "vaishnaviitape9005@gmail.com",
    phone: "+91 9307829005",

    // Use a placeholder if the image isn't found/created yet, but setup the import
    // User needs to put 'profile.jpg' in 'src/assets/'
    imgSrc: profileImg,

    bio: "I am a dedicated Frontend Developer with 1.5 years of professional experience, currently working at TMK COMPUTERS. I specialize in building responsive, user-centric web applications using React.js and Angular. My passion lies in translating design concepts into high-quality, interactive code.",

    education: [
        {
            degree: "Master of Computer Applications (MCA)",
            institution: "TKIET College of Warananagar",
            university: "Warana University",
            year: "Final Year (Pursuing)"
        },
        {
            degree: "Graduation (BCS)",
            institution: "Shivaji University",
            university: "Shivaji University",
            year: "Completed"
        },
        {
            degree: "HSC (12th Grade)",
            institution: "RSK College Sangli",
            university: "State Board",
            year: "Completed"
        }
    ],

    workExperience: [
        {
            role: "Frontend Developer",
            company: "TMK COMPUTERS",
            duration: "1.5 Years - Present",
            description: "Developing professional corporate websites and ERP solutions. Collaborating with cross-functional teams to deliver high-quality software."
        }
    ],

    skills: [
        "React.js", "Angular", "React Native", "JavaScript", "HTML/CSS", "Git", "Antigravity", "UI Implementation"
    ],

    social: {
        linkedin: "#",
        github: "#",
        instagram: "#"
    }
};
