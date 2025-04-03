import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>@ 2025. All Rights Reserved</p>
        <p>Develpoment by Tareq Shareef</p>
        <ul className="social">
          <Link to="https://www.facebook.com/tareq.salah.1614/" target="_blank">
            <li>
              <FaFacebookF />
            </li>
          </Link>
          <Link to="https://www.linkedin.com/in/tareq-shareef-69b87a359/" target="_blank">
            <li>
              <FaLinkedinIn />
            </li>
          </Link>
          <Link to="https://t.me/Tareq_shareef" target="_blank">
            <li>
              <FaTelegramPlane />
            </li>
          </Link>
        </ul>
      </div>
    </footer>
  );
}
