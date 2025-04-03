import { Link } from "react-router-dom";
import "./Projects.css";
import { GoArrowUpRight } from "react-icons/go";
import Project from "../project/Project";

export default function Projects({ title }) {
  return (
    <section className="projects">
      <div className="container">
        <div className="head">
          <div className="title">
            <p>Portfolio</p>
            <h2>
              {title} <span> Projects</span>
            </h2>
          </div>
          <Link target="_blanck" to={"https://github.com/tareq1998shareef/"}>
            View Github
            <span>
              <GoArrowUpRight />
            </span>
          </Link>
        </div>
        <div className="projects-grid">
          <Project />
        </div>
      </div>
    </section>
  );
}
