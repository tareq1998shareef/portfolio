import "./AboutMe.css";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";

export default function AboutMe() {
  const skills = [
    { skill: "HTML5", percentage: "100%" },
    { skill: "CSS3", percentage: "90%" },
    { skill: "JavaScript", percentage: "85%" },
    { skill: "React", percentage: "85%" },
  ];

  return (
    <section className="about">
      <div className="container">
        <div className="about-picture">
          <div className="lines">
            <div className="ellipse ellipse1"></div>
            <div className="ellipse ellipse2"></div>
            <div className="ellipse ellipse3"></div>
          </div>
          <div className="picture">
            <FaHtml5 className="icon html" />
            <FaCss3Alt className="icon css" />
            <img
              className="icon figma"
              src="/assets/images/figmaIcon.png"
              alt="figma"
            />
            <FaGithub className="icon github" />
            <FaReact className="icon react" />
          </div>
        </div>
        <div className="about-skills">
          <h2>About Me</h2>
          <p>
            I’m a creative Frontend Developer dedicated to crafting clean,
            responsive, and dynamic web interfaces. My goal is to bring user
            experiences to life through efficient and modern code.
          </p>

          <div className="skills">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <span>{skill.skill}</span>
                <div className="progress">
                  <div
                    className="percentage"
                    style={{ width: skill.percentage }}
                  >
                    <span className="rate">{skill.percentage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
