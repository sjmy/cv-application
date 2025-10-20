import "../styles/EducationDisplay.css";

function EducationEntryDisplay(entry) {
  return (
    <div className="educationEntryDisplay" key={entry.id}>
      <p>{entry.school}</p>
      <p>{entry.title}</p>
      <p>
        {entry.start.toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        })}{" "}
        -{" "}
        {entry.end.toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        })}
      </p>
    </div>
  );
}

function EducationDisplay({ education }) {
  return (
    <section className="educationDisplayContainer">
      <h2>Education Experience</h2>
      {education.map((entry) => EducationEntryDisplay(entry))}
    </section>
  );
}

export default EducationDisplay;
