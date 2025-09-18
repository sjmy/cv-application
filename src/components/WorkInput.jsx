import "../styles/WorkInput.css";

function CompanyInput({ entry, work, onWorkChange }) {
  return (
    <div className="companyInputContainer">
      <label htmlFor="company">Company: </label>
      <input
        className="companyInput"
        type="text"
        value={entry.company}
        placeholder="Company Name"
        id="company"
        autoComplete="off"
        onChange={(e) =>
          handleCompanyChange(entry, work, onWorkChange, e.target.value)
        }
      />
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
    <div className="jobTitleInputContainer">
      <label htmlFor="jobTitle">Title of position: </label>
      <input
        className="jobTitleInput"
        type="text"
        value={entry.title}
        placeholder="Title of position"
        id="jobTitle"
        autoComplete="off"
        onChange={(e) =>
          handleJobTitleChange(entry, work, onWorkChange, e.target.value)
        }
      />
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
      <label htmlFor="jobStartDate">Start date of job: </label>
      <input
        className="jobDateStartInput"
        type="date"
        value={entry.start}
        placeholder="Start date of job"
        id="jobStartDate"
        autoComplete="off"
        onChange={(e) =>
          handleJobStartChange(entry, work, onWorkChange, e.target.value)
        }
      />
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
      <label htmlFor="jobEndDate">End date of job: </label>
      <input
        className="jobDateEndInput"
        type="date"
        value={entry.end}
        placeholder="End date of job"
        id="jobEndDate"
        autoComplete="off"
        onChange={(e) =>
          handleJobEndChange(entry, work, onWorkChange, e.target.value)
        }
      />
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
      <label htmlFor="jobDescription">Description of job: </label>
      <input
        className="jobDescriptionInput"
        type="text"
        value={entry.description}
        placeholder="Description of job and duties performed"
        id="jobDescription"
        autoComplete="off"
        onChange={(e) =>
          handleJobDescriptionChange(entry, work, onWorkChange, e.target.value)
        }
      />
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

function WorkEntryInput(entry, work, onWorkChange) {
  return (
    <div className="workEntryInputContainer" key={entry.id}>
      <CompanyInput entry={entry} work={work} onWorkChange={onWorkChange} />
      <JobTitleInput entry={entry} work={work} onWorkChange={onWorkChange} />
      <div className="jobDateInputContainer">
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
      <div className="jobDescriptionInputContainer">
        <JobDescriptionInput
          entry={entry}
          work={work}
          onWorkChange={onWorkChange}
        />
      </div>
    </div>
  );
}

function WorkInput({ work, onWorkChange }) {
  return (
    <section className="workInputContainer">
      <form className="workEntryInput">
        <h2>Work experience:</h2>
        {work.map((entry) => WorkEntryInput(entry, work, onWorkChange))}
      </form>
    </section>
  );
}

export default WorkInput;
