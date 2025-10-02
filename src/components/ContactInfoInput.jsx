import "../styles/ContactInfoInput.css";

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
    arrow.classList.remove("down");
    arrow.classList.add("up");
    form.classList.remove("show");
    form.classList.add("hide");
    return;
  }

  arrow.classList.remove("up");
  arrow.classList.add("down");
  form.classList.remove("hide");
  form.classList.add("show");
  return;
}

function ContactInfoInput({ contact, onContactChange }) {
  return (
    <div className="formContainer">
      <button
        className="formTitle"
        onClick={(e) => toggleContainerDisplay(e.target)}
      >
        <h2>Contact Information</h2>
        <img src="../img/arrow_dropdown.svg" className="arrow" />
      </button>
      <form className="inputForm show">
        <NameInput contact={contact} onContactChange={onContactChange} />
        <EmailInput contact={contact} onContactChange={onContactChange} />
        <PhoneInput contact={contact} onContactChange={onContactChange} />
      </form>
    </div>
  );
}

export default ContactInfoInput;
