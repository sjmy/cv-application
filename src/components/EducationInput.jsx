import "../styles/EducationInput.css";

function SchoolInput({ entry, education, onEducationChange }) {
  return (
    <div className="inputContainer">
      <label className="inputLabel">
        School:
        <input
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
      </label>
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
    <div className="inputContainer">
      <label className="inputLabel">
        Program:
        <input
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
      </label>
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
      <label className="inputLabel">
        Start date:
        <input
          type="date"
          value={entry.start}
          placeholder="Start date of study"
          id="date"
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
      </label>
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
      <label className="inputLabel">
        End date:
        <input
          type="date"
          value={entry.end}
          placeholder="End date of study"
          id="date"
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
      </label>
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

function toggleContainerDisplay(target) {
  let arrow = target.lastElementChild;
  let form = target.nextElementSibling;

  if (target.tagName !== "BUTTON") {
    arrow = target.parentNode.lastElementChild;
    form = target.parentNode.nextElementSibling;
  }

  if (form.className.includes("show")) {
    arrow.src = "../img/arrow_dropdown.svg";
    form.classList.remove("show");
    form.classList.add("hide");
    return;
  }

  arrow.src = "../img/arrow_dropup.svg";
  form.classList.remove("hide");
  form.classList.add("show");
  return;
}

function showDeleteDialog(target) {
  const dropdown = target.nextElementSibling;
  dropdown.classList.remove("hide");
  dropdown.classList.add("show");
}

function hideDeleteDialog(target) {
  const dropdown = target.parentNode.parentNode;
  dropdown.classList.remove("show");
  dropdown.classList.add("hide");
}

function deleteEntry(id, education, onEducationChange) {
  const newEducation = education.filter((entry) => entry.id !== id);
  onEducationChange(newEducation);
}

function EducationEntryInput(entry, education, onEducationChange) {
  return (
    <div className="entryInputContainer" key={entry.id}>
      <button
        className="formTitle"
        onClick={(e) => toggleContainerDisplay(e.target)}
      >
        <h3 className="entryTitle">
          {entry.title}, {entry.school}
        </h3>
        <h3 className="entryDate">
          {entry.start} - {entry.end}
        </h3>
        <img src="../img/arrow_dropup.svg" className="arrow" />
      </button>
      <div className="inputForm show">
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
        <div className="inputContainer">
          <StudyDateStartInput
            entry={entry}
            education={education}
            onEducationChange={onEducationChange}
          />
          <div className="inputFooter">
            <StudyDateEndInput
              entry={entry}
              education={education}
              onEducationChange={onEducationChange}
            />
            <img
              src="../img/delete.svg"
              className="trash"
              onClick={(e) => showDeleteDialog(e.target)}
            />
            <div className="dropdownContent">
              <h4>Delete entry?</h4>
              <div className="options">
                <button
                  onClick={() =>
                    deleteEntry(entry.id, education, onEducationChange)
                  }
                >
                  Yes
                </button>
                <button onClick={(e) => hideDeleteDialog(e.target)}>No</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EducationInput({ education, onEducationChange }) {
  return (
    <div className="formContainer">
      <button
        className="formTitle"
        onClick={(e) => toggleContainerDisplay(e.target)}
      >
        <h2>Education Experience</h2>
        <img src="../img/arrow_dropup.svg" className="arrow" />
      </button>
      <div className="inputForm show">
        {education.map((entry) =>
          EducationEntryInput(entry, education, onEducationChange)
        )}
      </div>
    </div>
  );
}

export default EducationInput;
