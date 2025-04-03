import Experience from "../experience/Experience";
import "./EducationAndExperience.css";

export default function EducationAndExperience() {
  return (
    <div className="experience">
      <div className="container">
        <div className="title">
          <p className="title1">Education and Experience</p>
          <p className="title2">Education & Experience</p>
        </div>
        <Experience />
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
        <div className="shape shape5"></div>
        <div className="shape shape6"></div>
      </div>
    </div>
  );
}
