import { IoCallOutline } from "react-icons/io5";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="title">
          <p className="main-title">Contact</p>
          <p className="contact-title">
            Let’s Discuss Your <span>Project</span>
          </p>
        </div>
        <div className="info-contact">
          <div className="my-information">
            <div className="info call-me">
              <div className="icon">
                <IoCallOutline />
              </div>
              <div className="text-info">
                <p>Call me</p>
                <p>+963934898234</p>
              </div>
            </div>
            <div className="info">
              <div className="icon">
                <MdOutlineEmail />
              </div>
              <div className="text-info">
                <p>Email me</p>
                <p>tareq13101998@gmail.com</p>
              </div>
            </div>
            <div className="info">
              <div className="icon">
                <CiLocationOn />
              </div>
              <div className="text-info">
                <p>Address</p>
                <p>Damascus,syria</p>
              </div>
            </div>
          </div>
          <form>
            <div className="name-and-email">
              <input
                className="input-form"
                type="text"
                placeholder="Full name"
                required
              />
              <input
                className="input-form"
                type="email"
                placeholder="Your email"
                required
              />
            </div>
            <input
              className="input-form"
              type="text"
              placeholder="Phone number"
            />
            <textarea
              className="message input-form"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
