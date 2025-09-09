function JobDescription() {
  return (
    <div className="jobDescriptionContainer">
      <label for="jobDescription">Description of job: </label>
      <input
        className="jobDescriptionInput"
        type="text"
        placeholder="Description of job and duties performed"
        id="jobDescription"
        autocomplete="off"
      />
    </div>
  );
}

function JobDate() {
  return (
    <div className="jobDateContainer">
      <label for="jobDate">Date of job: </label>
      <input
        className="jobDateInput"
        type="date"
        placeholder="Date of job"
        id="jobDate"
        autocomplete="off"
      />
    </div>
  );
}

function JobTitle() {
  return (
    <div className="jobTitleContainer">
      <label for="jobTitle">Title of position: </label>
      <input
        className="jobTitleInput"
        type="text"
        placeholder="Title of position"
        id="jobTitle"
        autocomplete="off"
      />
    </div>
  );
}

function Company() {
  return (
    <div className="companyContainer">
      <label for="company">Company: </label>
      <input
        className="companyInput"
        type="text"
        placeholder="Company Name"
        id="company"
        autocomplete="off"
      />
    </div>
  );
}

function WorkExperience() {
  return (
    <section className="workExperienceContainer">
      <form className="workEntry">
        <h2>Work experience:</h2>
        <Company />
        <JobTitle />
        <JobDate />
        <JobDescription />
      </form>
    </section>
  );
}

export default WorkExperience;
