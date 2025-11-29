import "../styles/Main.css";
import { useState } from "react";
import ContactInfoInput from "./ContactInfoInput";
import SidebarDisplay from "./SidebarDisplay";
import ProfileInput from "./ProfileInput";
import ProfileDisplay from "./ProfileDisplay";
import EducationInput from "./EducationInput";
import EducationDisplay from "./EducationDisplay";
import WorkInput from "./WorkInput";
import WorkDisplay from "./WorkDisplay";
import ExtraSectionsInput from "./ExtraSectionsInput";

function Main() {
  const [contact, setContact] = useState({
    id: crypto.randomUUID(),
    name: "Sleve McDichael",
    title: "Software Developer",
    email: "smcdich@proton.me",
    phone: "555-5555",
    location: "Vancouver, BC",
    github: "github.com/sjmy",
  });

  const [profile, setProfile] = useState(
    "This is a profile summary highlighting my skills, experience, and education."
  );

  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      school: "The Odin Project",
      title: "Full-Stack Web Development",
      start: new Date("2025-01-02"),
      end: new Date(),
      description: "Javascript, HTML, CSS, React, Test Driven Development",
    },
    {
      id: crypto.randomUUID(),
      school: "Placeholder University",
      title: "Bachelor of Computer Science",
      start: new Date("2017-09-01"),
      end: new Date("2021-06-01"),
      description:
        "A description of the things learned during a four years at Placeholder University.",
    },
  ]);

  const [work, setWork] = useState([
    {
      id: crypto.randomUUID(),
      company: "Exists Inc.",
      title: "Manager",
      start: new Date("2024-10-01"),
      end: new Date(),
      description: "Managing workers that really exist",
    },
    {
      id: crypto.randomUUID(),
      company: "Actual Company",
      title: "Worker",
      start: new Date("2022-04-01"),
      end: new Date("2024-10-01"),
      description: "Working at an actual company",
    },
  ]);

  const [extra, setExtra] = useState([
    {
      id: crypto.randomUUID(),
      title: "Languages",
      items: ["Python", "Javascript", "HTML", "CSS", "Git"],
    },
    {
      id: crypto.randomUUID(),
      title: "Software",
      items: ["Vicon Shogun", "MotionBuilder", "Unreal"],
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
        <ExtraSectionsInput extra={extra} onExtraChange={setExtra} />
      </section>
      <section className="displaySection">
        <div className="displaySectionContainer">
          <SidebarDisplay contact={contact} extra={extra} />
          <ProfileDisplay profile={profile} />
          <EducationDisplay education={education} />
          <WorkDisplay work={work} />
        </div>
      </section>
    </main>
  );
}

export default Main;
