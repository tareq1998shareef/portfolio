import "./Home.css";
export default function Home() {
  function download() {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1Hye9veXAoegn8A5ca2fQsf9g0hVODY0k";
  }
  return (
    <div className="hero">
      <img
        className="vector"
        src="public/assets/images/lines.svg"
        alt="lines"
      />
      <div className="container">
        <div className="text">
          <h2>
            <span>HEY!</span>I’m Tareq Shareef, Frontend Developer
          </h2>
          <p>
            Agency-quality Webflow websites with the personal touch of a
            freelancer.
          </p>
          <button onClick={() => download()}>Download Cv</button>
        </div>
        <div className="photo">
          <div className="circle-bg"></div>
          <img
            className="main-image"
            src="public/assets/images/selfie.png"
            alt="Selfie"
          />
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
          <div className="shape shape4"></div>
          <div className="shape shape5"></div>
        </div>
      </div>
    </div>
  );
}
