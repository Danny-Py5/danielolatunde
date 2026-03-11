import "./styles/about.css";
import "../index.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faUsers,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
// import styles from "../utils.module.css";

const featuredProjects = [
  {
    id: 1,
    title: "Jimfocug Website",
    description:
      "A responsive company website for a software development firm, designed to present services, products, and business solutions.",
    imageUrl: "/projects/project-jimfocug.png",
    liveUrl: "https://jimfocug.com/",
  },
  {
    id: 2,
    title: "Online Mock Examination System",
    description:
      "A web-based mock examination platform that allows students to create accounts, select subjects, take timed exams, and receive instant results.",
    imageUrl: "/projects/project-mock-exam.png",
    liveUrl: "https://mock-exam-sta-dannypy.vercel.app/",
  },
];

function FeaturedProjectCard({
  project,
}: {
  project: (typeof featuredProjects)[0];
}) {
  return (
    <div className="featured-project-card">
      <img
        src={project.imageUrl}
        alt={`${project.title} screenshot`}
        className="featured-project-image"
      />
      <div className="featured-project-info">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

function About() {
  // const navigate = Navigate();

  return (
    <section className="about">
      <div className="section-wrapper about__wrapper">
        <h2>About Me</h2>

        <div className={"child1"}>
          <p>
            Hey, I’m <strong>Daniel Olatunde Fatokun</strong> — a web and
            software developer who loves bringing ideas to life through clean,
            visually appealing, and easy-to-use websites.
          </p>

          <p>
            My journey into coding started back in secondary school when my
            Physics teacher introduced me to programming. Since then, I’ve been
            hooked. I always learn, build, and improve every day by day.
          </p>

          <p>
            I believe in consistency and relentless effort, and now, those years
            of practice are paying me. Now I just have to work smart not harder.
            I enjoy creating websites that is not just looking good but feel
            smooth and always natural to use to any user.
          </p>

          <p>
            For me, code is more than just syntax and writing magic words, it’s
            a tool that is for expression, clarity, and creating real
            experiences that people can enjoy.
          </p>
          <p>
            <i>I just fell good when I handle my keys coz I love what I do.</i>
          </p>

          <div className="philosophy-section">
            <h3 style={{ margin: "3rem 0 1.5rem" }}>
              My Development Philosophy
            </h3>
            <div className="philosophy-container">
              <div className="philosophy-item">
                <FontAwesomeIcon icon={faCode} size="2x" />
                <h4>Clean & Scalable Code</h4>
                <p>
                  I believe in writing code that is not just functional, but
                  also clean, maintainable, and scalable. This ensures that
                  projects are built on a solid foundation for future growth.
                </p>
              </div>
              <div className="philosophy-item">
                <FontAwesomeIcon icon={faUsers} size="2x" />
                <h4>User-Centric Design</h4>
                <p>
                  The user is at the heart of every project. I focus on creating
                  intuitive, accessible, and engaging user experiences that
                  solve real-world problems effectively.
                </p>
              </div>
              <div className="philosophy-item">
                <FontAwesomeIcon icon={faLightbulb} size="2x" />
                <h4>Continuous Learning</h4>
                <p>
                  The tech world is always evolving. I am committed to lifelong
                  learning, constantly exploring new technologies and
                  methodologies to deliver modern and efficient solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="featured-projects-section">
            <h3 style={{ margin: "3rem 0 1.5rem" }}>Featured Projects</h3>
            <p className="featured-projects-intro">
              Here's a glimpse of some of my work. Feel free to check out the
              full <Link to="/projects">projects page</Link> for more details.
            </p>
            <div className="featured-projects-container">
              {featuredProjects.map((project) => (
                <FeaturedProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          <h3 style={{ margin: "3rem 0 1rem" }}>Beyond Coding</h3>
          <div>
            <p>
              Beyond coding, I’m also a <strong>Graphics Designer</strong>,{" "}
              <strong>hairstylist</strong>, <strong>keyboardist</strong>, and{" "}
              <strong>guitarist</strong>. Creativity is a big part of who I am —
              either it’s designing, developing a website, styling hair, or
              playing music, I love turning ideas into something that is
              beautiful and that is inspiring.
            </p>
          </div>

          <div className="child2">
            <div className="child">
              <h2>21</h2>
              <p about="my age">Years Old</p>
            </div>
            <div className="child">
              <h2>{new Date().getFullYear() - 2023}</h2>
              <p about="my years of coding">Years Coding</p>
            </div>
            <div className="child">
              <h2>∞</h2>
              <p about="lines of code i have written">Lines of Code</p>
            </div>
            <div className="child">
              <h2>15+</h2>
              <p about=" texhnologies learned">Technologies Learned</p>
            </div>
            <div className="child">
              <h2>1000+</h2>
              <p about="hours of coding">Hours of Coding</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default About;
