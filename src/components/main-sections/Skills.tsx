import React from "react";
import CirclarBar from "../CircularBar";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skill__wrapper section-wrapper">
        <h2 className="skills__h2">My Skills</h2>

        <div className="skills__programming">
          <h3 className="skills__h3">My Programming Skills</h3>
          <ul className="skills__ul skill__programming-ul">
            <li>
              <CirclarBar value={80} />
            </li>
            <li>
              <CirclarBar value={50} />
            </li>
          </ul>
        </div>

        <div className="skills__graphics-design">
          <h3 className="skills__h3">My Graphics Design Skills</h3>
          <ul className="skills__ul skill__graphic-design-ul">
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
