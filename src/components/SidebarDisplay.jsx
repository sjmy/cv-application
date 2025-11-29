import "../styles/SidebarDisplay.css";

function DisplayEmail({ email }) {
  if (email === "") {
    return;
  }

  return (
    <p className="displayContactEntry">
      <img src="../img/mail.svg" className="logo" /> {email}
    </p>
  );
}

function DisplayPhone({ phone }) {
  if (phone === "") {
    return;
  }

  return (
    <p className="displayContactEntry">
      <img src="../img/phone.svg" className="logo" /> {phone}
    </p>
  );
}

function DisplayLocation({ location }) {
  if (location === "") {
    return;
  }

  return (
    <p className="displayContactEntry">
      <img src="../img/location.svg" className="logo" /> {location}
    </p>
  );
}

function DisplayGithub({ github }) {
  if (github === "") {
    return;
  }

  return (
    <p className="displayContactEntry">
      <img src="../img/github.png" className="logo" /> {github}
    </p>
  );
}

function ExtraEntryDisplay(entry) {
  return (
    <div className="extraEntryDisplay" key={entry.id}>
      <h2>
        <b>{entry.title}</b>
      </h2>
      <p>
        {entry.items.map((item, index) => (
          <li className="listItem" key={index}>
            {item}
          </li>
        ))}
      </p>
    </div>
  );
}

function SidebarDisplay({ contact, extra }) {
  return (
    <>
      <section className="nameTitleDisplayContainer">
        <p className="displayName">{contact.name}</p>
        <p className="displayTitle">{contact.title}</p>
      </section>
      <section className="sidebarDisplayContainer">
        <div className="displayContact">
          <DisplayEmail email={contact.email} />
          <DisplayPhone phone={contact.phone} />
          <DisplayLocation location={contact.location} />
          <DisplayGithub github={contact.github} />
        </div>
        {extra.map((entry) => ExtraEntryDisplay(entry))}
      </section>
    </>
  );
}

export default SidebarDisplay;
