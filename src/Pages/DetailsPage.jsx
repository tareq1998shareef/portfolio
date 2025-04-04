import { useEffect, useState } from "react";
import Details from "../components/details/Details";
import Footer from "../components/footer/Footer";
import Hr from "../components/hr/Hr";
import NavBar from "../components/nav link/NavBar";
import Projects from "../components/projects/Projects";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(2);
  const id = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <NavBar />
      <Details />
      <Hr />
      <Projects
        title="The Best"
        start={start}
        setStart={setStart}
        end={end}
        setEnd={setEnd}
      />
      <Footer />
    </>
  );
}
