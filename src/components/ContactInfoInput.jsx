import "../styles/ContactInfoInput.css";

function NameInput() {
  return (
    <div className="nameContainerInput">
      <label htmlFor="name">Full name: </label>
      <input
        className="NameInput"
        type="text"
        placeholder="Full Name"
        id="name"
        autoComplete="off"
      />
    </div>
  );
}

function EmailInput() {
  return (
    <div className="emailContainerInput">
      <label htmlFor="email">Email: </label>
      <input
        className="EmailInput"
        type="text"
        placeholder="Email"
        id="email"
        autoComplete="off"
      />
    </div>
  );
}

function PhoneInput() {
  return (
    <div className="phoneInputContainer">
      <label htmlFor="phone">Phone number: </label>
      <input
        className="PhoneInput"
        type="tel"
        placeholder="Phone Number"
        id="phone"
        autoComplete="off"
      />
    </div>
  );
}

function ContactInfoInput() {
  return (
    <section className="contactInfoInputContainer">
      <form className="contactInfoInput">
        <h2>Contact information:</h2>
        <NameInput />
        <EmailInput />
        <PhoneInput />
      </form>
    </section>
  );
}

export default ContactInfoInput;
