import "../styles/EducationDisplay.css";

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

function EducationEntryDisplay(entry) {
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
    <div className="educationEntryDisplay" key={entry.id}>
      <p>
        <b>{entry.school}</b>
      </p>
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
    </div>
  );
}

function EducationDisplay({ education }) {
  return (
    <section className="educationDisplayContainer">
      <h2>Education</h2>
      {education.map((entry) => EducationEntryDisplay(entry))}
    </section>
  );
}

export default EducationDisplay;
