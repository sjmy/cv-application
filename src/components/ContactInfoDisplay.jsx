import "../styles/ContactInfoDisplay.css";

function DisplayEmail({ email }) {
  if (email === "") {
    return;
  }

  return (
    <p className="entry">
      <img src="../img/mail.svg" className="logo" /> {email}
    </p>
  );
}

function DisplayPhone({ phone }) {
  if (phone === "") {
    return;
  }

  return (
    <p className="entry">
      <img src="../img/phone.svg" className="logo" /> {phone}
    </p>
  );
}

function DisplayLocation({ location }) {
  if (location === "") {
    return;
  }

  return (
    <p className="entry">
      <img src="../img/location.svg" className="logo" /> {location}
    </p>
  );
}

function DisplayGithub({ github }) {
  if (github === "") {
    return;
  }

  return (
    <p className="entry">
      <img src="../img/github.png" className="logo" /> {github}
    </p>
  );
}

function ContactInfoDisplay({ contact }) {
  return (
    <section className="contactInfoDisplayContainer">
      <p className="displayName">{contact.name}</p>
      <p className="displayTitle">{contact.title}</p>
      <div className="displayContact">
        <DisplayEmail email={contact.email} />
        <DisplayPhone phone={contact.phone} />
        <DisplayLocation location={contact.location} />
        <DisplayGithub github={contact.github} />
      </div>
    </section>
  );
}

export default ContactInfoDisplay;
