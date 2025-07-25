import { ProjectCard } from "./ProjectCard";
import "./styles/Project.css";
export const Project = () => {
  const projects = [
    {
      title: "Library Management System",
      link: "https://www.gpnngr.org.in/Library-Management-System/",
      description:
        "A PHP-MySQL system that allows for late fee computation, user management, book search, and much more.",
      path: "LMS.png",
    },
    {
      title: "Weather App",
      link: "https://weather-application-rudr.netlify.app",
      description:
        "This is a React-based application that displays real-time weather data with responsive design and search capabilities via the Weather API.",
      path: "Weather.png",
    },
    {
      title: "Plexus Event Page",
      link: "https://plexus-connecting-nerves.netlify.app/",
      description:
        "A captivating event landing page with a clear UI/UX and striking images.",
      path: "Plexus.png",
    },
    {
      title: "To-Do App",
      link: "https://rudrtodo.netlify.app/",
      description:
        "A straightforward, responsive to-do list built with React that integrates local storage.",
      path: "ToDo.png",
    },
    {
      title: "Contact Manager",
      link: "https://contact-manager-frontend-s8uu.onrender.com/",
      description:
        "A modern contact management system using MERN stack that allows users to add, edit, delete, and search contacts with responsive UI.",
      path: "ContactM.png",
    },
    {
      title: "Prompt AI",
      link: "https://prompt-ai-y5ze.onrender.com/",
      description:"Created a full-stack AI prompt generator web app using React, Node.js, Express, and the Gemini API. It features real-time response handling and a responsive user interface.",
      path: "PromptAI.png",
    },
  ];

  return (
    <>
      <div className="project-main section-to-pop">
        <h2 className="section-title">Sample Work</h2>

        <div className="projects">
          {projects.map((element) => {
            return (
              <>
                <ProjectCard element={element} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
