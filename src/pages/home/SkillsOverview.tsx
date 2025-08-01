import React from "react";
import type { Skill } from "./Skills";

type SkillsGroup = {
  frontEnd: Skill[];
  backEnd: Skill[];
  graphicsDesign: Skill[];
  toolsAndOther: Skill[];
};

// Utility for counting
function totalTechnologies(skills: Skill[]) {
  return skills.length;
}

function averageProficiency(skills: Skill[]) {
  if (skills.length === 0) return 0;
  return (
    skills.reduce((sum, skill) => sum + skill.value, 0) / skills.length
  ).toFixed(1);
}

function getYearsOfExperience(startedYear: number) {
  const currentYear = new Date().getFullYear();
  return currentYear - startedYear;
}

const ProgrammingSkillOverview: React.FC<{ data: SkillsGroup }> = ({
  data,
}) => {
  // Combine frontend, backend, and tools
  const programmingSkills = [
    ...data.frontEnd,
    ...data.backEnd,
    ...data.toolsAndOther,
  ];
  return (
    <div className="overview programming-skill-overview">
      <h3>Programming Skill Overview</h3>
      <div className="programming-skill-overview__content">
        <div>
          <strong>{getYearsOfExperience(2023)}+</strong>
          <p>Years of Experience:</p>
        </div>
        <div>
          <strong>{totalTechnologies(programmingSkills)}+</strong>
          <p>Technologies:</p>{" "}
        </div>
        <div>
          <strong>{averageProficiency(programmingSkills)}%</strong>
          <p>Average Proficiency:</p>{" "}
        </div>
      </div>
    </div>
  );
};

const GraphicDesignSkillOverview: React.FC<{ data: SkillsGroup }> = ({
  data,
}) => {
  const skills = data.graphicsDesign;
  return (
    <div className="overview graphic-design-overview">
      <h3>Graphics Design Skill Overview</h3>
      <div className="graphic-design-overview__content">
        <div>
          <strong>{getYearsOfExperience(2023)}+</strong>
          <p>Years of Experience</p>
        </div>
        <div>
          <strong>{totalTechnologies(skills)}+</strong>
          <p>Technologies:</p>
        </div>
        <div>
          <strong>{averageProficiency(skills)}%</strong>
          <p>Average Proficiency:</p>
        </div>
      </div>
    </div>
  );
};

export { ProgrammingSkillOverview, GraphicDesignSkillOverview };
