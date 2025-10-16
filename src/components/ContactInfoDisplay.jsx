import "../styles/ContactInfoDisplay.css";

function ContactInfoDisplay({ contact }) {
  return (
    <section className="contactInfoDisplayContainer">
      <p className="displayName">{contact.name}</p>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
    </section>
  );
}

export default ContactInfoDisplay;
