import "../styles/ContactInfoInput.css";

function NameInput({ contact, onContactChange }) {
  return (
    <div className="nameContainerInput">
      <label htmlFor="name">Full name: </label>
      <input
        className="NameInput"
        type="text"
        value={contact.name}
        placeholder="Full Name"
        id="name"
        autoComplete="off"
        onChange={(e) =>
          handleNameChange(contact, onContactChange, e.target.value)
        }
      />
    </div>
  );
}

function handleNameChange(contact, onContactChange, newName) {
  const newContact = { ...contact, name: newName };
  onContactChange(newContact);
}

function EmailInput({ contact, onContactChange }) {
  return (
    <div className="emailContainerInput">
      <label htmlFor="email">Email: </label>
      <input
        className="EmailInput"
        type="text"
        value={contact.email}
        placeholder="Email"
        id="email"
        autoComplete="off"
        onChange={(e) =>
          handleEmailChange(contact, onContactChange, e.target.value)
        }
      />
    </div>
  );
}

function handleEmailChange(contact, onContactChange, newEmail) {
  const newContact = { ...contact, email: newEmail };
  onContactChange(newContact);
}

function PhoneInput({ contact, onContactChange }) {
  return (
    <div className="phoneInputContainer">
      <label htmlFor="phone">Phone number: </label>
      <input
        className="PhoneInput"
        type="tel"
        value={contact.phone}
        placeholder="Phone Number"
        id="phone"
        autoComplete="off"
        onChange={(e) =>
          handlePhoneChange(contact, onContactChange, e.target.value)
        }
      />
    </div>
  );
}

function handlePhoneChange(contact, onContactChange, newPhone) {
  const newContact = { ...contact, phone: newPhone };
  onContactChange(newContact);
}

function ContactInfoInput({ contact, onContactChange }) {
  return (
    <section className="contactInfoInputContainer">
      <form className="contactInfoInput">
        <h2>Contact information:</h2>
        <NameInput contact={contact} onContactChange={onContactChange} />
        <EmailInput contact={contact} onContactChange={onContactChange} />
        <PhoneInput contact={contact} onContactChange={onContactChange} />
      </form>
    </section>
  );
}

export default ContactInfoInput;
