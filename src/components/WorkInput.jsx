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

function JobDateStartInput() {
  return (
    <>
      <label htmlFor="jobStartDate">Start date of job: </label>
      <input
        className="jobDateStartInput"
        type="date"
        placeholder="Start date of job"
        id="jobStartDate"
        autoComplete="off"
      />
    </>
  );
}

function JobDateEndInput() {
  return (
    <>
      <label htmlFor="jobEndDate">End date of job: </label>
      <input
        className="jobDateEndInput"
        type="date"
        placeholder="End date of job"
        id="jobEndDate"
        autoComplete="off"
      />
    </>
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
        <div className="jobDateInputContainer">
          <JobDateStartInput />
          <JobDateEndInput />
        </div>
        <JobDescriptionInput />
      </form>
    </section>
  );
}

export default WorkInput;
