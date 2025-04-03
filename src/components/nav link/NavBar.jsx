import { MdDarkMode } from "react-icons/md";
import "./NavBar.css";
import { BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
export default function NavBar({ activeSection, refs }) {
  const scrollToSection = (ref) => {
    const offset = 100;
    const elementPosition = ref.current.offsetTop;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  const [mode, setMode] = useState("light");
  const [show, setShow] = useState(false);
  useEffect(() => {
    const modeState = localStorage.getItem("mode") || "light";
    setMode(modeState);
    document.body.className = `mode-${modeState}`;
  }, []);

  function changeMode() {
    const newMode = mode === "light" ? "dark" : "light";
    localStorage.setItem("mode", newMode);
    setMode(newMode);
    document.body.className = `mode-${newMode}`;
  }
  const navigate = useNavigate();
  return (
    <nav>
      <div className="container">
        <span className="name">Tareq Shareef</span>
        <div>
          <ul className={`nav-links ${show ? "show" : ""}`}>
            <li
              className={activeSection === "home" ? "active" : ""}
              id="home"
              onClick={() => {
                scrollToSection(
                  location.pathname == "/" ? refs.homeRef : navigate("/")
                );
              }}
            >
              Home
            </li>
            <li
              className={activeSection === "about" ? "active" : ""}
              id="about"
              onClick={() => scrollToSection(refs.aboutRef)}
            >
              About me
            </li>
            <li
              className={activeSection === "education" ? "active" : ""}
              id="education"
              onClick={() => scrollToSection(refs.educationRef)}
            >
              Education
            </li>
            <li
              className={activeSection === "projects" ? "active" : ""}
              id="projects"
              onClick={() => scrollToSection(refs.projectsRef)}
            >
              Projects
            </li>
            <li
              className={activeSection === "contact" ? "active" : ""}
              id="contact"
              onClick={() => scrollToSection(refs.contactRef)}
            >
              Contact
            </li>
            <li onClick={() => changeMode()}>
              <span className="mode">
                {mode === "light" ? <MdDarkMode /> : <BsFillSunFill />}
              </span>
            </li>
          </ul>
        </div>
        <span className="mode" onClick={() => changeMode()}>
          {mode === "light" ? <MdDarkMode /> : <BsFillSunFill />}
        </span>
        <li className="bars" onClick={() => setShow((prev) => !prev)}>
          <HiMiniBars3BottomRight />
        </li>
      </div>
    </nav>
  );
}
