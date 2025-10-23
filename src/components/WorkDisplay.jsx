import "../styles/WorkDisplay.css";

function WorkEntryDisplay(entry) {
  const startDate = entry.start
    ? entry.start instanceof Date
      ? entry.start
      : new Date(entry.start)
    : null;
  const endDate = entry.end
    ? entry.end instanceof Date
      ? entry.end
      : new Date(entry.end)
    : null;

  return (
    <div className="workEntry" key={entry.id}>
      <p>{entry.company}</p>
      <p>{entry.title}</p>
      <p>
        {startDate
          ? startDate.toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
              timeZone: "UTC",
            })
          : "—"}{" "}
        -{" "}
        {endDate
          ? endDate.toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
              timeZone: "UTC",
            })
          : "—"}
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
