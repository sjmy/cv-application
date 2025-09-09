function Name() {
  return (
    <div className="nameContainer">
      <label for="name">Full name: </label>
      <input
        className="NameInput"
        type="text"
        placeholder="Full Name"
        id="name"
        autocomplete="off"
      />
    </div>
  );
}

function Email() {
  return (
    <div className="emailContainer">
      <label for="email">Email: </label>
      <input
        className="EmailInput"
        type="text"
        placeholder="Email"
        id="email"
        autocomplete="off"
      />
    </div>
  );
}

function Phone() {
  return (
    <div className="phoneContainer">
      <label for="phone">Phone number: </label>
      <input
        className="PhoneInput"
        type="tel"
        placeholder="Phone Number"
        id="phone"
        autocomplete="off"
      />
    </div>
  );
}

function ContactInfo() {
  return (
    <section className="contactInfoContainer">
      <form className="contactInfo">
        <h2>Contact information:</h2>
        <Name />
        <Email />
        <Phone />
      </form>
    </section>
  );
}

export default ContactInfo;
