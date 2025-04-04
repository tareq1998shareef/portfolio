import { Link } from "react-router-dom";
import "./Projects.css";
import { GoArrowUpRight } from "react-icons/go";
import Project, { projects } from "../project/Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Projects({
  title,
  start,
  setStart,
  end,
  setEnd,
  view,
}) {
  const totalProjects = projects.length;

  function nextProject() {
    if (end < totalProjects) {
      setStart(start + 1);
      setEnd(end + 1);
    }
  }

  function prevProject() {
    if (start > 0) {
      setStart(start - 1);
      setEnd(end - 1);
    }
  }
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
          <div
            className="navigation-buttons"
            style={{ display: view ? "none" : "flex" }}
          >
            <button
              className="navigate prev"
              onClick={prevProject}
              disabled={start === 0}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="navigate next"
              onClick={nextProject}
              disabled={end === totalProjects - 1}
            >
              <IoIosArrowForward />
            </button>
          </div>
          <Link
            style={{ display: view ? "flex" : "none" }}
            target="_blanck"
            to={"https://github.com/tareq1998shareef/"}
          >
            View Github
            <span>
              <GoArrowUpRight />
            </span>
          </Link>
        </div>
        <div className="projects-grid">
          <Project start={start} end={end} />
        </div>
      </div>
    </section>
  );
}
