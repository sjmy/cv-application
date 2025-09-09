function StudyDate() {
  return (
    <div className="studyDateContainer">
      <label for="studyDate">Date of study: </label>
      <input
        className="studyDateInput"
        type="date"
        placeholder="Date of study"
        id="studyDate"
        autocomplete="off"
      />
    </div>
  );
}

function StudyTitle() {
  return (
    <div className="studyTitleContainer">
      <label for="studyTitle">Title of study: </label>
      <input
        className="studyTitleInput"
        type="text"
        placeholder="Title of study"
        id="studyTitle"
        autocomplete="off"
      />
    </div>
  );
}

function School() {
  return (
    <div className="schoolContainer">
      <label for="school">School: </label>
      <input
        className="schoolInput"
        type="text"
        placeholder="School Name"
        id="school"
        autocomplete="off"
      />
    </div>
  );
}

function EducationExperience() {
  return (
    <section className="educationExperienceContainer">
      <form className="educationEntry">
        <h2>Education experience:</h2>
        <School />
        <StudyTitle />
        <StudyDate />
      </form>
    </section>
  );
}

export default EducationExperience;
