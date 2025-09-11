import "../styles/WorkInput.css";

function JobDescriptionInput() {
  return (
    <div className="jobDescriptionInputContainer">
      <label htmlFor="jobDescription">Description of job: </label>
      <input
        className="jobDescriptionInput"
        type="text"
        placeholder="Description of job and duties performed"
        id="jobDescription"
        autoComplete="off"
      />
    </div>
  );
}

function JobDateInput() {
  return (
    <div className="jobDateInputContainer">
      <label htmlFor="jobDate">Date of job: </label>
      <input
        className="jobDateInput"
        type="date"
        placeholder="Date of job"
        id="jobDate"
        autoComplete="off"
      />
    </div>
  );
}

function JobTitleInput() {
  return (
    <div className="jobTitleInputContainer">
      <label htmlFor="jobTitle">Title of position: </label>
      <input
        className="jobTitleInput"
        type="text"
        placeholder="Title of position"
        id="jobTitle"
        autoComplete="off"
      />
    </div>
  );
}

function CompanyInput() {
  return (
    <div className="companyInputContainer">
      <label htmlFor="company">Company: </label>
      <input
        className="companyInput"
        type="text"
        placeholder="Company Name"
        id="company"
        autoComplete="off"
      />
    </div>
  );
}

function WorkInput() {
  return (
    <section className="workInputContainer">
      <form className="workEntryInput">
        <h2>Work experience:</h2>
        <CompanyInput />
        <JobTitleInput />
        <JobDateInput />
        <JobDescriptionInput />
      </form>
    </section>
  );
}

export default WorkInput;
