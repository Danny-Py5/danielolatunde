import { width } from "@fortawesome/free-brands-svg-icons/fa11ty";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type Experience = {
  date: string;
  title: string;
  subTitle: string;
  description: string[];
};
function ExperienceTimeline({ data }: { data: Experience[] }) {
  return (
    <VerticalTimeline>
      {data.map((item) => (
        <VerticalTimelineElement
          key={item.title}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--color-white)",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
          }}
          contentArrowStyle={{ borderRight: "7px solid #222" }}
          date={item.date}
          iconStyle={{
            background: "var(--color-secondary)",
            color: "var(--color-primary)",
            width: "30px",
            height: "30px",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h3 style={{ marginBottom: "var(--margin)" }}>{item.title}</h3>
          <h4 style={{ marginBottom: "var(--margin)" }}>{item.subTitle}</h4>
          {item.description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
export default ExperienceTimeline;
