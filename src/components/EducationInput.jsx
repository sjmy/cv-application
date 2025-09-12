import "../styles/EducationInput.css";

function SchoolInput({ education, onEducationChange }) {
  return (
    <div className="schoolContainerInput">
      <label htmlFor="school">School: </label>
      <input
        className="schoolInput"
        type="text"
        value={education.school}
        placeholder="School Name"
        id="school"
        autoComplete="off"
        onChange={(e) =>
          handleSchoolChange(education, onEducationChange, e.target.value)
        }
      />
    </div>
  );
}

function handleSchoolChange(education, onEducationChange, newSchool) {
  const newEducation = { ...education, school: newSchool };
  onEducationChange(newEducation);
}

function StudyTitleInput({ education, onEducationChange }) {
  return (
    <div className="studyTitleContainerInput">
      <label htmlFor="studyTitle">Title of study: </label>
      <input
        className="studyTitleInput"
        type="text"
        placeholder="Title of study"
        id="studyTitle"
        autoComplete="off"
      />
    </div>
  );
}

function StudyDateStartInput({ education, onEducationChange }) {
  return (
    <>
      <label htmlFor="studyStartDate">Start date of study: </label>
      <input
        className="studyDateStartInput"
        type="date"
        placeholder="Start date of study"
        id="studyStartDate"
        autoComplete="off"
      />
    </>
  );
}

function StudyDateEndInput({ education, onEducationChange }) {
  return (
    <>
      <label htmlFor="studyEndDate">End date of study: </label>
      <input
        className="studyDateEndInput"
        type="date"
        placeholder="End date of study"
        id="studyEndDate"
        autoComplete="off"
      />
    </>
  );
}

function EducationEntryInput(entry, education, onEducationChange) {
  return (
    <div className="educationEntryInputContainer" key={entry.id}>
      <SchoolInput
        education={education}
        onEducationChange={onEducationChange}
      />
      <StudyTitleInput
        education={education}
        onEducationChange={onEducationChange}
      />
      <div className="studyDateInputContainer">
        <StudyDateStartInput
          education={education}
          onEducationChange={onEducationChange}
        />
        <StudyDateEndInput
          education={education}
          onEducationChange={onEducationChange}
        />
      </div>
    </div>
  );
}

function EducationInput({ education, onEducationChange }) {
  return (
    <section className="educationInputContainer">
      <form className="educationEntryInput">
        <h2>Education experience:</h2>
        {education.map((entry) =>
          EducationEntryInput(entry, education, onEducationChange)
        )}
      </form>
    </section>
  );
}

export default EducationInput;
