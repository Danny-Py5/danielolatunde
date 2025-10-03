import ExperienceTimeline from "../../components/ExperienceTimeline";

function WorkExperience() {
  const experienceData = [
    {
      date: "2025 - Currently",
      title: "Jimfocug",
      subTitle: "Junior Software Developer | Remote in Nigeria",
      description: [
        "Maintained and improved existing applications to keep them running smoothly.",
        "Debugged and fixed issues to ensure apps worked without errors.",
        "Tested features and optimized performance for a better user experience.",
        "Collaborated on projects with other developers to build and refine apps.",
        "Documented code changes to make future updates easier.",
      ],
    },
    {
      date: "2025",
      title: "Web Developer – UncleD Kitchen Website",
      subTitle: "Freelance Project — Remote in Nigeria",
      description: [
        "Built a responsive website for UncleD Kitchen to showcase their menu online.",
        "Added sections to display food items and share important details like location and contacts.",
        "Included easy options for visitors to reach out through WhatsApp, phone, or email to place orders.",
        "Made it simple for customers to connect with UncleD Kitchen without stress.",
      ],
    },
    {
      date: "2025 ",
      title: "JAMB CBT Emulator",
      subTitle:
        "Client Project – For Computer Training Shop — Remote in Nigeria",
      description: [
        "Built a JAMB CBT emulator that allows trainees to practice exam questions in a real CBT-style interface.",
        "Designed especially for computer centers to help beginners and JAMB candidates gain confidence using computers before their exams.",
      ],
    },
    {
      date: "2025",
      title: "🎨 Graphic Designer – Freelance Projects",
      subTitle: "OlaTech Code & Design — Remote in Nigeria",
      description: [
        "Designed high-quality logos and flyers for individuals, associations, groups, celebrants, graduates, and startups.",
        "Specialized in using Pixellab to create clean designs suitable for both print and digital use.",
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
