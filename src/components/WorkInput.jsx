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
  // Convert date to a string "dd/mm/yyyy" for display in input type="date" element
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
  // Checks to see if newStart exists, if so make a date out of it, if not store as an empty string
  const newEntry = {
    ...entryToUpdate,
    start: newStart ? new Date(newStart) : "",
  };
  const newWork = work.map((entry) => {
    if (entry.id === newEntry.id) {
      return newEntry;
    }
    return entry;
  });

  onWorkChange(newWork);
}

function JobDateEndInput({ entry, work, onWorkChange }) {
  // Convert date to a string "dd/mm/yyyy" for display in input type="date" element
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
  // Checks to see if newEnd exists, if so make a date out of it, if not store as an empty string
  const newEntry = { ...entryToUpdate, end: newEnd ? new Date(newEnd) : "" };
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

function deleteEntry(id, work, onWorkChange, target) {
  const newWork = work.filter((entry) => entry.id !== id);
  onWorkChange(newWork);
  hideDeleteDialog(target);
}

function addNewEntry(work, onWorkChange) {
  let newWork = work.map((entry) => entry);
  let newEntry = {
    id: crypto.randomUUID(),
    company: "Company",
    title: "Title",
    start: "",
    end: "",
    description: "Description of position",
  };

  newWork.push(newEntry);
  onWorkChange(newWork);
}

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

function WorkEntryInput(entry, work, onWorkChange) {
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
    <div className="entryInputContainer" key={entry.id}>
      <button
        className="formTitle"
        onClick={(e) => toggleContainerDisplay(e.target)}
      >
        <h3 className="entryTitle">
          {entry.title}, {entry.company}
        </h3>
        <h3 className="entryDate">
          {startDate
            ? startDate.toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
                timeZone: "UTC",
              })
            : "—"}{" "}
          - {endDate ? endDateDisplay(endDate) : "—"}
        </h3>
        <img src="../img/arrow_dropup.svg" className="arrow" />
      </button>
      <div className="inputForm show">
        <CompanyInput entry={entry} work={work} onWorkChange={onWorkChange} />
        <JobTitleInput entry={entry} work={work} onWorkChange={onWorkChange} />
        <div className="inputContainer">
          <JobDescriptionInput
            entry={entry}
            work={work}
            onWorkChange={onWorkChange}
          />
        </div>
        <div className="inputContainer">
          <JobDateStartInput
            entry={entry}
            work={work}
            onWorkChange={onWorkChange}
          />
          <div className="inputFooter">
            <JobDateEndInput
              entry={entry}
              work={work}
              onWorkChange={onWorkChange}
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
                  onClick={(e) =>
                    deleteEntry(entry.id, work, onWorkChange, e.target)
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

function WorkInput({ work, onWorkChange }) {
  return (
    <div className="formContainer">
      <button
        className="formTitle"
        onClick={(e) => toggleContainerDisplay(e.target)}
      >
        <h2>Experience</h2>
        <img src="../img/arrow_dropup.svg" className="arrow" />
      </button>
      <div className="inputForm show">
        {work.map((entry) => WorkEntryInput(entry, work, onWorkChange))}
        <button
          className="addNewEntry"
          onClick={() => addNewEntry(work, onWorkChange)}
        >
          <img src="../img/add.svg" />
          <h4>Add experience</h4>
        </button>
      </div>
    </div>
  );
}

export default WorkInput;
