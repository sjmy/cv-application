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
  const inputValue = entry.start
    ? entry.start instanceof Date
      ? entry.start.toISOString().slice(0, 10)
      : new Date(entry.start).toISOString().slice(0, 10)
    : "";

  return (
    <>
      <label className="inputLabel">
        Start date:
        <input
          type="date"
          value={inputValue}
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
  // Checks to see if newStart exists, if so make a date out of it, if not store as an empty string
  const newEntry = {
    ...entryToUpdate,
    start: newStart ? new Date(newStart) : "",
  };
  const newEducation = education.map((entry) => {
    if (entry.id === newEntry.id) {
      return newEntry;
    }
    return entry;
  });

  onEducationChange(newEducation);
}

function StudyDateEndInput({ entry, education, onEducationChange }) {
  const inputValue = entry.end
    ? entry.end instanceof Date
      ? entry.end.toISOString().slice(0, 10)
      : new Date(entry.end).toISOString().slice(0, 10)
    : "";

  return (
    <>
      <label className="inputLabel">
        End date:
        <input
          type="date"
          value={inputValue}
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
  // Checks to see if newEnd exists, if so make a date out of it, if not store as an empty string
  const newEntry = { ...entryToUpdate, end: newEnd ? new Date(newEnd) : "" };
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

function addNewEntry(education, onEducationChange) {
  let newEducation = education.map((entry) => entry);
  let newEntry = {
    id: crypto.randomUUID(),
    school: "School Name",
    title: "Title of study",
    start: "",
    end: "",
  };

  newEducation.push(newEntry);
  onEducationChange(newEducation);
}

function EducationEntryInput(entry, education, onEducationChange) {
  const startDate = entry.start ? new Date(entry.start) : null;
  const endDate = entry.end ? new Date(entry.end) : null;

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
                  className="yesNo"
                  onClick={() =>
                    deleteEntry(entry.id, education, onEducationChange)
                  }
                >
                  Yes
                </button>
                <button
                  className="yesNo"
                  onClick={(e) => hideDeleteDialog(e.target)}
                >
                  No
                </button>
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
        <button
          className="addNewEntry"
          onClick={() => addNewEntry(education, onEducationChange)}
        >
          <img src="../img/add.svg" />
          <h4>Add education experience</h4>
        </button>
      </div>
    </div>
  );
}

export default EducationInput;
