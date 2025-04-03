import "./Experience.css";

export default function Experience() {
  const experience = [
    {
      title: "Education",
      explanation:
        "Bachelor's Degree in Computer Engineering | University Degree | Damascus, Syria",
    },
    {
      title: "Intern at Vica Company",
      explanation:
        "Worked on real-world projects using React and API integration.",
    },
    {
      title: "Intern at Vica Company",
      explanation:
        "Converted Figma designs into fully functional and responsive interfaces.",
    },
    {
      title: "Frontend Developer - Freelance",
      explanation:
        "Developed multiple websites using HTML, CSS, JavaScript, and React.",
    },
  ];
  return (
    <div className="experiences">
      {experience.map((experience, index) => (
        <div key={index} className="experience">
          <h4>{experience.title}</h4>
          <p>{experience.explanation}</p>
        </div>
      ))}
    </div>
  );
}
