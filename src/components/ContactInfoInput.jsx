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

function ContactInfoInput({ contact, onContactChange }) {
  return (
    <div className="formContainer">
      <button className="formTitle">
        <h2>Contact Information</h2>
      </button>
      <form className="inputForm">
        <NameInput contact={contact} onContactChange={onContactChange} />
        <EmailInput contact={contact} onContactChange={onContactChange} />
        <PhoneInput contact={contact} onContactChange={onContactChange} />
      </form>
    </div>
  );
}

export default ContactInfoInput;
