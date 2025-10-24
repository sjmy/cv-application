import "../styles/WorkDisplay.css";

// If the endDate month and year is current, return "Present"
function endDateDisplay(endDate) {
  let today = new Date().toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  let end = endDate.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  if (today === end) {
    return "Present";
  }

  return end;
}

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
        - {endDate ? endDateDisplay(endDate) : "—"}
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
