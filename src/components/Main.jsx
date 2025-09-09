import ContactInfo from "./ContactInfo";
import EducationExperience from "./EducationExperience";
import WorkExperience from "./WorkExperience";

function Main() {
  return (
    <main>
      <section className="inputSection">
        <ContactInfo />
        <EducationExperience />
        <WorkExperience />
      </section>
      <section className="displaySection"></section>
    </main>
  );
}

export default Main;
