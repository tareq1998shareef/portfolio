import { Link, useParams } from "react-router-dom";
import "./Details.css";
import { LuCircleArrowOutUpRight } from "react-icons/lu";

export default function Details() {
  const project = [
    {
      id: "1",
      title: "My World",
      date: "12-5-2024",
      description:
        "A training website with an innovative design that tells of my own world. ",
      languages: ["Html5", "Css", "Javascript"],
      framework: "",
      libraries: [""],
      github: "https://tareq1998shareef.github.io/my-world/",
      githubRepo: "https://github.com/tareq1998shareef/my-world",
      image: "/assets/images/myworld.png",
    },
    {
      id: "2",
      title: "Dashboard",
      date: "2-3-2025",
      description:
        "Simple training website based on a design on Figma and real ABI.",
      languages: ["Html5", "Css", "React"],
      framework: "",
      libraries: ["React.js"],
      github: "https://tareq1998shareef.github.io/dashboard/",
      githubRepo: "https://github.com/tareq1998shareef/dashboard",
      image: "/assets/images/dashboard.png",
    },
    {
      id: "3",
      title: "Book Store",
      date: "1-4-2024",
      description:
        "A training site based on designing with Figma and real ABI.",
      languages: ["Html5", "Css", "Javascript"],
      framework: "",
      libraries: [""],
      github: "https://tareq1998shareef.github.io/book-store/",
      githubRepo: "https://github.com/tareq1998shareef/book-store",
      image: "/assets/images/book.png",
    },
  ];
  const { id } = useParams();
  const requiredProject = project.find((pro) => pro.id === String(id));
  if (!requiredProject) {
    return (
      <section className="details">
        <div className="container">
          <h1>project not found</h1>
        </div>
      </section>
    );
  }
  return (
    <section className="details">
      <div className="container">
        <div className="project-image">
          <img src={requiredProject.image} alt={requiredProject.title} />
        </div>
        <div className="project-info">
          <div className="title-date-icon">
            <div className="title-and-date">
              <h2>{requiredProject.title}</h2>
              <p className="project-date">{requiredProject.date}</p>
            </div>
            <span
              className="icon"
              onClick={() =>
                window.open(project.github, "_blank", "noopener,noreferrer")
              }
            >
              <LuCircleArrowOutUpRight />
            </span>
          </div>
          <p className="project-description">{requiredProject.description}</p>
          <div className="desc">
            <p className="lang">
              <strong>Basic Languages: </strong>
              {requiredProject.languages.join(", ")}
            </p>
            <p className="framework">
              <strong>Framework: </strong> {requiredProject.framework}
            </p>
            <p className="libraries">
              <strong>Libraries: </strong>{" "}
              {requiredProject.libraries.join(", ")}
            </p>
          </div>
          <Link target="_blanck" to={requiredProject.githubRepo}>
            Github Repo
          </Link>
        </div>
      </div>
    </section>
  );
}
