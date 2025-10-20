import "../styles/WorkDisplay.css";

function WorkEntryDisplay(entry) {
  return (
    <div className="workEntry" key={entry.id}>
      <p>{entry.company}</p>
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
      <p>{entry.description}</p>
    </div>
  );
}

function WorkDisplay({ work }) {
  return (
    <section className="workDisplayContainer">
      <h2>Work Experience</h2>
      {work.map((entry) => WorkEntryDisplay(entry))}
    </section>
  );
}

export default WorkDisplay;
