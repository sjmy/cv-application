import "../styles/Main.css";
import { useState } from "react";
import ContactInfoInput from "./ContactInfoInput";
import ContactInfoDisplay from "./ContactInfoDisplay";
import ProfileInput from "./ProfileInput";
import ProfileDisplay from "./ProfileDisplay";
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

  const [profile, setProfile] = useState(
    "This is a profile summary highlighting my skills, experience, and education."
  );

  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      school: "The Odin Project",
      title: "Full-Stack Web Development",
      start: "Jan 2025",
      end: "Present",
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
      company: "Exists Inc.",
      title: "Manager",
      start: "Oct 2024",
      end: "Present",
      description: "Managing workers that really exist",
    },
    {
      id: crypto.randomUUID(),
      company: "Actual Company",
      title: "Worker",
      start: "Apr 2022",
      end: "Oct 2024",
      description: "Working at an actual company",
    },
  ]);

  return (
    <main>
      <section className="inputSection">
        <ContactInfoInput contact={contact} onContactChange={setContact} />
        <ProfileInput profile={profile} onProfileChange={setProfile} />
        <EducationInput
          education={education}
          onEducationChange={setEducation}
        />
        <WorkInput work={work} onWorkChange={setWork} />
      </section>
      <section className="displaySection">
        <div className="displaySectionContainer">
          <ContactInfoDisplay contact={contact} />
          <ProfileDisplay profile={profile} />
          <EducationDisplay education={education} />
          <WorkDisplay work={work} />
        </div>
      </section>
    </main>
  );
}

export default Main;
