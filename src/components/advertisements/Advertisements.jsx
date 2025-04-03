import { FaArrowRightLong } from "react-icons/fa6";
import "./Advertisements.css";

export default function Advertisements({ contactRef }) {
  const scrollToSection = () => {
    const offset = 100;
    const elementPosition = contactRef.current.offsetTop;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  return (
    <section className="advertisements">
      <div className="container">
        <div className="behind"></div>
        <div className="front">
          <div className="text">
            <h2>Try me out, risk free!</h2>
            <p>
              If you’re not happy with the design after the first draft,
              <br />
              I’ll refund your deposit, <strong>no questions asked</strong>
            </p>
          </div>
          <button onClick={() => scrollToSection()}>
            Contact
            <span>
              <FaArrowRightLong />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
