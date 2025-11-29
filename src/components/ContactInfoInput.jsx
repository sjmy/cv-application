function NameInput({ contact, onContactChange }) {
  return (
    <div className="inputContainer">
      <label className="inputLabel">
        Full name:
        <input
          type="text"
          value={contact.name}
          placeholder="Full Name"
          id="name"
          autoComplete="off"
          onChange={(e) =>
            handleNameChange(contact, onContactChange, e.target.value)
          }
        />
      </label>
    </div>
  );
}

function handleNameChange(contact, onContactChange, newName) {
  const newContact = { ...contact, name: newName };
  onContactChange(newContact);
}

function TitleInput({ contact, onContactChange }) {
  return (
    <div className="inputContainer">
      <label className="inputLabel">
        Title:
        <input
          type="text"
          value={contact.title}
          placeholder="Title"
          id="name"
          autoComplete="off"
          onChange={(e) =>
            handleTitleChange(contact, onContactChange, e.target.value)
          }
        />
      </label>
    </div>
  );
}

function handleTitleChange(contact, onContactChange, newTitle) {
  const newContact = { ...contact, title: newTitle };
  onContactChange(newContact);
}

function EmailInput({ contact, onContactChange }) {
  return (
    <div className="inputContainer">
      <label className="inputLabel">
        Email:
        <input
          type="text"
          value={contact.email}
          placeholder="Email"
          id="email"
          autoComplete="off"
          onChange={(e) =>
            handleEmailChange(contact, onContactChange, e.target.value)
          }
        />
      </label>
    </div>
  );
}

function handleEmailChange(contact, onContactChange, newEmail) {
  const newContact = { ...contact, email: newEmail };
  onContactChange(newContact);
}

function PhoneInput({ contact, onContactChange }) {
  return (
    <div className="inputContainer">
      <label className="inputLabel">
        Phone number:
        <input
          type="tel"
          value={contact.phone}
          placeholder="Phone Number"
          autoComplete="off"
          onChange={(e) =>
            handlePhoneChange(contact, onContactChange, e.target.value)
          }
        />
      </label>
    </div>
  );
}

function handlePhoneChange(contact, onContactChange, newPhone) {
  const newContact = { ...contact, phone: newPhone };
  onContactChange(newContact);
}

function toggleContainerDisplay(target) {
  let arrow = target.lastElementChild;
  let form = target.nextElementSibling;

  if (target.tagName !== "BUTTON") {
    arrow = target.parentNode.lastElementChild;
    form = target.parentNode.nextElementSibling;
  }

  if (form.className.includes("show")) {
    arrow.src = "../img/arrow_dropdown.svg";
    form.classList.remove("show");
    form.classList.add("hide");
    return;
  }

  arrow.src = "../img/arrow_dropup.svg";
  form.classList.remove("hide");
  form.classList.add("show");
  return;
}

function LocationInput({ contact, onContactChange }) {
  return (
    <div className="inputContainer">
      <label className="inputLabel">
        Location:
        <input
          type="text"
          value={contact.location}
          placeholder="Location"
          id="name"
          autoComplete="off"
          onChange={(e) =>
            handleLocationChange(contact, onContactChange, e.target.value)
          }
        />
      </label>
    </div>
  );
}

function handleLocationChange(contact, onContactChange, newLocation) {
  const newContact = { ...contact, location: newLocation };
  onContactChange(newContact);
}

function GithubInput({ contact, onContactChange }) {
  return (
    <div className="inputContainer">
      <label className="inputLabel">
        Github:
        <input
          type="text"
          value={contact.github}
          placeholder="Github"
          id="name"
          autoComplete="off"
          onChange={(e) =>
            handleGithubChange(contact, onContactChange, e.target.value)
          }
        />
      </label>
    </div>
  );
}

function handleGithubChange(contact, onContactChange, newGithub) {
  const newContact = { ...contact, github: newGithub };
  onContactChange(newContact);
}

function ContactInfoInput({ contact, onContactChange }) {
  return (
    <div className="formContainer">
      <button
        className="formTitle"
        onClick={(e) => toggleContainerDisplay(e.target)}
      >
        <h2>Contact Information</h2>
        <img src="../img/arrow_dropup.svg" className="arrow" />
      </button>
      <form className="inputForm show">
        <NameInput contact={contact} onContactChange={onContactChange} />
        <TitleInput contact={contact} onContactChange={onContactChange} />
        <EmailInput contact={contact} onContactChange={onContactChange} />
        <PhoneInput contact={contact} onContactChange={onContactChange} />
        <LocationInput contact={contact} onContactChange={onContactChange} />
        <GithubInput contact={contact} onContactChange={onContactChange} />
      </form>
    </div>
  );
}

export default ContactInfoInput;
