import "../styles/WorkDisplay.css";

// Mock work experience
// const work = [
//   {
//     id: crypto.randomUUID(),
//     company: "Actual Company",
//     title: "Worker",
//     start: "Apr 2022",
//     end: "Oct 2024",
//     description: "Working at an actual company",
//   },
//   {
//     id: crypto.randomUUID(),
//     company: "Exists Inc.",
//     title: "Manager",
//     start: "Oct 2024",
//     end: "present",
//     description: "Managing workers that really exist",
//   },
// ];

function WorkEntryDisplay(entry) {
  return (
    <div className="workEntry" key={entry.id}>
      <p>{entry.company}</p>
      <p>{entry.title}</p>
      <p>
        {entry.start} - {entry.end}
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
