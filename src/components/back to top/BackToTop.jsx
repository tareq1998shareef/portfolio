import { FaArrowUp } from "react-icons/fa";
import "./BackToTop.css";

export default function BackToTop({ showScrollTop }) {
  return (
    <button
      style={{ display: showScrollTop ? "block" : "none" }}
      className="back-to-top"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <FaArrowUp />
    </button>
  );
}
