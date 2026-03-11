import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileAlt,
  faPalette,
  faCogs,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "./styles/Services.css";
import Footer from "../components/Footer";

type ServiceData = {
  id: number;
  title: string;
  description: string;
  icon: IconDefinition;
};

const servicesData: ServiceData[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "I create responsive, high-performance websites from scratch, ensuring a seamless user experience across all devices. From simple landing pages to complex web applications, I bring your ideas to life with clean and efficient code.",
    icon: faCode,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "I build cross-platform mobile applications for both iOS and Android using modern frameworks like React Native and Flutter. My focus is on creating intuitive, fast, and reliable mobile experiences.",
    icon: faMobileAlt,
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "I offer creative design services, including logos, flyers, and branding materials. I combine my technical skills with a keen eye for aesthetics to produce visually appealing designs that communicate your message effectively.",
    icon: faPalette,
  },
  {
    id: 4,
    title: "Website Maintenance & Support",
    description:
      "I provide ongoing support and maintenance to keep your website running smoothly. This includes bug fixes, performance optimization, feature updates, and ensuring your site stays secure and up-to-date.",
    icon: faCogs,
  },
  {
    id: 5,
    title: "User Interface Implementation",
    description:
      "Converting design ideas into clean, responsive, and functional user interfaces using modern web development practices.",
    icon: faCode,
  },
  {
    id: 6,
    title: "Website Deployment & Hosting Setup",
    description:
      "I help deploy websites and applications to reliable hosting platforms and configure domains so your platform is accessible, secure, and ready for users.",
    icon: faCloud,
  },
];

function ServiceCard({ service }: { service: ServiceData }) {
  return (
    <div className="service-card">
      <div className="service-icon">
        <FontAwesomeIcon icon={service.icon} size="3x" />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
}

function Services() {
  return (
    <>
      <section className="services-section" id="services">
        <div className="section-wrapper">
          <h2>My Services</h2>
          <p className="services-intro">
            I offer a range of services to help you achieve your goals. Whether
            you need a new website, a mobile app, or creative design work, I'm
            here to help.
          </p>
          <div className="services-container">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Services;
