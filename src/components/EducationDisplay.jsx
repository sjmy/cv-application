import "../styles/EducationDisplay.css";

// Mock education experience
// const education = [
//   {
//     id: crypto.randomUUID(),
//     school: "The Odin Project",
//     title: "Full-Stack Web Development",
//     start: "Jan 2025",
//     end: "present",
//   },
//   {
//     id: crypto.randomUUID(),
//     school: "Placeholder University",
//     title: "Bachelor of Computer Science",
//     start: "Sept 2017",
//     end: "June 2021",
//   },
// ];

function EducationEntryDisplay(entry) {
  return (
    <div className="educationEntry" key={entry.id}>
      <p>{entry.school}</p>
      <p>{entry.title}</p>
      <p>
        {entry.start} - {entry.end}
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
