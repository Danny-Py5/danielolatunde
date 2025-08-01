import React from "react";
import ExperienceTimeline from "../../components/ExperienceTimeline";

function WorkExperience() {
  const experienceData = [
    {
      date: "2025 - Present",
      title: "Web Developer – UncleD Kitchen Website",
      subTitle: "Freelance Project — Remote / Nigeria",
      description: [
        "Developed a responsive website for UncleD Kitchen to show their menu to visitors",
        "Also, created some sections where food are displayed and business details are provided with contact options like WhatsApp, phone call, and email for visitors who likes to place an order.",
        "Helped the business to improve their digital presence and make it very easy for all customers to get in touch online with them without any stress.",
      ],
    },
    {
      date: "2025 - Present",
      title: "JAMB CBT Emulator",
      subTitle:
        "Client Project – For Computer Training Shop — Remote / Nigeria",
      description: [
        "Built a JAMB CBT emulator which help computer trainees practice and answer exam questions in  CBT-style interface.",
        "Designed for use in computer centers, especially for trainees preparing for JAMB which have little or no computer experience.",
      ],
    },
    {
      date: "2025 - Present",
      title: "🎨 Graphic Designer – Freelance Projects",
      subTitle: "OlaTech Code & Design — Remote / Nigeria",
      description: [
        "Designed high-quality logo and flyer for small businesses and startups.",
        "Specialized in a tool - Pixallab to create neat designs for both print and digital use.",
      ],
    },
  ];
  return (
    <section className="work-experience">
      <div className="section-wrapper  work-experience__wrapper">
        <h2>Work Experience</h2>
        <ExperienceTimeline data={experienceData} />
      </div>
    </section>
  );
}

export default WorkExperience;
