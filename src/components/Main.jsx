import "../styles/Main.css";
import ContactInfoInput from "./ContactInfoInput";
import ContactInfoDisplay from "./ContactInfoDisplay";
import EducationInput from "./EducationInput";
import EducationDisplay from "./EducationDisplay";
import WorkInput from "./WorkInput";

function Main() {
  return (
    <main>
      <section className="inputSection">
        <ContactInfoInput />
        <EducationInput />
        <WorkInput />
      </section>
      <section className="displaySection">
        <ContactInfoDisplay />
        <EducationDisplay />
      </section>
    </main>
  );
}

export default Main;
