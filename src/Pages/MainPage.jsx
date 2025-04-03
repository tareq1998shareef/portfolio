import AboutMe from "../components/about me/AboutMe";
import Advertisements from "../components/advertisements/Advertisements";
import Hr from "../components/hr/Hr";
import Contact from "../components/contact/Contact";
import EducationAndExperience from "../components/education and experience/EducationAndExperience";
import Footer from "../components/footer/Footer";
import Home from "../components/home/Home";
import NavBar from "../components/nav link/NavBar";
import Projects from "../components/projects/Projects";
import BackToTop from "../components/back to top/BackToTop";
import { useEffect, useRef, useState } from "react";
export default function MainPage() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const advertisementsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const aboutTop = aboutRef.current?.offsetTop || 0;
      const educationTop = educationRef.current?.offsetTop || 0;
      const advertisementsTop = advertisementsRef.current?.offsetTop || 0;
      const projectsTop = projectsRef.current?.offsetTop || 0;
      const contactTop = contactRef.current?.offsetTop || 0;

      if (scrollY >= contactTop - 200) {
        setActiveSection("contact");
        setShowScrollTop(true);
      } else if (scrollY >= projectsTop - 200) {
        setActiveSection("projects");
        setShowScrollTop(true);
      } else if (scrollY >= advertisementsTop - 200) {
        setActiveSection("advertisements");
        setShowScrollTop(true);
      } else if (scrollY >= educationTop - 200) {
        setActiveSection("education");
        setShowScrollTop(true);
      } else if (scrollY >= aboutTop - 200) {
        setActiveSection("about");
        setShowScrollTop(false);
      } else {
        setActiveSection("home");
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <NavBar
        activeSection={activeSection}
        refs={{
          homeRef,
          aboutRef,
          educationRef,
          advertisementsRef,
          projectsRef,
          contactRef,
        }}
      />
      <div ref={homeRef}>
        <Home />
      </div>
      <Hr />
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <div ref={educationRef}>
        <EducationAndExperience />
      </div>
      <div ref={advertisementsRef}>
        <Advertisements contactRef={contactRef} />
      </div>
      <div ref={projectsRef}>
        <Projects title="My Creative Works Latest" />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
      {showScrollTop && <BackToTop showScrollTop={showScrollTop} />}
    </>
  );
}
