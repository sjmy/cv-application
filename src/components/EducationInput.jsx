import "../styles/EducationInput.css";

function SchoolInput({ entry, education, onEducationChange }) {
  return (
    <div className="schoolInputContainer">
      <label htmlFor="school">School: </label>
      <input
        className="schoolInput"
        type="text"
        value={entry.school}
        placeholder="School Name"
        id="school"
        autoComplete="off"
        onChange={(e) =>
          handleSchoolChange(
            entry,
            education,
            onEducationChange,
            e.target.value
          )
        }
      />
    </div>
  );
}

function handleSchoolChange(
  entryToUpdate,
  education,
  onEducationChange,
  newSchool
) {
  const newEntry = { ...entryToUpdate, school: newSchool };
  const newEducation = education.map((entry) => {
    if (entry.id === newEntry.id) {
      return newEntry;
    }
    return entry;
  });

  onEducationChange(newEducation);
}

function StudyTitleInput({ entry, education, onEducationChange }) {
  return (
    <div className="studyTitleInputContainer">
      <label htmlFor="studyTitle">Title of study: </label>
      <input
        className="studyTitleInput"
        type="text"
        value={entry.title}
        placeholder="Title of study"
        id="studyTitle"
        autoComplete="off"
        onChange={(e) =>
          handleStudyTitleChange(
            entry,
            education,
            onEducationChange,
            e.target.value
          )
        }
      />
    </div>
  );
}

function handleStudyTitleChange(
  entryToUpdate,
  education,
  onEducationChange,
  newTitle
) {
  const newEntry = { ...entryToUpdate, title: newTitle };
  const newEducation = education.map((entry) => {
    if (entry.id === newEntry.id) {
      return newEntry;
    }
    return entry;
  });

  onEducationChange(newEducation);
}

function StudyDateStartInput({ entry, education, onEducationChange }) {
  return (
    <>
      <label htmlFor="studyStartDate">Start date of study: </label>
      <input
        className="studyDateStartInput"
        type="date"
        value={entry.start}
        placeholder="Start date of study"
        id="studyStartDate"
        autoComplete="off"
        onChange={(e) =>
          handleStudyStartChange(
            entry,
            education,
            onEducationChange,
            e.target.value
          )
        }
      />
    </>
  );
}

function handleStudyStartChange(
  entryToUpdate,
  education,
  onEducationChange,
  newStart
) {
  const newEntry = { ...entryToUpdate, start: newStart };
  const newEducation = education.map((entry) => {
    if (entry.id === newEntry.id) {
      return newEntry;
    }
    return entry;
  });

  onEducationChange(newEducation);
}

function StudyDateEndInput({ entry, education, onEducationChange }) {
  return (
    <>
      <label htmlFor="studyEndDate">End date of study: </label>
      <input
        className="studyDateEndInput"
        type="date"
        value={entry.end}
        placeholder="End date of study"
        id="studyEndDate"
        autoComplete="off"
        onChange={(e) =>
          handleStudyEndChange(
            entry,
            education,
            onEducationChange,
            e.target.value
          )
        }
      />
    </>
  );
}

function handleStudyEndChange(
  entryToUpdate,
  education,
  onEducationChange,
  newEnd
) {
  const newEntry = { ...entryToUpdate, end: newEnd };
  const newEducation = education.map((entry) => {
    if (entry.id === newEntry.id) {
      return newEntry;
    }
    return entry;
  });

  onEducationChange(newEducation);
}

function EducationEntryInput(entry, education, onEducationChange) {
  return (
    <div className="educationEntryInputContainer" key={entry.id}>
      <SchoolInput
        entry={entry}
        education={education}
        onEducationChange={onEducationChange}
      />
      <StudyTitleInput
        entry={entry}
        education={education}
        onEducationChange={onEducationChange}
      />
      <div className="studyDateInputContainer">
        <StudyDateStartInput
          entry={entry}
          education={education}
          onEducationChange={onEducationChange}
        />
        <StudyDateEndInput
          entry={entry}
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
