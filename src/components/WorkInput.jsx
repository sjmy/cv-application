import "../styles/WorkInput.css";

function CompanyInput({ entry, work, onWorkChange }) {
  return (
    <div className="inputContainer">
      <label className="inputLabel">
        Company:
        <input
          type="text"
          value={entry.company}
          placeholder="Company Name"
          id="company"
          autoComplete="off"
          onChange={(e) =>
            handleCompanyChange(entry, work, onWorkChange, e.target.value)
          }
        />
      </label>
    </div>
  );
}

function handleCompanyChange(entryToUpdate, work, onWorkChange, newCompany) {
  const newEntry = { ...entryToUpdate, company: newCompany };
  const newWork = work.map((entry) => {
    if (entry.id === newEntry.id) {
      return newEntry;
    }
    return entry;
  });

  onWorkChange(newWork);
}

function JobTitleInput({ entry, work, onWorkChange }) {
  return (
    <div className="inputContainer">
      <label className="inputLabel">
        Title:
        <input
          type="text"
          value={entry.title}
          placeholder="Title of position"
          id="jobTitle"
          autoComplete="off"
          onChange={(e) =>
            handleJobTitleChange(entry, work, onWorkChange, e.target.value)
          }
        />
      </label>
    </div>
  );
}

function handleJobTitleChange(entryToUpdate, work, onWorkChange, newTitle) {
  const newEntry = { ...entryToUpdate, title: newTitle };
  const newWork = work.map((entry) => {
    if (entry.id === newEntry.id) {
      return newEntry;
    }
    return entry;
  });

  onWorkChange(newWork);
}

function JobDateStartInput({ entry, work, onWorkChange }) {
  return (
    <>
      <label className="inputLabel">
        Start date:
        <input
          type="date"
          value={entry.start}
          placeholder="Start date of job"
          id="date"
          autoComplete="off"
          onChange={(e) =>
            handleJobStartChange(entry, work, onWorkChange, e.target.value)
          }
        />
      </label>
    </>
  );
}

function handleJobStartChange(entryToUpdate, work, onWorkChange, newStart) {
  const newEntry = { ...entryToUpdate, start: newStart };
  const newWork = work.map((entry) => {
    if (entry.id === newEntry.id) {
      return newEntry;
    }
    return entry;
  });

  onWorkChange(newWork);
}

function JobDateEndInput({ entry, work, onWorkChange }) {
  return (
    <>
      <label className="inputLabel">
        End date:
        <input
          type="date"
          value={entry.end}
          placeholder="End date of job"
          id="date"
          autoComplete="off"
          onChange={(e) =>
            handleJobEndChange(entry, work, onWorkChange, e.target.value)
          }
        />
      </label>
    </>
  );
}

function handleJobEndChange(entryToUpdate, work, onWorkChange, newEnd) {
  const newEntry = { ...entryToUpdate, end: newEnd };
  const newWork = work.map((entry) => {
    if (entry.id === newEntry.id) {
      return newEntry;
    }
    return entry;
  });

  onWorkChange(newWork);
}

function JobDescriptionInput({ entry, work, onWorkChange }) {
  return (
    <>
      <label className="inputLabel">
        Description:
        <textarea
          type="text"
          value={entry.description}
          placeholder="Description of job and duties performed"
          id="description"
          autoComplete="off"
          onChange={(e) =>
            handleJobDescriptionChange(
              entry,
              work,
              onWorkChange,
              e.target.value
            )
          }
        />
      </label>
    </>
  );
}

function handleJobDescriptionChange(
  entryToUpdate,
  work,
  onWorkChange,
  newDesc
) {
  const newEntry = { ...entryToUpdate, description: newDesc };
  const newWork = work.map((entry) => {
    if (entry.id === newEntry.id) {
      return newEntry;
    }
    return entry;
  });

  onWorkChange(newWork);
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

function WorkEntryInput(entry, work, onWorkChange) {
  return (
    <div className="entryInputContainer" key={entry.id}>
      <button
        className="formTitle"
        onClick={(e) => toggleContainerDisplay(e.target)}
      >
        <h3 className="entryTitle">
          {entry.title}, {entry.company}
        </h3>
        <h3 className="entryDate">
          {entry.start} - {entry.end}
        </h3>
        <img src="../img/arrow_dropup.svg" className="arrow" />
      </button>
      <div className="inputForm show">
        <CompanyInput entry={entry} work={work} onWorkChange={onWorkChange} />
        <JobTitleInput entry={entry} work={work} onWorkChange={onWorkChange} />
        <div className="inputContainer">
          <JobDateStartInput
            entry={entry}
            work={work}
            onWorkChange={onWorkChange}
          />
          <JobDateEndInput
            entry={entry}
            work={work}
            onWorkChange={onWorkChange}
          />
        </div>
        <div className="inputContainer">
          <JobDescriptionInput
            entry={entry}
            work={work}
            onWorkChange={onWorkChange}
          />
        </div>
      </div>
    </div>
  );
}

function WorkInput({ work, onWorkChange }) {
  return (
    <div className="formContainer">
      <button
        className="formTitle"
        onClick={(e) => toggleContainerDisplay(e.target)}
      >
        <h2>Work Experience</h2>
        <img src="../img/arrow_dropup.svg" className="arrow" />
      </button>
      <div className="inputForm show">
        {work.map((entry) => WorkEntryInput(entry, work, onWorkChange))}
      </div>
    </div>
  );
}

export default WorkInput;
