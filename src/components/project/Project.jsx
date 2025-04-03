import { Link } from "react-router-dom";
import "./Project.css";
import { LuCircleArrowOutUpRight } from "react-icons/lu";

const projects = [
  {
    id: 1,
    title: "My World",
    description: "Html-Css3-Vanilla javascript",
    image: "/assets/images/myworld.png",
    github: "https://tareq1998shareef.github.io/my-world/",
  },
  {
    id: 2,
    title: "Dashboard",
    description: "Html-Css3-React",
    image: "/assets/images/dashboard.png",
    github: "https://tareq1998shareef.github.io/dashboard/",
  },
  {
    id: 3,
    title: "Book Store",
    description: "Html-Css3-Vanilla javascript",
    image: "/assets/images/book.png",
    github: "https://tareq1998shareef.github.io/book-store/",
  },
];

export default function Project() {
  return (
    <>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img
            src={project.image}
            alt={project.title}
            onClick={() =>
              window.open(project.github, "_blank", "noopener,noreferrer")
            }
          />
          <div className="project-info">
            <div className="info">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
            </div>
            <Link to={`/details/${project.id}`}>
              <LuCircleArrowOutUpRight />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
