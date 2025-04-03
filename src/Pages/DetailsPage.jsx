import Details from "../components/details/Details";
import Footer from "../components/footer/Footer";
import Hr from "../components/hr/Hr";
import NavBar from "../components/nav link/NavBar";
import Projects from "../components/projects/Projects";

export default function DetailsPage() {
  return (
    <>
      <NavBar />
      <Details />
      <Hr />
      <Projects title="The Best" />
      <Footer />
    </>
  );
}
