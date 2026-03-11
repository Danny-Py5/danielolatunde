// import React from "react";
import Footer from "../components/Footer";
import "./styles/Projects.css";

type ProjectData = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  private?: boolean;
  repoUrl?: string;
};
const projectData: ProjectData[] = [
  {
    id: 1,
    title: "Jimfocug Website",
    description:
      "A responsive company website for a software development firm, designed to present services, products, and business solutions while allowing clients to learn about the company and request software services.",
    technologies: ["React", "JavaScript", "HTML5", "CSS"],
    imageUrl: "/projects/project-jimfocug.png",
    liveUrl: "https://jimfocug.com/",
    repoUrl: "#",
    private: true,
  },
  {
    id: 2,
    title: "Online Mock Examination System",
    description:
      "A web-based mock examination platform that allows students to create accounts, select subjects, take timed exams, and receive instant results. The system simulates real CBT (Computer-Based Test) environments and includes user authentication, exam attempt tracking, and automated scoring.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Express",
      "NodeJS",
      "MongoDB",
    ],
    imageUrl: "/projects/project-mock-exam.png",
    liveUrl: "https://mock-exam-sta-dannypy.vercel.app/",
    repoUrl: "https://github.com/Danny-Py5/sta-mock-dannypy",
  },
  {
    id: 3,
    title: "Netflix UI Clone",
    description:
      "A responsive movie streaming interface inspired by Netflix. The application allows users to browse movie categories, view details, and interact with a modern streaming-style user interface. The project focuses on UI replication, responsive layout design, and dynamic content rendering to simulate a real streaming platform experience.",
    technologies: ["HTML", "CSS3", "JavaScript", "CSS Grid"],
    imageUrl: "/projects/netflix.png",
    liveUrl: "https://netflix-clone-chi-puce-60.vercel.app/",
    repoUrl: "https://github.com/Danny-Py5/Netflix-clone",
  },

  {
    id: 4,
    title: "MCICBT – Cross-Platform Computer Based Test System",
    description:
      "MCICBT is a cross-platform Computer Based Test (CBT) application designed for educational institutions to conduct digital examinations. Built with Flutter, the system runs on web, mobile, and desktop devices, allowing students to take exams and receive results efficiently. Search on playstore to view",
    technologies: ["Flutter", "Dart", "C#", ".NET", "SQLite"],
    imageUrl: "/projects/mcicbt.png",
    private: true,
  },
];

function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <>
      <div className="project-card">
        <div className="project-image-container">
          {/* To add your image, replace the src in the img tag below */}
          <img src={project.imageUrl} alt={`${project.title} screenshot`} />
        </div>
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
          <div className="project-links">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Live Demo
              </a>
            )}
            {!project.private && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function Projects() {
  return (
    <section>
      <section className="projects-section" id="projects">
        <h2>My Projects</h2>
        <p>I work with you, Not for you!</p>
        <div className="projects-container">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Footer />
    </section>
  );
}

export default Projects;
