import "./styles/about.css";
import "../index.css";
// import styles from "../utils.module.css";

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
            hooked. I constantly learn, build, and improve every day.
          </p>

          <p>
            I believe in consistency and relentless effort, and now, those years
            of practice are paying off. Now I just have to work smart not
            harder. I enjoy creating websites that don’t just look good but also
            feel smooth and natural to use.
          </p>

          <p>
            For me, code is more than just syntax, it’s a tool for expression,
            clarity, and creating real experiences that people enjoy.
          </p>
          <p>
            <i>I just fell good when I handle my keys coz I love what I do.</i>
          </p>

          <h3 style={{ margin: "3rem 0 1rem" }}>Beyond Coding</h3>
          <div>
            <p>
              Beyond coding, I’m also a <strong>Graphics Designer</strong>,{" "}
              <strong>hairstylist</strong>, <strong>keyboardist</strong>, and{" "}
              <strong>guitarist</strong>. Creativity is a big part of who I am —
              whether it’s designing, developing a website, styling hair, or
              playing music, I love turning ideas into something beautiful and
              inspiring.
            </p>
          </div>

          <div className="child2">
            <div className="child">
              <h2>21</h2>
              <p about="my age">Years Old</p>
            </div>
            <div className="child">
              <h2>{new Date().getFullYear() - 2023}</h2>
              <p about="my age">Years Coding</p>
            </div>
            <div className="child">
              <h2>∞</h2>
              <p about="my age">Lines of Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
