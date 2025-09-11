import "../styles/EducationInput.css";

function StudyDateStartInput() {
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

function StudyDateEndInput() {
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

function StudyTitleInput() {
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

function SchoolInput() {
  return (
    <div className="schoolContainerInput">
      <label htmlFor="school">School: </label>
      <input
        className="schoolInput"
        type="text"
        placeholder="School Name"
        id="school"
        autoComplete="off"
      />
    </div>
  );
}

function EducationInput() {
  return (
    <section className="educationInputContainer">
      <form className="educationEntryInput">
        <h2>Education experience:</h2>
        <SchoolInput />
        <StudyTitleInput />
        <div className="studyDateInputContainer">
          <StudyDateStartInput />
          <StudyDateEndInput />
        </div>
      </form>
    </section>
  );
}

export default EducationInput;
