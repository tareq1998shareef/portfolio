import { Link } from "react-router-dom";
import "./Project.css";
import { LuCircleArrowOutUpRight } from "react-icons/lu";

export const projects = [
  {
    id: 1,
    title: "Book Store",
    description: "Html-Css3-Vanilla javascript",
    image: "/assets/images/book.PNG",
    github: "https://tareq1998shareef.github.io/book-store/",
  },
  {
    id: 2,
    title: "food delivery",
    description: "Html-Css3-React",
    image: "/assets/images/food_del.jpg",
    github: "https://food-delivery-sable-beta.vercel.app",
  },
  {
    id: 3,
    title: "My World",
    description: "Html-Css3-Vanilla javascript",
    image: "/assets/images/myworld.PNG",
    github: "https://tareq1998shareef.github.io/my-world/",
  },
  {
    id: 4,
    title: "Dashboard",
    description: "Html-Css3-React",
    image: "/assets/images/dashboard.PNG",
    github: "https://tareq1998shareef.github.io/dashboard/",
  },
];

export default function Project({ start, end }) {
  const filteredProjects = projects.filter(
    (_, index) => index >= start && index <= end
  );
  return (
    <>
      {filteredProjects.map((project, index) => (
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
