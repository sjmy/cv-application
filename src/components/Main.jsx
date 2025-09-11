import "../styles/Main.css";
import { useState } from "react";
import ContactInfoInput from "./ContactInfoInput";
import ContactInfoDisplay from "./ContactInfoDisplay";
import EducationInput from "./EducationInput";
import EducationDisplay from "./EducationDisplay";
import WorkInput from "./WorkInput";
import WorkDisplay from "./WorkDisplay";

function Main() {
  const [contact, setContact] = useState({
    id: crypto.randomUUID(),
    name: "Sleve McDichael",
    email: "smcdich@proton.me",
    phone: "555-5555",
  });

  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      school: "The Odin Project",
      title: "Full-Stack Web Development",
      start: "Jan 2025",
      end: "present",
    },
    {
      id: crypto.randomUUID(),
      school: "Placeholder University",
      title: "Bachelor of Computer Science",
      start: "Sept 2017",
      end: "June 2021",
    },
  ]);

  const [work, setWork] = useState([
    {
      id: crypto.randomUUID(),
      company: "Actual Company",
      title: "Worker",
      start: "Apr 2022",
      end: "Oct 2024",
      description: "Working at an actual company",
    },
    {
      id: crypto.randomUUID(),
      company: "Exists Inc.",
      title: "Manager",
      start: "Oct 2024",
      end: "present",
      description: "Managing workers that really exist",
    },
  ]);

  return (
    <main>
      <section className="inputSection">
        <ContactInfoInput />
        <EducationInput />
        <WorkInput />
      </section>
      <section className="displaySection">
        <ContactInfoDisplay contact={contact} />
        <EducationDisplay education={education} />
        <WorkDisplay work={work} />
      </section>
    </main>
  );
}

export default Main;
