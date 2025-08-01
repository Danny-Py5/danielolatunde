import React from "react";
import CircularBar from "../../components/CircularBar";
import {
  ProgrammingSkillOverview,
  GraphicDesignSkillOverview,
} from "./SkillsOverview";

export type Skill = {
  name: string;
  value: number;
  imgSrc: string;
  rate?: string;
};

function Skills() {
  const skills: Array<{
    frontEnd: Skill[];
    backEnd: Skill[];
    graphicsDesign: Skill[];
    toolsAndOther: Skill[];
  }> = [
    {
      frontEnd: [
        {
          name: "React",
          value: 70,
          imgSrc: "/skills/react.png",
          rate: "Advanced",
        },
        {
          name: "JavaScript",
          value: 75,
          imgSrc: "/skills/js.png",
          rate: "Advanced",
        },
        {
          name: "TypeScript",
          value: 60,
          imgSrc: "/skills/ts.png",
          rate: "Advanced",
        },
        { name: "HTML", value: 98, imgSrc: "/skills/html.png", rate: "Expert" },
        { name: "CSS", value: 95, imgSrc: "/skills/css.png", rate: "Expert" },
      ],
      backEnd: [
        {
          name: "Node.js",
          value: 70,
          imgSrc: "/skills/nodejs.png",
          rate: "Advanced",
        },
        {
          name: "Express",
          value: 70,
          imgSrc: "/skills/express.png",
          rate: "Advanced",
        },
        {
          name: "MongoDB",
          value: 75,
          imgSrc: "/skills/mongodb.png",
          rate: "Advanced",
        },
      ],
      graphicsDesign: [
        {
          name: "Pixallab",
          value: 99,
          imgSrc: "/skills/pixallab.webp",
          rate: "Expert",
        },
        {
          name: "CorelDraw",
          value: 70,
          imgSrc: "/skills/corelDraw.png",
          rate: "Advance",
        },
        {
          name: "Canva",
          value: 65,
          imgSrc: "/skills/canva.webp",
          rate: "Better",
        },
      ],
      toolsAndOther: [
        {
          name: "Git",
          value: 80,
          imgSrc: "/skills/git.png",
          rate: "Advanced",
        },
        {
          name: "Figma",
          value: 30,
          imgSrc: "/skills/figma.png",
          rate: "Beginner",
        },
        {
          name: "Postman",
          value: 75,
          imgSrc: "/skills/postman.png",
          rate: "Advanced",
        },
      ],
    },
  ];
  return (
    <section className="skills" id="skills">
      <div
        className="skill__wrapper section-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h2 className="skills__h2">My Technical Skills</h2>
        <p
          className="skills__p"
          style={{
            margin: "auto",
            marginBottom: "3rem",
            fontSize: "1.2rem",
            maxWidth: "50ch",
          }}
        >
          I have two skill sets that include web development and graphic design.
          Here are some of my skills in these areas.
        </p>

        <div className="skills__wrapper-inner-grid">
          {/* programming skills */}
          <div className="skills__programming">
            <h3 className="skills__h3">My Programming Skills</h3>
            <div className="skills__programming-wrapper">
              {/* Frontend Skills */}
              <h4 className="skills__h4">Frontend Skills</h4>
              <ul
                className="skills__ul skill__programming-ul"
                id="frontendSkills"
              >
                {skills[0].frontEnd.map((skill) => {
                  return (
                    <li className="skill__item" key={skill.name}>
                      <figure>
                        <img
                          width={80}
                          src={skill.imgSrc}
                          alt={skill.name + " image"}
                        />
                        <figcaption>{skill.name}</figcaption>
                      </figure>
                      <p className="skill-set">Frontend Skill | {skill.name}</p>
                      <CircularBar value={skill.value} />
                      <p>{skill.rate}</p>
                    </li>
                  );
                })}
              </ul>
              {/* Backend Skills */}
              <h4 className="skills__h4">Backend Skills</h4>
              <ul
                className="skills__ul skill__programming-ul"
                id="backendSkills"
              >
                {skills[0].backEnd.map((skill) => {
                  return (
                    <li className="skill__item" key={skill.name}>
                      <figure>
                        <img
                          width={80}
                          src={skill.imgSrc}
                          alt={skill.name + " image"}
                        />
                        <figcaption>{skill.name}</figcaption>
                      </figure>
                      <p className="skill-set">Backend Skill | {skill.name}</p>
                      <CircularBar value={skill.value} />
                      <p>{skill.rate}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* graphic design skills */}
          <div className="skills__graphics-design">
            <h3 className="skills__h3">My Graphics Design Skills</h3>
            <ul
              className="skills__ul skill__graphics-design-ul"
              id="graphicsDesignSkills"
            >
              {skills[0].graphicsDesign.map((skill) => {
                return (
                  <li className="skill__item" key={skill.name}>
                    <figure>
                      <img
                        width={80}
                        src={skill.imgSrc}
                        alt={skill.name + " image"}
                      />
                      <figcaption>{skill.name}</figcaption>
                    </figure>
                    <p className="skill-set">
                      Graphics Design Technology | {skill.name}
                    </p>
                    <CircularBar value={skill.value} />
                    <p>{skill.rate}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* other skills */}
          <div className="skills__tools-and-other">
            <h3 className="skills__h3">Tools and Other</h3>
            <ul
              className="skills__ul tools-and-other-ul"
              id="toolsAndOtherSkills"
            >
              {skills[0].toolsAndOther.map((skill) => {
                return (
                  <li className="skill__item" key={skill.name}>
                    <figure>
                      <img
                        width={80}
                        src={skill.imgSrc}
                        alt={skill.name + " image"}
                      />
                      <figcaption>{skill.name}</figcaption>
                    </figure>
                    <p className="skill-set">Tool | {skill.name}</p>
                    <CircularBar value={skill.value} />
                    <p>{skill.rate}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* skill overview */}
          <section className="skills-overview">
            <ProgrammingSkillOverview data={skills[0]} />
            <GraphicDesignSkillOverview data={skills[0]} />
          </section>
        </div>
      </div>
    </section>
  );
}

export default Skills;
